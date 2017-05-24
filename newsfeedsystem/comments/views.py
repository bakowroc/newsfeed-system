from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from comments.models import Comment
from comments.api.serializers import CommentSerializer


class CommentList(APIView):

    def get(self, request):
        comments = Comment.object.all()
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data)
