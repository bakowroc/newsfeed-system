from rest_framework.generics import(
                                CreateAPIView,
                                ListAPIView,
                                RetrieveAPIView,
                                DestroyAPIView,
                                UpdateAPIView,
                                )


from groups.models import Group
from groups.api.serializers import (
                                GroupSerializer,
                                GroupDetailSerializer,
                                GroupCreateSerializer,
                                )

                                
class GroupCreate(CreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupCreateSerializer


class GroupDetail(RetrieveAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer


class GroupDestroy(DestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer


class GroupList(ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class GroupUpdate(UpdateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer
