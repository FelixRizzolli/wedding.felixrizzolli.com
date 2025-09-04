#!/bin/bash

chmod 700 /root/.ssh
chmod 600 /root/.ssh/*
chmod 644 /root/.ssh/*.pub
chown -R root:root /root/.ssh