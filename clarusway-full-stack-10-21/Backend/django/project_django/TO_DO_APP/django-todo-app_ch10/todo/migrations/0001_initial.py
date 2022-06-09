# Generated by Django 4.0.1 on 2022-05-25 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('isCompleted', models.BooleanField(default=False)),
                ('priority', models.CharField(choices=[('1', 'High'), ('2', 'Medium'), ('3', 'Low')], max_length=10)),
                ('created_date', models.DateTimeField(auto_now=True)),
                ('update_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
