from rest_framework.generics import(
                                CreateAPIView,
                                ListAPIView,
                                RetrieveAPIView,
                                DestroyAPIView,
                                UpdateAPIView,
                                )


from comments.models import Comment
from comments.api.serializers import (
                                CommentSerializer,
                                CommentDetailSerializer,
                                CommentCreateSerializer,
                                )

class CommentCreate(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer

class CommentDetail(RetrieveAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentDetailSerializer


class CommentDestroy(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentDetailSerializer


class CommentList(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentUpdate(UpdateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentDetailSerializer
