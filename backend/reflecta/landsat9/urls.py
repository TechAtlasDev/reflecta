from django.urls import path
from .views import *

urlpatterns = [
    path('images/', LandsatImageListView.as_view(), name='landsat_image_list'),
    path('filter/', LandsatImageFilterView.as_view(), name='landsat_image_filter'),
    path('render/', LandsatImageRenderView.as_view(), name='landsat_image_render'),
    path('download/', LandsatImageDownloadView.as_view(), name='landsat_image_download'),
    path('coordinates/', LandsatCoordinatesView.as_view(), name='landsat-coordinates'),
    path('future-landsat-coordinates/', FutureLandsatCoordinatesView.as_view(), name='future-landsat-coordinates'),
    path('landsat-pass-time/', LandsatPassTimeView.as_view(), name='landsat-pass-time'),
]
