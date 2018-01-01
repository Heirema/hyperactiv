!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.hyperactiv=t()}(this,function(){"use strict";const e=[],t={timeout:null,queue:new Set,process:()=>{for(let e of t.queue)e();t.queue.clear(),t.timeout=null},enqueue:e=>{null===t.timeout&&(t.timeout=setTimeout(t.process,0)),t.queue.add(e)}};return{observe:function(n,{props:u=null,ignore:o=null,batch:s=!1}={}){return n.__observeMap=new Map,new Proxy(n,{get(t,s){const{__observeMap:r}=n;if(u&&!u.includes(s)||o&&o.includes(s))return n[s];r.has(s)||r.set(s,new Set);const i=r.get(s);return e.length>0&&i.add(e[0]),r.set(s,i),n[s]},set(e,r,i){const{__observeMap:c}=n;if(n[r]=i,u&&!u.includes(r)||o&&o.includes(r))return!0;if(c.has(r)){const e=c.get(r);for(let n of e)n.__disposed?e.delete(n):s?t.enqueue(n):n()}return!0}})},computed:function(t,{autoRun:n=!0}={}){const u=new Proxy(t,{apply:function(t,n,o){const s=(s=null)=>{e.unshift(u);const r=s?s():t.apply(n,o);return e.shift(),r};return o.push({computeAsync:e=>s(e)}),s()}});return n&&u(),u},dispose:e=>e.__disposed=!0}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZXJhY3Rpdi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbXB1dGVkU3RhY2sgPSBbXVxuXG5jb25zdCBjb21wdXRlZCA9IGZ1bmN0aW9uKGZ1biwge8KgYXV0b1J1biA9IHRydWUgfSA9IHt9KSB7XG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoZnVuLCB7XG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbih0YXJnZXQsIHRoaXNBcmcsIGFyZ3NMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBwZXJmb3JtQ29tcHV0YXRpb24gPSAoZnVuID0gbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkU3RhY2sudW5zaGlmdChwcm94eSlcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmdW4gPyBmdW4oKSA6IHRhcmdldC5hcHBseSh0aGlzQXJnLCBhcmdzTGlzdClcbiAgICAgICAgICAgICAgICBjb21wdXRlZFN0YWNrLnNoaWZ0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyZ3NMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbXB1dGVBc3luYzogdGFyZ2V0ID0+IHBlcmZvcm1Db21wdXRhdGlvbih0YXJnZXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gcGVyZm9ybUNvbXB1dGF0aW9uKClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYoYXV0b1J1bikgeyBwcm94eSgpIH1cbiAgICByZXR1cm4gcHJveHlcbn1cblxuY29uc3QgZGlzcG9zZSA9IF8gPT4gXy5fX2Rpc3Bvc2VkID0gdHJ1ZVxuXG5jb25zdCBiYXRjaGVyID3CoHtcbiAgICB0aW1lb3V0OiBudWxsLFxuICAgIHF1ZXVlOiBuZXcgU2V0KCksXG4gICAgcHJvY2VzczogKCkgPT4ge1xuICAgICAgICBmb3IobGV0IHRhc2sgb2YgYmF0Y2hlci5xdWV1ZSlcbiAgICAgICAgICAgIHRhc2soKVxuICAgICAgICBiYXRjaGVyLnF1ZXVlLmNsZWFyKClcbiAgICAgICAgYmF0Y2hlci50aW1lb3V0ID0gbnVsbFxuICAgIH0sXG4gICAgZW5xdWV1ZTogdGFzayA9PiB7XG4gICAgICAgIGlmKGJhdGNoZXIudGltZW91dCA9PT0gbnVsbClcbiAgICAgICAgICAgIGJhdGNoZXIudGltZW91dCA9IHNldFRpbWVvdXQoYmF0Y2hlci5wcm9jZXNzLCAwKVxuICAgICAgICBiYXRjaGVyLnF1ZXVlLmFkZCh0YXNrKVxuICAgIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iaiwgeyBwcm9wcyA9IG51bGwsIGlnbm9yZSA9IG51bGwsIGJhdGNoID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgb2JqLl9fb2JzZXJ2ZU1hcCA9IG5ldyBNYXAoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgICAgZ2V0KF8sIHByb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgX19vYnNlcnZlTWFwIH0gPSBvYmpcblxuICAgICAgICAgICAgaWYoKHByb3BzICYmICFwcm9wcy5pbmNsdWRlcyhwcm9wKSkgfHwgKGlnbm9yZSAmJiBpZ25vcmUuaW5jbHVkZXMocHJvcCkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF1cblxuICAgICAgICAgICAgaWYoIV9fb2JzZXJ2ZU1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBfX29ic2VydmVNYXAuc2V0KHByb3AsIG5ldyBTZXQoKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2V0ID0gX19vYnNlcnZlTWFwLmdldChwcm9wKVxuICAgICAgICAgICAgaWYoY29tcHV0ZWRTdGFjay5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHNldC5hZGQoY29tcHV0ZWRTdGFja1swXSlcbiAgICAgICAgICAgIF9fb2JzZXJ2ZU1hcC5zZXQocHJvcCwgc2V0KVxuXG4gICAgICAgICAgICByZXR1cm4gb2JqW3Byb3BdXG4gICAgICAgIH0sXG4gICAgICAgIHNldChfLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBfX29ic2VydmVNYXAgfSA9IG9ialxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWVcblxuICAgICAgICAgICAgaWYoKHByb3BzICYmICFwcm9wcy5pbmNsdWRlcyhwcm9wKSkgfHwgKGlnbm9yZSAmJiBpZ25vcmUuaW5jbHVkZXMocHJvcCkpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG5cbiAgICAgICAgICAgIGlmKF9fb2JzZXJ2ZU1hcC5oYXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbnRzID0gX19vYnNlcnZlTWFwLmdldChwcm9wKVxuICAgICAgICAgICAgICAgIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVwZW5kZW50Ll9fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudHMuZGVsZXRlKGRlcGVuZGVudClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJhdGNoKSBiYXRjaGVyLmVucXVldWUoZGVwZW5kZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBkZXBlbmRlbnQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBvYnNlcnZlLFxuICAgIGNvbXB1dGVkLFxuICAgIGRpc3Bvc2Vcbn0iXSwibmFtZXMiOlsiY29tcHV0ZWRTdGFjayIsImJhdGNoZXIiLCJ0aW1lb3V0IiwicXVldWUiLCJTZXQiLCJwcm9jZXNzIiwidGFzayIsImNsZWFyIiwiZW5xdWV1ZSIsInNldFRpbWVvdXQiLCJhZGQiLCJvYnNlcnZlIiwib2JqIiwicHJvcHMiLCJpZ25vcmUiLCJiYXRjaCIsIl9fb2JzZXJ2ZU1hcCIsIk1hcCIsIlByb3h5IiwiW29iamVjdCBPYmplY3RdIiwiXyIsInByb3AiLCJpbmNsdWRlcyIsImhhcyIsInNldCIsImdldCIsImxlbmd0aCIsInZhbHVlIiwiZGVwZW5kZW50cyIsImRlcGVuZGVudCIsIl9fZGlzcG9zZWQiLCJkZWxldGUiLCJjb21wdXRlZCIsImZ1biIsImF1dG9SdW4iLCJwcm94eSIsImFwcGx5IiwidGFyZ2V0IiwidGhpc0FyZyIsImFyZ3NMaXN0IiwicGVyZm9ybUNvbXB1dGF0aW9uIiwidW5zaGlmdCIsInJlc3VsdCIsInNoaWZ0IiwicHVzaCIsImNvbXB1dGVBc3luYyIsImRpc3Bvc2UiXSwibWFwcGluZ3MiOiJzTEFBQSxNQUFNQSxLQXlCQUMsR0FDRkMsUUFBUyxLQUNUQyxNQUFPLElBQUlDLElBQ1hDLFFBQVMsS0FDTCxJQUFJLElBQUlDLEtBQVFMLEVBQVFFLE1BQ3BCRyxJQUNKTCxFQUFRRSxNQUFNSSxRQUNkTixFQUFRQyxRQUFVLE1BRXRCTSxRQUFTRixJQUNrQixPQUFwQkwsRUFBUUMsVUFDUEQsRUFBUUMsUUFBVU8sV0FBV1IsRUFBUUksUUFBUyxJQUNsREosRUFBUUUsTUFBTU8sSUFBSUosWUFpRHRCSyxRQTdDWSxTQUFTQyxHQUFLQyxNQUFFQSxFQUFRLEtBQUlDLE9BQUVBLEVBQVMsS0FBSUMsTUFBRUEsR0FBUSxPQUdqRSxPQUZBSCxFQUFJSSxhQUFlLElBQUlDLElBRWhCLElBQUlDLE1BQU1OLEdBQ2JPLElBQUlDLEVBQUdDLEdBQ0gsTUFBTUwsYUFBRUEsR0FBaUJKLEVBRXpCLEdBQUlDLElBQVVBLEVBQU1TLFNBQVNELElBQVdQLEdBQVVBLEVBQU9RLFNBQVNELEdBQzlELE9BQU9ULEVBQUlTLEdBRVhMLEVBQWFPLElBQUlGLElBQ2pCTCxFQUFhUSxJQUFJSCxFQUFNLElBQUlqQixLQUcvQixNQUFNb0IsRUFBTVIsRUFBYVMsSUFBSUosR0FLN0IsT0FKR3JCLEVBQWMwQixPQUFTLEdBQ3RCRixFQUFJZCxJQUFJVixFQUFjLElBQzFCZ0IsRUFBYVEsSUFBSUgsRUFBTUcsR0FFaEJaLEVBQUlTLElBRWZGLElBQUlDLEVBQUdDLEVBQU1NLEdBQ1QsTUFBTVgsYUFBRUEsR0FBaUJKLEVBR3pCLEdBRkFBLEVBQUlTLEdBQVFNLEVBRVJkLElBQVVBLEVBQU1TLFNBQVNELElBQVdQLEdBQVVBLEVBQU9RLFNBQVNELEdBQzlELE9BQU8sRUFFWCxHQUFHTCxFQUFhTyxJQUFJRixHQUFPLENBQ3ZCLE1BQU1PLEVBQWFaLEVBQWFTLElBQUlKLEdBQ3BDLElBQUksSUFBSVEsS0FBYUQsRUFDZEMsRUFBVUMsV0FDVEYsRUFBV0csT0FBT0YsR0FFZmQsRUFBT2QsRUFBUU8sUUFBUXFCLEdBQ3JCQSxJQUlqQixPQUFPLE1BT2ZHLFNBckZhLFNBQVNDLEdBQUtDLFFBQUVBLEdBQVUsT0FDdkMsTUFBTUMsRUFBUSxJQUFJakIsTUFBTWUsR0FDcEJHLE1BQU8sU0FBU0MsRUFBUUMsRUFBU0MsR0FDN0IsTUFBTUMsRUFBcUIsQ0FBQ1AsRUFBTSxRQUM5QmpDLEVBQWN5QyxRQUFRTixHQUN0QixNQUFNTyxFQUFTVCxFQUFNQSxJQUFRSSxFQUFPRCxNQUFNRSxFQUFTQyxHQUVuRCxPQURBdkMsRUFBYzJDLFFBQ1BELEdBT1gsT0FKQUgsRUFBU0ssTUFDTEMsYUFBY1IsR0FBVUcsRUFBbUJILEtBR3hDRyxPQUlmLE9BREdOLEdBQVdDLElBQ1BBLEdBb0VQVyxRQWpFWTFCLEdBQUtBLEVBQUVVLFlBQWEifQ==
