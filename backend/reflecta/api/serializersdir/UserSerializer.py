from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

from ..models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
    
    def create(self, validated_data):
        user = User(
            email=validated_data["email"],
            username=validated_data["username"],
            nombres=validated_data["nombres"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

class LoginSerializer(serializers.Serializer): # Estamos usando el Serializer por lo que nos ayudará a analizar correctamente los campos manualmente
  email = serializers.CharField()
  password = serializers.CharField(write_only=True)  # No queremos mostrar la contraseña

  def validate(self, data):
    user = authenticate(email=data["email"], password=data["password"])

    if user and user.is_active:
      return user # -> Se retornará el usuario si es válido
    
    else:
      raise serializers.ValidationError("Invalid credentials")