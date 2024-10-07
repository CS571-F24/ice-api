build
```bash
docker build . -t ctnelson1997/cs571-f24-ice-api
docker push ctnelson1997/cs571-f24-ice-api
```

run
```bash
docker pull ctnelson1997/cs571-f24-ice-api
docker run --name=cs571_f24_ice_api -d --restart=always -p 49999:49999 -v /cs571/f24/ice:/cs571 ctnelson1997/cs571-f24-ice-api
```
