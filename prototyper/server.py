import os
import django
from django.conf import settings


def django_configure():
    BASE_DIR = os.path.dirname(__file__)

    SECRET_KEY = os.environ.get('SECRET_KEY', '{{ secret_key }}')
    # ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', 'localhost').split(',')
    ALLOWED_HOSTS = ['*']

    settings.configure(
        DEBUG=True,
        BASE_DIR=BASE_DIR,
        SECRET_KEY=SECRET_KEY,
        ALLOWED_HOSTS=ALLOWED_HOSTS,
        ROOT_URLCONF='prototyper.urls',
        INSTALLED_APPS=[
            'webpack_loader',
        ],
        WEBPACK_LOADER={
            'DEFAULT': {
                'BUNDLE_DIR_NAME': os.path.join(BASE_DIR, '..', 'frontend', 'dist'),
                'STATS_FILE': os.path.join(BASE_DIR, '..', 'frontend', 'webpack-stats.json'),
            }
        },
        TEMPLATES=[{
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
        }],
        MIDDLEWARE_CLASSES=(
            'django.middleware.common.CommonMiddleware',
            'django.middleware.csrf.CsrfViewMiddleware',
            'django.middleware.clickjacking.XFrameOptionsMiddleware',
        ),
    )


def run_server():
    from django.core.management import call_command
    call_command('runserver', '0.0.0.0:8000')  # TODO: get from args