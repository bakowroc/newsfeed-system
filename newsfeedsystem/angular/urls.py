from django.conf.urls import url
from angular import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view(), name ='home')

]
