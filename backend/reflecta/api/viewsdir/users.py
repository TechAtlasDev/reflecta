from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import authenticate
from ..serializersdir.UserSerializer import UserSerializer, RegisterSerializer, LoginSerializer, TokenSerializer

# Registro de usuarios
class SignUpView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Usuario registrado exitosamente."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            tokens = TokenSerializer.get_tokens_for_user(user)
            return Response(tokens, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Refresh de tokens
class TokenRefreshView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        refresh_token = request.data.get("refresh")
        if refresh_token:
            try:
                refresh = RefreshToken(refresh_token)
                return Response({
                    'access': str(refresh.access_token),
                })
            except Exception:
                return Response({"error": "Token inválido"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Token no proporcionado"}, status=status.HTTP_400_BAD_REQUEST)
