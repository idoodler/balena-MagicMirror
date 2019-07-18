FROM bastilimbach/docker-magicmirror:raspberry

COPY ./config /opt/magic_mirror/config
COPY ./modules /opt/magic_mirror/modules
COPY ./moduleInstall.sh /opt

RUN chmod +x /opt/moduleInstall.sh
RUN /opt/moduleInstall.sh

HEALTHCHECK CMD curl -f http://localhost:8080 > /dev/null; if [ 0 != $? ]; then exit 1; fi;
