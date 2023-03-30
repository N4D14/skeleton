# Skeleton App

## About

This is framework for building django/react web applications

## Environment setup

1. Get virtualenv (I recommend virtualenvwrapper too)
2. Create a virtualenv using python3 (3.7+)
3. Follow [these instructions](https://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574) if you need to manage multiple github accounts
4. Checkout the code: git clone git@github.com:SignalFoxAnalytics/skeleton.git
5. Create your new repo to base on the skeleton framework and copy the code there, rename dirs and files as needed
6. Install required python packages `pip install -r requirements.txt`
7. Make sure you have node (14.11.0 or later) installed (`brew install node`)
8. Install the node modules by running `npm install` in the top level signalfox_app dir
9. git init and commit your new repo, you are ready to begin!

## Database setup
1. Install postgres
2. Run the postgres server and create a new local db called mydb (or whatever name you want): `createdb -U <username> mydb`
3. Add the DB details to your env_local file
4. Paste the following settings file

```python3
    db = {}
    if 'MY_APP_DB_NAME' in os.environ:
        db = {
            'default': {
                'ENGINE': 'django.db.backends.postgresql_psycopg2',
                'NAME': os.environ['MY_APP_DB_NAME'],
                'USER': os.environ['MY_APP_USERNAME'],
                'PASSWORD': os.environ['MY_APP_PASSWORD'],
                'HOST': os.environ['MY_APP_HOSTNAME'],
                'PORT': os.environ['MY_APP_PORT'],
            }
        }
```

5. Run django migrations
  - `./manage.py makemigrations`
  - `./manage.py migrate`


## Run the web server

1. Make the webpack bundle
  - `npm run watch`

2. Run the django development server
  - `npm start`
