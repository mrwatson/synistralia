#Makefile for Synistralia.com administration and build tools.

#Run using either:
#  make dev tag=1.0.3-build.0
#  make prod tag=1.0.3-build.0

prod:
	grunt build
	docker build -t gcr.io/soapbox-events/synistralia:$(tag) .
# docker tag synistral/soapbox-events:$(tag) gcr.io/soapbox-events/soapbox-events:$(tag)
	gcloud docker -- push gcr.io/soapbox-events/synistralia:$(tag)
	kubectl --namespace=synistralia-prod set image deployment/synistralia-deployment synistralia-server=gcr.io/soapbox-events/synistralia:$(tag)
prune:
	docker images | grep "gcr.io/soapbox-events/synistralia" | awk '{print $$3}' | xargs docker rmi