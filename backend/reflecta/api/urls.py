from django.urls import path
from .views import *
from .viewsdir.users import *

urlpatterns = [
  path("alive", alive),

  # Vistas de usuarios
  path('users/signup', SignUpView.as_view(), name='signup'),
  path('users/login', LoginView.as_view(), name='login'),
  path('users/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]