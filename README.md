How to run project
======================

  0. Prerequisites

     * node v0.12.7
     * install npm dependency modules (use npm install command)

  1. Set settings environment

    $ export DEBUG=info:*,warn:*,error:*
    (info: -> stdout / warn: -> stderr)

  2. Run server

    $ node ./bin/www
    (in production, use forever or pm2 to run as daemon)

  logging with stdout -> backlog

  pm2가 설치가 잘 안될때는 sudo npm install pm2 -g --unsafe-perm 이걸로 설치