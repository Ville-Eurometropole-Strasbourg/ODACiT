define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-a8ce88a9","./AttributeCompression-88d6db09","./createTaskProcessorWorker"],function(a,e,v,y,A,r){"use strict";var M=32767,R=new y.Cartographic,x=new y.Cartesian3,D=new y.Rectangle,E=new y.Ellipsoid,F={min:void 0,max:void 0};return r(function(a,e){var r=new Uint16Array(a.positions);!function(a){a=new Float64Array(a);var e=0;F.min=a[e++],F.max=a[e++],y.Rectangle.unpack(a,e,D),e+=y.Rectangle.packedLength,y.Ellipsoid.unpack(a,e,E)}(a.packedBuffer);var t=D,n=E,i=F.min,s=F.max,o=r.length/3,c=r.subarray(0,o),u=r.subarray(o,2*o),p=r.subarray(2*o,3*o);A.AttributeCompression.zigZagDeltaDecode(c,u,p);for(var h=new Float64Array(r.length),l=0;l<o;++l){var f=c[l],d=u[l],m=p[l],C=v.CesiumMath.lerp(t.west,t.east,f/M),g=v.CesiumMath.lerp(t.south,t.north,d/M),b=v.CesiumMath.lerp(i,s,m/M),w=y.Cartographic.fromRadians(C,g,b,R),k=n.cartographicToCartesian(w,x);y.Cartesian3.pack(k,h,3*l)}return e.push(h.buffer),{positions:h.buffer}})});