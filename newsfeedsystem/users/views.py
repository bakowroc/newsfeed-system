from rest_framework.generics import ListAPIView, RetrieveAPIView

from users.models import User
from users.api.serializers import UserSerializer, UserDetailSerializer


class UserList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
