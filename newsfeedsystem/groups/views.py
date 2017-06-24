from rest_framework.generics import(
                                CreateAPIView,
                                ListAPIView,
                                RetrieveAPIView,
                                DestroyAPIView,
                                UpdateAPIView,
                                )


from rest_framework.permissions import (
                            AllowAny,
                            IsAuthenticated,
                            IsAdminUser,
                            IsAuthenticatedOrReadOnly
)


from django.contrib.auth.models import Group
from groups.api.serializers import (
                                GroupSerializer,
                                GroupDetailSerializer,
                                GroupCreateSerializer,
                                )


class GroupCreate(CreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupCreateSerializer
    permission_classes = [IsAdminUser]


class GroupDetail(RetrieveAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer
    permission_classes = [AllowAny]

class GroupDestroy(DestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer
    permission_classes = [IsAdminUser]

class GroupList(ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [AllowAny]

class GroupUpdate(UpdateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer
    permission_classes = [IsAdminUser]
