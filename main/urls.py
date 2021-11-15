from django.urls import path
from . import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index),
    path('about-me', views.index, name="home"),
    path('tariffs', views.tariffs, name="tariffs"),
    path('portfolio', views.portfolio, name="portfolio"),
    path('FAQ', views.faq, name="FAQ"),
    path('registration-photoshoot', views.registration_photoshoot, name="registration-photoshoot"),
    path('photoshoots', views.photoshoots, name="photoshoots")
]
