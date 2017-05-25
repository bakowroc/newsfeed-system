from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from groups.models import Group
from groups.api.serializers import GroupSerializer


class GroupList(APIView):

    def get(self, request):
        groups = Group.objects.all()
        serializer = GroupSerializer(groups, many = True)
        return Response(serializer.data)
