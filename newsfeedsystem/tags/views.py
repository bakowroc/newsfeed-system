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


from tags.models import Tag
from tags.api.serializers import (
                                TagSerializer,
                                TagDetailSerializer,
                                TagCreateSerializer,
                                )

class TagCreate(CreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagCreateSerializer
    permission_classes = [IsAdminUser]


class TagDetail(RetrieveAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagDetailSerializer
    permission_classes = [AllowAny]


class TagDestroy(DestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagDetailSerializer


class TagList(ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [AllowAny]

class TagUpdate(UpdateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagDetailSerializer
    permission_classes = [IsAdminUser]
