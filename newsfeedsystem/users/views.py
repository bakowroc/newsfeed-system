from rest_framework.generics import(
                            ListAPIView,
                            RetrieveAPIView,
                            DestroyAPIView,
                            UpdateAPIView,
                            )


from users.models import User
from users.api.serializers import UserSerializer, UserDetailSerializer


class UserDetail(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer


class UserDestroy(DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer


class UserList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserUpdate(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
