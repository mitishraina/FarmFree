from flask import Flask, render_template, redirect, url_for, session, request
from authlib.integrations.flask_client import OAuth
import logging

app = Flask(__name__)
app.config['SECRET_KEY'] = 'w\xb0\xbe\x83\xf4\xaf\xdb0\x88\xafG\x14\xb5\xce\x16\xcf\xe9t\xd0\xd9\rZ\xf5'

# Initialize OAuth
oauth = OAuth(app)

# Configure OAuth with Google
google = oauth.register(
    name='google',
    client_id='808706468118-q8qr765n1l9vj8epricphnqg0v5aadeg.apps.googleusercontent.com',
    client_secret='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',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    access_token_url='https://oauth2.googleapis.com/token',
    redirect_uri='http://127.0.0.1:5000/auth/callback',
    client_kwargs={'scope': 'openid profile email'}
)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login')
def login():
    redirect_uri = url_for('auth_callback', _external=True)
    return google.authorize_redirect(redirect_uri)

@app.route('/auth/callback')
def auth_callback():
    try:
        token = google.authorize_access_token()
        logging.info("Token received: %s", token)
        resp = google.get('userinfo')
        user_info = resp.json()
        logging.info("User info: %s", user_info)
        session['user'] = user_info
        return redirect(url_for('text'))
    except Exception as e:
        logging.error("Error during authorization: %s", e)
        return redirect(url_for('text'))

@app.route('/text')
def text():
    return render_template('text.html')

@app.route('/farmerlogin')
def farmer_login():
    return render_template('farmerlogin.html')

@app.route('/buyer')
def buyer():
    return render_template('buyer.html')

@app.route('/submit_farmer', methods=['POST'])
def submit_farmer():
    return redirect(url_for('main'))

@app.route('/submit_buyer', methods=['POST'])
def submit_buyer():
    return redirect(url_for('main'))

@app.route('/main')
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.run(debug=True)
