from rest_framework.generics import ListAPIView, RetrieveAPIView

from groups.models import Group
from groups.api.serializers import GroupSerializer, GroupDetailSerializer


class GroupList(ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class GroupDetail(RetrieveAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer
