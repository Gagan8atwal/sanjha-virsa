'use client';

import { useEffect, useRef, useState } from 'react';
import type { Map as MapLibreMap, Marker as MapLibreMarker } from 'maplibre-gl';

type Place = {
  id: string;
  name: string;
  punjabi: string;
  lat: number;
  lng: number;
  category: 'city' | 'heritage' | 'river' | 'district';
  prominence: 'major' | 'local';
  era: string;
  summary: string;
  history: string;
  modern: string;
  words: string[];
};

const places: Place[] = [
  {
    id: 'lahore', name: 'Lahore', punjabi: 'ਲਾਹੌਰ', lat: 31.5204, lng: 74.3587,
    category: 'city', prominence: 'major', era: 'Historic Punjab · Pakistani Punjab',
    summary: 'A major cultural and historic center of Punjab.',
    history: 'Lahore has long been one of the most influential cities of Punjab, connected with empires, education, literature, architecture, food, and public life.',
    modern: 'Today Lahore is a major city of Pakistani Punjab and remains central to Punjabi language, arts, food, media, and education.',
    words: ['Shehar — ਸ਼ਹਿਰ', 'Qila — ਕਿਲ੍ਹਾ', 'Virsa — ਵਿਰਸਾ'],
  },
  {
    id: 'amritsar', name: 'Amritsar', punjabi: 'ਅੰਮ੍ਰਿਤਸਰ', lat: 31.6340, lng: 74.8723,
    category: 'heritage', prominence: 'major', era: 'Sikh Heritage · Indian Punjab',
    summary: 'A major Sikh and Punjabi heritage city.',
    history: 'Amritsar developed into a central Sikh spiritual and cultural city and is closely associated with Sri Harmandir Sahib, sangat, langar, trade, and Punjabi urban life.',
    modern: 'Today Amritsar is an important religious, cultural, tourism, and commercial center in Indian Punjab.',
    words: ['Sangat — ਸੰਗਤ', 'Langar — ਲੰਗਰ', 'Seva — ਸੇਵਾ'],
  },
  {
    id: 'nankana-sahib', name: 'Nankana Sahib', punjabi: 'ਨਨਕਾਣਾ ਸਾਹਿਬ', lat: 31.4504, lng: 73.7064,
    category: 'heritage', prominence: 'major', era: 'Guru Nanak Dev Ji · Pakistani Punjab',
    summary: 'The birthplace of Guru Nanak Dev Ji.',
    history: 'Nankana Sahib is one of the most important Sikh heritage places because it is associated with the birth and early life of Guru Nanak Dev Ji.',
    modern: 'It remains a major pilgrimage and heritage destination in Pakistani Punjab.',
    words: ['Guru — ਗੁਰੂ', 'Sach — ਸੱਚ', 'Nimrata — ਨਿਮਰਤਾ'],
  },
  {
    id: 'multan', name: 'Multan', punjabi: 'ਮੁਲਤਾਨ', lat: 30.1575, lng: 71.5249,
    category: 'city', prominence: 'major', era: 'Ancient Punjab Region · Pakistani Punjab',
    summary: 'An old regional center known for trade, shrines, crafts, and layered history.',
    history: 'Multan is among the region’s oldest major cities and has been connected with trade, spirituality, crafts, and many different periods of rule.',
    modern: 'Today it is a major urban center of southern Pakistani Punjab.',
    words: ['Purana — ਪੁਰਾਣਾ', 'Bazaar — ਬਜ਼ਾਰ', 'Rang — ਰੰਗ'],
  },
  {
    id: 'jalandhar', name: 'Jalandhar', punjabi: 'ਜਲੰਧਰ', lat: 31.3260, lng: 75.5762,
    category: 'city', prominence: 'major', era: 'Doaba · Indian Punjab',
    summary: 'A major Doaba city with strong diaspora and sports-industry connections.',
    history: 'Jalandhar has long served as an urban center of the Doaba region and is connected with education, publishing, trade, and migration.',
    modern: 'Today it is known for sports goods, media, education, and strong family links to the Punjabi diaspora.',
    words: ['Doaba — ਦੋਆਬਾ', 'Khed — ਖੇਡ', 'Parvas — ਪਰਵਾਸ'],
  },
  {
    id: 'ludhiana', name: 'Ludhiana', punjabi: 'ਲੁਧਿਆਣਾ', lat: 30.9010, lng: 75.8573,
    category: 'city', prominence: 'major', era: 'Malwa · Indian Punjab',
    summary: 'A large industrial city in Indian Punjab.',
    history: 'Ludhiana grew into an important trade and production center and became closely linked with textiles, bicycles, machinery, and urban migration.',
    modern: 'Today it is one of Indian Punjab’s largest cities and a major industrial and commercial hub.',
    words: ['Udyog — ਉਦਯੋਗ', 'Kapra — ਕੱਪੜਾ', 'Shehar — ਸ਼ਹਿਰ'],
  },
  {
    id: 'patiala', name: 'Patiala', punjabi: 'ਪਟਿਆਲਾ', lat: 30.3398, lng: 76.3869,
    category: 'city', prominence: 'major', era: 'Malwa · Indian Punjab',
    summary: 'Known for princely history, music, clothing, and Malwa culture.',
    history: 'Patiala is associated with princely-state history, architecture, music traditions, clothing styles, and regional identity.',
    modern: 'Today it remains an important educational, cultural, and administrative city in Indian Punjab.',
    words: ['Malwa — ਮਾਲਵਾ', 'Sangeet — ਸੰਗੀਤ', 'Pagri — ਪੱਗੜੀ'],
  },
  {
    id: 'faisalabad', name: 'Faisalabad', punjabi: 'ਫੈਸਲਾਬਾਦ', lat: 31.4180, lng: 73.0791,
    category: 'city', prominence: 'major', era: 'Central Pakistani Punjab',
    summary: 'A major industrial and agricultural city.',
    history: 'The city expanded significantly during the colonial period as an agricultural market and later became one of the region’s leading industrial centers.',
    modern: 'Today Faisalabad is strongly associated with textiles, agriculture, trade, and manufacturing.',
    words: ['Karkhana — ਕਾਰਖਾਨਾ', 'Kheti — ਖੇਤੀ', 'Bazaar — ਬਜ਼ਾਰ'],
  },
  {
    id: 'rawalpindi', name: 'Rawalpindi', punjabi: 'ਰਾਵਲਪਿੰਡੀ', lat: 33.5651, lng: 73.0169,
    category: 'city', prominence: 'major', era: 'Pothohar · Pakistani Punjab',
    summary: 'A major Pothohar-region city with military, trade, and migration history.',
    history: 'Rawalpindi grew as an important commercial and military city and became a major gateway between Punjab and northern regions.',
    modern: 'Today it forms a large metropolitan area alongside Islamabad.',
    words: ['Pothohar — ਪੋਠੋਹਾਰ', 'Rasta — ਰਸਤਾ', 'Shehar — ਸ਼ਹਿਰ'],
  },
  {
    id: 'gujranwala', name: 'Gujranwala', punjabi: 'ਗੁਜਰਾਂਵਾਲਾ', lat: 32.1877, lng: 74.1945,
    category: 'city', prominence: 'local', era: 'Central Pakistani Punjab',
    summary: 'A historic city strongly linked with industry, food, and Punjabi urban culture.',
    history: 'Gujranwala has deep links with regional trade, craftsmanship, Sikh-era history, and later industrial development.',
    modern: 'Today it is a major industrial city known for manufacturing and food culture.',
    words: ['Hunarmand — ਹੁਨਰਮੰਦ', 'Khana — ਖਾਣਾ', 'Karobar — ਕਾਰੋਬਾਰ'],
  },
  {
    id: 'bathinda', name: 'Bathinda', punjabi: 'ਬਠਿੰਡਾ', lat: 30.2110, lng: 74.9455,
    category: 'district', prominence: 'local', era: 'Malwa · Indian Punjab',
    summary: 'A major Malwa city and district center.',
    history: 'Bathinda has a long regional history and is associated with forts, agriculture, transport routes, and Malwa identity.',
    modern: 'Today it is an important city for agriculture, energy, transport, and education.',
    words: ['Qila — ਕਿਲ੍ਹਾ', 'Malwa — ਮਾਲਵਾ', 'Kheti — ਖੇਤੀ'],
  },
  {
    id: 'anandpur-sahib', name: 'Anandpur Sahib', punjabi: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ', lat: 31.2393, lng: 76.5026,
    category: 'heritage', prominence: 'local', era: 'Sikh Heritage · Indian Punjab',
    summary: 'A major Sikh heritage city associated with Guru Gobind Singh Ji and the Khalsa tradition.',
    history: 'Anandpur Sahib holds central importance in Sikh history and is strongly associated with Guru Gobind Singh Ji and the formation of the Khalsa in 1699.',
    modern: 'Today it is a major pilgrimage and heritage destination.',
    words: ['Khalsa — ਖਾਲਸਾ', 'Anand — ਅਨੰਦ', 'Himmat — ਹਿੰਮਤ'],
  },
];

