
                    /*<script src='https://maps.googleapis.com/maps/api/js?key=&sensor=false&extension=.js'></script> 
                     
                    <script> */
                        google.maps.event.addDomListener(window, 'load', init);
                        var map;
                        function init() {
                            var mapOptions = {
                                center: new google.maps.LatLng(3.99182,-721.279021),
                                zoom: 1,
                                zoomControl: true,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle.DEFAULT,
                                },
                                disableDoubleClickZoom: false,
                                mapTypeControl: false,
                                scaleControl: false,
                                scrollwheel: true,
                                panControl: true,
                                streetViewControl: false,
                                draggable : true,
                                overviewMapControl: false,
                                overviewMapControlOptions: {
                                    opened: false,
                                },
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                            }
                            var mapElement = document.getElementById('mapdwl');
                            var map = new google.maps.Map(mapElement, mapOptions);
                            var locations = [
                    ['Brainchild Partners Canada, Inc', 'Brainchild Partners Canada, Inc', 'undefined', 'undefined', 'undefined', 49.1997505, -122.91248489999998, 'https://mapbuildr.com/assets/img/markers/default.png'],['Brainchild Partners, LLC', 'undefined', 'undefined', 'undefined', 'undefined', 37.5154032, 127.07984980000003, 'https://mapbuildr.com/assets/img/markers/default.png']
                            ];
                            for (i = 0; i < locations.length; i++) {
                                if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
                                if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
                                if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
                               if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
                               if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
                                marker = new google.maps.Marker({
                                    icon: markericon,
                                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                                    map: map,
                                    title: locations[i][0],
                                    desc: description,
                                    tel: telephone,
                                    email: email,
                                    web: web
                                });
                    link = '';     }
                    }

                    /*</script>*/