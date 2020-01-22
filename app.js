function initMap() {
            let options = {
                zoom: 8,
                center: { lat: 34.0522, lng: -118.2437 }
            }

            let map = new google.maps.Map(document.querySelector('#map'), options);

            google.maps.event.addListener(map, 'click',
                event => {
                    addMarker({coords:event.latLng})
                });

            let markers = [
            {
                coords: {lat: 34.0522, lng: -118.2437 },
                iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                content: '<h1>Los Angeles</h1>'
            },
            {
                coords: {lat: 19.4326, lng: -99.1332 },
                content: '<h1>Mexico City</h1>'
            },

            ];

            for(let i = 0; i < markers.length; i++) {
                addMarker(markers[i]);
            };

            function addMarker(props) {
                let marker = new google.maps.Marker({
                    position: props.coords,
                    map:map,

                });

                if(props.iconImage) {
                    marker.setIcon(props.iconImage);
                }
                
                if(props.content) {
                    let infoWindow = new google.maps.InfoWindow({
                        content:props.content
                    });
                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });
                }
            }
        }