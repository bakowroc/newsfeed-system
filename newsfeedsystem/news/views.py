from rest_framework.generics import (
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


from news.models import News
from news.api.serializers import (
                            NewsSerializer,
                            NewsDetailSerializer,
                            NewsCreateSerializer,
                            )


class NewsCreate(CreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsCreateSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(author = self.request.user)


class NewsDetail(RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer
    permission_classes = [AllowAny]


class NewsDestroy(DestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer
    permission_classes = []

class NewsList(ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [AllowAny]


class NewsUpdate(UpdateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializer
    permission_classes = []
