from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_mysqldb import MySQL
import MySQLdb.cursors
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# MySQL configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask_login'

app.config['MYSQL_HOST'] = os.environ.get('MYSQL_HOST')
app.config['MYSQL_USER'] = os.environ.get('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.environ.get('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.environ.get('MYSQL_DB')
app.config['MYSQL_PORT'] = int(os.environ.get('MYSQL_PORT', 3306))

mysql = MySQL(app)

# Flask-Mail configuration (use your Gmail + App Password here)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'chauhanankit5090@gmail.com'
app.config['MAIL_PASSWORD'] = 'kqgj sbwg xkyr yrcd'

mail = Mail(app)
# Serializer for tokens
s = URLSafeTimedSerializer(app.secret_key)


@app.route('/')
def home():
    return redirect(url_for('login'))


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        repassword = request.form['repassword']
        
        if password != repassword:
            flash("Passwords do not match!", "danger")
            return render_template('register.html')

        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        account = cursor.fetchone()

        if account:
            flash('Email already exists!', 'danger')
        else:
            cursor.execute("INSERT INTO users (email, password) VALUES (%s, %s)", (email, password))
            mysql.connection.commit()
            flash('Registration successful!', 'success')
            return redirect(url_for('login'))
    
    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
        user = cursor.fetchone()
        
        if user:
            session['email'] = user['email']
            # flash('Login successful!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid email or password!', 'danger')

    return render_template('login.html')


@app.route('/dashboard')
def dashboard():
    if 'email' in session:
        return render_template('dashboard.html', username=session['email'])
    else:
        return redirect(url_for('login'))


@app.route('/logout')
def logout():
    session.pop('email', None)
    flash('You have been logged out.', 'info')
    return redirect(url_for('login'))



# ---------------- Password Reset Feature ---------------- #
@app.route('/forgot', methods=['GET', 'POST'])
def forgot():
    if request.method == 'POST':
        email = request.form['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()

        if user:
            token = s.dumps(email, salt='password-reset-salt')
            reset_url = url_for('reset_password', token=token, _external=True)

            # Send email
            msg = Message("Password Reset Request",
                          sender=app.config['MAIL_USERNAME'],
                          recipients=[email])
            msg.body = f"Hello,\n\nClick the link below to reset your password:\n{reset_url}\n\nThis link is valid for 30 minutes."
            mail.send(msg)

            flash("Password reset link sent to your email.", "success")
        else:
            flash("Email not found!", "danger")
    return render_template('forgot.html')


@app.route('/reset-password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    try:
        email = s.loads(token, salt='password-reset-salt', max_age=1800)  # 30 min
    except:
        flash("The reset link is invalid or has expired.", "danger")
        return redirect(url_for('forgot'))

    if request.method == 'POST':
        new_password = request.form['password']
        repassword = request.form['repassword']

        if new_password != repassword:
            flash("Passwords do not match!", "danger")
            return render_template('reset_password.html', token=token)

        cursor = mysql.connection.cursor()
        cursor.execute("UPDATE users SET password=%s WHERE email=%s", (new_password, email))
        mysql.connection.commit()
        flash("Your password has been reset successfully!", "success")
        return redirect(url_for('login'))

    return render_template('reset_password.html', token=token)


if __name__ == "__main__":
    port = int(os.environ.get("PORT",5000))
    app.run(host="0.0.0.0", port=port)








