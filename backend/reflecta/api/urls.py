from django.urls import path
from .views import *
from .viewsdir.users import *
from .viewsdir.Landsat9 import *

urlpatterns = [
  path("alive", alive),

  # Vistas de usuarios
  path('users/signup', SignUpView.as_view(), name='signup'),
  path('users/login', LoginView.as_view(), name='login'),
  path('users/refresh', TokenRefreshView.as_view(), name='token_refresh'),

  # Vistas del Landsat
  path('landsat/images/', LandsatImageListView.as_view(), name='landsat_image_list'),
  path('landsat/filter/', LandsatImageFilterView.as_view(), name='landsat_image_filter'),
  path('landsat/render/', LandsatImageRenderView.as_view(), name='landsat_image_render'),
  path('landsat/download/', LandsatImageDownloadView.as_view(), name='landsat_image_download'),
  path('landsat/landsat-coordinates/', LandsatCoordinatesView.as_view(), name='landsat-coordinates'),
  path('landsat/future-landsat-coordinates/', FutureLandsatCoordinatesView.as_view(), name='future-landsat-coordinates'),
  path('landsat/landsat-pass-time/', LandsatPassTimeView.as_view(), name='landsat-pass-time'),
]