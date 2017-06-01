#Makefile for Synistralia.com administration and build tools.

#Run using:
#  make prod tag=1.0.3-build.0

prod:
	docker build -t gcr.io/soapbox-events/synistralia:$(tag) .
	gcloud docker -- push gcr.io/soapbox-events/synistralia:$(tag)
	kubectl --namespace=synistralia-prod set image deployment/synistralia-prod-deployment synistralia-prod-server=gcr.io/soapbox-events/synistralia:$(tag)
prune:
	docker images | grep "gcr.io/soapbox-events/synistralia" | awk '{print $$3}' | xargs docker rmi