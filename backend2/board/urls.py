from django.conf.urls import url
from .views import Writes



urlpatterns = [
    url('/write', Writes.as_view()),
]