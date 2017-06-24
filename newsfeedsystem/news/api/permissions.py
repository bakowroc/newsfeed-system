from rest_framework.permissions import BasePermission
from django.shortcuts import get_object_or_404


class IsNewsManager(BasePermission):
    message = 'Permissions denied'
    safe_method = ['PUT', 'POST', 'DELETE']

    def has_permission(self, request, view):
        group = request.user.groups.get()
        if 'News manager' or 'Administrator' in group.name:
            return True
        return False
