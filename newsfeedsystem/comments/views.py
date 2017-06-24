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


from comments.api.permissions import (
                            IsOwner
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

    def perform_create(self, serializer):
        serializer.save(author = self.request.user)


class CommentDetail(RetrieveAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentDetailSerializer
    permission_classes = [AllowAny]


class CommentDestroy(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentDetailSerializer


class CommentList(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [AllowAny]

class CommentUpdate(UpdateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentDetailSerializer
    permission_classes = [IsOwner]
