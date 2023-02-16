/*global google*/
import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import { GoogleMap, useJsApiLoader, Polygon } from "@react-google-maps/api";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import CLocation from "../images/location.png";
import { useNavigate } from "react-router";
import "../GoogleMap.css";
import { computeArea, LatLng } from "spherical-geometry-js";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 41.8719,
  lng: 12.5674,
};

const Polyoptions = {
  fillColor: "rgba(255,196,0,0.4)",
  fillOpacity: 1,
  strokeColor: "rgba(255,196,0,0.8)",
  strokeOpacity: 1,
  strokeWeight: 3,
  clickable: true,
  draggable: false,
  editable: true,
  geodesic: true,
  zIndex: 2,
};

const options = {
  zoom: 15,
  zoomcontrol: true,
  mapTypeId: "hybrid",
};

const GMap = ({
  setGmap,
  setQuestion,
  setWarning,
  setArea,
  setResult,
  setPolygons,
  setEmail,
  pollygons,
  setLocation,
  setAddress,
  address,
}) => {
  const [newPolygons, setNewPolygons] = useState([]);
  const [newPolygons2, setNewPolygons3] = useState([]);
  const [add, setAdd] = useState(1);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDNAnUCX4LvJ5oi4mlbwcobMKJYc3bRoIk",
    libraries,
  });

  const [polly2, setPoly2] = useState();
  const [polly3, setPoly3] = useState();
  const [polly4, setPoly4] = useState();
  const polygonRef = useRef(null);
  const listenersRef = useRef([]);
  const polygonRef1 = useRef(null);
  const listenersRef1 = useRef([]);
  const polygonRef2 = useRef(null);
  const listenersRef2 = useRef([]);

  const mapRef = useRef();

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const HandleMapClick = (e) => {
    if (add === 1) {
      pollygons.length === 0
        ? setPolygons((prev) => [
            ...prev,
            [
              {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              },
            ],
          ])
        : setPolygons((prev) => [
            [
              ...prev[0],
              {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              },
            ],
          ]);
    } else if (add === 2) {
      newPolygons.length === 0
        ? setNewPolygons((prev) => [
            ...prev,
            [
              {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              },
            ],
          ])
        : setNewPolygons((prev) => [
            [
              ...prev[0],
              {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              },
            ],
          ]);
    } else {
      newPolygons2.length === 0
        ? setNewPolygons3((prev) => [
            ...prev,
            [
              {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              },
            ],
          ])
        : setNewPolygons3((prev) => [
            [
              ...prev[0],
              {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              },
            ],
          ]);
    }
  };

  const arr = [];
  const arr2 = [];
  const arr3 = [];

  pollygons.map((n) => n.map((n) => arr.push(n)));
  newPolygons.map((n) => n.map((n) => arr2.push(n)));
  newPolygons2.map((n) => n.map((n) => arr3.push(n)));

  const area = (arr) => {
    var latLngs = arr?.map(function (n) {
      return new LatLng(n.lat, n.lng);
    });
    return computeArea(latLngs);
  };

  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map((latLng) => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPoly2(nextPath);
    }
  }, [setPoly2]);

  const onEdit2 = useCallback(() => {
    if (polygonRef1.current) {
      const nextPath = polygonRef1.current
        .getPath()
        .getArray()
        .map((latLng) => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPoly3(nextPath);
    }
  }, [setPoly3]);

  const onEdit3 = useCallback(() => {
    if (polygonRef2.current) {
      const nextPath = polygonRef2.current
        .getPath()
        .getArray()
        .map((latLng) => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPoly4(nextPath);
    }
  }, [setPoly4]);

  const onPolyLoad = useCallback(
    (polygon) => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  const onPolyLoad2 = useCallback(
    (polygon) => {
      polygonRef1.current = polygon;
      const path = polygon.getPath();
      listenersRef1.current.push(
        path.addListener("set_at", onEdit2),
        path.addListener("insert_at", onEdit2),
        path.addListener("remove_at", onEdit2)
      );
    },
    [onEdit2]
  );

  const onPolyLoad3 = useCallback(
    (polygon) => {
      polygonRef2.current = polygon;
      const path = polygon.getPath();
      listenersRef2.current.push(
        path.addListener("set_at", onEdit3),
        path.addListener("insert_at", onEdit3),
        path.addListener("remove_at", onEdit3)
      );
    },
    [onEdit3]
  );

  const Calculate = () => {
    const totalarea =
      Math.round(area(polly2 ? polly2 : arr)) +
      Math.round(area(polly3 ? polly3 : arr2)) +
      Math.round(area(polly4 ? polly4 : arr3));

    if (Math.round(totalarea) > 10000) {
      setWarning(true);
    }
    setResult(true);
    setGmap(false);
    setArea(totalarea);
  };

  // console.log(pollygons);

  useMemo(() => {
    polly2 && console.log("New Area polly2 =", polly2 && area(polly2));
  }, [polly2]);

  useMemo(() => {
    polly3 && console.log("New Area polly3 =", polly3 && area(polly3));
  }, [polly3]);

  useMemo(() => {
    polly4 && console.log("New Area polly4 =", polly4 && area(polly4));
  }, [polly4]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading";

  return isLoaded ? (
    <>
      <section className="google-map">
        <div className="btn-group switch-address">
          <div className="mt-2 address-dropdown">
            <div
              className="d-flex align-items-center
                         justify-content-between w-100"
            >
              <Search
                panTo={panTo}
                setLocation={setLocation}
                setAddress={setAddress}
                address={address}
              />
            </div>
          </div>
        </div>
        {/* Current Location */}
        <img
          src={CLocation}
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                panTo({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              },
              () => null
            );
          }}
          alt="current location"
          className="current-location"
          style={{ height: "50px" }}
        />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={8}
          options={options}
          onLoad={onMapLoad}
          onClick={(e) => {
            HandleMapClick(e);
          }}
        >
          {pollygons.map((elem, i) => {
            return (
              <Polygon
                draggable
                editable
                key={i}
                onMouseUp={onEdit}
                // Event used when dragging the whole Polygon
                onDragEnd={onEdit}
                onLoad={(e) => onPolyLoad(e)}
                paths={elem}
                options={Polyoptions}
                visible={true}
              />
            );
          })}

          {newPolygons.map((elem, i) => {
            return (
              <Polygon
                draggable
                editable
                key={i}
                onMouseUp={onEdit2}
                // Event used when dragging the whole Polygon
                onDragEnd={onEdit2}
                onLoad={(e) => onPolyLoad2(e)}
                paths={elem}
                options={Polyoptions}
                visible={true}
              />
            );
          })}

          {newPolygons2.map((elem, i) => {
            return (
              <Polygon
                draggable
                editable
                key={i}
                onMouseUp={onEdit3}
                // Event used when dragging the whole Polygon
                onDragEnd={onEdit3}
                onLoad={(e) => onPolyLoad3(e)}
                paths={elem}
                options={Polyoptions}
                visible={true}
              />
            );
          })}
        </GoogleMap>

        <div className="bottom_btns">
          <button
            className="btn bg-white rounded-0"
            onClick={() => {
              if (add === 1) {
                setPolygons([]);
                setPoly2(undefined)
              } else if (add === 2) {
                setNewPolygons([]);
                setAdd(1);
                setPoly3(undefined)
              } else {
                setNewPolygons3([]);
                setAdd(2);
                setPoly4(undefined)
              }
            }}
          >
            Cancella
          </button>
          <button
            className="btn bg-white rounded-0 ms-3"
            onClick={() =>
              add < 3
                ? setAdd(add + 1)
                : alert("3 places can be selected a single")
            }
          >
            Aggiungi
          </button>
          {area(arr) === 0 ? (
            <button
              className="btn bg-white rounded-0 ms-3"
              onClick={() => {
                setQuestion(3);
                setGmap(false);
                setResult(false)
                setEmail(false)
              }}
            >
              Indietro
            </button>
          ) : (
            <button className="btn bg-white rounded-0 ms-3" onClick={Calculate}>
              Fatto!
            </button>
          )}
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};

export default GMap;

function Search({ panTo, setLocation, setAddress, address }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
    setAddress(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    setAddress(address);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setLocation({ lat, lng });
      panTo({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={address}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search your location"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption
                key={id}
                value={description}
                style={{ fontSize: "1.05rem", fontWeight: "normal !important" }}
              />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
