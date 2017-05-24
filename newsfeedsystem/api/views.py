from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import News, Comment, User, Group
from .serializers import NewsSerializer, CommentSerializer, UserSerializer, GroupSerializer

# List all news or create new
class NewsList(APIView):

    def get(self, request):
        news = News.objects.all()
        serializer = NewsSerializer(news, many = True)
        return Response(serializer.data)

    def post(self):
        pass


class CommentList(APIView):

    def get(self, request):
        comments = Comment.object.all()
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data)


class UserList(APIView):

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many = True)
        return Response(serializer.data)


class GroupList(APIView):

    def get(self, request):
        groups = Group.objects.all()
        serializer = GroupSerializer(groups, many = True)
        return Response(serializer.data)