const markerStyles: Record<Place['category'], string> = {
  city: '#991b1b',
  heritage: '#b45309',
  river: '#1d4ed8',
  district: '#047857',
};

export default function RealPunjabMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<{ marker: MapLibreMarker; place: Place; element: HTMLButtonElement }[]>([]);
  const [selectedId, setSelectedId] = useState('lahore');
  const [zoom, setZoom] = useState(5.2);
  const selected = places.find((place) => place.id === selectedId) || places[0];

  useEffect(() => {
    let cancelled = false;

    async function startMap() {
      if (!mapContainer.current || mapRef.current) return;
      const maplibregl = await import('maplibre-gl');
      if (cancelled || !mapContainer.current) return;

      const map = new maplibregl.Map({
        container: mapContainer.current,
        center: [74.1, 31.1],
        zoom: 5.2,
        minZoom: 3,
        maxZoom: 12,
        attributionControl: true,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '© OpenStreetMap contributors',
            },
          },
          layers: [{ id: 'osm', type: 'raster', source: 'osm' }],
        },
      });

      map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right');
      map.addControl(new maplibregl.GlobeControl(), 'top-right');

      map.on('load', () => {
        try {
          map.setProjection({ type: 'globe' });
        } catch {
          // Globe projection gracefully falls back to the regular map if unsupported.
        }
      });

      for (const place of places) {
        const element = document.createElement('button');
        element.type = 'button';
        element.className = 'group flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[10px] font-black text-slate-950 shadow-lg ring-1 ring-black/15 transition hover:scale-105';
        element.innerHTML = `<span style="background:${markerStyles[place.category]}" class="block h-2.5 w-2.5 rounded-full"></span><span>${place.name}</span>`;
        element.setAttribute('aria-label', `Open ${place.name} history and details`);
        element.addEventListener('click', () => {
          setSelectedId(place.id);
          map.flyTo({ center: [place.lng, place.lat], zoom: Math.max(map.getZoom(), 7), duration: 900 });
        });

        const marker = new maplibregl.Marker({ element, anchor: 'bottom' })
          .setLngLat([place.lng, place.lat])
          .addTo(map);

        markersRef.current.push({ marker, place, element });
      }

      function updateVisibility() {
        const nextZoom = map.getZoom();
        setZoom(nextZoom);
        for (const entry of markersRef.current) {
          const show = entry.place.prominence === 'major' || nextZoom >= 6.4;
          entry.element.style.display = show ? 'flex' : 'none';
        }
      }

      updateVisibility();
      map.on('zoom', updateVisibility);
      mapRef.current = map;
    }

    void startMap();

    return () => {
      cancelled = true;
      markersRef.current = [];
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  function focusPlace(place: Place) {
    setSelectedId(place.id);
    mapRef.current?.flyTo({ center: [place.lng, place.lat], zoom: Math.max(mapRef.current.getZoom(), 7), duration: 900 });
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-700">Real Interactive Globe</p>
          <h2 className="mt-1 text-4xl font-black">Zoom, move, tap a place</h2>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-slate-700">Major cities stay visible from far away. More cities and districts appear as you zoom in, keeping the map clean.</p>
        </div>
        <div className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 ring-1 ring-black/10">Zoom {zoom.toFixed(1)}</div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl ring-1 ring-black/10">
          <div ref={mapContainer} className="h-[620px] w-full overflow-hidden rounded-[1.5rem]" />
        </div>

        <aside className="rounded-[2rem] bg-[#24160f] p-6 text-white shadow-2xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">Selected Place</p>
          <h3 className="mt-3 text-4xl font-black">{selected.name}</h3>
          <p className="mt-1 text-3xl font-black text-amber-200">{selected.punjabi}</p>
          <p className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-amber-100 ring-1 ring-white/10">{selected.era}</p>
          <p className="mt-5 text-lg font-bold leading-8">{selected.summary}</p>

          <div className="mt-6 rounded-3xl bg-white p-5 text-slate-950">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-red-800">History</p>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">{selected.history}</p>
          </div>

          <div className="mt-4 rounded-3xl bg-amber-100 p-5 text-slate-950">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-900">Modern Place</p>
            <p className="mt-3 text-sm font-black leading-7">{selected.modern}</p>
          </div>

          <div className="mt-4 rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">Words</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {selected.words.map((word) => <span key={word} className="rounded-full bg-white px-3 py-2 text-xs font-black text-slate-950">{word}</span>)}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.map((place) => (
          <button key={place.id} onClick={() => focusPlace(place)} className="rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: markerStyles[place.category] }} />
              <span className="font-black">{place.name}</span>
            </div>
            <p className="mt-1 text-sm font-black text-red-800">{place.punjabi}</p>
            <p className="mt-2 text-xs font-semibold text-slate-600">{place.era}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
