"""skeleton URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView

# Static file urls
favicon_view = RedirectView.as_view(
    url=staticfiles_storage.url('favicon.ico'),
    permanent=False
)

urlpatterns = [
    url(r'^favicon.ico$', favicon_view, name="favicon"),
    # If you find some use for the admin site in your development
    # uncomment this and copy admin templates to templates/ dir
    # url(r'^sfox/', admin.site.urls),
    url(r'.*', include('web.urls')),
]
