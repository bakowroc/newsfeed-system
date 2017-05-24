# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-24 22:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tags', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('desc', models.TextField(default='')),
                ('date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date published')),
                ('author', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='users.User')),
                ('tag', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tags.Tag')),
            ],
        ),
    ]
