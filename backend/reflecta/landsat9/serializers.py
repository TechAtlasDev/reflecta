from rest_framework import serializers
from .models import LandsatImage

class LandsatImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandsatImage
        fields = '__all__'
        read_only_fields = ['procesado', 'url_renderizada']

class LandsatCoordinatesSerializer(serializers.Serializer):
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()

class FutureLandsatCoordinatesSerializer(serializers.Serializer):
    timestamp = serializers.DateTimeField()
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()

class LandsatPassTimeSerializer(serializers.Serializer):
    timestamp = serializers.DateTimeField()