from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from ..serializersdir.UserSerializer import LoginSerializer, UserSerializer

class SignUpView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  # Crea y guarda el usuario
            token = RefreshToken.for_user(user)

            return Response({
                "refresh": str(token),
                "token": str(token.access_token),
                "user": user.username
            })
        else:
            return Response(serializer.errors, status=400)

# Login
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token = RefreshToken.for_user(user)
            return Response({
                'refresh': str(token), # Esta es como una autorización que tengo que usar cada vez que quiero renovar mi token
                'token': str(token.access_token), # Este es el token que me permitirá estar en la web
                'user': user.username
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Refresh de tokens
class TokenRefreshView(APIView):
    permission_classes = [IsAuthenticated]

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
