# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-24 11:29
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20170524_1256'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(default=datetime.datetime(2017, 5, 24, 11, 29, 20, 230145, tzinfo=utc), verbose_name='date commented')),
            ],
        ),
        migrations.AlterField(
            model_name='news',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2017, 5, 24, 11, 29, 20, 229644, tzinfo=utc), verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='user',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2017, 5, 24, 11, 29, 20, 229143, tzinfo=utc), verbose_name='date registered'),
        ),
        migrations.AddField(
            model_name='comment',
            name='related_news',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.News'),
        ),
    ]
