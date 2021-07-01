from django.conf.urls import url
from .views import Writes



urlpatterns = [
    url('register', Writes.as_view()),
]