var dg=Object.defineProperty,ug=Object.defineProperties;var mg=Object.getOwnPropertyDescriptors;var Fd=Object.getOwnPropertySymbols;var hg=Object.prototype.hasOwnProperty,pg=Object.prototype.propertyIsEnumerable;var Hd=(e,t,n)=>t in e?dg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||={})hg.call(t,n)&&Hd(e,n,t[n]);if(Fd)for(var n of Fd(t))pg.call(t,n)&&Hd(e,n,t[n]);return e},b=(e,t)=>ug(e,mg(t));var V=(e,t,n)=>new Promise((i,o)=>{var a=l=>{try{s(n.next(l))}catch(c){o(c)}},r=l=>{try{s(n.throw(l))}catch(c){o(c)}},s=l=>l.done?i(l.value):Promise.resolve(l.value).then(a,r);s((n=n.apply(e,t)).next())});var le=null,Ho=!1,fs=1,fg=null,pe=Symbol("SIGNAL");function y(e){let t=le;return le=e,t}function _o(){return le}var bt={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Si(e){if(Ho)throw new Error("");if(le===null)return;le.consumerOnSignalRead(e);let t=le.producersTail;if(t!==void 0&&t.producer===e)return;let n,i=le.recomputing;if(i&&(n=t!==void 0?t.nextProducer:le.producers,n!==void 0&&n.producer===e)){le.producersTail=n,n.lastReadVersion=e.version;return}let o=e.consumersTail;if(o!==void 0&&o.consumer===le&&(!i||Rg(o,le)))return;let a=Tt(le),r={producer:e,consumer:le,nextProducer:n,prevConsumer:o,lastReadVersion:e.version,nextConsumer:void 0};le.producersTail=r,t!==void 0?t.nextProducer=r:le.producers=r,a&&Kd(e,r)}function Bd(){fs++}function gs(e){if(!(Tt(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===fs)){if(!e.producerMustRecompute(e)&&!Ai(e)){ps(e);return}e.producerRecomputeValue(e),ps(e)}}function Rs(e){if(e.consumers===void 0)return;let t=Ho;Ho=!0;try{for(let n=e.consumers;n!==void 0;n=n.nextConsumer){let i=n.consumer;i.dirty||gg(i)}}finally{Ho=t}}function ks(){return le?.consumerAllowSignalWrites!==!1}function gg(e){e.dirty=!0,Rs(e),e.consumerMarkedDirty?.(e)}function ps(e){e.dirty=!1,e.lastCleanEpoch=fs}function wt(e){return e&&_d(e),y(e)}function _d(e){e.producersTail=void 0,e.recomputing=!0}function Ci(e,t){y(t),e&&Gd(e)}function Gd(e){e.recomputing=!1;let t=e.producersTail,n=t!==void 0?t.nextProducer:e.producers;if(n!==void 0){if(Tt(e))do n=ys(n);while(n!==void 0);t!==void 0?t.nextProducer=void 0:e.producers=void 0}}function Ai(e){for(let t=e.producers;t!==void 0;t=t.nextProducer){let n=t.producer,i=t.lastReadVersion;if(i!==n.version||(gs(n),i!==n.version))return!0}return!1}function Un(e){if(Tt(e)){let t=e.producers;for(;t!==void 0;)t=ys(t)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function Kd(e,t){let n=e.consumersTail,i=Tt(e);if(n!==void 0?(t.nextConsumer=n.nextConsumer,n.nextConsumer=t):(t.nextConsumer=void 0,e.consumers=t),t.prevConsumer=n,e.consumersTail=t,!i)for(let o=e.producers;o!==void 0;o=o.nextProducer)Kd(o.producer,o)}function ys(e){let t=e.producer,n=e.nextProducer,i=e.nextConsumer,o=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,i!==void 0?i.prevConsumer=o:t.consumersTail=o,o!==void 0)o.nextConsumer=i;else if(t.consumers=i,!Tt(t)){let a=t.producers;for(;a!==void 0;)a=ys(a)}return n}function Tt(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function Ds(e){fg?.(e)}function Rg(e,t){let n=t.producersTail;if(n!==void 0){let i=t.producers;do{if(i===e)return!0;if(i===n)break;i=i.nextProducer}while(i!==void 0)}return!1}function vs(e,t){return Object.is(e,t)}function Go(e,t){let n=Object.create(kg);n.computation=e,t!==void 0&&(n.equal=t);let i=()=>{if(gs(n),Si(n),n.value===Bo)throw n.error;return n.value};return i[pe]=n,Ds(n),i}var ms=Symbol("UNSET"),hs=Symbol("COMPUTING"),Bo=Symbol("ERRORED"),kg=b(f({},bt),{value:ms,dirty:!0,error:null,equal:vs,kind:"computed",producerMustRecompute(e){return e.value===ms||e.value===hs},producerRecomputeValue(e){if(e.value===hs)throw new Error("");let t=e.value;e.value=hs;let n=wt(e),i,o=!1;try{i=e.computation(),y(null),o=t!==ms&&t!==Bo&&i!==Bo&&e.equal(t,i)}catch(a){i=Bo,e.error=a}finally{Ci(e,n)}if(o){e.value=t;return}e.value=i,e.version++}});function yg(){throw new Error}var zd=yg;function Vd(e){zd(e)}function Ms(e){zd=e}var Dg=null;function Ss(e,t){let n=Object.create(Ko);n.value=e,t!==void 0&&(n.equal=t);let i=()=>jd(n);return i[pe]=n,Ds(n),[i,r=>xi(n,r),r=>Jd(n,r)]}function jd(e){return Si(e),e.value}function xi(e,t){ks()||Vd(e),e.equal(e.value,t)||(e.value=t,vg(e))}function Jd(e,t){ks()||Vd(e),xi(e,t(e.value))}var Ko=b(f({},bt),{equal:vs,value:void 0,kind:"signal"});function vg(e){e.version++,Bd(),Rs(e),Dg?.(e)}function Cs(e){let t=y(null);try{return e()}finally{y(t)}}var As=b(f({},bt),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function xs(e){if(e.dirty=!1,e.version>0&&!Ai(e))return;e.version++;let t=wt(e);try{e.cleanup(),e.fn()}finally{Ci(e,t)}}function C(e){return typeof e=="function"}function Et(e){let n=e(i=>{Error.call(i),i.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var zo=Et(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((i,o)=>`${o+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function bi(e,t){if(e){let n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Z=class e{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let a of n)a.remove(this);else n.remove(this);let{initialTeardown:i}=this;if(C(i))try{i()}catch(a){t=a instanceof zo?a.errors:[a]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let a of o)try{Ud(a)}catch(r){t=t??[],r instanceof zo?t=[...t,...r.errors]:t.push(r)}}if(t)throw new zo(t)}}add(t){var n;if(t&&t!==this)if(this.closed)Ud(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}}_hasParent(t){let{_parentage:n}=this;return n===t||Array.isArray(n)&&n.includes(t)}_addParent(t){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t}_removeParent(t){let{_parentage:n}=this;n===t?this._parentage=null:Array.isArray(n)&&bi(n,t)}remove(t){let{_finalizers:n}=this;n&&bi(n,t),t instanceof e&&t._removeParent(this)}};Z.EMPTY=(()=>{let e=new Z;return e.closed=!0,e})();var bs=Z.EMPTY;function Vo(e){return e instanceof Z||e&&"closed"in e&&C(e.remove)&&C(e.add)&&C(e.unsubscribe)}function Ud(e){C(e)?e():e.unsubscribe()}var He={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Pt={setTimeout(e,t,...n){let{delegate:i}=Pt;return i?.setTimeout?i.setTimeout(e,t,...n):setTimeout(e,t,...n)},clearTimeout(e){let{delegate:t}=Pt;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function jo(e){Pt.setTimeout(()=>{let{onUnhandledError:t}=He;if(t)t(e);else throw e})}function wi(){}var Wd=ws("C",void 0,void 0);function qd(e){return ws("E",void 0,e)}function $d(e){return ws("N",e,void 0)}function ws(e,t,n){return{kind:e,value:t,error:n}}var Wn=null;function It(e){if(He.useDeprecatedSynchronousErrorHandling){let t=!Wn;if(t&&(Wn={errorThrown:!1,error:null}),e(),t){let{errorThrown:n,error:i}=Wn;if(Wn=null,n)throw i}}else e()}function Yd(e){He.useDeprecatedSynchronousErrorHandling&&Wn&&(Wn.errorThrown=!0,Wn.error=e)}var qn=class extends Z{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,Vo(t)&&t.add(this)):this.destination=Cg}static create(t,n,i){return new Nt(t,n,i)}next(t){this.isStopped?Es($d(t),this):this._next(t)}error(t){this.isStopped?Es(qd(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?Es(Wd,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Mg=Function.prototype.bind;function Ts(e,t){return Mg.call(e,t)}var Ps=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:n}=this;if(n.next)try{n.next(t)}catch(i){Jo(i)}}error(t){let{partialObserver:n}=this;if(n.error)try{n.error(t)}catch(i){Jo(i)}else Jo(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(n){Jo(n)}}},Nt=class extends qn{constructor(t,n,i){super();let o;if(C(t)||!t)o={next:t??void 0,error:n??void 0,complete:i??void 0};else{let a;this&&He.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Ts(t.next,a),error:t.error&&Ts(t.error,a),complete:t.complete&&Ts(t.complete,a)}):o=t}this.destination=new Ps(o)}};function Jo(e){He.useDeprecatedSynchronousErrorHandling?Yd(e):jo(e)}function Sg(e){throw e}function Es(e,t){let{onStoppedNotification:n}=He;n&&Pt.setTimeout(()=>n(e,t))}var Cg={closed:!0,next:wi,error:Sg,complete:wi};var Lt=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Be(e){return e}function Is(...e){return Ns(e)}function Ns(e){return e.length===0?Be:e.length===1?e[0]:function(n){return e.reduce((i,o)=>o(i),n)}}var N=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let i=new e;return i.source=this,i.operator=n,i}subscribe(n,i,o){let a=xg(n)?n:new Nt(n,i,o);return It(()=>{let{operator:r,source:s}=this;a.add(r?r.call(a,s):s?this._subscribe(a):this._trySubscribe(a))}),a}_trySubscribe(n){try{return this._subscribe(n)}catch(i){n.error(i)}}forEach(n,i){return i=Zd(i),new i((o,a)=>{let r=new Nt({next:s=>{try{n(s)}catch(l){a(l),r.unsubscribe()}},error:a,complete:o});this.subscribe(r)})}_subscribe(n){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(n)}[Lt](){return this}pipe(...n){return Ns(n)(this)}toPromise(n){return n=Zd(n),new n((i,o)=>{let a;this.subscribe(r=>a=r,r=>o(r),()=>i(a))})}}return e.create=t=>new e(t),e})();function Zd(e){var t;return(t=e??He.Promise)!==null&&t!==void 0?t:Promise}function Ag(e){return e&&C(e.next)&&C(e.error)&&C(e.complete)}function xg(e){return e&&e instanceof qn||Ag(e)&&Vo(e)}function bg(e){return C(e?.lift)}function B(e){return t=>{if(bg(t))return t.lift(function(n){try{return e(n,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function G(e,t,n,i,o){return new Ls(e,t,n,i,o)}var Ls=class extends qn{constructor(t,n,i,o,a,r){super(t),this.onFinalize=a,this.shouldUnsubscribe=r,this._next=n?function(s){try{n(s)}catch(l){t.error(l)}}:super._next,this._error=o?function(s){try{o(s)}catch(l){t.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){t.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};var Qd=Et(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var ae=(()=>{class e extends N{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let i=new Uo(this,this);return i.operator=n,i}_throwIfClosed(){if(this.closed)throw new Qd}next(n){It(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(n)}})}error(n){It(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:i}=this;for(;i.length;)i.shift().error(n)}})}complete(){It(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:i,isStopped:o,observers:a}=this;return i||o?bs:(this.currentObservers=null,a.push(n),new Z(()=>{this.currentObservers=null,bi(a,n)}))}_checkFinalizedStatuses(n){let{hasError:i,thrownError:o,isStopped:a}=this;i?n.error(o):a&&n.complete()}asObservable(){let n=new N;return n.source=this,n}}return e.create=(t,n)=>new Uo(t,n),e})(),Uo=class extends ae{constructor(t,n){super(),this.destination=t,this.source=n}next(t){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,t)}error(t){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,t)}complete(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)}_subscribe(t){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&i!==void 0?i:bs}};var Q=class extends ae{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let n=super._subscribe(t);return!n.closed&&t.next(this._value),n}getValue(){let{hasError:t,thrownError:n,_value:i}=this;if(t)throw n;return this._throwIfClosed(),i}next(t){super.next(this._value=t)}};var re=new N(e=>e.complete());function Xd(e){return e&&C(e.schedule)}function eu(e){return e[e.length-1]}function nu(e){return C(eu(e))?e.pop():void 0}function An(e){return Xd(eu(e))?e.pop():void 0}function iu(e,t,n,i){function o(a){return a instanceof n?a:new n(function(r){r(a)})}return new(n||(n=Promise))(function(a,r){function s(d){try{c(i.next(d))}catch(u){r(u)}}function l(d){try{c(i.throw(d))}catch(u){r(u)}}function c(d){d.done?a(d.value):o(d.value).then(s,l)}c((i=i.apply(e,t||[])).next())})}function tu(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function $n(e){return this instanceof $n?(this.v=e,this):new $n(e)}function ou(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(e,t||[]),o,a=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",r),o[Symbol.asyncIterator]=function(){return this},o;function r(m){return function(g){return Promise.resolve(g).then(m,u)}}function s(m,g){i[m]&&(o[m]=function(D){return new Promise(function(E,I){a.push([m,D,E,I])>1||l(m,D)})},g&&(o[m]=g(o[m])))}function l(m,g){try{c(i[m](g))}catch(D){h(a[0][3],D)}}function c(m){m.value instanceof $n?Promise.resolve(m.value.v).then(d,u):h(a[0][2],m)}function d(m){l("next",m)}function u(m){l("throw",m)}function h(m,g){m(g),a.shift(),a.length&&l(a[0][0],a[0][1])}}function au(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof tu=="function"?tu(e):e[Symbol.iterator](),n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n);function i(a){n[a]=e[a]&&function(r){return new Promise(function(s,l){r=e[a](r),o(s,l,r.done,r.value)})}}function o(a,r,s,l){Promise.resolve(l).then(function(c){a({value:c,done:s})},r)}}var Wo=e=>e&&typeof e.length=="number"&&typeof e!="function";function qo(e){return C(e?.then)}function $o(e){return C(e[Lt])}function Yo(e){return Symbol.asyncIterator&&C(e?.[Symbol.asyncIterator])}function Zo(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function wg(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Qo=wg();function Xo(e){return C(e?.[Qo])}function ea(e){return ou(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:i,done:o}=yield $n(n.read());if(o)return yield $n(void 0);yield yield $n(i)}}finally{n.releaseLock()}})}function na(e){return C(e?.getReader)}function ne(e){if(e instanceof N)return e;if(e!=null){if($o(e))return Tg(e);if(Wo(e))return Eg(e);if(qo(e))return Pg(e);if(Yo(e))return ru(e);if(Xo(e))return Ig(e);if(na(e))return Ng(e)}throw Zo(e)}function Tg(e){return new N(t=>{let n=e[Lt]();if(C(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Eg(e){return new N(t=>{for(let n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function Pg(e){return new N(t=>{e.then(n=>{t.closed||(t.next(n),t.complete())},n=>t.error(n)).then(null,jo)})}function Ig(e){return new N(t=>{for(let n of e)if(t.next(n),t.closed)return;t.complete()})}function ru(e){return new N(t=>{Lg(e,t).catch(n=>t.error(n))})}function Ng(e){return ru(ea(e))}function Lg(e,t){var n,i,o,a;return iu(this,void 0,void 0,function*(){try{for(n=au(e);i=yield n.next(),!i.done;){let r=i.value;if(t.next(r),t.closed)return}}catch(r){o={error:r}}finally{try{i&&!i.done&&(a=n.return)&&(yield a.call(n))}finally{if(o)throw o.error}}t.complete()})}function fe(e,t,n,i=0,o=!1){let a=t.schedule(function(){n(),o?e.add(this.schedule(null,i)):this.unsubscribe()},i);if(e.add(a),!o)return a}function ta(e,t=0){return B((n,i)=>{n.subscribe(G(i,o=>fe(i,e,()=>i.next(o),t),()=>fe(i,e,()=>i.complete(),t),o=>fe(i,e,()=>i.error(o),t)))})}function ia(e,t=0){return B((n,i)=>{i.add(e.schedule(()=>n.subscribe(i),t))})}function su(e,t){return ne(e).pipe(ia(t),ta(t))}function lu(e,t){return ne(e).pipe(ia(t),ta(t))}function cu(e,t){return new N(n=>{let i=0;return t.schedule(function(){i===e.length?n.complete():(n.next(e[i++]),n.closed||this.schedule())})})}function du(e,t){return new N(n=>{let i;return fe(n,t,()=>{i=e[Qo](),fe(n,t,()=>{let o,a;try{({value:o,done:a}=i.next())}catch(r){n.error(r);return}a?n.complete():n.next(o)},0,!0)}),()=>C(i?.return)&&i.return()})}function oa(e,t){if(!e)throw new Error("Iterable cannot be null");return new N(n=>{fe(n,t,()=>{let i=e[Symbol.asyncIterator]();fe(n,t,()=>{i.next().then(o=>{o.done?n.complete():n.next(o.value)})},0,!0)})})}function uu(e,t){return oa(ea(e),t)}function mu(e,t){if(e!=null){if($o(e))return su(e,t);if(Wo(e))return cu(e,t);if(qo(e))return lu(e,t);if(Yo(e))return oa(e,t);if(Xo(e))return du(e,t);if(na(e))return uu(e,t)}throw Zo(e)}function te(e,t){return t?mu(e,t):ne(e)}function T(...e){let t=An(e);return te(e,t)}function Os(e,t){let n=C(e)?e:()=>e,i=o=>o.error(n());return new N(t?o=>t.schedule(i,0,o):i)}function aa(e){return!!e&&(e instanceof N||C(e.lift)&&C(e.subscribe))}var Yn=Et(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function J(e,t){return B((n,i)=>{let o=0;n.subscribe(G(i,a=>{i.next(e.call(t,a,o++))}))})}var{isArray:Og}=Array;function Fg(e,t){return Og(t)?e(...t):e(t)}function hu(e){return J(t=>Fg(e,t))}var{isArray:Hg}=Array,{getPrototypeOf:Bg,prototype:_g,keys:Gg}=Object;function pu(e){if(e.length===1){let t=e[0];if(Hg(t))return{args:t,keys:null};if(Kg(t)){let n=Gg(t);return{args:n.map(i=>t[i]),keys:n}}}return{args:e,keys:null}}function Kg(e){return e&&typeof e=="object"&&Bg(e)===_g}function fu(e,t){return e.reduce((n,i,o)=>(n[i]=t[o],n),{})}function Fs(...e){let t=An(e),n=nu(e),{args:i,keys:o}=pu(e);if(i.length===0)return te([],t);let a=new N(zg(i,t,o?r=>fu(o,r):Be));return n?a.pipe(hu(n)):a}function zg(e,t,n=Be){return i=>{gu(t,()=>{let{length:o}=e,a=new Array(o),r=o,s=o;for(let l=0;l<o;l++)gu(t,()=>{let c=te(e[l],t),d=!1;c.subscribe(G(i,u=>{a[l]=u,d||(d=!0,s--),s||i.next(n(a.slice()))},()=>{--r||i.complete()}))},i)},i)}}function gu(e,t,n){e?fe(n,e,t):t()}function Ru(e,t,n,i,o,a,r,s){let l=[],c=0,d=0,u=!1,h=()=>{u&&!l.length&&!c&&t.complete()},m=D=>c<i?g(D):l.push(D),g=D=>{a&&t.next(D),c++;let E=!1;ne(n(D,d++)).subscribe(G(t,I=>{o?.(I),a?m(I):t.next(I)},()=>{E=!0},void 0,()=>{if(E)try{for(c--;l.length&&c<i;){let I=l.shift();r?fe(t,r,()=>g(I)):g(I)}h()}catch(I){t.error(I)}}))};return e.subscribe(G(t,m,()=>{u=!0,h()})),()=>{s?.()}}function me(e,t,n=1/0){return C(t)?me((i,o)=>J((a,r)=>t(i,a,o,r))(ne(e(i,o))),n):(typeof t=="number"&&(n=t),B((i,o)=>Ru(i,o,e,n)))}function ku(e=1/0){return me(Be,e)}function yu(){return ku(1)}function Ot(...e){return yu()(te(e,An(e)))}function Ti(e){return new N(t=>{ne(e()).subscribe(t)})}function an(e,t){return B((n,i)=>{let o=0;n.subscribe(G(i,a=>e.call(t,a,o++)&&i.next(a)))})}function Ei(e){return B((t,n)=>{let i=null,o=!1,a;i=t.subscribe(G(n,void 0,void 0,r=>{a=ne(e(r,Ei(e)(t))),i?(i.unsubscribe(),i=null,a.subscribe(n)):o=!0})),o&&(i.unsubscribe(),i=null,a.subscribe(n))})}function ra(e,t){return C(t)?me(e,t,1):me(e,1)}function Du(e){return B((t,n)=>{let i=!1;t.subscribe(G(n,o=>{i=!0,n.next(o)},()=>{i||n.next(e),n.complete()}))})}function rn(e){return e<=0?()=>re:B((t,n)=>{let i=0;t.subscribe(G(n,o=>{++i<=e&&(n.next(o),e<=i&&n.complete())}))})}function vu(e=Vg){return B((t,n)=>{let i=!1;t.subscribe(G(n,o=>{i=!0,n.next(o)},()=>i?n.complete():n.error(e())))})}function Vg(){return new Yn}function Hs(e){return B((t,n)=>{try{t.subscribe(n)}finally{n.add(e)}})}function sn(e,t){let n=arguments.length>=2;return i=>i.pipe(e?an((o,a)=>e(o,a,i)):Be,rn(1),n?Du(t):vu(()=>new Yn))}function sa(e){return e<=0?()=>re:B((t,n)=>{let i=[];t.subscribe(G(n,o=>{i.push(o),e<i.length&&i.shift()},()=>{for(let o of i)n.next(o);n.complete()},void 0,()=>{i=null}))})}function Bs(...e){let t=An(e);return B((n,i)=>{(t?Ot(e,n,t):Ot(e,n)).subscribe(i)})}function ln(e,t){return B((n,i)=>{let o=null,a=0,r=!1,s=()=>r&&!o&&i.complete();n.subscribe(G(i,l=>{o?.unsubscribe();let c=0,d=a++;ne(e(l,d)).subscribe(o=G(i,u=>i.next(t?t(l,u,d,c++):u),()=>{o=null,s()}))},()=>{r=!0,s()}))})}function Zn(e){return B((t,n)=>{ne(e).subscribe(G(n,()=>n.complete(),wi)),!n.closed&&t.subscribe(n)})}function Ue(e,t,n){let i=C(e)||t||n?{next:e,error:t,complete:n}:e;return i?B((o,a)=>{var r;(r=i.subscribe)===null||r===void 0||r.call(i);let s=!0;o.subscribe(G(a,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),a.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),a.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),a.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Be}var _s;function la(){return _s}function We(e){let t=_s;return _s=e,t}var Mu=Symbol("NotFound");function Ft(e){return e===Mu||e?.name==="\u0275NotFound"}var ga="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",k=class extends Error{code;constructor(t,n){super(Hi(t,n)),this.code=t}};function jg(e){return`NG0${Math.abs(e)}`}function Hi(e,t){return`${jg(e)}${t?": "+t:""}`}var tt=globalThis;function _(e){for(let t in e)if(e[t]===_)return t;throw Error("")}function dn(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(dn).join(", ")}]`;if(e==null)return""+e;let t=e.overriddenName||e.name;if(t)return`${t}`;let n=e.toString();if(n==null)return""+n;let i=n.indexOf(`
`);return i>=0?n.slice(0,i):n}function Qs(e,t){return e?t?`${e} ${t}`:e:t||""}var Jg=_({__forward_ref__:_});function Ra(e){return e.__forward_ref__=Ra,e.toString=function(){return dn(this())},e}function ge(e){return Xs(e)?e():e}function Xs(e){return typeof e=="function"&&e.hasOwnProperty(Jg)&&e.__forward_ref__===Ra}function R(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Bt(e){return{providers:e.providers||[],imports:e.imports||[]}}function Bi(e){return Ug(e,ka)}function el(e){return Bi(e)!==null}function Ug(e,t){return e.hasOwnProperty(t)&&e[t]||null}function Wg(e){let t=e?.[ka]??null;return t||null}function Ks(e){return e&&e.hasOwnProperty(da)?e[da]:null}var ka=_({\u0275prov:_}),da=_({\u0275inj:_}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,n){this._desc=t,this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=R({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function nl(e){return e&&!!e.\u0275providers}var tl=_({\u0275cmp:_}),il=_({\u0275dir:_}),ol=_({\u0275pipe:_}),al=_({\u0275mod:_}),Ii=_({\u0275fac:_}),it=_({__NG_ELEMENT_ID__:_}),Su=_({__NG_ENV_ID__:_});function rl(e){return ya(e,"@NgModule"),e[al]||null}function Tn(e){return ya(e,"@Component"),e[tl]||null}function sl(e){return ya(e,"@Directive"),e[il]||null}function bu(e){return ya(e,"@Pipe"),e[ol]||null}function ya(e,t){if(e==null)throw new k(-919,!1)}function Da(e){return typeof e=="string"?e:e==null?"":String(e)}var wu=_({ngErrorCode:_}),qg=_({ngErrorMessage:_}),$g=_({ngTokenPath:_});function ll(e,t){return Tu("",-200,t)}function va(e,t){throw new k(-201,!1)}function Tu(e,t,n){let i=new k(t,e);return i[wu]=t,i[qg]=e,n&&(i[$g]=n),i}function Yg(e){return e[wu]}var zs;function Eu(){return zs}function Re(e){let t=zs;return zs=e,t}function cl(e,t,n){let i=Bi(e);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(n&8)return null;if(t!==void 0)return t;va(e,"")}var Zg={},Qn=Zg,Qg="__NG_DI_FLAG__",Vs=class{injector;constructor(t){this.injector=t}retrieve(t,n){let i=Xn(n)||0;try{return this.injector.get(t,i&8?null:Qn,i)}catch(o){if(Ft(o))return o;throw o}}};function Xg(e,t=0){let n=la();if(n===void 0)throw new k(-203,!1);if(n===null)return cl(e,void 0,t);{let i=eR(t),o=n.retrieve(e,i);if(Ft(o)){if(i.optional)return null;throw o}return o}}function x(e,t=0){return(Eu()||Xg)(ge(e),t)}function p(e,t){return x(e,Xn(t))}function Xn(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function eR(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function js(e){let t=[];for(let n=0;n<e.length;n++){let i=ge(e[n]);if(Array.isArray(i)){if(i.length===0)throw new k(900,!1);let o,a=0;for(let r=0;r<i.length;r++){let s=i[r],l=nR(s);typeof l=="number"?l===-1?o=s.token:a|=l:o=s}t.push(x(o,a))}else t.push(x(i))}return t}function nR(e){return e[Qg]}function et(e,t){let n=e.hasOwnProperty(Ii);return n?e[Ii]:null}function Pu(e,t,n){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++){let o=e[i],a=t[i];if(n&&(o=n(o),a=n(a)),a!==o)return!1}return!0}function Iu(e){return e.flat(Number.POSITIVE_INFINITY)}function Ma(e,t){e.forEach(n=>Array.isArray(n)?Ma(n,t):t(n))}function dl(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function _i(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Nu(e,t,n,i){let o=e.length;if(o==t)e.push(n,i);else if(o===1)e.push(i,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;){let a=o-2;e[o]=e[a],o--}e[t]=n,e[t+1]=i}}function Lu(e,t,n){let i=_t(e,t);return i>=0?e[i|1]=n:(i=~i,Nu(e,i,t,n)),i}function Sa(e,t){let n=_t(e,t);if(n>=0)return e[n|1]}function _t(e,t){return tR(e,t,1)}function tR(e,t,n){let i=0,o=e.length>>n;for(;o!==i;){let a=i+(o-i>>1),r=e[a<<n];if(t===r)return a<<n;r>t?o=a:i=a+1}return~(o<<n)}var ot={},be=[],En=new v(""),ul=new v("",-1),ml=new v(""),Ni=class{get(t,n=Qn){if(n===Qn){let o=Tu("",-201);throw o.name="\u0275NotFound",o}return n}};function Gi(e){return{\u0275providers:e}}function Ou(...e){return{\u0275providers:hl(!0,e),\u0275fromNgModule:!0}}function hl(e,...t){let n=[],i=new Set,o,a=r=>{n.push(r)};return Ma(t,r=>{let s=r;ua(s,a,[],i)&&(o||=[],o.push(s))}),o!==void 0&&Fu(o,a),n}function Fu(e,t){for(let n=0;n<e.length;n++){let{ngModule:i,providers:o}=e[n];pl(o,a=>{t(a,i)})}}function ua(e,t,n,i){if(e=ge(e),!e)return!1;let o=null,a=Ks(e),r=!a&&Tn(e);if(!a&&!r){let l=e.ngModule;if(a=Ks(l),a)o=l;else return!1}else{if(r&&!r.standalone)return!1;o=e}let s=i.has(o);if(r){if(s)return!1;if(i.add(o),r.dependencies){let l=typeof r.dependencies=="function"?r.dependencies():r.dependencies;for(let c of l)ua(c,t,n,i)}}else if(a){if(a.imports!=null&&!s){i.add(o);let c;Ma(a.imports,d=>{ua(d,t,n,i)&&(c||=[],c.push(d))}),c!==void 0&&Fu(c,t)}if(!s){let c=et(o)||(()=>new o);t({provide:o,useFactory:c,deps:be},o),t({provide:ml,useValue:o,multi:!0},o),t({provide:En,useValue:()=>x(o),multi:!0},o)}let l=a.providers;if(l!=null&&!s){let c=e;pl(l,d=>{t(d,c)})}}else return!1;return o!==e&&e.providers!==void 0}function pl(e,t){for(let n of e)nl(n)&&(n=n.\u0275providers),Array.isArray(n)?pl(n,t):t(n)}var iR=_({provide:String,useValue:_});function Hu(e){return e!==null&&typeof e=="object"&&iR in e}function oR(e){return!!(e&&e.useExisting)}function aR(e){return!!(e&&e.useFactory)}function ma(e){return typeof e=="function"}var Ki=new v(""),ca={},Cu={},Gs;function zi(){return Gs===void 0&&(Gs=new Ni),Gs}var X=class{},nt=class extends X{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,n,i,o){super(),this.parent=n,this.source=i,this.scopes=o,Us(t,r=>this.processProvider(r)),this.records.set(ul,Ht(void 0,this)),o.has("environment")&&this.records.set(X,Ht(void 0,this));let a=this.records.get(Ki);a!=null&&typeof a.value=="string"&&this.scopes.add(a.value),this.injectorDefTypes=new Set(this.get(ml,be,{self:!0}))}retrieve(t,n){let i=Xn(n)||0;try{return this.get(t,Qn,i)}catch(o){if(Ft(o))return o;throw o}}destroy(){Pi(this),this._destroyed=!0;let t=y(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let n=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of n)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),y(t)}}onDestroy(t){return Pi(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){Pi(this);let n=We(this),i=Re(void 0),o;try{return t()}finally{We(n),Re(i)}}get(t,n=Qn,i){if(Pi(this),t.hasOwnProperty(Su))return t[Su](this);let o=Xn(i),a,r=We(this),s=Re(void 0);try{if(!(o&4)){let c=this.records.get(t);if(c===void 0){let d=dR(t)&&Bi(t);d&&this.injectableDefInScope(d)?c=Ht(Js(t),ca):c=null,this.records.set(t,c)}if(c!=null)return this.hydrate(t,c,o)}let l=o&2?zi():this.parent;return n=o&8&&n===Qn?null:n,l.get(t,n)}catch(l){let c=Yg(l);throw c===-200||c===-201?new k(c,null):l}finally{Re(s),We(r)}}resolveInjectorInitializers(){let t=y(null),n=We(this),i=Re(void 0),o;try{let a=this.get(En,be,{self:!0});for(let r of a)r()}finally{We(n),Re(i),y(t)}}toString(){let t=[],n=this.records;for(let i of n.keys())t.push(dn(i));return`R3Injector[${t.join(", ")}]`}processProvider(t){t=ge(t);let n=ma(t)?t:ge(t&&t.provide),i=sR(t);if(!ma(t)&&t.multi===!0){let o=this.records.get(n);o||(o=Ht(void 0,ca,!0),o.factory=()=>js(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,i)}hydrate(t,n,i){let o=y(null);try{if(n.value===Cu)throw ll(dn(t));return n.value===ca&&(n.value=Cu,n.value=n.factory(void 0,i)),typeof n.value=="object"&&n.value&&cR(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}finally{y(o)}}injectableDefInScope(t){if(!t.providedIn)return!1;let n=ge(t.providedIn);return typeof n=="string"?n==="any"||this.scopes.has(n):this.injectorDefTypes.has(n)}removeOnDestroy(t){let n=this._onDestroyHooks.indexOf(t);n!==-1&&this._onDestroyHooks.splice(n,1)}};function Js(e){let t=Bi(e),n=t!==null?t.factory:et(e);if(n!==null)return n;if(e instanceof v)throw new k(204,!1);if(e instanceof Function)return rR(e);throw new k(204,!1)}function rR(e){if(e.length>0)throw new k(204,!1);let n=Wg(e);return n!==null?()=>n.factory(e):()=>new e}function sR(e){if(Hu(e))return Ht(void 0,e.useValue);{let t=Bu(e);return Ht(t,ca)}}function Bu(e,t,n){let i;if(ma(e)){let o=ge(e);return et(o)||Js(o)}else if(Hu(e))i=()=>ge(e.useValue);else if(aR(e))i=()=>e.useFactory(...js(e.deps||[]));else if(oR(e))i=(o,a)=>x(ge(e.useExisting),a!==void 0&&a&8?8:void 0);else{let o=ge(e&&(e.useClass||e.provide));if(lR(e))i=()=>new o(...js(e.deps));else return et(o)||Js(o)}return i}function Pi(e){if(e.destroyed)throw new k(205,!1)}function Ht(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function lR(e){return!!e.deps}function cR(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function dR(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function Us(e,t){for(let n of e)Array.isArray(n)?Us(n,t):n&&nl(n)?Us(n.\u0275providers,t):t(n)}function ce(e,t){let n;e instanceof nt?(Pi(e),n=e):n=new Vs(e);let i,o=We(n),a=Re(void 0);try{return t()}finally{We(o),Re(a)}}function _u(){return Eu()!==void 0||la()!=null}var _e=0,M=1,A=2,ee=3,Te=4,Ee=5,Gt=6,Kt=7,q=8,mn=9,qe=10,Y=11,zt=12,fl=13,at=14,ke=15,Pn=16,rt=17,$e=18,hn=19,gl=20,cn=21,Ca=22,xn=23,ye=24,Aa=25,st=26,se=27,Gu=1,Rl=6,In=7,Vi=8,lt=9,U=10;function pn(e){return Array.isArray(e)&&typeof e[Gu]=="object"}function Ge(e){return Array.isArray(e)&&e[Gu]===!0}function kl(e){return(e.flags&4)!==0}function ct(e){return e.componentOffset>-1}function xa(e){return(e.flags&1)===1}function dt(e){return!!e.template}function Vt(e){return(e[A]&512)!==0}function ut(e){return(e[A]&256)===256}var Ku="svg",zu="math";function Pe(e){for(;Array.isArray(e);)e=e[_e];return e}function yl(e,t){return Pe(t[e])}function Ke(e,t){return Pe(t[e.index])}function ji(e,t){return e.data[t]}function Ye(e,t){let n=t[e];return pn(n)?n:n[_e]}function Vu(e){return(e[A]&4)===4}function ba(e){return(e[A]&128)===128}function ju(e){return Ge(e[ee])}function Ze(e,t){return t==null?null:e[t]}function Dl(e){e[rt]=0}function vl(e){e[A]&1024||(e[A]|=1024,ba(e)&&jt(e))}function Ju(e,t){for(;e>0;)t=t[at],e--;return t}function Ji(e){return!!(e[A]&9216||e[ye]?.dirty)}function wa(e){e[qe].changeDetectionScheduler?.notify(8),e[A]&64&&(e[A]|=1024),Ji(e)&&jt(e)}function jt(e){e[qe].changeDetectionScheduler?.notify(0);let t=bn(e);for(;t!==null&&!(t[A]&8192||(t[A]|=8192,!ba(t)));)t=bn(t)}function Ml(e,t){if(ut(e))throw new k(911,!1);e[cn]===null&&(e[cn]=[]),e[cn].push(t)}function Uu(e,t){if(e[cn]===null)return;let n=e[cn].indexOf(t);n!==-1&&e[cn].splice(n,1)}function bn(e){let t=e[ee];return Ge(t)?t[ee]:t}function Sl(e){return e[Kt]??=[]}function Cl(e){return e.cleanup??=[]}function Wu(e,t,n,i){let o=Sl(t);o.push(n),e.firstCreatePass&&Cl(e).push(i,o.length-1)}var w={lFrame:sm(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Ws=!1;function qu(){return w.lFrame.elementDepthCount}function $u(){w.lFrame.elementDepthCount++}function Al(){w.lFrame.elementDepthCount--}function Yu(){return w.bindingsEnabled}function Zu(){return w.skipHydrationRootTNode!==null}function xl(e){return w.skipHydrationRootTNode===e}function bl(){w.skipHydrationRootTNode=null}function O(){return w.lFrame.lView}function De(){return w.lFrame.tView}function Ie(e){return w.lFrame.contextLView=e,e[q]}function Ne(e){return w.lFrame.contextLView=null,e}function Le(){let e=wl();for(;e!==null&&e.type===64;)e=e.parent;return e}function wl(){return w.lFrame.currentTNode}function Qu(){let e=w.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function Jt(e,t){let n=w.lFrame;n.currentTNode=e,n.isParent=t}function Tl(){return w.lFrame.isParent}function Xu(){w.lFrame.isParent=!1}function El(){return Ws}function Li(e){let t=Ws;return Ws=e,t}function em(e){return w.lFrame.bindingIndex=e}function Ut(){return w.lFrame.bindingIndex++}function nm(e){let t=w.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function tm(){return w.lFrame.inI18n}function im(e,t){let n=w.lFrame;n.bindingIndex=n.bindingRootIndex=e,Ta(t)}function om(){return w.lFrame.currentDirectiveIndex}function Ta(e){w.lFrame.currentDirectiveIndex=e}function am(e){let t=w.lFrame.currentDirectiveIndex;return t===-1?null:e[t]}function Pl(){return w.lFrame.currentQueryIndex}function Ea(e){w.lFrame.currentQueryIndex=e}function uR(e){let t=e[M];return t.type===2?t.declTNode:t.type===1?e[Ee]:null}function Il(e,t,n){if(n&4){let o=t,a=e;for(;o=o.parent,o===null&&!(n&1);)if(o=uR(a),o===null||(a=a[at],o.type&10))break;if(o===null)return!1;t=o,e=a}let i=w.lFrame=rm();return i.currentTNode=t,i.lView=e,!0}function Pa(e){let t=rm(),n=e[M];w.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function rm(){let e=w.lFrame,t=e===null?null:e.child;return t===null?sm(e):t}function sm(e){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=t),t}function lm(){let e=w.lFrame;return w.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Nl=lm;function Ia(){let e=lm();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function cm(e){return(w.lFrame.contextLView=Ju(e,w.lFrame.contextLView))[q]}function Nn(){return w.lFrame.selectedIndex}function Ln(e){w.lFrame.selectedIndex=e}function Ll(){let e=w.lFrame;return ji(e.tView,e.selectedIndex)}function dm(){return w.lFrame.currentNamespace}var um=!0;function Na(){return um}function La(e){um=e}function qs(e,t=null,n=null,i){let o=Ol(e,t,n,i);return o.resolveInjectorInitializers(),o}function Ol(e,t=null,n=null,i,o=new Set){let a=[n||be,Ou(e)];return i=i||(typeof e=="object"?void 0:dn(e)),new nt(a,t||zi(),i||null,o)}var we=class e{static THROW_IF_NOT_FOUND=Qn;static NULL=new Ni;static create(t,n){if(Array.isArray(t))return qs({name:""},n,t,"");{let i=t.name??"";return qs({name:i},t.parent,t.providers,i)}}static \u0275prov=R({token:e,providedIn:"any",factory:()=>x(ul)});static __NG_ELEMENT_ID__=-1},ie=new v(""),Qe=(()=>{class e{static __NG_ELEMENT_ID__=mR;static __NG_ENV_ID__=n=>n}return e})(),ha=class extends Qe{_lView;constructor(t){super(),this._lView=t}get destroyed(){return ut(this._lView)}onDestroy(t){let n=this._lView;return Ml(n,t),()=>Uu(n,t)}};function mR(){return new ha(O())}var Fl=!1,mm=new v(""),fn=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Q(!1);debugTaskTracker=p(mm,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new N(n=>{n.next(!1),n.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),this.debugTaskTracker?.add(n),n}has(n){return this.pendingTasks.has(n)}remove(n){this.pendingTasks.delete(n),this.debugTaskTracker?.remove(n),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=R({token:e,providedIn:"root",factory:()=>new e})}return e})(),$s=class extends ae{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,_u()&&(this.destroyRef=p(Qe,{optional:!0})??void 0,this.pendingTasks=p(fn,{optional:!0})??void 0)}emit(t){let n=y(null);try{super.next(t)}finally{y(n)}}subscribe(t,n,i){let o=t,a=n||(()=>null),r=i;if(t&&typeof t=="object"){let l=t;o=l.next?.bind(l),a=l.error?.bind(l),r=l.complete?.bind(l)}this.__isAsync&&(a=this.wrapInTimeout(a),o&&(o=this.wrapInTimeout(o)),r&&(r=this.wrapInTimeout(r)));let s=super.subscribe({next:o,error:a,complete:r});return t instanceof Z&&t.add(s),s}wrapInTimeout(t){return n=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{t(n)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},he=$s;function pa(...e){}function Hl(e){let t,n;function i(){e=pa;try{n!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(n),t!==void 0&&clearTimeout(t)}catch(o){}}return t=setTimeout(()=>{e(),i()}),typeof requestAnimationFrame=="function"&&(n=requestAnimationFrame(()=>{e(),i()})),()=>i()}function hm(e){return queueMicrotask(()=>e()),()=>{e=pa}}var Bl="isAngularZone",Oi=Bl+"_ID",hR=0,$=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new he(!1);onMicrotaskEmpty=new he(!1);onStable=new he(!1);onError=new he(!1);constructor(t){let{enableLongStackTrace:n=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:a=Fl}=t;if(typeof Zone>"u")throw new k(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!o&&i,r.shouldCoalesceRunChangeDetection=o,r.callbackScheduled=!1,r.scheduleInRootZone=a,gR(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Bl)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new k(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new k(909,!1)}run(t,n,i){return this._inner.run(t,n,i)}runTask(t,n,i,o){let a=this._inner,r=a.scheduleEventTask("NgZoneEvent: "+o,t,pR,pa,pa);try{return a.runTask(r,n,i)}finally{a.cancelTask(r)}}runGuarded(t,n,i){return this._inner.runGuarded(t,n,i)}runOutsideAngular(t){return this._outer.run(t)}},pR={};function _l(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function fR(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function t(){Hl(()=>{e.callbackScheduled=!1,Ys(e),e.isCheckStableRunning=!0,_l(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{t()}):e._outer.run(()=>{t()}),Ys(e)}function gR(e){let t=()=>{fR(e)},n=hR++;e._inner=e._inner.fork({name:"angular",properties:{[Bl]:!0,[Oi]:n,[Oi+n]:!0},onInvokeTask:(i,o,a,r,s,l)=>{if(RR(l))return i.invokeTask(a,r,s,l);try{return Au(e),i.invokeTask(a,r,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&r.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&t(),xu(e)}},onInvoke:(i,o,a,r,s,l,c)=>{try{return Au(e),i.invoke(a,r,s,l,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!kR(l)&&t(),xu(e)}},onHasTask:(i,o,a,r)=>{i.hasTask(a,r),o===a&&(r.change=="microTask"?(e._hasPendingMicrotasks=r.microTask,Ys(e),_l(e)):r.change=="macroTask"&&(e.hasPendingMacrotasks=r.macroTask))},onHandleError:(i,o,a,r)=>(i.handleError(a,r),e.runOutsideAngular(()=>e.onError.emit(r)),!1)})}function Ys(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Au(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function xu(e){e._nesting--,_l(e)}var Fi=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new he;onMicrotaskEmpty=new he;onStable=new he;onError=new he;run(t,n,i){return t.apply(n,i)}runGuarded(t,n,i){return t.apply(n,i)}runOutsideAngular(t){return t()}runTask(t,n,i,o){return t.apply(n,i)}};function RR(e){return pm(e,"__ignore_ng_zone__")}function kR(e){return pm(e,"__scheduler_tick__")}function pm(e,t){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[t]===!0}var un=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Xe=new v("",{factory:()=>{let e=p($),t=p(X),n;return i=>{e.runOutsideAngular(()=>{t.destroyed&&!n?setTimeout(()=>{throw i}):(n??=t.get(un),n.handleError(i))})}}}),fm={provide:En,useValue:()=>{let e=p(un,{optional:!0})},multi:!0};function ve(e,t){let[n,i,o]=Ss(e,t?.equal),a=n,r=a[pe];return a.set=i,a.update=o,a.asReadonly=gm.bind(a),a}function gm(){let e=this[pe];if(e.readonlyFn===void 0){let t=()=>this();t[pe]=e,e.readonlyFn=t}return e.readonlyFn}var Oa=(()=>{class e{view;node;constructor(n,i){this.view=n,this.node=i}static __NG_ELEMENT_ID__=yR}return e})();function yR(){return new Oa(O(),Le())}var wn=class{},Wt=new v("",{factory:()=>!0});var Fa=new v("");var Ha=(()=>{class e{static \u0275prov=R({token:e,providedIn:"root",factory:()=>new Zs})}return e})(),Zs=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let n=t.zone,i=this.queues.get(n);i.has(t)&&(i.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let n=t.zone;this.queues.has(n)||this.queues.set(n,new Set);let i=this.queues.get(n);i.has(t)||i.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[n,i]of this.queues)n===null?t||=this.flushQueue(i):t||=n.run(()=>this.flushQueue(i));t||(this.dirtyEffectCount=0)}}flushQueue(t){let n=!1;for(let i of t)i.dirty&&(this.dirtyEffectCount--,n=!0,i.run());return n}},fa=class{[pe];constructor(t){this[pe]=t}destroy(){this[pe].destroy()}};function qt(e,t){let n=t?.injector??p(we),i=t?.manualCleanup!==!0?n.get(Qe):null,o,a=n.get(Oa,null,{optional:!0}),r=n.get(wn);return a!==null?(o=MR(a.view,r,e),i instanceof ha&&i._lView===a.view&&(i=null)):o=SR(e,n.get(Ha),r),o.injector=n,i!==null&&(o.onDestroyFns=[i.onDestroy(()=>o.destroy())]),new fa(o)}var Rm=b(f({},As),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let e=Li(!1);try{xs(this)}finally{Li(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=y(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],y(e)}}}),DR=b(f({},Rm),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Un(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}}),vR=b(f({},Rm),{consumerMarkedDirty(){this.view[A]|=8192,jt(this.view),this.notifier.notify(13)},destroy(){if(Un(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.view[xn]?.delete(this)}});function MR(e,t,n){let i=Object.create(vR);return i.view=e,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=t,i.fn=km(i,n),e[xn]??=new Set,e[xn].add(i),i.consumerMarkedDirty(i),i}function SR(e,t,n){let i=Object.create(DR);return i.fn=km(i,e),i.scheduler=t,i.notifier=n,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function km(e,t){return()=>{t(n=>(e.cleanupFns??=[]).push(n))}}function en(e){return Cs(e)}function eo(e){return{toString:e}.toString()}function IR(e){return typeof e=="function"}function Zm(e,t,n,i){t!==null?t.applyValueToInputSignal(t,i):e[n]=i}var Ua=class{previousValue;currentValue;firstChange;constructor(t,n,i){this.previousValue=t,this.currentValue=n,this.firstChange=i}isFirstChange(){return this.firstChange}},cr=(()=>{let e=()=>Qm;return e.ngInherit=!0,e})();function Qm(e){return e.type.prototype.ngOnChanges&&(e.setInput=LR),NR}function NR(){let e=eh(this),t=e?.current;if(t){let n=e.previous;if(n===ot)e.previous=t;else for(let i in t)n[i]=t[i];e.current=null,this.ngOnChanges(t)}}function LR(e,t,n,i,o){let a=this.declaredInputs[i],r=eh(e)||OR(e,{previous:ot,current:null}),s=r.current||(r.current={}),l=r.previous,c=l[a];s[a]=new Ua(c&&c.currentValue,n,l===ot),Zm(e,t,o,n)}var Xm="__ngSimpleChanges__";function eh(e){return e[Xm]||null}function OR(e,t){return e[Xm]=t}var ym=[];var K=function(e,t=null,n){for(let i=0;i<ym.length;i++){let o=ym[i];o(e,t,n)}},F=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(F||{});function FR(e,t,n){let{ngOnChanges:i,ngOnInit:o,ngDoCheck:a}=t.type.prototype;if(i){let r=Qm(t);(n.preOrderHooks??=[]).push(e,r),(n.preOrderCheckHooks??=[]).push(e,r)}o&&(n.preOrderHooks??=[]).push(0-e,o),a&&((n.preOrderHooks??=[]).push(e,a),(n.preOrderCheckHooks??=[]).push(e,a))}function HR(e,t){for(let n=t.directiveStart,i=t.directiveEnd;n<i;n++){let a=e.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=a;r&&(e.contentHooks??=[]).push(-n,r),s&&((e.contentHooks??=[]).push(n,s),(e.contentCheckHooks??=[]).push(n,s)),l&&(e.viewHooks??=[]).push(-n,l),c&&((e.viewHooks??=[]).push(n,c),(e.viewCheckHooks??=[]).push(n,c)),d!=null&&(e.destroyHooks??=[]).push(n,d)}}function za(e,t,n){nh(e,t,3,n)}function Va(e,t,n,i){(e[A]&3)===n&&nh(e,t,n,i)}function Gl(e,t){let n=e[A];(n&3)===t&&(n&=16383,n+=1,e[A]=n)}function nh(e,t,n,i){let o=i!==void 0?e[rt]&65535:0,a=i??-1,r=t.length-1,s=0;for(let l=o;l<r;l++)if(typeof t[l+1]=="number"){if(s=t[l],i!=null&&s>=i)break}else t[l]<0&&(e[rt]+=65536),(s<a||a==-1)&&(BR(e,n,t,l),e[rt]=(e[rt]&4294901760)+l+2),l++}function Dm(e,t){K(F.LifecycleHookStart,e,t);let n=y(null);try{t.call(e)}finally{y(n),K(F.LifecycleHookEnd,e,t)}}function BR(e,t,n,i){let o=n[i]<0,a=n[i+1],r=o?-n[i]:n[i],s=e[r];o?e[A]>>14<e[rt]>>16&&(e[A]&3)===t&&(e[A]+=16384,Dm(s,a)):Dm(s,a)}var Yt=-1,qi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,n,i,o){this.factory=t,this.name=o,this.canSeeViewProviders=n,this.injectImpl=i}};function _R(e){return(e.flags&8)!==0}function GR(e){return(e.flags&16)!==0}function KR(e,t,n){let i=0;for(;i<n.length;){let o=n[i];if(typeof o=="number"){if(o!==0)break;i++;let a=n[i++],r=n[i++],s=n[i++];e.setAttribute(t,r,s,a)}else{let a=o,r=n[++i];VR(a)?e.setProperty(t,a,r):e.setAttribute(t,a,r),i++}}return i}function zR(e){return e===3||e===4||e===6}function VR(e){return e.charCodeAt(0)===64}function dr(e,t){if(!(t===null||t.length===0))if(e===null||e.length===0)e=t.slice();else{let n=-1;for(let i=0;i<t.length;i++){let o=t[i];typeof o=="number"?n=o:n===0||(n===-1||n===2?vm(e,n,o,null,t[++i]):vm(e,n,o,null,null))}}return e}function vm(e,t,n,i,o){let a=0,r=e.length;if(t===-1)r=-1;else for(;a<e.length;){let s=e[a++];if(typeof s=="number"){if(s===t){r=-1;break}else if(s>t){r=a-1;break}}}for(;a<e.length;){let s=e[a];if(typeof s=="number")break;if(s===n){o!==null&&(e[a+1]=o);return}a++,o!==null&&a++}r!==-1&&(e.splice(r,0,t),a=r+1),e.splice(a++,0,n),o!==null&&e.splice(a++,0,o)}function th(e){return e!==Yt}function Wa(e){return e&32767}function jR(e){return e>>16}function qa(e,t){let n=jR(e),i=t;for(;n>0;)i=i[at],n--;return i}var Wl=!0;function Mm(e){let t=Wl;return Wl=e,t}var JR=256,ih=JR-1,oh=5,UR=0,nn={};function WR(e,t,n){let i;typeof n=="string"?i=n.charCodeAt(0)||0:n.hasOwnProperty(it)&&(i=n[it]),i==null&&(i=n[it]=UR++);let o=i&ih,a=1<<o;t.data[e+(o>>oh)]|=a}function ah(e,t){let n=rh(e,t);if(n!==-1)return n;let i=t[M];i.firstCreatePass&&(e.injectorIndex=t.length,Kl(i.data,e),Kl(t,null),Kl(i.blueprint,null));let o=Mc(e,t),a=e.injectorIndex;if(th(o)){let r=Wa(o),s=qa(o,t),l=s[M].data;for(let c=0;c<8;c++)t[a+c]=s[r+c]|l[r+c]}return t[a+8]=o,a}function Kl(e,t){e.push(0,0,0,0,0,0,0,0,t)}function rh(e,t){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||t[e.injectorIndex+8]===null?-1:e.injectorIndex}function Mc(e,t){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let n=0,i=null,o=t;for(;o!==null;){if(i=uh(o),i===null)return Yt;if(n++,o=o[at],i.injectorIndex!==-1)return i.injectorIndex|n<<16}return Yt}function qR(e,t,n){WR(e,t,n)}function sh(e,t,n){if(n&8||e!==void 0)return e;va(t,"NodeInjector")}function lh(e,t,n,i){if(n&8&&i===void 0&&(i=null),(n&3)===0){let o=e[mn],a=Re(void 0);try{return o?o.get(t,i,n&8):cl(t,i,n&8)}finally{Re(a)}}return sh(i,t,n)}function ch(e,t,n,i=0,o){if(e!==null){if(t[A]&2048&&!(i&2)){let r=QR(e,t,n,i,nn);if(r!==nn)return r}let a=dh(e,t,n,i,nn);if(a!==nn)return a}return lh(t,n,i,o)}function dh(e,t,n,i,o){let a=YR(n);if(typeof a=="function"){if(!Il(t,e,i))return i&1?sh(o,n,i):lh(t,n,i,o);try{let r;if(r=a(i),r==null&&!(i&8))va(n);else return r}finally{Nl()}}else if(typeof a=="number"){let r=null,s=rh(e,t),l=Yt,c=i&1?t[ke][Ee]:null;for((s===-1||i&4)&&(l=s===-1?Mc(e,t):t[s+8],l===Yt||!Cm(i,!1)?s=-1:(r=t[M],s=Wa(l),t=qa(l,t)));s!==-1;){let d=t[M];if(Sm(a,s,d.data)){let u=$R(s,t,n,r,i,c);if(u!==nn)return u}l=t[s+8],l!==Yt&&Cm(i,t[M].data[s+8]===c)&&Sm(a,s,t)?(r=d,s=Wa(l),t=qa(l,t)):s=-1}}return o}function $R(e,t,n,i,o,a){let r=t[M],s=r.data[e+8],l=i==null?ct(s)&&Wl:i!=r&&(s.type&3)!==0,c=o&1&&a===s,d=ja(s,r,n,l,c);return d!==null?$a(t,r,d,s,o):nn}function ja(e,t,n,i,o){let a=e.providerIndexes,r=t.data,s=a&1048575,l=e.directiveStart,c=e.directiveEnd,d=a>>20,u=i?s:s+d,h=o?s+d:c;for(let m=u;m<h;m++){let g=r[m];if(m<l&&n===g||m>=l&&g.type===n)return m}if(o){let m=r[l];if(m&&dt(m)&&m.type===n)return l}return null}function $a(e,t,n,i,o){let a=e[n],r=t.data;if(a instanceof qi){let s=a;if(s.resolving)throw ll("");let l=Mm(s.canSeeViewProviders);s.resolving=!0;let c=r[n].type||r[n],d,u=s.injectImpl?Re(s.injectImpl):null,h=Il(e,i,0);try{a=e[n]=s.factory(void 0,o,r,e,i),t.firstCreatePass&&n>=i.directiveStart&&FR(n,r[n],t)}finally{u!==null&&Re(u),Mm(l),s.resolving=!1,Nl()}}return a}function YR(e){if(typeof e=="string")return e.charCodeAt(0)||0;let t=e.hasOwnProperty(it)?e[it]:void 0;return typeof t=="number"?t>=0?t&ih:ZR:t}function Sm(e,t,n){let i=1<<e;return!!(n[t+(e>>oh)]&i)}function Cm(e,t){return!(e&2)&&!(e&1&&t)}var mt=class{_tNode;_lView;constructor(t,n){this._tNode=t,this._lView=n}get(t,n,i){return ch(this._tNode,this._lView,t,Xn(i),n)}};function ZR(){return new mt(Le(),O())}function ur(e){return eo(()=>{let t=e.prototype.constructor,n=t[Ii]||ql(t),i=Object.prototype,o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==i;){let a=o[Ii]||ql(o);if(a&&a!==n)return a;o=Object.getPrototypeOf(o)}return a=>new a})}function ql(e){return Xs(e)?()=>{let t=ql(ge(e));return t&&t()}:et(e)}function QR(e,t,n,i,o){let a=e,r=t;for(;a!==null&&r!==null&&r[A]&2048&&!Vt(r);){let s=dh(a,r,n,i|2,nn);if(s!==nn)return s;let l=a.parent;if(!l){let c=r[gl];if(c){let d=c.get(n,nn,i);if(d!==nn)return d}l=uh(r),r=r[at]}a=l}return o}function uh(e){let t=e[M],n=t.type;return n===2?t.declTNode:n===1?e[Ee]:null}function XR(){return ti(Le(),O())}function ti(e,t){return new ii(Ke(e,t))}var ii=(()=>{class e{nativeElement;constructor(n){this.nativeElement=n}static __NG_ELEMENT_ID__=XR}return e})();function ek(e){return e instanceof ii?e.nativeElement:e}function nk(){return this._results[Symbol.iterator]()}var Ya=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new ae}constructor(t=!1){this._emitDistinctChangesOnly=t}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){this.dirty=!1;let i=Iu(t);(this._changesDetected=!Pu(this._results,i,n))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(t){this._onDirty=t}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=nk};function mh(e){return(e.flags&128)===128}var Sc=(function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e})(Sc||{}),hh=new Map,tk=0;function ik(){return tk++}function ok(e){hh.set(e[hn],e)}function $l(e){hh.delete(e[hn])}var Am="__ngContext__";function Zt(e,t){pn(t)?(e[Am]=t[hn],ok(t)):e[Am]=t}function ph(e){return gh(e[zt])}function fh(e){return gh(e[Te])}function gh(e){for(;e!==null&&!Ge(e);)e=e[Te];return e}var Yl;function Cc(e){Yl=e}function Rh(){if(Yl!==void 0)return Yl;if(typeof document<"u")return document;throw new k(210,!1)}var mr=new v("",{factory:()=>ak}),ak="ng";var hr=new v(""),no=new v("",{providedIn:"platform",factory:()=>"unknown"});var pr=new v("",{factory:()=>p(ie).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var kh="r";var yh="di";var Dh=!1,vh=new v("",{factory:()=>Dh});var rk=(e,t,n,i)=>{};function sk(e,t,n,i){rk(e,t,n,i)}function Ac(e){return(e.flags&32)===32}var lk=()=>null;function Mh(e,t,n=!1){return lk(e,t,n)}function Sh(e,t){let n=e.contentQueries;if(n!==null){let i=y(null);try{for(let o=0;o<n.length;o+=2){let a=n[o],r=n[o+1];if(r!==-1){let s=e.data[r];Ea(a),s.contentQueries(2,t[r],r)}}}finally{y(i)}}}function Zl(e,t,n){Ea(0);let i=y(null);try{t(e,n)}finally{y(i)}}function Ch(e,t,n){if(kl(t)){let i=y(null);try{let o=t.directiveStart,a=t.directiveEnd;for(let r=o;r<a;r++){let s=e.data[r];if(s.contentQueries){let l=n[r];s.contentQueries(1,l,r)}}}finally{y(i)}}}var Ve=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(Ve||{});var Ba;function ck(){if(Ba===void 0&&(Ba=null,tt.trustedTypes))try{Ba=tt.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch(e){}return Ba}function fr(e){return ck()?.createHTML(e)||e}var _a;function dk(){if(_a===void 0&&(_a=null,tt.trustedTypes))try{_a=tt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch(e){}return _a}function xm(e){return dk()?.createHTML(e)||e}var Za=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ga})`}};function xc(e){return e instanceof Za?e.changingThisBreaksApplicationSecurity:e}function Ah(e,t){let n=xh(e);if(n!=null&&n!==t){if(n==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${ga})`)}return n===t}function xh(e){return e instanceof Za&&e.getTypeName()||null}function uk(e){let t=new Xl(e);return mk()?new Ql(t):t}var Ql=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let n=new window.DOMParser().parseFromString(fr(t),"text/html").body;return n===null?this.inertDocumentHelper.getInertBodyElement(t):(n.firstChild?.remove(),n)}catch(n){return null}}},Xl=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let n=this.inertDocument.createElement("template");return n.innerHTML=fr(t),n}};function mk(){try{return!!new window.DOMParser().parseFromString(fr(""),"text/html")}catch(e){return!1}}var hk=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function bh(e){return e=String(e),e.match(hk)?e:"unsafe:"+e}function Rn(e){let t={};for(let n of e.split(","))t[n]=!0;return t}function to(...e){let t={};for(let n of e)for(let i in n)n.hasOwnProperty(i)&&(t[i]=!0);return t}var wh=Rn("area,br,col,hr,img,wbr"),Th=Rn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Eh=Rn("rp,rt"),pk=to(Eh,Th),fk=to(Th,Rn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),gk=to(Eh,Rn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),bm=to(wh,fk,gk,pk),Ph=Rn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Rk=Rn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),kk=Rn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),yk=to(Ph,Rk,kk),Dk=Rn("script,style,template"),ec=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let n=t.firstChild,i=!0,o=[];for(;n;){if(n.nodeType===Node.ELEMENT_NODE?i=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,i&&n.firstChild){o.push(n),n=Sk(n);continue}for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let a=Mk(n);if(a){n=a;break}n=o.pop()}}return this.buf.join("")}startElement(t){let n=wm(t).toLowerCase();if(!bm.hasOwnProperty(n))return this.sanitizedSomething=!0,!Dk.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);let i=t.attributes;for(let o=0;o<i.length;o++){let a=i.item(o),r=a.name,s=r.toLowerCase();if(!yk.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=a.value;Ph[s]&&(l=bh(l)),this.buf.push(" ",r,'="',Tm(l),'"')}return this.buf.push(">"),!0}endElement(t){let n=wm(t).toLowerCase();bm.hasOwnProperty(n)&&!wh.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(Tm(t))}};function vk(e,t){return(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function Mk(e){let t=e.nextSibling;if(t&&e!==t.previousSibling)throw Ih(t);return t}function Sk(e){let t=e.firstChild;if(t&&vk(e,t))throw Ih(t);return t}function wm(e){let t=e.nodeName;return typeof t=="string"?t:"FORM"}function Ih(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var Ck=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Ak=/([^\#-~ |!])/g;function Tm(e){return e.replace(/&/g,"&amp;").replace(Ck,function(t){let n=t.charCodeAt(0),i=t.charCodeAt(1);return"&#"+((n-55296)*1024+(i-56320)+65536)+";"}).replace(Ak,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ga;function Nh(e,t){let n=null;try{Ga=Ga||uk(e);let i=t?String(t):"";n=Ga.getInertBodyElement(i);let o=5,a=i;do{if(o===0)throw new Error("Failed to sanitize html because the input is unstable");o--,i=a,a=n.innerHTML,n=Ga.getInertBodyElement(i)}while(i!==a);let s=new ec().sanitizeChildren(Em(n)||n);return fr(s)}finally{if(n){let i=Em(n)||n;for(;i.firstChild;)i.firstChild.remove()}}}function Em(e){return"content"in e&&xk(e)?e.content:null}function xk(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function bk(e,t){return e.createText(t)}function wk(e,t,n){e.setValue(t,n)}function Lh(e,t,n){return e.createElement(t,n)}function Qa(e,t,n,i,o){e.insertBefore(t,n,i,o)}function Oh(e,t,n){e.appendChild(t,n)}function Pm(e,t,n,i,o){i!==null?Qa(e,t,n,i,o):Oh(e,t,n)}function Fh(e,t,n,i){e.removeChild(null,t,n,i)}function Tk(e,t,n){e.setAttribute(t,"style",n)}function Ek(e,t,n){n===""?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function Hh(e,t,n){let{mergedAttrs:i,classes:o,styles:a}=n;i!==null&&KR(e,t,i),o!==null&&Ek(e,t,o),a!==null&&Tk(e,t,a)}var bc=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e})(bc||{});function wc(e){let t=Pk();return t?xm(t.sanitize(bc.HTML,e)||""):Ah(e,"HTML")?xm(xc(e)):Nh(Rh(),Da(e))}function Pk(){let e=O();return e&&e[qe].sanitizer}function Bh(e){return e instanceof Function?e():e}function Ik(e,t,n){let i=e.length;for(;;){let o=e.indexOf(t,n);if(o===-1)return o;if(o===0||e.charCodeAt(o-1)<=32){let a=t.length;if(o+a===i||e.charCodeAt(o+a)<=32)return o}n=o+1}}var _h="ng-template";function Nk(e,t,n,i){let o=0;if(i){for(;o<t.length&&typeof t[o]=="string";o+=2)if(t[o]==="class"&&Ik(t[o+1].toLowerCase(),n,0)!==-1)return!0}else if(Tc(e))return!1;if(o=t.indexOf(1,o),o>-1){let a;for(;++o<t.length&&typeof(a=t[o])=="string";)if(a.toLowerCase()===n)return!0}return!1}function Tc(e){return e.type===4&&e.value!==_h}function Lk(e,t,n){let i=e.type===4&&!n?_h:e.value;return t===i}function Ok(e,t,n){let i=4,o=e.attrs,a=o!==null?Bk(o):0,r=!1;for(let s=0;s<t.length;s++){let l=t[s];if(typeof l=="number"){if(!r&&!ze(i)&&!ze(l))return!1;if(r&&ze(l))continue;r=!1,i=l|i&1;continue}if(!r)if(i&4){if(i=2|i&1,l!==""&&!Lk(e,l,n)||l===""&&t.length===1){if(ze(i))return!1;r=!0}}else if(i&8){if(o===null||!Nk(e,o,l,n)){if(ze(i))return!1;r=!0}}else{let c=t[++s],d=Fk(l,o,Tc(e),n);if(d===-1){if(ze(i))return!1;r=!0;continue}if(c!==""){let u;if(d>a?u="":u=o[d+1].toLowerCase(),i&2&&c!==u){if(ze(i))return!1;r=!0}}}}return ze(i)||r}function ze(e){return(e&1)===0}function Fk(e,t,n,i){if(t===null)return-1;let o=0;if(i||!n){let a=!1;for(;o<t.length;){let r=t[o];if(r===e)return o;if(r===3||r===6)a=!0;else if(r===1||r===2){let s=t[++o];for(;typeof s=="string";)s=t[++o];continue}else{if(r===4)break;if(r===0){o+=4;continue}}o+=a?1:2}return-1}else return _k(t,e)}function Hk(e,t,n=!1){for(let i=0;i<t.length;i++)if(Ok(e,t[i],n))return!0;return!1}function Bk(e){for(let t=0;t<e.length;t++){let n=e[t];if(zR(n))return t}return e.length}function _k(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){let i=e[n];if(typeof i=="number")return-1;if(i===t)return n;n++}return-1}function Im(e,t){return e?":not("+t.trim()+")":t}function Gk(e){let t=e[0],n=1,i=2,o="",a=!1;for(;n<e.length;){let r=e[n];if(typeof r=="string")if(i&2){let s=e[++n];o+="["+r+(s.length>0?'="'+s+'"':"")+"]"}else i&8?o+="."+r:i&4&&(o+=" "+r);else o!==""&&!ze(r)&&(t+=Im(a,o),o=""),i=r,a=a||!ze(i);n++}return o!==""&&(t+=Im(a,o)),t}function Kk(e){return e.map(Gk).join(",")}function zk(e){let t=[],n=[],i=1,o=2;for(;i<e.length;){let a=e[i];if(typeof a=="string")o===2?a!==""&&t.push(a,e[++i]):o===8&&n.push(a);else{if(!ze(o))break;o=a}i++}return n.length&&t.push(1,...n),t}var kn={};function Ec(e,t,n,i,o,a,r,s,l,c,d){let u=se+i,h=u+o,m=Vk(u,h),g=typeof c=="function"?c():c;return m[M]={type:e,blueprint:m,template:n,queries:null,viewQuery:s,declTNode:t,data:m.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof a=="function"?a():a,pipeRegistry:typeof r=="function"?r():r,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:d}}function Vk(e,t){let n=[];for(let i=0;i<t;i++)n.push(i<e?null:kn);return n}function jk(e){let t=e.tView;return t===null||t.incompleteFirstPass?e.tView=Ec(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):t}function Pc(e,t,n,i,o,a,r,s,l,c,d){let u=t.blueprint.slice();return u[_e]=o,u[A]=i|4|128|8|64|1024,(c!==null||e&&e[A]&2048)&&(u[A]|=2048),Dl(u),u[ee]=u[at]=e,u[q]=n,u[qe]=r||e&&e[qe],u[Y]=s||e&&e[Y],u[mn]=l||e&&e[mn]||null,u[Ee]=a,u[hn]=ik(),u[Gt]=d,u[gl]=c,u[ke]=t.type==2?e[ke]:u,u}function Jk(e,t,n){let i=Ke(t,e),o=jk(n),a=e[qe].rendererFactory,r=Ic(e,Pc(e,o,null,Gh(n),i,t,null,a.createRenderer(i,n),null,null,null));return e[t.index]=r}function Gh(e){let t=16;return e.signals?t=4096:e.onPush&&(t=64),t}function Kh(e,t,n,i){if(n===0)return-1;let o=t.length;for(let a=0;a<n;a++)t.push(i),e.blueprint.push(i),e.data.push(null);return o}function Ic(e,t){return e[zt]?e[fl][Te]=t:e[zt]=t,e[fl]=t,t}function z(e=1){zh(De(),O(),Nn()+e,!1)}function zh(e,t,n,i){if(!i)if((t[A]&3)===3){let a=e.preOrderCheckHooks;a!==null&&za(t,a,n)}else{let a=e.preOrderHooks;a!==null&&Va(t,a,0,n)}Ln(n)}var gr=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(gr||{});function nc(e,t,n,i){let o=y(null);try{let[a,r,s]=e.inputs[n],l=null;(r&gr.SignalBased)!==0&&(l=t[a][pe]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(t,i)),e.setInput!==null?e.setInput(t,l,i,n,a):Zm(t,l,a,i)}finally{y(o)}}var gn=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(gn||{}),Uk;function Nc(e,t){return Uk(e,t)}var ht=new Set,Lc=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(Lc||{}),io=new v(""),Nm=new Set;function Fn(e){Nm.has(e)||(Nm.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var Vh=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=R({token:e,providedIn:"root",factory:()=>new e})}return e})();var Oc=new v("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:p(X)})});function jh(e,t,n){let i=e.get(Oc);if(Array.isArray(t))for(let o of t)i.queue.add(o),n?.detachedLeaveAnimationFns?.push(o);else i.queue.add(t),n?.detachedLeaveAnimationFns?.push(t);i.scheduler&&i.scheduler(e)}function Wk(e,t){let n=e.get(Oc);if(t.detachedLeaveAnimationFns){for(let i of t.detachedLeaveAnimationFns)n.queue.delete(i);t.detachedLeaveAnimationFns=void 0}}function qk(e,t){for(let[n,i]of t)jh(e,i.animateFns)}function $k(e,t){let n=e.get(Oc);if(Array.isArray(t))for(let i of t)n.queue.delete(i);else n.queue.delete(t)}function Lm(e,t,n,i){let o=e?.[st]?.enter;t!==null&&o&&o.has(n.index)&&qk(i,o)}function $t(e,t,n,i,o,a,r,s){if(o!=null){let l,c=!1;Ge(o)?l=o:pn(o)&&(c=!0,o=o[_e]);let d=Pe(o);e===0&&i!==null?(Lm(s,i,a,n),r==null?Oh(t,i,d):Qa(t,i,d,r||null,!0)):e===1&&i!==null?(Lm(s,i,a,n),Qa(t,i,d,r||null,!0)):e===2?Om(s,a,n,u=>{Fh(t,d,c,u)}):e===3&&Om(s,a,n,()=>{t.destroyNode(d)}),l!=null&&ly(t,e,n,l,a,i,r)}}function Yk(e,t){Jh(e,t),t[_e]=null,t[Ee]=null}function Zk(e,t,n,i,o,a){i[_e]=o,i[Ee]=t,kr(e,i,n,1,o,a)}function Jh(e,t){t[qe].changeDetectionScheduler?.notify(9),kr(e,t,t[Y],2,null,null)}function Qk(e){let t=e[zt];if(!t)return zl(e[M],e);for(;t;){let n=null;if(pn(t))n=t[zt];else{let i=t[U];i&&(n=i)}if(!n){for(;t&&!t[Te]&&t!==e;)pn(t)&&zl(t[M],t),t=t[ee];t===null&&(t=e),pn(t)&&zl(t[M],t),n=t&&t[Te]}t=n}}function Fc(e,t){let n=e[lt],i=n.indexOf(t);n.splice(i,1)}function Rr(e,t){if(ut(t))return;let n=t[Y];n.destroyNode&&kr(e,t,n,3,null,null),Qk(t)}function zl(e,t){if(ut(t))return;let n=y(null);try{t[A]&=-129,t[A]|=256,t[ye]&&Un(t[ye]),ny(e,t),ey(e,t),t[M].type===1&&t[Y].destroy();let i=t[Pn];if(i!==null&&Ge(t[ee])){i!==t[ee]&&Fc(i,t);let o=t[$e];o!==null&&o.detachView(e)}$l(t)}finally{y(n)}}function Om(e,t,n,i){let o=e?.[st];if(o?.enter?.has(t.index)&&$k(n,o.enter.get(t.index).animateFns),o==null||o.leave==null||!o.leave.has(t.index))return i(!1);e&&ht.add(e[hn]),jh(n,()=>{if(o.leave&&o.leave.has(t.index)){let r=o.leave.get(t.index),s=[];if(r){for(let l=0;l<r.animateFns.length;l++){let c=r.animateFns[l],{promise:d}=c();s.push(d)}o.detachedLeaveAnimationFns=void 0}o.running=Promise.allSettled(s),Xk(e,i)}else e&&ht.delete(e[hn]),i(!1)},o)}function Xk(e,t){let n=e[st]?.running;if(n){n.then(()=>{e[st].running=void 0,ht.delete(e[hn]),t(!0)});return}t(!1)}function ey(e,t){let n=e.cleanup,i=t[Kt];if(n!==null)for(let r=0;r<n.length-1;r+=2)if(typeof n[r]=="string"){let s=n[r+3];s>=0?i[s]():i[-s].unsubscribe(),r+=2}else{let s=i[n[r+1]];n[r].call(s)}i!==null&&(t[Kt]=null);let o=t[cn];if(o!==null){t[cn]=null;for(let r=0;r<o.length;r++){let s=o[r];s()}}let a=t[xn];if(a!==null){t[xn]=null;for(let r of a)r.destroy()}}function ny(e,t){let n;if(e!=null&&(n=e.destroyHooks)!=null)for(let i=0;i<n.length;i+=2){let o=t[n[i]];if(!(o instanceof qi)){let a=n[i+1];if(Array.isArray(a))for(let r=0;r<a.length;r+=2){let s=o[a[r]],l=a[r+1];K(F.LifecycleHookStart,s,l);try{l.call(s)}finally{K(F.LifecycleHookEnd,s,l)}}else{K(F.LifecycleHookStart,o,a);try{a.call(o)}finally{K(F.LifecycleHookEnd,o,a)}}}}}function ty(e,t,n){return iy(e,t.parent,n)}function iy(e,t,n){let i=t;for(;i!==null&&i.type&168;)t=i,i=t.parent;if(i===null)return n[_e];if(ct(i)){let{encapsulation:o}=e.data[i.directiveStart+i.componentOffset];if(o===Ve.None||o===Ve.Emulated)return null}return Ke(i,n)}function oy(e,t,n){return ry(e,t,n)}function ay(e,t,n){return e.type&40?Ke(e,n):null}var ry=ay,Fm;function Hc(e,t,n,i){let o=ty(e,i,t),a=t[Y],r=i.parent||t[Ee],s=oy(r,i,t);if(o!=null)if(Array.isArray(n))for(let l=0;l<n.length;l++)Pm(a,o,n[l],s,!1);else Pm(a,o,n,s,!1);Fm!==void 0&&Fm(a,i,t,n,o)}function Ui(e,t){if(t!==null){let n=t.type;if(n&3)return Ke(t,e);if(n&4)return tc(-1,e[t.index]);if(n&8){let i=t.child;if(i!==null)return Ui(e,i);{let o=e[t.index];return Ge(o)?tc(-1,o):Pe(o)}}else{if(n&128)return Ui(e,t.next);if(n&32)return Nc(t,e)()||Pe(e[t.index]);{let i=Uh(e,t);if(i!==null){if(Array.isArray(i))return i[0];let o=bn(e[ke]);return Ui(o,i)}else return Ui(e,t.next)}}}return null}function Uh(e,t){if(t!==null){let i=e[ke][Ee],o=t.projection;return i.projection[o]}return null}function tc(e,t){let n=U+e+1;if(n<t.length){let i=t[n],o=i[M].firstChild;if(o!==null)return Ui(i,o)}return t[In]}function Bc(e,t,n,i,o,a,r){for(;n!=null;){let s=i[mn];if(n.type===128){n=n.next;continue}let l=i[n.index],c=n.type;if(r&&t===0&&(l&&Zt(Pe(l),i),n.flags|=2),!Ac(n))if(c&8)Bc(e,t,n.child,i,o,a,!1),$t(t,e,s,o,l,n,a,i);else if(c&32){let d=Nc(n,i),u;for(;u=d();)$t(t,e,s,o,u,n,a,i);$t(t,e,s,o,l,n,a,i)}else c&16?sy(e,t,i,n,o,a):$t(t,e,s,o,l,n,a,i);n=r?n.projectionNext:n.next}}function kr(e,t,n,i,o,a){Bc(n,i,e.firstChild,t,o,a,!1)}function sy(e,t,n,i,o,a){let r=n[ke],l=r[Ee].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];$t(t,e,n[mn],o,d,i,a,n)}else{let c=l,d=r[ee];mh(i)&&(c.flags|=128),Bc(e,t,c,d,o,a,!0)}}function ly(e,t,n,i,o,a,r){let s=i[In],l=Pe(i);s!==l&&$t(t,e,n,a,s,o,r);for(let c=U;c<i.length;c++){let d=i[c];kr(d[M],d,e,t,a,s)}}function cy(e,t,n,i,o){if(t)o?e.addClass(n,i):e.removeClass(n,i);else{let a=i.indexOf("-")===-1?void 0:gn.DashCase;o==null?e.removeStyle(n,i,a):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),a|=gn.Important),e.setStyle(n,i,o,a))}}function Wh(e,t,n,i,o){let a=Nn(),r=i&2;try{Ln(-1),r&&t.length>se&&zh(e,t,se,!1);let s=r?F.TemplateUpdateStart:F.TemplateCreateStart;K(s,o,n),n(i,o)}finally{Ln(a);let s=r?F.TemplateUpdateEnd:F.TemplateCreateEnd;K(s,o,n)}}function qh(e,t,n){py(e,t,n),(n.flags&64)===64&&fy(e,t,n)}function _c(e,t,n=Ke){let i=t.localNames;if(i!==null){let o=t.index+1;for(let a=0;a<i.length;a+=2){let r=i[a+1],s=r===-1?n(t,e):e[r];e[o++]=s}}}function dy(e,t,n,i){let a=i.get(vh,Dh)||n===Ve.ShadowDom||n===Ve.ExperimentalIsolatedShadowDom,r=e.selectRootElement(t,a);return uy(r),r}function uy(e){my(e)}var my=()=>null;function hy(e,t,n,i,o,a){if(e.type&3){let r=Ke(e,t);i=a!=null?a(i,e.value||"",n):i,o.setProperty(r,n,i)}else e.type&12}function py(e,t,n){let i=n.directiveStart,o=n.directiveEnd;ct(n)&&Jk(t,n,e.data[i+n.componentOffset]),e.firstCreatePass||ah(n,t);let a=n.initialInputs;for(let r=i;r<o;r++){let s=e.data[r],l=$a(t,e,r,n);if(Zt(l,t),a!==null&&Dy(t,r-i,l,s,n,a),dt(s)){let c=Ye(n.index,t);c[q]=$a(t,e,r,n)}}}function fy(e,t,n){let i=n.directiveStart,o=n.directiveEnd,a=n.index,r=om();try{Ln(a);for(let s=i;s<o;s++){let l=e.data[s],c=t[s];Ta(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&gy(l,c)}}finally{Ln(-1),Ta(r)}}function gy(e,t){e.hostBindings!==null&&e.hostBindings(1,t)}function Ry(e,t){let n=e.directiveRegistry,i=null;if(n)for(let o=0;o<n.length;o++){let a=n[o];Hk(t,a.selectors,!1)&&(i??=[],dt(a)?i.unshift(a):i.push(a))}return i}function ky(e,t,n,i,o,a){let r=Ke(e,t);yy(t[Y],r,a,e.value,n,i,o)}function yy(e,t,n,i,o,a,r){if(a==null)e.removeAttribute(t,o,n);else{let s=r==null?Da(a):r(a,i||"",o);e.setAttribute(t,o,s,n)}}function Dy(e,t,n,i,o,a){let r=a[t];if(r!==null)for(let s=0;s<r.length;s+=2){let l=r[s],c=r[s+1];nc(i,n,l,c)}}function $h(e,t,n,i,o){let a=se+n,r=t[M],s=o(r,t,e,i,n);t[a]=s,Jt(e,!0);let l=e.type===2;return l?(Hh(t[Y],s,e),(qu()===0||xa(e))&&Zt(s,t),$u()):Zt(s,t),Na()&&(!l||!Ac(e))&&Hc(r,t,s,e),e}function Yh(e){let t=e;return Tl()?Xu():(t=t.parent,Jt(t,!1)),t}function vy(e,t){let n=e[mn];if(!n)return;let i;try{i=n.get(Xe,null)}catch(o){i=null}i?.(t)}function Zh(e,t,n,i,o){let a=e.inputs?.[i],r=e.hostDirectiveInputs?.[i],s=!1;if(r)for(let l=0;l<r.length;l+=2){let c=r[l],d=r[l+1],u=t.data[c];nc(u,n[c],d,o),s=!0}if(a)for(let l of a){let c=n[l],d=t.data[l];nc(d,c,i,o),s=!0}return s}function My(e,t){let n=Ye(t,e),i=n[M];Sy(i,n);let o=n[_e];o!==null&&n[Gt]===null&&(n[Gt]=Mh(o,n[mn])),K(F.ComponentStart);try{Gc(i,n,n[q])}finally{K(F.ComponentEnd,n[q])}}function Sy(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}function Gc(e,t,n){Pa(t);try{let i=e.viewQuery;i!==null&&Zl(1,i,n);let o=e.template;o!==null&&Wh(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),t[$e]?.finishViewCreation(e),e.staticContentQueries&&Sh(e,t),e.staticViewQueries&&Zl(2,e.viewQuery,n);let a=e.components;a!==null&&Cy(t,a)}catch(i){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),i}finally{t[A]&=-5,Ia()}}function Cy(e,t){for(let n=0;n<t.length;n++)My(e,t[n])}function yr(e,t,n,i){let o=y(null);try{let a=t.tView,s=e[A]&4096?4096:16,l=Pc(e,a,n,s,null,t,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=e[t.index];l[Pn]=c;let d=e[$e];return d!==null&&(l[$e]=d.createEmbeddedView(a)),Gc(a,l,n),l}finally{y(o)}}function $i(e,t){return!t||t.firstChild===null||mh(e)}function Yi(e,t,n,i,o=!1){for(;n!==null;){if(n.type===128){n=o?n.projectionNext:n.next;continue}let a=t[n.index];a!==null&&i.push(Pe(a)),Ge(a)&&Qh(a,i);let r=n.type;if(r&8)Yi(e,t,n.child,i);else if(r&32){let s=Nc(n,t),l;for(;l=s();)i.push(l)}else if(r&16){let s=Uh(t,n);if(Array.isArray(s))i.push(...s);else{let l=bn(t[ke]);Yi(l[M],l,s,i,!0)}}n=o?n.projectionNext:n.next}return i}function Qh(e,t){for(let n=U;n<e.length;n++){let i=e[n],o=i[M].firstChild;o!==null&&Yi(i[M],i,o,t)}e[In]!==e[_e]&&t.push(e[In])}function Xh(e){if(e[Aa]!==null){for(let t of e[Aa])t.impl.addSequence(t);e[Aa].length=0}}var ep=[];function Ay(e){return e[ye]??xy(e)}function xy(e){let t=ep.pop()??Object.create(wy);return t.lView=e,t}function by(e){e.lView[ye]!==e&&(e.lView=null,ep.push(e))}var wy=b(f({},bt),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{jt(e.lView)},consumerOnSignalRead(){this.lView[ye]=this}});function Ty(e){let t=e[ye]??Object.create(Ey);return t.lView=e,t}var Ey=b(f({},bt),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let t=bn(e.lView);for(;t&&!np(t[M]);)t=bn(t);t&&vl(t)},consumerOnSignalRead(){this.lView[ye]=this}});function np(e){return e.type!==2}function tp(e){if(e[xn]===null)return;let t=!0;for(;t;){let n=!1;for(let i of e[xn])i.dirty&&(n=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));t=n&&!!(e[A]&8192)}}var Py=100;function ip(e,t=0){let i=e[qe].rendererFactory,o=!1;o||i.begin?.();try{Iy(e,t)}finally{o||i.end?.()}}function Iy(e,t){let n=El();try{Li(!0),ic(e,t);let i=0;for(;Ji(e);){if(i===Py)throw new k(103,!1);i++,ic(e,1)}}finally{Li(n)}}function Ny(e,t,n,i){if(ut(t))return;let o=t[A],a=!1,r=!1;Pa(t);let s=!0,l=null,c=null;a||(np(e)?(c=Ay(t),l=wt(c)):_o()===null?(s=!1,c=Ty(t),l=wt(c)):t[ye]&&(Un(t[ye]),t[ye]=null));try{Dl(t),em(e.bindingStartIndex),n!==null&&Wh(e,t,n,2,i);let d=(o&3)===3;if(!a)if(d){let m=e.preOrderCheckHooks;m!==null&&za(t,m,null)}else{let m=e.preOrderHooks;m!==null&&Va(t,m,0,null),Gl(t,0)}if(r||Ly(t),tp(t),op(t,0),e.contentQueries!==null&&Sh(e,t),!a)if(d){let m=e.contentCheckHooks;m!==null&&za(t,m)}else{let m=e.contentHooks;m!==null&&Va(t,m,1),Gl(t,1)}Fy(e,t);let u=e.components;u!==null&&rp(t,u,0);let h=e.viewQuery;if(h!==null&&Zl(2,h,i),!a)if(d){let m=e.viewCheckHooks;m!==null&&za(t,m)}else{let m=e.viewHooks;m!==null&&Va(t,m,2),Gl(t,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),t[Ca]){for(let m of t[Ca])m();t[Ca]=null}a||(Xh(t),t[A]&=-73)}catch(d){throw a||jt(t),d}finally{c!==null&&(Ci(c,l),s&&by(c)),Ia()}}function op(e,t){for(let n=ph(e);n!==null;n=fh(n))for(let i=U;i<n.length;i++){let o=n[i];ap(o,t)}}function Ly(e){for(let t=ph(e);t!==null;t=fh(t)){if(!(t[A]&2))continue;let n=t[lt];for(let i=0;i<n.length;i++){let o=n[i];vl(o)}}}function Oy(e,t,n){K(F.ComponentStart);let i=Ye(t,e);try{ap(i,n)}finally{K(F.ComponentEnd,i[q])}}function ap(e,t){ba(e)&&ic(e,t)}function ic(e,t){let i=e[M],o=e[A],a=e[ye],r=!!(t===0&&o&16);if(r||=!!(o&64&&t===0),r||=!!(o&1024),r||=!!(a?.dirty&&Ai(a)),r||=!1,a&&(a.dirty=!1),e[A]&=-9217,r)Ny(i,e,i.template,e[q]);else if(o&8192){let s=y(null);try{tp(e),op(e,1);let l=i.components;l!==null&&rp(e,l,1),Xh(e)}finally{y(s)}}}function rp(e,t,n){for(let i=0;i<t.length;i++)Oy(e,t[i],n)}function Fy(e,t){let n=e.hostBindingOpCodes;if(n!==null)try{for(let i=0;i<n.length;i++){let o=n[i];if(o<0)Ln(~o);else{let a=o,r=n[++i],s=n[++i];im(r,a);let l=t[a];K(F.HostBindingsUpdateStart,l);try{s(2,l)}finally{K(F.HostBindingsUpdateEnd,l)}}}}finally{Ln(-1)}}function Kc(e,t){let n=El()?64:1088;for(e[qe].changeDetectionScheduler?.notify(t);e;){e[A]|=n;let i=bn(e);if(Vt(e)&&!i)return e;e=i}return null}function sp(e,t,n,i){return[e,!0,0,t,null,i,null,n,null,null]}function lp(e,t){let n=U+t;if(n<e.length)return e[n]}function Dr(e,t,n,i=!0){let o=t[M];if(Hy(o,t,e,n),i){let r=tc(n,e),s=t[Y],l=s.parentNode(e[In]);l!==null&&Zk(o,e[Ee],s,t,l,r)}let a=t[Gt];a!==null&&a.firstChild!==null&&(a.firstChild=null)}function cp(e,t){let n=Zi(e,t);return n!==void 0&&Rr(n[M],n),n}function Zi(e,t){if(e.length<=U)return;let n=U+t,i=e[n];if(i){let o=i[Pn];o!==null&&o!==e&&Fc(o,i),t>0&&(e[n-1][Te]=i[Te]);let a=_i(e,U+t);Yk(i[M],i);let r=a[$e];r!==null&&r.detachView(a[M]),i[ee]=null,i[Te]=null,i[A]&=-129}return i}function Hy(e,t,n,i){let o=U+i,a=n.length;i>0&&(n[o-1][Te]=t),i<a-U?(t[Te]=n[o],dl(n,U+i,t)):(n.push(t),t[Te]=null),t[ee]=n;let r=t[Pn];r!==null&&n!==r&&dp(r,t);let s=t[$e];s!==null&&s.insertView(e),wa(t),t[A]|=128}function dp(e,t){let n=e[lt],i=t[ee];if(pn(i))e[A]|=2;else{let o=i[ee][ke];t[ke]!==o&&(e[A]|=2)}n===null?e[lt]=[t]:n.push(t)}var On=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,n=t[M];return Yi(n,t,n.firstChild,[])}constructor(t,n){this._lView=t,this._cdRefInjectingView=n}get context(){return this._lView[q]}set context(t){this._lView[q]=t}get destroyed(){return ut(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[ee];if(Ge(t)){let n=t[Vi],i=n?n.indexOf(this):-1;i>-1&&(Zi(t,i),_i(n,i))}this._attachedToViewContainer=!1}Rr(this._lView[M],this._lView)}onDestroy(t){Ml(this._lView,t)}markForCheck(){Kc(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[A]&=-129}reattach(){wa(this._lView),this._lView[A]|=128}detectChanges(){this._lView[A]|=1024,ip(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new k(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=Vt(this._lView),n=this._lView[Pn];n!==null&&!t&&Fc(n,this._lView),Jh(this._lView[M],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new k(902,!1);this._appRef=t;let n=Vt(this._lView),i=this._lView[Pn];i!==null&&!n&&dp(i,this._lView),wa(this._lView)}};var Qt=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=By;constructor(n,i,o){this._declarationLView=n,this._declarationTContainer=i,this.elementRef=o}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(n,i){return this.createEmbeddedViewImpl(n,i)}createEmbeddedViewImpl(n,i,o){let a=yr(this._declarationLView,this._declarationTContainer,n,{embeddedViewInjector:i,dehydratedView:o});return new On(a)}}return e})();function By(){return zc(Le(),O())}function zc(e,t){return e.type&4?new Qt(t,e,ti(e,t)):null}function vr(e,t,n,i,o){let a=e.data[t];if(a===null)a=_y(e,t,n,i,o),tm()&&(a.flags|=32);else if(a.type&64){a.type=n,a.value=i,a.attrs=o;let r=Qu();a.injectorIndex=r===null?-1:r.injectorIndex}return Jt(a,!0),a}function _y(e,t,n,i,o){let a=wl(),r=Tl(),s=r?a:a&&a.parent,l=e.data[t]=Ky(e,s,n,t,i,o);return Gy(e,l,a,r),l}function Gy(e,t,n,i){e.firstChild===null&&(e.firstChild=t),n!==null&&(i?n.child==null&&t.parent!==null&&(n.child=t):n.next===null&&(n.next=t,t.prev=n))}function Ky(e,t,n,i,o,a){let r=t?t.injectorIndex:-1,s=0;return Zu()&&(s|=128),{type:n,index:i,insertBeforeIndex:null,injectorIndex:r,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,fieldIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:o,attrs:a,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function zy(e){let t=e[Rl]??[],i=e[ee][Y],o=[];for(let a of t)a.data[yh]!==void 0?o.push(a):Vy(a,i);e[Rl]=o}function Vy(e,t){let n=0,i=e.firstChild;if(i){let o=e.data[kh];for(;n<o;){let a=i.nextSibling;Fh(t,i,!1),i=a,n++}}}var jy=()=>null,Jy=()=>null;function oc(e,t){return jy(e,t)}function up(e,t,n){return Jy(e,t,n)}var mp=class{},Mr=class{},ac=class{resolveComponentFactory(t){throw new k(917,!1)}},oo=class{static NULL=new ac},pt=class{};var hp=(()=>{class e{static \u0275prov=R({token:e,providedIn:"root",factory:()=>null})}return e})();var Ja={},rc=class{injector;parentInjector;constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,i){let o=this.injector.get(t,Ja,i);return o!==Ja||n===Ja?o:this.parentInjector.get(t,n,i)}};function Xa(e,t,n){let i=n?e.styles:null,o=n?e.classes:null,a=0;if(t!==null)for(let r=0;r<t.length;r++){let s=t[r];if(typeof s=="number")a=s;else if(a==1)o=Qs(o,s);else if(a==2){let l=s,c=t[++r];i=Qs(i,l+": "+c+";")}}n?e.styles=i:e.stylesWithoutHost=i,n?e.classes=o:e.classesWithoutHost=o}function ao(e,t=0){let n=O();if(n===null)return x(e,t);let i=Le();return ch(i,n,ge(e),t)}function Uy(e,t,n,i,o){let a=i===null?null:{"":-1},r=o(e,n);if(r!==null){let s=r,l=null,c=null;for(let d of r)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(r);break}$y(e,t,n,s,a,l,c)}a!==null&&i!==null&&Wy(n,i,a)}function Wy(e,t,n){let i=e.localNames=[];for(let o=0;o<t.length;o+=2){let a=n[t[o+1]];if(a==null)throw new k(-301,!1);i.push(t[o],a)}}function qy(e,t,n){t.componentOffset=n,(e.components??=[]).push(t.index)}function $y(e,t,n,i,o,a,r){let s=i.length,l=null;for(let h=0;h<s;h++){let m=i[h];l===null&&dt(m)&&(l=m,qy(e,n,h)),qR(ah(n,t),e,m.type)}nD(n,e.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<s;h++){let m=i[h];m.providersResolver&&m.providersResolver(m)}let c=!1,d=!1,u=Kh(e,t,s,null);s>0&&(n.directiveToIndex=new Map);for(let h=0;h<s;h++){let m=i[h];if(n.mergedAttrs=dr(n.mergedAttrs,m.hostAttrs),Zy(e,n,t,u,m),eD(u,m,o),r!==null&&r.has(m)){let[D,E]=r.get(m);n.directiveToIndex.set(m.type,[u,D+n.directiveStart,E+n.directiveStart])}else(a===null||!a.has(m))&&n.directiveToIndex.set(m.type,u);m.contentQueries!==null&&(n.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(n.flags|=64);let g=m.type.prototype;!c&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((e.preOrderHooks??=[]).push(n.index),c=!0),!d&&(g.ngOnChanges||g.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(n.index),d=!0),u++}Yy(e,n,a)}function Yy(e,t,n){for(let i=t.directiveStart;i<t.directiveEnd;i++){let o=e.data[i];if(n===null||!n.has(o))Hm(0,t,o,i),Hm(1,t,o,i),_m(t,i,!1);else{let a=n.get(o);Bm(0,t,a,i),Bm(1,t,a,i),_m(t,i,!0)}}}function Hm(e,t,n,i){let o=e===0?n.inputs:n.outputs;for(let a in o)if(o.hasOwnProperty(a)){let r;e===0?r=t.inputs??={}:r=t.outputs??={},r[a]??=[],r[a].push(i),pp(t,a)}}function Bm(e,t,n,i){let o=e===0?n.inputs:n.outputs;for(let a in o)if(o.hasOwnProperty(a)){let r=o[a],s;e===0?s=t.hostDirectiveInputs??={}:s=t.hostDirectiveOutputs??={},s[r]??=[],s[r].push(i,a),pp(t,r)}}function pp(e,t){t==="class"?e.flags|=8:t==="style"&&(e.flags|=16)}function _m(e,t,n){let{attrs:i,inputs:o,hostDirectiveInputs:a}=e;if(i===null||!n&&o===null||n&&a===null||Tc(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let r=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!n&&o.hasOwnProperty(l)){let c=o[l];for(let d of c)if(d===t){r??=[],r.push(l,i[s+1]);break}}else if(n&&a.hasOwnProperty(l)){let c=a[l];for(let d=0;d<c.length;d+=2)if(c[d]===t){r??=[],r.push(c[d+1],i[s+1]);break}}s+=2}e.initialInputs??=[],e.initialInputs.push(r)}function Zy(e,t,n,i,o){e.data[i]=o;let a=o.factory||(o.factory=et(o.type,!0)),r=new qi(a,dt(o),ao,null);e.blueprint[i]=r,n[i]=r,Qy(e,t,i,Kh(e,n,o.hostVars,kn),o)}function Qy(e,t,n,i,o){let a=o.hostBindings;if(a){let r=e.hostBindingOpCodes;r===null&&(r=e.hostBindingOpCodes=[]);let s=~t.index;Xy(r)!=s&&r.push(s),r.push(n,i,a)}}function Xy(e){let t=e.length;for(;t>0;){let n=e[--t];if(typeof n=="number"&&n<0)return n}return 0}function eD(e,t,n){if(n){if(t.exportAs)for(let i=0;i<t.exportAs.length;i++)n[t.exportAs[i]]=e;dt(t)&&(n[""]=e)}}function nD(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function fp(e,t,n,i,o,a,r,s){let l=t[M],c=l.consts,d=Ze(c,r),u=vr(l,e,n,i,d);return a&&Uy(l,t,u,Ze(c,s),o),u.mergedAttrs=dr(u.mergedAttrs,u.attrs),u.attrs!==null&&Xa(u,u.attrs,!1),u.mergedAttrs!==null&&Xa(u,u.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,u),u}function gp(e,t){HR(e,t),kl(t)&&e.queries.elementEnd(t)}function tD(e,t,n,i,o,a){let r=t.consts,s=Ze(r,o),l=vr(t,e,n,i,s);if(l.mergedAttrs=dr(l.mergedAttrs,l.attrs),a!=null){let c=Ze(r,a);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Xa(l,l.attrs,!1),l.mergedAttrs!==null&&Xa(l,l.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,l),l}function oi(e,t,n){if(n===kn)return!1;let i=e[t];return Object.is(i,n)?!1:(e[t]=n,!0)}function iD(e,t,n){return function i(o){let a=ct(e)?Ye(e.index,t):t;Kc(a,5);let r=t[q],s=Gm(t,r,n,o),l=i.__ngNextListenerFn__;for(;l;)s=Gm(t,r,l,o)&&s,l=l.__ngNextListenerFn__;return s}}function Gm(e,t,n,i){let o=y(null);try{return K(F.OutputStart,t,n),n(i)!==!1}catch(a){return vy(e,a),!1}finally{K(F.OutputEnd,t,n),y(o)}}function oD(e,t,n,i,o,a,r,s){let l=xa(e),c=!1,d=null;if(!i&&l&&(d=rD(t,n,a,e.index)),d!==null){let u=d.__ngLastListenerFn__||d;u.__ngNextListenerFn__=r,d.__ngLastListenerFn__=r,c=!0}else{let u=Ke(e,n),h=i?i(u):u;sk(n,h,a,s);let m=o.listen(h,a,s);if(!aD(a)){let g=i?D=>i(Pe(D[e.index])):e.index;sD(g,t,n,a,s,m,!1)}}return c}function aD(e){return e.startsWith("animation")||e.startsWith("transition")}function rD(e,t,n,i){let o=e.cleanup;if(o!=null)for(let a=0;a<o.length-1;a+=2){let r=o[a];if(r===n&&o[a+1]===i){let s=t[Kt],l=o[a+2];return s&&s.length>l?s[l]:null}typeof r=="string"&&(a+=2)}return null}function sD(e,t,n,i,o,a,r){let s=t.firstCreatePass?Cl(t):null,l=Sl(n),c=l.length;l.push(o,a),s&&s.push(i,e,c,(c+1)*(r?-1:1))}var sc=Symbol("BINDING");var er=class extends oo{ngModule;constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){let n=Tn(t);return new Xt(n,this.ngModule)}};function lD(e){return Object.keys(e).map(t=>{let[n,i,o]=e[t],a={propName:n,templateName:t,isSignal:(i&gr.SignalBased)!==0};return o&&(a.transform=o),a})}function cD(e){return Object.keys(e).map(t=>({propName:e[t],templateName:t}))}function dD(e,t,n){let i=t instanceof X?t:t?.injector;return i&&e.getStandaloneInjector!==null&&(i=e.getStandaloneInjector(i)||i),i?new rc(n,i):n}function uD(e){let t=e.get(pt,null);if(t===null)throw new k(407,!1);let n=e.get(hp,null),i=e.get(wn,null);return{rendererFactory:t,sanitizer:n,changeDetectionScheduler:i,ngReflect:!1}}function mD(e,t){let n=Rp(e);return Lh(t,n,n==="svg"?Ku:n==="math"?zu:null)}function Rp(e){return(e.selectors[0][0]||"div").toLowerCase()}var Xt=class extends Mr{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=lD(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=cD(this.componentDef.outputs),this.cachedOutputs}constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=Kk(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!n}create(t,n,i,o,a,r){K(F.DynamicComponentStart);let s=y(null);try{let l=this.componentDef,c=hD(i,l,r,a),d=dD(l,o||this.ngModule,t),u=uD(d),h=u.rendererFactory.createRenderer(null,l),m=i?dy(h,i,l.encapsulation,d):mD(l,h),g=r?.some(Km)||a?.some(I=>typeof I!="function"&&I.bindings.some(Km)),D=Pc(null,c,null,512|Gh(l),null,null,u,h,d,null,Mh(m,d,!0));D[se]=m,Pa(D);let E=null;try{let I=fp(se,D,2,"#host",()=>c.directiveRegistry,!0,0);Hh(h,m,I),Zt(m,D),qh(c,D,I),Ch(c,I,D),gp(c,I),n!==void 0&&fD(I,this.ngContentSelectors,n),E=Ye(I.index,D),D[q]=E[q],Gc(c,D,null)}catch(I){throw E!==null&&$l(E),$l(D),I}finally{K(F.DynamicComponentEnd),Ia()}return new nr(this.componentType,D,!!g)}finally{y(s)}}};function hD(e,t,n,i){let o=e?["ng-version","21.1.5"]:zk(t.selectors[0]),a=null,r=null,s=0;if(n)for(let d of n)s+=d[sc].requiredVars,d.create&&(d.targetIdx=0,(a??=[]).push(d)),d.update&&(d.targetIdx=0,(r??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let u=i[d];if(typeof u!="function")for(let h of u.bindings){s+=h[sc].requiredVars;let m=d+1;h.create&&(h.targetIdx=m,(a??=[]).push(h)),h.update&&(h.targetIdx=m,(r??=[]).push(h))}}let l=[t];if(i)for(let d of i){let u=typeof d=="function"?d:d.type,h=sl(u);l.push(h)}return Ec(0,null,pD(a,r),1,s,l,null,null,null,[o],null)}function pD(e,t){return!e&&!t?null:n=>{if(n&1&&e)for(let i of e)i.create();if(n&2&&t)for(let i of t)i.update()}}function Km(e){let t=e[sc].kind;return t==="input"||t==="twoWay"}var nr=class extends mp{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,n,i){super(),this._rootLView=n,this._hasInputBindings=i,this._tNode=ji(n[M],se),this.location=ti(this._tNode,n),this.instance=Ye(this._tNode.index,n)[q],this.hostView=this.changeDetectorRef=new On(n,void 0),this.componentType=t}setInput(t,n){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),n))return;let o=this._rootLView,a=Zh(i,o[M],o,t,n);this.previousInputValues.set(t,n);let r=Ye(i.index,o);Kc(r,1)}get injector(){return new mt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function fD(e,t,n){let i=e.projection=[];for(let o=0;o<t.length;o++){let a=n[o];i.push(a!=null&&a.length?Array.from(a):null)}}var gt=(()=>{class e{static __NG_ELEMENT_ID__=gD}return e})();function gD(){let e=Le();return yp(e,O())}var RD=gt,kp=class extends RD{_lContainer;_hostTNode;_hostLView;constructor(t,n,i){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=i}get element(){return ti(this._hostTNode,this._hostLView)}get injector(){return new mt(this._hostTNode,this._hostLView)}get parentInjector(){let t=Mc(this._hostTNode,this._hostLView);if(th(t)){let n=qa(t,this._hostLView),i=Wa(t),o=n[M].data[i+8];return new mt(o,n)}else return new mt(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let n=zm(this._lContainer);return n!==null&&n[t]||null}get length(){return this._lContainer.length-U}createEmbeddedView(t,n,i){let o,a;typeof i=="number"?o=i:i!=null&&(o=i.index,a=i.injector);let r=oc(this._lContainer,t.ssrId),s=t.createEmbeddedViewImpl(n||{},a,r);return this.insertImpl(s,o,$i(this._hostTNode,r)),s}createComponent(t,n,i,o,a,r,s){let l=t&&!IR(t),c;if(l)c=n;else{let E=n||{};c=E.index,i=E.injector,o=E.projectableNodes,a=E.environmentInjector||E.ngModuleRef,r=E.directives,s=E.bindings}let d=l?t:new Xt(Tn(t)),u=i||this.parentInjector;if(!a&&d.ngModule==null){let I=(l?u:this.parentInjector).get(X,null);I&&(a=I)}let h=Tn(d.componentType??{}),m=oc(this._lContainer,h?.id??null),g=m?.firstChild??null,D=d.create(u,o,g,a,r,s);return this.insertImpl(D.hostView,c,$i(this._hostTNode,m)),D}insert(t,n){return this.insertImpl(t,n,!0)}insertImpl(t,n,i){let o=t._lView;if(ju(o)){let s=this.indexOf(t);if(s!==-1)this.detach(s);else{let l=o[ee],c=new kp(l,l[Ee],l[ee]);c.detach(c.indexOf(t))}}let a=this._adjustIndex(n),r=this._lContainer;return Dr(r,o,a,i),t.attachToViewContainerRef(),dl(Vl(r),a,t),t}move(t,n){return this.insert(t,n)}indexOf(t){let n=zm(this._lContainer);return n!==null?n.indexOf(t):-1}remove(t){let n=this._adjustIndex(t,-1),i=Zi(this._lContainer,n);i&&(_i(Vl(this._lContainer),n),Rr(i[M],i))}detach(t){let n=this._adjustIndex(t,-1),i=Zi(this._lContainer,n);return i&&_i(Vl(this._lContainer),n)!=null?new On(i):null}_adjustIndex(t,n=0){return t??this.length+n}};function zm(e){return e[Vi]}function Vl(e){return e[Vi]||(e[Vi]=[])}function yp(e,t){let n,i=t[e.index];return Ge(i)?n=i:(n=sp(i,t,null,e),t[e.index]=n,Ic(t,n)),yD(n,t,e,i),new kp(n,e,t)}function kD(e,t){let n=e[Y],i=n.createComment(""),o=Ke(t,e),a=n.parentNode(o);return Qa(n,a,i,n.nextSibling(o),!1),i}var yD=MD,DD=()=>!1;function vD(e,t,n){return DD(e,t,n)}function MD(e,t,n,i){if(e[In])return;let o;n.type&8?o=Pe(i):o=kD(t,n),e[In]=o}var lc=class e{queryList;matches=null;constructor(t){this.queryList=t}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},cc=class e{queries;constructor(t=[]){this.queries=t}createEmbeddedView(t){let n=t.queries;if(n!==null){let i=t.contentQueries!==null?t.contentQueries[0]:n.length,o=[];for(let a=0;a<i;a++){let r=n.getByIndex(a),s=this.queries[r.indexInDeclarationView];o.push(s.clone())}return new e(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}finishViewCreation(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)Vc(t,n).matches!==null&&this.queries[n].setDirty()}},dc=class{flags;read;predicate;constructor(t,n,i=null){this.flags=n,this.read=i,typeof t=="string"?this.predicate=ED(t):this.predicate=t}},uc=class e{queries;constructor(t=[]){this.queries=t}elementStart(t,n){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let i=0;i<this.length;i++){let o=n!==null?n.length:0,a=this.getByIndex(i).embeddedTView(t,o);a&&(a.indexInDeclarationView=i,n!==null?n.push(a):n=[a])}return n!==null?new e(n):null}template(t,n){for(let i=0;i<this.queries.length;i++)this.queries[i].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}},mc=class e{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(t,n=-1){this.metadata=t,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new e(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let n=this._declarationNodeIndex,i=t.parent;for(;i!==null&&i.type&8&&i.index!==n;)i=i.parent;return n===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(t,n){let i=this.metadata.predicate;if(Array.isArray(i))for(let o=0;o<i.length;o++){let a=i[o];this.matchTNodeWithReadOption(t,n,SD(n,a)),this.matchTNodeWithReadOption(t,n,ja(n,t,a,!1,!1))}else i===Qt?n.type&4&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,ja(n,t,i,!1,!1))}matchTNodeWithReadOption(t,n,i){if(i!==null){let o=this.metadata.read;if(o!==null)if(o===ii||o===gt||o===Qt&&n.type&4)this.addMatch(n.index,-2);else{let a=ja(n,t,o,!1,!1);a!==null&&this.addMatch(n.index,a)}else this.addMatch(n.index,i)}}addMatch(t,n){this.matches===null?this.matches=[t,n]:this.matches.push(t,n)}};function SD(e,t){let n=e.localNames;if(n!==null){for(let i=0;i<n.length;i+=2)if(n[i]===t)return n[i+1]}return null}function CD(e,t){return e.type&11?ti(e,t):e.type&4?zc(e,t):null}function AD(e,t,n,i){return n===-1?CD(t,e):n===-2?xD(e,t,i):$a(e,e[M],n,t)}function xD(e,t,n){if(n===ii)return ti(t,e);if(n===Qt)return zc(t,e);if(n===gt)return yp(t,e)}function Dp(e,t,n,i){let o=t[$e].queries[i];if(o.matches===null){let a=e.data,r=n.matches,s=[];for(let l=0;r!==null&&l<r.length;l+=2){let c=r[l];if(c<0)s.push(null);else{let d=a[c];s.push(AD(t,d,r[l+1],n.metadata.read))}}o.matches=s}return o.matches}function hc(e,t,n,i){let o=e.queries.getByIndex(n),a=o.matches;if(a!==null){let r=Dp(e,t,o,n);for(let s=0;s<a.length;s+=2){let l=a[s];if(l>0)i.push(r[s/2]);else{let c=a[s+1],d=t[-l];for(let u=U;u<d.length;u++){let h=d[u];h[Pn]===h[ee]&&hc(h[M],h,c,i)}if(d[lt]!==null){let u=d[lt];for(let h=0;h<u.length;h++){let m=u[h];hc(m[M],m,c,i)}}}}}return i}function bD(e,t){return e[$e].queries[t].queryList}function wD(e,t,n){let i=new Ya((n&4)===4);return Wu(e,t,i,i.destroy),(t[$e]??=new cc).queries.push(new lc(i))-1}function TD(e,t,n){let i=De();return i.firstCreatePass&&(PD(i,new dc(e,t,n),-1),(t&2)===2&&(i.staticViewQueries=!0)),wD(i,O(),t)}function ED(e){return e.split(",").map(t=>t.trim())}function PD(e,t,n){e.queries===null&&(e.queries=new uc),e.queries.track(new mc(t,n))}function Vc(e,t){return e.queries.getByIndex(t)}function ID(e,t){let n=e[M],i=Vc(n,t);return i.crossesNgTemplate?hc(n,e,t,[]):Dp(n,e,i,t)}var ei=class{},Sr=class{};var tr=class extends ei{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new er(this);constructor(t,n,i,o=!0){super(),this.ngModuleType=t,this._parent=n;let a=rl(t);this._bootstrapComponents=Bh(a.bootstrap),this._r3Injector=Ol(t,n,[{provide:ei,useValue:this},{provide:oo,useValue:this.componentFactoryResolver},...i],dn(t),new Set(["environment"])),o&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}},ir=class extends Sr{moduleType;constructor(t){super(),this.moduleType=t}create(t){return new tr(this.moduleType,t,[])}};var Qi=class extends ei{injector;componentFactoryResolver=new er(this);instance=null;constructor(t){super();let n=new nt([...t.providers,{provide:ei,useValue:this},{provide:oo,useValue:this.componentFactoryResolver}],t.parent||zi(),t.debugName,new Set(["environment"]));this.injector=n,t.runEnvironmentInitializers&&n.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function ro(e,t,n=null){return new Qi({providers:e,parent:t,debugName:n,runEnvironmentInitializers:!0}).injector}var ND=(()=>{class e{_injector;cachedInjectors=new Map;constructor(n){this._injector=n}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let i=hl(!1,n.type),o=i.length>0?ro([i],this._injector,""):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=R({token:e,providedIn:"environment",factory:()=>new e(x(X))})}return e})();function Me(e){return eo(()=>{let t=vp(e),n=b(f({},t),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection===Sc.OnPush,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&e.dependencies||null,getStandaloneInjector:t.standalone?o=>o.get(ND).getOrCreateStandaloneInjector(n):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Ve.Emulated,styles:e.styles||be,_:null,schemas:e.schemas||null,tView:null,id:""});t.standalone&&Fn("NgStandalone"),Mp(n);let i=e.dependencies;return n.directiveDefs=Vm(i,LD),n.pipeDefs=Vm(i,bu),n.id=HD(n),n})}function LD(e){return Tn(e)||sl(e)}function so(e){return eo(()=>({type:e.type,bootstrap:e.bootstrap||be,declarations:e.declarations||be,imports:e.imports||be,exports:e.exports||be,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function OD(e,t){if(e==null)return ot;let n={};for(let i in e)if(e.hasOwnProperty(i)){let o=e[i],a,r,s,l;Array.isArray(o)?(s=o[0],a=o[1],r=o[2]??a,l=o[3]||null):(a=o,r=o,s=gr.None,l=null),n[a]=[i,s,l],t[a]=r}return n}function FD(e){if(e==null)return ot;let t={};for(let n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function Cr(e){return eo(()=>{let t=vp(e);return Mp(t),t})}function vp(e){let t={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputConfig:e.inputs||ot,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||be,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:OD(e.inputs,t),outputs:FD(e.outputs),debugInfo:null}}function Mp(e){e.features?.forEach(t=>t(e))}function Vm(e,t){return e?()=>{let n=typeof e=="function"?e():e,i=[];for(let o of n){let a=t(o);a!==null&&i.push(a)}return i}:null}function HD(e){let t=0,n=typeof e.consts=="function"?"":e.consts,i=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,n,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let a of i.join("|"))t=Math.imul(31,t)+a.charCodeAt(0)<<0;return t+=2147483648,"c"+t}function BD(e,t,n,i,o,a,r,s){if(n.firstCreatePass){e.mergedAttrs=dr(e.mergedAttrs,e.attrs);let d=e.tView=Ec(2,e,o,a,r,n.directiveRegistry,n.pipeRegistry,null,n.schemas,n.consts,null);n.queries!==null&&(n.queries.template(n,e),d.queries=n.queries.embeddedTView(e))}s&&(e.flags|=s),Jt(e,!1);let l=_D(n,t,e,i);Na()&&Hc(n,t,l,e),Zt(l,t);let c=sp(l,t,l,e);t[i+se]=c,Ic(t,c),vD(c,e,t)}function or(e,t,n,i,o,a,r,s,l,c,d){let u=n+se,h;if(t.firstCreatePass){if(h=vr(t,u,4,r||null,s||null),c!=null){let m=Ze(t.consts,c);h.localNames=[];for(let g=0;g<m.length;g+=2)h.localNames.push(m[g],-1)}}else h=t.data[u];return BD(h,e,t,n,i,o,a,l),c!=null&&_c(e,h,d),h}var _D=GD;function GD(e,t,n,i){return La(!0),t[Y].createComment("")}var jc=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"platform"})}return e})();var Jc=new v("");function lo(e){return!!e&&typeof e.then=="function"}function Sp(e){return!!e&&typeof e.subscribe=="function"}var Cp=new v("");var Uc=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((n,i)=>{this.resolve=n,this.reject=i});appInits=p(Cp,{optional:!0})??[];injector=p(we);constructor(){}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let a=ce(this.injector,o);if(lo(a))n.push(a);else if(Sp(a)){let r=new Promise((s,l)=>{a.subscribe({complete:s,error:l})});n.push(r)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{i()}).catch(o=>{this.reject(o)}),n.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ar=new v("");function Ap(){Ms(()=>{let e="";throw new k(600,e)})}function xp(e){return e.isBoundToModule}var KD=10;var Rt=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=p(Xe);afterRenderManager=p(Vh);zonelessEnabled=p(Wt);rootEffectScheduler=p(Ha);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new ae;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=p(fn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(J(n=>!n))}constructor(){p(io,{optional:!0})}whenStable(){let n;return new Promise(i=>{n=this.isStable.subscribe({next:o=>{o&&i()}})}).finally(()=>{n.unsubscribe()})}_injector=p(X);_rendererFactory=null;get injector(){return this._injector}bootstrap(n,i){return this.bootstrapImpl(n,i)}bootstrapImpl(n,i,o=we.NULL){return this._injector.get($).run(()=>{K(F.BootstrapComponentStart);let r=n instanceof Mr;if(!this._injector.get(Uc).done){let g="";throw new k(405,g)}let l;r?l=n:l=this._injector.get(oo).resolveComponentFactory(n),this.componentTypes.push(l.componentType);let c=xp(l)?void 0:this._injector.get(ei),d=i||l.selector,u=l.create(o,[],d,c),h=u.location.nativeElement,m=u.injector.get(Jc,null);return m?.registerApplication(h),u.onDestroy(()=>{this.detachView(u.hostView),Wi(this.components,u),m?.unregisterApplication(h)}),this._loadComponent(u),K(F.BootstrapComponentEnd,u),u})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){K(F.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Lc.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw K(F.ChangeDetectionEnd),new k(101,!1);let n=y(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,y(n),this.afterTick.next(),K(F.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(pt,null,{optional:!0}));let n=0;for(;this.dirtyFlags!==0&&n++<KD;){K(F.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{K(F.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let n=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!i&&!Ji(o))continue;let a=i&&!this.zonelessEnabled?0:1;ip(o,a),n=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}n||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:n})=>Ji(n))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(n){let i=n;this._views.push(i),i.attachToAppRef(this)}detachView(n){let i=n;Wi(this._views,i),i.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(n),this._injector.get(Ar,[]).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Wi(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new k(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Wi(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function ai(e,t,n,i){let o=O(),a=Ut();if(oi(o,a,t)){let r=De(),s=Ll();ky(s,o,e,t,n,i)}return ai}var Q1=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var pc=class{destroy(t){}updateValue(t,n){}swap(t,n){let i=Math.min(t,n),o=Math.max(t,n),a=this.detach(o);if(o-i>1){let r=this.detach(i);this.attach(i,a),this.attach(o,r)}else this.attach(i,a)}move(t,n){this.attach(n,this.detach(t))}};function jl(e,t,n,i,o){return e===n&&Object.is(t,i)?1:Object.is(o(e,t),o(n,i))?-1:0}function zD(e,t,n,i){let o,a,r=0,s=e.length-1,l=void 0;if(Array.isArray(t)){y(i);let c=t.length-1;for(y(null);r<=s&&r<=c;){let d=e.at(r),u=t[r],h=jl(r,d,r,u,n);if(h!==0){h<0&&e.updateValue(r,u),r++;continue}let m=e.at(s),g=t[c],D=jl(s,m,c,g,n);if(D!==0){D<0&&e.updateValue(s,g),s--,c--;continue}let E=n(r,d),I=n(s,m),Fe=n(r,u);if(Object.is(Fe,I)){let Mi=n(c,g);Object.is(Mi,E)?(e.swap(r,s),e.updateValue(s,g),c--,s--):e.move(s,r),e.updateValue(r,u),r++;continue}if(o??=new ar,a??=Jm(e,r,s,n),fc(e,o,r,Fe))e.updateValue(r,u),r++,s++;else if(a.has(Fe))o.set(E,e.detach(r)),s--;else{let Mi=e.create(r,t[r]);e.attach(r,Mi),r++,s++}}for(;r<=c;)jm(e,o,n,r,t[r]),r++}else if(t!=null){y(i);let c=t[Symbol.iterator]();y(null);let d=c.next();for(;!d.done&&r<=s;){let u=e.at(r),h=d.value,m=jl(r,u,r,h,n);if(m!==0)m<0&&e.updateValue(r,h),r++,d=c.next();else{o??=new ar,a??=Jm(e,r,s,n);let g=n(r,h);if(fc(e,o,r,g))e.updateValue(r,h),r++,s++,d=c.next();else if(!a.has(g))e.attach(r,e.create(r,h)),r++,s++,d=c.next();else{let D=n(r,u);o.set(D,e.detach(r)),s--}}}for(;!d.done;)jm(e,o,n,e.length,d.value),d=c.next()}for(;r<=s;)e.destroy(e.detach(s--));o?.forEach(c=>{e.destroy(c)})}function fc(e,t,n,i){return t!==void 0&&t.has(i)?(e.attach(n,t.get(i)),t.delete(i),!0):!1}function jm(e,t,n,i,o){if(fc(e,t,i,n(i,o)))e.updateValue(i,o);else{let a=e.create(i,o);e.attach(i,a)}}function Jm(e,t,n,i){let o=new Set;for(let a=t;a<=n;a++)o.add(i(a,e.at(a)));return o}var ar=class{kvMap=new Map;_vMap=void 0;has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let n=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(n)?(this.kvMap.set(t,this._vMap.get(n)),this._vMap.delete(n)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,n){if(this.kvMap.has(t)){let i=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=new Map);let o=this._vMap;for(;o.has(i);)i=o.get(i);o.set(i,n)}else this.kvMap.set(t,n)}forEach(t){for(let[n,i]of this.kvMap)if(t(i,n),this._vMap!==void 0){let o=this._vMap;for(;o.has(i);)i=o.get(i),t(i,n)}}};function Hn(e,t,n,i,o,a,r,s){Fn("NgControlFlow");let l=O(),c=De(),d=Ze(c.consts,a);return or(l,c,e,t,n,i,o,d,256,r,s),Wc}function Wc(e,t,n,i,o,a,r,s){Fn("NgControlFlow");let l=O(),c=De(),d=Ze(c.consts,a);return or(l,c,e,t,n,i,o,d,512,r,s),Wc}function Bn(e,t){Fn("NgControlFlow");let n=O(),i=Ut(),o=n[i]!==kn?n[i]:-1,a=o!==-1?rr(n,se+o):void 0,r=0;if(oi(n,i,e)){let s=y(null);try{if(a!==void 0&&cp(a,r),e!==-1){let l=se+e,c=rr(n,l),d=yc(n[M],l),u=up(c,d,n),h=yr(n,d,t,{dehydratedView:u});Dr(c,h,r,$i(d,u))}}finally{y(s)}}else if(a!==void 0){let s=lp(a,r);s!==void 0&&(s[q]=t)}}var gc=class{lContainer;$implicit;$index;constructor(t,n,i){this.lContainer=t,this.$implicit=n,this.$index=i}get $count(){return this.lContainer.length-U}};var Rc=class{hasEmptyBlock;trackByFn;liveCollection;constructor(t,n,i){this.hasEmptyBlock=t,this.trackByFn=n,this.liveCollection=i}};function _n(e,t,n,i,o,a,r,s,l,c,d,u,h){Fn("NgControlFlow");let m=O(),g=De(),D=l!==void 0,E=O(),I=s?r.bind(E[ke][q]):r,Fe=new Rc(D,I);E[se+e]=Fe,or(m,g,e+1,t,n,i,o,Ze(g.consts,a),256),D&&or(m,g,e+2,l,c,d,u,Ze(g.consts,h),512)}var kc=class extends pc{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(t,n,i){super(),this.lContainer=t,this.hostLView=n,this.templateTNode=i}get length(){return this.lContainer.length-U}at(t){return this.getLView(t)[q].$implicit}attach(t,n){let i=n[Gt];this.needsIndexUpdate||=t!==this.length,Dr(this.lContainer,n,t,$i(this.templateTNode,i)),VD(this.lContainer,t)}detach(t){return this.needsIndexUpdate||=t!==this.length-1,jD(this.lContainer,t),JD(this.lContainer,t)}create(t,n){let i=oc(this.lContainer,this.templateTNode.tView.ssrId);return yr(this.hostLView,this.templateTNode,new gc(this.lContainer,n,t),{dehydratedView:i})}destroy(t){Rr(t[M],t)}updateValue(t,n){this.getLView(t)[q].$implicit=n}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[q].$index=t}getLView(t){return UD(this.lContainer,t)}};function Gn(e){let t=y(null),n=Nn();try{let i=O(),o=i[M],a=i[n],r=n+1,s=rr(i,r);if(a.liveCollection===void 0){let c=yc(o,r);a.liveCollection=new kc(s,i,c)}else a.liveCollection.reset();let l=a.liveCollection;if(zD(l,e,a.trackByFn,t),l.updateIndexes(),a.hasEmptyBlock){let c=Ut(),d=l.length===0;if(oi(i,c,d)){let u=n+2,h=rr(i,u);if(d){let m=yc(o,u),g=up(h,m,i),D=yr(i,m,void 0,{dehydratedView:g});Dr(h,D,0,$i(m,g))}else o.firstUpdatePass&&zy(h),cp(h,0)}}}finally{y(t)}}function rr(e,t){return e[t]}function VD(e,t){if(e.length<=U)return;let n=U+t,i=e[n],o=i?i[st]:void 0;if(i&&o&&o.detachedLeaveAnimationFns&&o.detachedLeaveAnimationFns.length>0){let a=i[mn];Wk(a,o),ht.delete(i[hn]),o.detachedLeaveAnimationFns=void 0}}function jD(e,t){if(e.length<=U)return;let n=U+t,i=e[n],o=i?i[st]:void 0;o&&o.leave&&o.leave.size>0&&(o.detachedLeaveAnimationFns=[])}function JD(e,t){return Zi(e,t)}function UD(e,t){return lp(e,t)}function yc(e,t){return ji(e,t)}function Um(e,t,n,i,o){Zh(t,e,n,o?"class":"style",i)}function ri(e,t,n,i){let o=O(),a=o[M],r=e+se,s=a.firstCreatePass?fp(r,o,2,t,Ry,Yu(),n,i):a.data[r];if($h(s,o,e,t,bp),xa(s)){let l=o[M];qh(l,o,s),Ch(l,s,o)}return i!=null&&_c(o,s),ri}function si(){let e=De(),t=Le(),n=Yh(t);return e.firstCreatePass&&gp(e,n),xl(n)&&bl(),Al(),n.classesWithoutHost!=null&&_R(n)&&Um(e,n,O(),n.classesWithoutHost,!0),n.stylesWithoutHost!=null&&GR(n)&&Um(e,n,O(),n.stylesWithoutHost,!1),si}function Kn(e,t,n,i){return ri(e,t,n,i),si(),Kn}function L(e,t,n,i){let o=O(),a=o[M],r=e+se,s=a.firstCreatePass?tD(r,a,2,t,n,i):a.data[r];return $h(s,o,e,t,bp),i!=null&&_c(o,s),L}function P(){let e=Le(),t=Yh(e);return xl(t)&&bl(),Al(),P}function kt(e,t,n,i){return L(e,t,n,i),P(),kt}var bp=(e,t,n,i,o)=>(La(!0),Lh(t[Y],i,dm()));function yn(){return O()}function Dn(e,t,n){let i=O(),o=Ut();if(oi(i,o,t)){let a=De(),r=Ll();hy(r,i,e,t,i[Y],n)}return Dn}var co="en-US";var WD=co;function wp(e){typeof e=="string"&&(WD=e.toLowerCase().replace(/_/g,"-"))}function Se(e,t,n){let i=O(),o=De(),a=Le();return(a.type&3||n)&&oD(a,o,i,n,i[Y],e,t,iD(a,i,t)),Se}function W(e=1){return cm(e)}function xr(e,t,n){return TD(e,t,n),xr}function qc(e){let t=O(),n=De(),i=Pl();Ea(i+1);let o=Vc(n,i);if(e.dirty&&Vu(t)===((o.metadata.flags&2)===2)){if(o.matches===null)e.reset([]);else{let a=ID(t,i);e.reset(a,ek),e.notifyOnChanges()}return!0}return!1}function $c(){return bD(O(),Pl())}function Ka(e,t){return e<<17|t<<2}function ft(e){return e>>17&32767}function qD(e){return(e&2)==2}function $D(e,t){return e&131071|t<<17}function Dc(e){return e|2}function ni(e){return(e&131068)>>2}function Jl(e,t){return e&-131069|t<<2}function YD(e){return(e&1)===1}function vc(e){return e|1}function ZD(e,t,n,i,o,a){let r=a?t.classBindings:t.styleBindings,s=ft(r),l=ni(r);e[i]=n;let c=!1,d;if(Array.isArray(n)){let u=n;d=u[1],(d===null||_t(u,d)>0)&&(c=!0)}else d=n;if(o)if(l!==0){let h=ft(e[s+1]);e[i+1]=Ka(h,s),h!==0&&(e[h+1]=Jl(e[h+1],i)),e[s+1]=$D(e[s+1],i)}else e[i+1]=Ka(s,0),s!==0&&(e[s+1]=Jl(e[s+1],i)),s=i;else e[i+1]=Ka(l,0),s===0?s=i:e[l+1]=Jl(e[l+1],i),l=i;c&&(e[i+1]=Dc(e[i+1])),Wm(e,d,i,!0),Wm(e,d,i,!1),QD(t,d,e,i,a),r=Ka(s,l),a?t.classBindings=r:t.styleBindings=r}function QD(e,t,n,i,o){let a=o?e.residualClasses:e.residualStyles;a!=null&&typeof t=="string"&&_t(a,t)>=0&&(n[i+1]=vc(n[i+1]))}function Wm(e,t,n,i){let o=e[n+1],a=t===null,r=i?ft(o):ni(o),s=!1;for(;r!==0&&(s===!1||a);){let l=e[r],c=e[r+1];XD(l,t)&&(s=!0,e[r+1]=i?vc(c):Dc(c)),r=i?ft(c):ni(c)}s&&(e[n+1]=i?Dc(o):vc(o))}function XD(e,t){return e===null||t==null||(Array.isArray(e)?e[1]:e)===t?!0:Array.isArray(e)&&typeof t=="string"?_t(e,t)>=0:!1}function yt(e,t,n){return Tp(e,t,n,!1),yt}function Dt(e,t){return Tp(e,t,null,!0),Dt}function Tp(e,t,n,i){let o=O(),a=De(),r=nm(2);if(a.firstUpdatePass&&nv(a,e,r,i),t!==kn&&oi(o,r,t)){let s=a.data[Nn()];rv(a,s,o,o[Y],e,o[r+1]=sv(t,n),i,r)}}function ev(e,t){return t>=e.expandoStartIndex}function nv(e,t,n,i){let o=e.data;if(o[n+1]===null){let a=o[Nn()],r=ev(e,n);lv(a,i)&&t===null&&!r&&(t=!1),t=tv(o,a,t,i),ZD(o,a,t,n,r,i)}}function tv(e,t,n,i){let o=am(e),a=i?t.residualClasses:t.residualStyles;if(o===null)(i?t.classBindings:t.styleBindings)===0&&(n=Ul(null,e,t,n,i),n=Xi(n,t.attrs,i),a=null);else{let r=t.directiveStylingLast;if(r===-1||e[r]!==o)if(n=Ul(o,e,t,n,i),a===null){let l=iv(e,t,i);l!==void 0&&Array.isArray(l)&&(l=Ul(null,e,t,l[1],i),l=Xi(l,t.attrs,i),ov(e,t,i,l))}else a=av(e,t,i)}return a!==void 0&&(i?t.residualClasses=a:t.residualStyles=a),n}function iv(e,t,n){let i=n?t.classBindings:t.styleBindings;if(ni(i)!==0)return e[ft(i)]}function ov(e,t,n,i){let o=n?t.classBindings:t.styleBindings;e[ft(o)]=i}function av(e,t,n){let i,o=t.directiveEnd;for(let a=1+t.directiveStylingLast;a<o;a++){let r=e[a].hostAttrs;i=Xi(i,r,n)}return Xi(i,t.attrs,n)}function Ul(e,t,n,i,o){let a=null,r=n.directiveEnd,s=n.directiveStylingLast;for(s===-1?s=n.directiveStart:s++;s<r&&(a=t[s],i=Xi(i,a.hostAttrs,o),a!==e);)s++;return e!==null&&(n.directiveStylingLast=s),i}function Xi(e,t,n){let i=n?1:2,o=-1;if(t!==null)for(let a=0;a<t.length;a++){let r=t[a];typeof r=="number"?o=r:o===i&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),Lu(e,r,n?!0:t[++a]))}return e===void 0?null:e}function rv(e,t,n,i,o,a,r,s){if(!(t.type&3))return;let l=e.data,c=l[s+1],d=YD(c)?qm(l,t,n,o,ni(c),r):void 0;if(!sr(d)){sr(a)||qD(c)&&(a=qm(l,null,n,o,s,r));let u=yl(Nn(),n);cy(i,r,u,o,a)}}function qm(e,t,n,i,o,a){let r=t===null,s;for(;o>0;){let l=e[o],c=Array.isArray(l),d=c?l[1]:l,u=d===null,h=n[o+1];h===kn&&(h=u?be:void 0);let m=u?Sa(h,i):d===i?h:void 0;if(c&&!sr(m)&&(m=Sa(l,i)),sr(m)&&(s=m,r))return s;let g=e[o+1];o=r?ft(g):ni(g)}if(t!==null){let l=a?t.residualClasses:t.residualStyles;l!=null&&(s=Sa(l,i))}return s}function sr(e){return e!==void 0}function sv(e,t){return e==null||e===""||(typeof t=="string"?e=e+t:typeof e=="object"&&(e=dn(xc(e)))),e}function lv(e,t){return(e.flags&(t?8:16))!==0}function j(e,t=""){let n=O(),i=De(),o=e+se,a=i.firstCreatePass?vr(i,o,1,t,null):i.data[o],r=cv(i,n,a,t);n[o]=r,Na()&&Hc(i,n,r,a),Jt(a,!1)}var cv=(e,t,n,i)=>(La(!0),bk(t[Y],i));function dv(e,t,n,i=""){return oi(e,Ut(),n)?t+Da(n)+i:kn}function tn(e){return Ce("",e),tn}function Ce(e,t,n){let i=O(),o=dv(i,e,t,n);return o!==kn&&uv(i,Nn(),o),Ce}function uv(e,t,n){let i=yl(t,e);wk(e[Y],i,n)}var lr=class{ngModuleFactory;componentFactories;constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}},Yc=(()=>{class e{compileModuleSync(n){return new ir(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let i=this.compileModuleSync(n),o=rl(n),a=Bh(o.declarations).reduce((r,s)=>{let l=Tn(s);return l&&r.push(new Xt(l)),r},[]);return new lr(i,a)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ep=(()=>{class e{applicationErrorHandler=p(Xe);appRef=p(Rt);taskService=p(fn);ngZone=p($);zonelessEnabled=p(Wt);tracing=p(io,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Z;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Oi):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(p(Fa,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let n=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(n);return}this.switchToMicrotaskScheduler(),this.taskService.remove(n)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let n=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(n)})})}notify(n){if(!this.zonelessEnabled&&n===5)return;switch(n){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?hm:Hl;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Oi+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let n=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(n),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let n=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(n)}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Pp(){return[{provide:wn,useExisting:Ep},{provide:$,useClass:Fi},{provide:Wt,useValue:!0}]}function mv(){return typeof $localize<"u"&&$localize.locale||co}var Zc=new v("",{factory:()=>p(Zc,{optional:!0,skipSelf:!0})||mv()});function uo(e,t){return Go(e,t?.equal)}var Lp=Symbol("InputSignalNode#UNSET"),Av=b(f({},Ko),{transformFn:void 0,applyValueToInputSignal(e,t){xi(e,t)}});function Op(e,t){let n=Object.create(Av);n.value=e,n.transformFn=t?.transform;function i(){if(Si(n),n.value===Lp){let o=null;throw new k(-950,o)}return n.value}return i[pe]=n,i}function Ip(e,t){return Op(e,t)}function xv(e){return Op(Lp,e)}var Fp=(Ip.required=xv,Ip);var bv=(()=>{class e{zone=p($);changeDetectionScheduler=p(wn);applicationRef=p(Rt);applicationErrorHandler=p(Xe);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(n){this.applicationErrorHandler(n)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),wv=new v("",{factory:()=>!1});function Tv({ngZoneFactory:e,scheduleInRootZone:t}){return e??=()=>new $(b(f({},Bp()),{scheduleInRootZone:t})),[{provide:Wt,useValue:!1},{provide:$,useFactory:e},{provide:En,multi:!0,useFactory:()=>{let n=p(bv,{optional:!0});return()=>n.initialize()}},{provide:En,multi:!0,useFactory:()=>{let n=p(Ev);return()=>{n.initialize()}}},{provide:Fa,useValue:t??Fl}]}function Hp(e){let t=e?.scheduleInRootZone,n=Tv({ngZoneFactory:()=>{let i=Bp(e);return i.scheduleInRootZone=t,i.shouldCoalesceEventChangeDetection&&Fn("NgZone_CoalesceEvent"),new $(i)},scheduleInRootZone:t});return Gi([{provide:wv,useValue:!0},n])}function Bp(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:e?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:e?.runCoalescing??!1}}var Ev=(()=>{class e{subscription=new Z;initialized=!1;zone=p($);pendingTasks=p(fn);initialize(){if(this.initialized)return;this.initialized=!0;let n=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(n=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{$.assertNotInAngularZone(),queueMicrotask(()=>{n!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(n),n=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{$.assertInAngularZone(),n??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Qc=new v(""),Pv=new v("");function mo(e){return!e.moduleRef}function Iv(e){let t=mo(e)?e.r3Injector:e.moduleRef.injector,n=t.get($);return n.run(()=>{mo(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let i=t.get(Xe),o;if(n.runOutsideAngular(()=>{o=n.onError.subscribe({next:i})}),mo(e)){let a=()=>t.destroy(),r=e.platformInjector.get(Qc);r.add(a),t.onDestroy(()=>{o.unsubscribe(),r.delete(a)})}else{let a=()=>e.moduleRef.destroy(),r=e.platformInjector.get(Qc);r.add(a),e.moduleRef.onDestroy(()=>{Wi(e.allPlatformModules,e.moduleRef),o.unsubscribe(),r.delete(a)})}return Lv(i,n,()=>{let a=t.get(fn),r=a.add(),s=t.get(Uc);return s.runInitializers(),s.donePromise.then(()=>{let l=t.get(Zc,co);if(wp(l||co),!t.get(Pv,!0))return mo(e)?t.get(Rt):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(mo(e)){let d=t.get(Rt);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return Nv?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{a.remove(r)})})})}var Nv;function Lv(e,t,n){try{let i=n();return lo(i)?i.catch(o=>{throw t.runOutsideAngular(()=>e(o)),o}):i}catch(i){throw t.runOutsideAngular(()=>e(i)),i}}var br=null;function Ov(e=[],t){return we.create({name:t,providers:[{provide:Ki,useValue:"platform"},{provide:Qc,useValue:new Set([()=>br=null])},...e]})}function Fv(e=[]){if(br)return br;let t=Ov(e);return br=t,Ap(),Hv(t),t}function Hv(e){let t=e.get(hr,null);ce(e,()=>{t?.forEach(n=>n())})}var Bv=1e4;var _3=Bv-1e3;var ho=(()=>{class e{static __NG_ELEMENT_ID__=_v}return e})();function _v(e){return Gv(Le(),O(),(e&16)===16)}function Gv(e,t,n){if(ct(e)&&!n){let i=Ye(e.index,t);return new On(i,i)}else if(e.type&175){let i=t[ke];return new On(i,t)}return null}function _p(e){let{rootComponent:t,appProviders:n,platformProviders:i,platformRef:o}=e;K(F.BootstrapApplicationStart);try{let a=o?.injector??Fv(i),r=[Pp(),fm,...n||[]],s=new Qi({providers:r,parent:a,debugName:"",runEnvironmentInitializers:!1});return Iv({r3Injector:s.injector,platformInjector:a,rootComponent:t})}catch(a){return Promise.reject(a)}finally{K(F.BootstrapApplicationEnd)}}var Gp=null;function vn(){return Gp}function Xc(e){Gp??=e}var po=class{},wr=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>p(Kp),providedIn:"platform"})}return e})();var Kp=(()=>{class e extends wr{_location;_history;_doc=p(ie);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return vn().getBaseHref(this._doc)}onPopState(n){let i=vn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=vn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,o){this._history.pushState(n,i,o)}replaceState(n,i,o){this._history.replaceState(n,i,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function jp(e,t){return e?t?e.endsWith("/")?t.startsWith("/")?e+t.slice(1):e+t:t.startsWith("/")?e+t:`${e}/${t}`:e:t}function zp(e){let t=e.search(/#|\?|$/);return e[t-1]==="/"?e.slice(0,t-1)+e.slice(t):e}function zn(e){return e&&e[0]!=="?"?`?${e}`:e}var Tr=(()=>{class e{historyGo(n){throw new Error("")}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>p(zv),providedIn:"root"})}return e})(),Kv=new v(""),zv=(()=>{class e extends Tr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(n,i){super(),this._platformLocation=n,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??p(ie).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return jp(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+zn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${i}${o}`:i}pushState(n,i,o,a){let r=this.prepareExternalUrl(o+zn(a));this._platformLocation.pushState(n,i,r)}replaceState(n,i,o,a){let r=this.prepareExternalUrl(o+zn(a));this._platformLocation.replaceState(n,i,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}static \u0275fac=function(i){return new(i||e)(x(wr),x(Kv,8))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),li=(()=>{class e{_subject=new ae;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(n){this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Jv(zp(Vp(i))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+zn(i))}normalize(n){return e.stripTrailingSlash(jv(this._basePath,Vp(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",o=null){this._locationStrategy.pushState(o,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+zn(i)),o)}replaceState(n,i="",o=null){this._locationStrategy.replaceState(o,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+zn(i)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(o=>o(n,i))}subscribe(n,i,o){return this._subject.subscribe({next:n,error:i??void 0,complete:o??void 0})}static normalizeQueryParams=zn;static joinWithSlash=jp;static stripTrailingSlash=zp;static \u0275fac=function(i){return new(i||e)(x(Tr))};static \u0275prov=R({token:e,factory:()=>Vv(),providedIn:"root"})}return e})();function Vv(){return new li(x(Tr))}function jv(e,t){if(!e||!t.startsWith(e))return t;let n=t.substring(e.length);return n===""||["/",";","?","#"].includes(n[0])?n:t}function Vp(e){return e.replace(/\/index.html$/,"")}function Jv(e){if(new RegExp("^(https?:)?//").test(e)){let[,n]=e.split(/\/\/[^\/]+/);return n}return e}var ci=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=so({type:e});static \u0275inj=Bt({})}return e})();function ed(e,t){t=encodeURIComponent(t);for(let n of e.split(";")){let i=n.indexOf("="),[o,a]=i==-1?[n,""]:[n.slice(0,i),n.slice(i+1)];if(o.trim()===t)return decodeURIComponent(a)}return null}var fo=class{};var Jp="browser";var go=class{_doc;constructor(t){this._doc=t}manager},Er=(()=>{class e extends go{constructor(n){super(n)}supports(n){return!0}addEventListener(n,i,o,a){return n.addEventListener(i,o,a),()=>this.removeEventListener(n,i,o,a)}removeEventListener(n,i,o,a){return n.removeEventListener(i,o,a)}static \u0275fac=function(i){return new(i||e)(x(ie))};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})(),Nr=new v(""),od=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(n,i){this._zone=i,n.forEach(r=>{r.manager=this});let o=n.filter(r=>!(r instanceof Er));this._plugins=o.slice().reverse();let a=n.find(r=>r instanceof Er);a&&this._plugins.push(a)}addEventListener(n,i,o,a){return this._findPluginFor(i).addEventListener(n,i,o,a)}getZone(){return this._zone}_findPluginFor(n){let i=this._eventNameToPlugin.get(n);if(i)return i;if(i=this._plugins.find(a=>a.supports(n)),!i)throw new k(5101,!1);return this._eventNameToPlugin.set(n,i),i}static \u0275fac=function(i){return new(i||e)(x(Nr),x($))};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})(),nd="ng-app-id";function Up(e){for(let t of e)t.remove()}function Wp(e,t){let n=t.createElement("style");return n.textContent=e,n}function Wv(e,t,n,i){let o=e.head?.querySelectorAll(`style[${nd}="${t}"],link[${nd}="${t}"]`);if(o)for(let a of o)a.removeAttribute(nd),a instanceof HTMLLinkElement?i.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&n.set(a.textContent,{usage:0,elements:[a]})}function id(e,t){let n=t.createElement("link");return n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n}var ad=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(n,i,o,a={}){this.doc=n,this.appId=i,this.nonce=o,Wv(n,i,this.inline,this.external),this.hosts.add(n.head)}addStyles(n,i){for(let o of n)this.addUsage(o,this.inline,Wp);i?.forEach(o=>this.addUsage(o,this.external,id))}removeStyles(n,i){for(let o of n)this.removeUsage(o,this.inline);i?.forEach(o=>this.removeUsage(o,this.external))}addUsage(n,i,o){let a=i.get(n);a?a.usage++:i.set(n,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,o(n,this.doc)))})}removeUsage(n,i){let o=i.get(n);o&&(o.usage--,o.usage<=0&&(Up(o.elements),i.delete(n)))}ngOnDestroy(){for(let[,{elements:n}]of[...this.inline,...this.external])Up(n);this.hosts.clear()}addHost(n){this.hosts.add(n);for(let[i,{elements:o}]of this.inline)o.push(this.addElement(n,Wp(i,this.doc)));for(let[i,{elements:o}]of this.external)o.push(this.addElement(n,id(i,this.doc)))}removeHost(n){this.hosts.delete(n)}addElement(n,i){return this.nonce&&i.setAttribute("nonce",this.nonce),n.appendChild(i)}static \u0275fac=function(i){return new(i||e)(x(ie),x(mr),x(pr,8),x(no))};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})(),td={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},rd=/%COMP%/g;var $p="%COMP%",qv=`_nghost-${$p}`,$v=`_ngcontent-${$p}`,Yv=!0,Zv=new v("",{factory:()=>Yv});function Qv(e){return $v.replace(rd,e)}function Xv(e){return qv.replace(rd,e)}function Yp(e,t){return t.map(n=>n.replace(rd,e))}var sd=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(n,i,o,a,r,s,l=null,c=null){this.eventManager=n,this.sharedStylesHost=i,this.appId=o,this.removeStylesOnCompDestroy=a,this.doc=r,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Ro(n,r,s,this.tracingService)}createRenderer(n,i){if(!n||!i)return this.defaultRenderer;let o=this.getOrCreateRenderer(n,i);return o instanceof Ir?o.applyToHost(n):o instanceof ko&&o.applyStyles(),o}getOrCreateRenderer(n,i){let o=this.rendererByCompId,a=o.get(i.id);if(!a){let r=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(i.encapsulation){case Ve.Emulated:a=new Ir(l,c,i,this.appId,d,r,s,u);break;case Ve.ShadowDom:return new Pr(l,n,i,r,s,this.nonce,u,c);case Ve.ExperimentalIsolatedShadowDom:return new Pr(l,n,i,r,s,this.nonce,u);default:a=new ko(l,c,i,d,r,s,u);break}o.set(i.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(n){this.rendererByCompId.delete(n)}static \u0275fac=function(i){return new(i||e)(x(od),x(ad),x(mr),x(Zv),x(ie),x($),x(pr),x(io,8))};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})(),Ro=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,n,i,o){this.eventManager=t,this.doc=n,this.ngZone=i,this.tracingService=o}destroy(){}destroyNode=null;createElement(t,n){return n?this.doc.createElementNS(td[n]||n,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,n){(qp(t)?t.content:t).appendChild(n)}insertBefore(t,n,i){t&&(qp(t)?t.content:t).insertBefore(n,i)}removeChild(t,n){n.remove()}selectRootElement(t,n){let i=typeof t=="string"?this.doc.querySelector(t):t;if(!i)throw new k(-5104,!1);return n||(i.textContent=""),i}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,n,i,o){if(o){n=o+":"+n;let a=td[o];a?t.setAttributeNS(a,n,i):t.setAttribute(n,i)}else t.setAttribute(n,i)}removeAttribute(t,n,i){if(i){let o=td[i];o?t.removeAttributeNS(o,n):t.removeAttribute(`${i}:${n}`)}else t.removeAttribute(n)}addClass(t,n){t.classList.add(n)}removeClass(t,n){t.classList.remove(n)}setStyle(t,n,i,o){o&(gn.DashCase|gn.Important)?t.style.setProperty(n,i,o&gn.Important?"important":""):t.style[n]=i}removeStyle(t,n,i){i&gn.DashCase?t.style.removeProperty(n):t.style[n]=""}setProperty(t,n,i){t!=null&&(t[n]=i)}setValue(t,n){t.nodeValue=n}listen(t,n,i,o){if(typeof t=="string"&&(t=vn().getGlobalEventTarget(this.doc,t),!t))throw new k(5102,!1);let a=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(t,n,a)),this.eventManager.addEventListener(t,n,a,o)}decoratePreventDefault(t){return n=>{if(n==="__ngUnwrap__")return t;t(n)===!1&&n.preventDefault()}}};function qp(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var Pr=class extends Ro{hostEl;sharedStylesHost;shadowRoot;constructor(t,n,i,o,a,r,s,l){super(t,o,a,s),this.hostEl=n,this.sharedStylesHost=l,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=Yp(i.id,c);for(let u of c){let h=document.createElement("style");r&&h.setAttribute("nonce",r),h.textContent=u,this.shadowRoot.appendChild(h)}let d=i.getExternalStyles?.();if(d)for(let u of d){let h=id(u,o);r&&h.setAttribute("nonce",r),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,n){return super.appendChild(this.nodeOrShadowRoot(t),n)}insertBefore(t,n,i){return super.insertBefore(this.nodeOrShadowRoot(t),n,i)}removeChild(t,n){return super.removeChild(null,n)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ko=class extends Ro{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,n,i,o,a,r,s,l){super(t,a,r,s),this.sharedStylesHost=n,this.removeStylesOnCompDestroy=o;let c=i.styles;this.styles=l?Yp(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ht.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Ir=class extends ko{contentAttr;hostAttr;constructor(t,n,i,o,a,r,s,l){let c=o+"-"+i.id;super(t,n,i,a,r,s,l,c),this.contentAttr=Qv(c),this.hostAttr=Xv(c)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,n){let i=super.createElement(t,n);return super.setAttribute(i,this.contentAttr,""),i}};var Lr=class e extends po{supportsDOMEvents=!0;static makeCurrent(){Xc(new e)}onAndCancel(t,n,i,o){return t.addEventListener(n,i,o),()=>{t.removeEventListener(n,i,o)}}dispatchEvent(t,n){t.dispatchEvent(n)}remove(t){t.remove()}createElement(t,n){return n=n||this.getDefaultDocument(),n.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,n){return n==="window"?window:n==="document"?t:n==="body"?t.body:null}getBaseHref(t){let n=eM();return n==null?null:nM(n)}resetBaseElement(){yo=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return ed(document.cookie,t)}},yo=null;function eM(){return yo=yo||document.head.querySelector("base"),yo?yo.getAttribute("href"):null}function nM(e){return new URL(e,document.baseURI).pathname}var tM=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})(),Zp=["alt","control","meta","shift"],iM={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},oM={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Qp=(()=>{class e extends go{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,i,o,a){let r=e.parseEventName(i),s=e.eventCallback(r.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>vn().onAndCancel(n,r.domEventName,s,a))}static parseEventName(n){let i=n.toLowerCase().split("."),o=i.shift();if(i.length===0||!(o==="keydown"||o==="keyup"))return null;let a=e._normalizeKey(i.pop()),r="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),r="code."),Zp.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),r+=c+".")}),r+=a,i.length!=0||a.length===0)return null;let l={};return l.domEventName=o,l.fullKey=r,l}static matchEventFullKeyCode(n,i){let o=iM[n.key]||n.key,a="";return i.indexOf("code.")>-1&&(o=n.code,a="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Zp.forEach(r=>{if(r!==o){let s=oM[r];s(n)&&(a+=r+".")}}),a+=o,a===i)}static eventCallback(n,i,o){return a=>{e.matchEventFullKeyCode(a,n)&&o.runGuarded(()=>i(a))}}static _normalizeKey(n){return n==="esc"?"escape":n}static \u0275fac=function(i){return new(i||e)(x(ie))};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();function ld(e,t,n){return V(this,null,function*(){let i=f({rootComponent:e},aM(t,n));return _p(i)})}function aM(e,t){return{platformRef:t?.platformRef,appProviders:[...dM,...e?.providers??[]],platformProviders:cM}}function rM(){Lr.makeCurrent()}function sM(){return new un}function lM(){return Cc(document),document}var cM=[{provide:no,useValue:Jp},{provide:hr,useValue:rM,multi:!0},{provide:ie,useFactory:lM}];var dM=[{provide:Ki,useValue:"root"},{provide:un,useFactory:sM},{provide:Nr,useClass:Er,multi:!0},{provide:Nr,useClass:Qp,multi:!0},sd,ad,od,{provide:pt,useExisting:sd},{provide:fo,useClass:tM},[]];var Xp=(()=>{class e{_doc;constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}static \u0275fac=function(i){return new(i||e)(x(ie))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var S="primary",Po=Symbol("RouteTitle"),hd=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n[0]:n}return null}getAll(t){if(this.has(t)){let n=this.params[t];return Array.isArray(n)?n:[n]}return[]}get keys(){return Object.keys(this.params)}};function St(e){return new hd(e)}function cd(e,t,n){for(let i=0;i<e.length;i++){let o=e[i],a=t[i];if(o[0]===":")n[o.substring(1)]=a;else if(o!==a.path)return!1}return!0}function df(e,t,n){let i=n.path.split("/"),o=i.indexOf("**");if(o===-1){if(i.length>e.length||n.pathMatch==="full"&&(t.hasChildren()||i.length<e.length))return null;let l={},c=e.slice(0,i.length);return cd(i,c,l)?{consumed:c,posParams:l}:null}if(o!==i.lastIndexOf("**"))return null;let a=i.slice(0,o),r=i.slice(o+1);if(a.length+r.length>e.length||n.pathMatch==="full"&&t.hasChildren()&&n.path!=="**")return null;let s={};return!cd(a,e.slice(0,a.length),s)||!cd(r,e.slice(e.length-r.length),s)?null:{consumed:e,posParams:s}}function Gr(e){return new Promise((t,n)=>{e.pipe(sn()).subscribe({next:i=>t(i),error:i=>n(i)})})}function mM(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!on(e[n],t[n]))return!1;return!0}function on(e,t){let n=e?pd(e):void 0,i=t?pd(t):void 0;if(!n||!i||n.length!=i.length)return!1;let o;for(let a=0;a<n.length;a++)if(o=n[a],!uf(e[o],t[o]))return!1;return!0}function pd(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function uf(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;let n=[...e].sort(),i=[...t].sort();return n.every((o,a)=>i[a]===o)}else return e===t}function hM(e){return e.length>0?e[e.length-1]:null}function xt(e){return aa(e)?e:lo(e)?te(Promise.resolve(e)):T(e)}function mf(e){return aa(e)?Gr(e):Promise.resolve(e)}var pM={exact:pf,subset:ff},hf={exact:fM,subset:gM,ignored:()=>!0};function ef(e,t,n){return pM[n.paths](e.root,t.root,n.matrixParams)&&hf[n.queryParams](e.queryParams,t.queryParams)&&!(n.fragment==="exact"&&e.fragment!==t.fragment)}function fM(e,t){return on(e,t)}function pf(e,t,n){if(!vt(e.segments,t.segments)||!Hr(e.segments,t.segments,n)||e.numberOfChildren!==t.numberOfChildren)return!1;for(let i in t.children)if(!e.children[i]||!pf(e.children[i],t.children[i],n))return!1;return!0}function gM(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>uf(e[n],t[n]))}function ff(e,t,n){return gf(e,t,t.segments,n)}function gf(e,t,n,i){if(e.segments.length>n.length){let o=e.segments.slice(0,n.length);return!(!vt(o,n)||t.hasChildren()||!Hr(o,n,i))}else if(e.segments.length===n.length){if(!vt(e.segments,n)||!Hr(e.segments,n,i))return!1;for(let o in t.children)if(!e.children[o]||!ff(e.children[o],t.children[o],i))return!1;return!0}else{let o=n.slice(0,e.segments.length),a=n.slice(e.segments.length);return!vt(e.segments,o)||!Hr(e.segments,o,i)||!e.children[S]?!1:gf(e.children[S],t,a,i)}}function Hr(e,t,n){return t.every((i,o)=>hf[n](e[o].parameters,i.parameters))}var Je=class{root;queryParams;fragment;_queryParamMap;constructor(t=new H([],{}),n={},i=null){this.root=t,this.queryParams=n,this.fragment=i}get queryParamMap(){return this._queryParamMap??=St(this.queryParams),this._queryParamMap}toString(){return yM.serialize(this)}},H=class{segments;children;parent=null;constructor(t,n){this.segments=t,this.children=n,Object.values(n).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Br(this)}},Vn=class{path;parameters;_parameterMap;constructor(t,n){this.path=t,this.parameters=n}get parameterMap(){return this._parameterMap??=St(this.parameters),this._parameterMap}toString(){return kf(this)}};function RM(e,t){return vt(e,t)&&e.every((n,i)=>on(n.parameters,t[i].parameters))}function vt(e,t){return e.length!==t.length?!1:e.every((n,i)=>n.path===t[i].path)}function kM(e,t){let n=[];return Object.entries(e.children).forEach(([i,o])=>{i===S&&(n=n.concat(t(o,i)))}),Object.entries(e.children).forEach(([i,o])=>{i!==S&&(n=n.concat(t(o,i)))}),n}var Io=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>new jn,providedIn:"root"})}return e})(),jn=class{parse(t){let n=new gd(t);return new Je(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())}serialize(t){let n=`/${Do(t.root,!0)}`,i=MM(t.queryParams),o=typeof t.fragment=="string"?`#${DM(t.fragment)}`:"";return`${n}${i}${o}`}},yM=new jn;function Br(e){return e.segments.map(t=>kf(t)).join("/")}function Do(e,t){if(!e.hasChildren())return Br(e);if(t){let n=e.children[S]?Do(e.children[S],!1):"",i=[];return Object.entries(e.children).forEach(([o,a])=>{o!==S&&i.push(`${o}:${Do(a,!1)}`)}),i.length>0?`${n}(${i.join("//")})`:n}else{let n=kM(e,(i,o)=>o===S?[Do(e.children[S],!1)]:[`${o}:${Do(i,!1)}`]);return Object.keys(e.children).length===1&&e.children[S]!=null?`${Br(e)}/${n[0]}`:`${Br(e)}/(${n.join("//")})`}}function Rf(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Or(e){return Rf(e).replace(/%3B/gi,";")}function DM(e){return encodeURI(e)}function fd(e){return Rf(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _r(e){return decodeURIComponent(e)}function nf(e){return _r(e.replace(/\+/g,"%20"))}function kf(e){return`${fd(e.path)}${vM(e.parameters)}`}function vM(e){return Object.entries(e).map(([t,n])=>`;${fd(t)}=${fd(n)}`).join("")}function MM(e){let t=Object.entries(e).map(([n,i])=>Array.isArray(i)?i.map(o=>`${Or(n)}=${Or(o)}`).join("&"):`${Or(n)}=${Or(i)}`).filter(n=>n);return t.length?`?${t.join("&")}`:""}var SM=/^[^\/()?;#]+/;function dd(e){let t=e.match(SM);return t?t[0]:""}var CM=/^[^\/()?;=#]+/;function AM(e){let t=e.match(CM);return t?t[0]:""}var xM=/^[^=?&#]+/;function bM(e){let t=e.match(xM);return t?t[0]:""}var wM=/^[^&#]+/;function TM(e){let t=e.match(wM);return t?t[0]:""}var gd=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new H([],{}):new H([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new k(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,t));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1,t)),(n.length>0||Object.keys(i).length>0)&&(o[S]=new H(n,i)),o}parseSegment(){let t=dd(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new k(4009,!1);return this.capture(t),new Vn(_r(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let n=AM(this.remaining);if(!n)return;this.capture(n);let i="";if(this.consumeOptional("=")){let o=dd(this.remaining);o&&(i=o,this.capture(i))}t[_r(n)]=_r(i)}parseQueryParam(t){let n=bM(this.remaining);if(!n)return;this.capture(n);let i="";if(this.consumeOptional("=")){let r=TM(this.remaining);r&&(i=r,this.capture(i))}let o=nf(n),a=nf(i);if(t.hasOwnProperty(o)){let r=t[o];Array.isArray(r)||(r=[r],t[o]=r),r.push(a)}else t[o]=a}parseParens(t,n){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=dd(this.remaining),a=this.remaining[o.length];if(a!=="/"&&a!==")"&&a!==";")throw new k(4010,!1);let r;o.indexOf(":")>-1?(r=o.slice(0,o.indexOf(":")),this.capture(r),this.capture(":")):t&&(r=S);let s=this.parseChildren(n+1);i[r??S]=Object.keys(s).length===1&&s[S]?s[S]:new H([],s),this.consumeOptional("//")}return i}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new k(4011,!1)}};function yf(e){return e.segments.length>0?new H([],{[S]:e}):e}function Df(e){let t={};for(let[i,o]of Object.entries(e.children)){let a=Df(o);if(i===S&&a.segments.length===0&&a.hasChildren())for(let[r,s]of Object.entries(a.children))t[r]=s;else(a.segments.length>0||a.hasChildren())&&(t[i]=a)}let n=new H(e.segments,t);return EM(n)}function EM(e){if(e.numberOfChildren===1&&e.children[S]){let t=e.children[S];return new H(e.segments.concat(t.segments),t.children)}return e}function hi(e){return e instanceof Je}function vf(e,t,n=null,i=null,o=new jn){let a=Mf(e);return Sf(a,t,n,i,o)}function Mf(e){let t;function n(a){let r={};for(let l of a.children){let c=n(l);r[l.outlet]=c}let s=new H(a.url,r);return a===e&&(t=s),s}let i=n(e.root),o=yf(i);return t??o}function Sf(e,t,n,i,o){let a=e;for(;a.parent;)a=a.parent;if(t.length===0)return ud(a,a,a,n,i,o);let r=PM(t);if(r.toRoot())return ud(a,a,new H([],{}),n,i,o);let s=IM(r,a,e),l=s.processChildren?Mo(s.segmentGroup,s.index,r.commands):Af(s.segmentGroup,s.index,r.commands);return ud(a,s.segmentGroup,l,n,i,o)}function Kr(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Ao(e){return typeof e=="object"&&e!=null&&e.outlets}function tf(e,t,n){e||="\u0275";let i=new Je;return i.queryParams={[e]:t},n.parse(n.serialize(i)).queryParams[e]}function ud(e,t,n,i,o,a){let r={};for(let[c,d]of Object.entries(i??{}))r[c]=Array.isArray(d)?d.map(u=>tf(c,u,a)):tf(c,d,a);let s;e===t?s=n:s=Cf(e,t,n);let l=yf(Df(s));return new Je(l,r,o)}function Cf(e,t,n){let i={};return Object.entries(e.children).forEach(([o,a])=>{a===t?i[o]=n:i[o]=Cf(a,t,n)}),new H(e.segments,i)}var zr=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,n,i){if(this.isAbsolute=t,this.numberOfDoubleDots=n,this.commands=i,t&&i.length>0&&Kr(i[0]))throw new k(4003,!1);let o=i.find(Ao);if(o&&o!==hM(i))throw new k(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function PM(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new zr(!0,0,e);let t=0,n=!1,i=e.reduce((o,a,r)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...o,{outlets:s}]}if(a.segmentPath)return[...o,a.segmentPath]}return typeof a!="string"?[...o,a]:r===0?(a.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?n=!0:s===".."?t++:s!=""&&o.push(s))}),o):[...o,a]},[]);return new zr(n,t,i)}var ui=class{segmentGroup;processChildren;index;constructor(t,n,i){this.segmentGroup=t,this.processChildren=n,this.index=i}};function IM(e,t,n){if(e.isAbsolute)return new ui(t,!0,0);if(!n)return new ui(t,!1,NaN);if(n.parent===null)return new ui(n,!0,0);let i=Kr(e.commands[0])?0:1,o=n.segments.length-1+i;return NM(n,o,e.numberOfDoubleDots)}function NM(e,t,n){let i=e,o=t,a=n;for(;a>o;){if(a-=o,i=i.parent,!i)throw new k(4005,!1);o=i.segments.length}return new ui(i,!1,o-a)}function LM(e){return Ao(e[0])?e[0].outlets:{[S]:e}}function Af(e,t,n){if(e??=new H([],{}),e.segments.length===0&&e.hasChildren())return Mo(e,t,n);let i=OM(e,t,n),o=n.slice(i.commandIndex);if(i.match&&i.pathIndex<e.segments.length){let a=new H(e.segments.slice(0,i.pathIndex),{});return a.children[S]=new H(e.segments.slice(i.pathIndex),e.children),Mo(a,0,o)}else return i.match&&o.length===0?new H(e.segments,{}):i.match&&!e.hasChildren()?Rd(e,t,n):i.match?Mo(e,0,o):Rd(e,t,n)}function Mo(e,t,n){if(n.length===0)return new H(e.segments,{});{let i=LM(n),o={};if(Object.keys(i).some(a=>a!==S)&&e.children[S]&&e.numberOfChildren===1&&e.children[S].segments.length===0){let a=Mo(e.children[S],t,n);return new H(e.segments,a.children)}return Object.entries(i).forEach(([a,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(o[a]=Af(e.children[a],t,r))}),Object.entries(e.children).forEach(([a,r])=>{i[a]===void 0&&(o[a]=r)}),new H(e.segments,o)}}function OM(e,t,n){let i=0,o=t,a={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(i>=n.length)return a;let r=e.segments[o],s=n[i];if(Ao(s))break;let l=`${s}`,c=i<n.length-1?n[i+1]:null;if(o>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!af(l,c,r))return a;i+=2}else{if(!af(l,{},r))return a;i++}o++}return{match:!0,pathIndex:o,commandIndex:i}}function Rd(e,t,n){let i=e.segments.slice(0,t),o=0;for(;o<n.length;){let a=n[o];if(Ao(a)){let l=FM(a.outlets);return new H(i,l)}if(o===0&&Kr(n[0])){let l=e.segments[t];i.push(new Vn(l.path,of(n[0]))),o++;continue}let r=Ao(a)?a.outlets[S]:`${a}`,s=o<n.length-1?n[o+1]:null;r&&s&&Kr(s)?(i.push(new Vn(r,of(s))),o+=2):(i.push(new Vn(r,{})),o++)}return new H(i,{})}function FM(e){let t={};return Object.entries(e).forEach(([n,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(t[n]=Rd(new H([],{}),0,i))}),t}function of(e){let t={};return Object.entries(e).forEach(([n,i])=>t[n]=`${i}`),t}function af(e,t,n){return e==n.path&&on(t,n.parameters)}var So="imperative",oe=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(oe||{}),xe=class{id;url;constructor(t,n){this.id=t,this.url=n}},Ct=class extends xe{type=oe.NavigationStart;navigationTrigger;restoredState;constructor(t,n,i="imperative",o=null){super(t,n),this.navigationTrigger=i,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Sn=class extends xe{urlAfterRedirects;type=oe.NavigationEnd;constructor(t,n,i){super(t,n),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ue=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(ue||{}),xo=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(xo||{}),Oe=class extends xe{reason;code;type=oe.NavigationCancel;constructor(t,n,i,o){super(t,n),this.reason=i,this.code=o}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function xf(e){return e instanceof Oe&&(e.code===ue.Redirect||e.code===ue.SupersededByNewNavigation)}var Cn=class extends xe{reason;code;type=oe.NavigationSkipped;constructor(t,n,i,o){super(t,n),this.reason=i,this.code=o}},At=class extends xe{error;target;type=oe.NavigationError;constructor(t,n,i,o){super(t,n),this.error=i,this.target=o}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},pi=class extends xe{urlAfterRedirects;state;type=oe.RoutesRecognized;constructor(t,n,i,o){super(t,n),this.urlAfterRedirects=i,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vr=class extends xe{urlAfterRedirects;state;type=oe.GuardsCheckStart;constructor(t,n,i,o){super(t,n),this.urlAfterRedirects=i,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jr=class extends xe{urlAfterRedirects;state;shouldActivate;type=oe.GuardsCheckEnd;constructor(t,n,i,o,a){super(t,n),this.urlAfterRedirects=i,this.state=o,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Jr=class extends xe{urlAfterRedirects;state;type=oe.ResolveStart;constructor(t,n,i,o){super(t,n),this.urlAfterRedirects=i,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ur=class extends xe{urlAfterRedirects;state;type=oe.ResolveEnd;constructor(t,n,i,o){super(t,n),this.urlAfterRedirects=i,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wr=class{route;type=oe.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},qr=class{route;type=oe.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},$r=class{snapshot;type=oe.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yr=class{snapshot;type=oe.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zr=class{snapshot;type=oe.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qr=class{snapshot;type=oe.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var fi=class{},gi=class{url;navigationBehaviorOptions;constructor(t,n){this.url=t,this.navigationBehaviorOptions=n}};function HM(e){return!(e instanceof fi)&&!(e instanceof gi)}var Xr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new yi(this.rootInjector)}},yi=(()=>{class e{rootInjector;contexts=new Map;constructor(n){this.rootInjector=n}onChildOutletCreated(n,i){let o=this.getOrCreateContext(n);o.outlet=i,this.contexts.set(n,o)}onChildOutletDestroyed(n){let i=this.getContext(n);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let i=this.getContext(n);return i||(i=new Xr(this.rootInjector),this.contexts.set(n,i)),i}getContext(n){return this.contexts.get(n)||null}static \u0275fac=function(i){return new(i||e)(x(X))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),es=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let n=this.pathFromRoot(t);return n.length>1?n[n.length-2]:null}children(t){let n=kd(t,this._root);return n?n.children.map(i=>i.value):[]}firstChild(t){let n=kd(t,this._root);return n&&n.children.length>0?n.children[0].value:null}siblings(t){let n=yd(t,this._root);return n.length<2?[]:n[n.length-2].children.map(o=>o.value).filter(o=>o!==t)}pathFromRoot(t){return yd(t,this._root).map(n=>n.value)}};function kd(e,t){if(e===t.value)return t;for(let n of t.children){let i=kd(e,n);if(i)return i}return null}function yd(e,t){if(e===t.value)return[t];for(let n of t.children){let i=yd(e,n);if(i.length)return i.unshift(t),i}return[]}var Ae=class{value;children;constructor(t,n){this.value=t,this.children=n}toString(){return`TreeNode(${this.value})`}};function di(e){let t={};return e&&e.children.forEach(n=>t[n.value.outlet]=n),t}var bo=class extends es{snapshot;constructor(t,n){super(t),this.snapshot=n,bd(this,t)}toString(){return this.snapshot.toString()}};function bf(e,t){let n=BM(e,t),i=new Q([new Vn("",{})]),o=new Q({}),a=new Q({}),r=new Q({}),s=new Q(""),l=new Jn(i,o,r,s,a,S,e,n.root);return l.snapshot=n.root,new bo(new Ae(l,[]),n)}function BM(e,t){let n={},i={},o={},r=new Mt([],n,o,"",i,S,e,null,{},t);return new wo("",new Ae(r,[]))}var Jn=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,n,i,o,a,r,s,l){this.urlSubject=t,this.paramsSubject=n,this.queryParamsSubject=i,this.fragmentSubject=o,this.dataSubject=a,this.outlet=r,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(J(c=>c[Po]))??T(void 0),this.url=t,this.params=n,this.queryParams=i,this.fragment=o,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(J(t=>St(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(J(t=>St(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ns(e,t,n="emptyOnly"){let i,{routeConfig:o}=e;return t!==null&&(n==="always"||o?.path===""||!t.component&&!t.routeConfig?.loadComponent)?i={params:f(f({},t.params),e.params),data:f(f({},t.data),e.data),resolve:f(f(f(f({},e.data),t.data),o?.data),e._resolvedData)}:i={params:f({},e.params),data:f({},e.data),resolve:f(f({},e.data),e._resolvedData??{})},o&&Tf(o)&&(i.resolve[Po]=o.title),i}var Mt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Po]}constructor(t,n,i,o,a,r,s,l,c,d){this.url=t,this.params=n,this.queryParams=i,this.fragment=o,this.data=a,this.outlet=r,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=St(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=St(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(i=>i.toString()).join("/"),n=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${n}')`}},wo=class extends es{url;constructor(t,n){super(n),this.url=t,bd(this,n)}toString(){return wf(this._root)}};function bd(e,t){t.value._routerState=e,t.children.forEach(n=>bd(e,n))}function wf(e){let t=e.children.length>0?` { ${e.children.map(wf).join(", ")} } `:"";return`${e.value}${t}`}function md(e){if(e.snapshot){let t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,on(t.queryParams,n.queryParams)||e.queryParamsSubject.next(n.queryParams),t.fragment!==n.fragment&&e.fragmentSubject.next(n.fragment),on(t.params,n.params)||e.paramsSubject.next(n.params),mM(t.url,n.url)||e.urlSubject.next(n.url),on(t.data,n.data)||e.dataSubject.next(n.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Dd(e,t){let n=on(e.params,t.params)&&RM(e.url,t.url),i=!e.parent!=!t.parent;return n&&!i&&(!e.parent||Dd(e.parent,t.parent))}function Tf(e){return typeof e.title=="string"||e.title===null}var Ef=new v(""),No=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=S;activateEvents=new he;deactivateEvents=new he;attachEvents=new he;detachEvents=new he;routerOutletData=Fp();parentContexts=p(yi);location=p(gt);changeDetector=p(ho);inputBinder=p(as,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(n){if(n.name){let{firstChange:i,previousValue:o}=n.name;if(i)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new k(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new k(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new k(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,i){this.activated=n,this._activatedRoute=i,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,i){if(this.isActivated)throw new k(4013,!1);this._activatedRoute=n;let o=this.location,r=n.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new vd(n,s,o.injector,this.routerOutletData);this.activated=o.createComponent(r,{index:o.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=Cr({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[cr]})}return e})(),vd=class{route;childContexts;parent;outletData;constructor(t,n,i,o){this.route=t,this.childContexts=n,this.parent=i,this.outletData=o}get(t,n){return t===Jn?this.route:t===yi?this.childContexts:t===Ef?this.outletData:this.parent.get(t,n)}},as=new v("");var wd=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=Me({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,o){i&1&&Kn(0,"router-outlet")},dependencies:[No],encapsulation:2})}return e})();function Td(e){let t=e.children&&e.children.map(Td),n=t?b(f({},e),{children:t}):f({},e);return!n.component&&!n.loadComponent&&(t||n.loadChildren)&&n.outlet&&n.outlet!==S&&(n.component=wd),n}function _M(e,t,n){let i=To(e,t._root,n?n._root:void 0);return new bo(i,t)}function To(e,t,n){if(n&&e.shouldReuseRoute(t.value,n.value.snapshot)){let i=n.value;i._futureSnapshot=t.value;let o=GM(e,t,n);return new Ae(i,o)}else{if(e.shouldAttach(t.value)){let a=e.retrieve(t.value);if(a!==null){let r=a.route;return r.value._futureSnapshot=t.value,r.children=t.children.map(s=>To(e,s)),r}}let i=KM(t.value),o=t.children.map(a=>To(e,a));return new Ae(i,o)}}function GM(e,t,n){return t.children.map(i=>{for(let o of n.children)if(e.shouldReuseRoute(i.value,o.value.snapshot))return To(e,i,o);return To(e,i)})}function KM(e){return new Jn(new Q(e.url),new Q(e.params),new Q(e.queryParams),new Q(e.fragment),new Q(e.data),e.outlet,e.component,e)}var Ri=class{redirectTo;navigationBehaviorOptions;constructor(t,n){this.redirectTo=t,this.navigationBehaviorOptions=n}},Pf="ngNavigationCancelingError";function ts(e,t){let{redirectTo:n,navigationBehaviorOptions:i}=hi(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,o=If(!1,ue.Redirect);return o.url=n,o.navigationBehaviorOptions=i,o}function If(e,t){let n=new Error(`NavigationCancelingError: ${e||""}`);return n[Pf]=!0,n.cancellationCode=t,n}function zM(e){return Nf(e)&&hi(e.url)}function Nf(e){return!!e&&e[Pf]}var Md=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,n,i,o,a){this.routeReuseStrategy=t,this.futureState=n,this.currState=i,this.forwardEvent=o,this.inputBindingEnabled=a}activate(t){let n=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(n,i,t),md(this.futureState.root),this.activateChildRoutes(n,i,t)}deactivateChildRoutes(t,n,i){let o=di(n);t.children.forEach(a=>{let r=a.value.outlet;this.deactivateRoutes(a,o[r],i),delete o[r]}),Object.values(o).forEach(a=>{this.deactivateRouteAndItsChildren(a,i)})}deactivateRoutes(t,n,i){let o=t.value,a=n?n.value:null;if(o===a)if(o.component){let r=i.getContext(o.outlet);r&&this.deactivateChildRoutes(t,n,r.children)}else this.deactivateChildRoutes(t,n,i);else a&&this.deactivateRouteAndItsChildren(n,i)}deactivateRouteAndItsChildren(t,n){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,n):this.deactivateRouteAndOutlet(t,n)}detachAndStoreRouteSubtree(t,n){let i=n.getContext(t.value.outlet),o=i&&t.value.component?i.children:n,a=di(t);for(let r of Object.values(a))this.deactivateRouteAndItsChildren(r,o);if(i&&i.outlet){let r=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:r,route:t,contexts:s})}}deactivateRouteAndOutlet(t,n){let i=n.getContext(t.value.outlet),o=i&&t.value.component?i.children:n,a=di(t);for(let r of Object.values(a))this.deactivateRouteAndItsChildren(r,o);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(t,n,i){let o=di(n);t.children.forEach(a=>{this.activateRoutes(a,o[a.value.outlet],i),this.forwardEvent(new Qr(a.value.snapshot))}),t.children.length&&this.forwardEvent(new Yr(t.value.snapshot))}activateRoutes(t,n,i){let o=t.value,a=n?n.value:null;if(md(o),o===a)if(o.component){let r=i.getOrCreateContext(o.outlet);this.activateChildRoutes(t,n,r.children)}else this.activateChildRoutes(t,n,i);else if(o.component){let r=i.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){let s=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),r.children.onOutletReAttached(s.contexts),r.attachRef=s.componentRef,r.route=s.route.value,r.outlet&&r.outlet.attach(s.componentRef,s.route.value),md(s.route.value),this.activateChildRoutes(t,null,r.children)}else r.attachRef=null,r.route=o,r.outlet&&r.outlet.activateWith(o,r.injector),this.activateChildRoutes(t,null,r.children)}else this.activateChildRoutes(t,null,i)}},is=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},mi=class{component;route;constructor(t,n){this.component=t,this.route=n}};function VM(e,t,n){let i=e._root,o=t?t._root:null;return vo(i,o,n,[i.value])}function jM(e){let t=e.routeConfig?e.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:e,guards:t}}function Di(e,t){let n=Symbol(),i=t.get(e,n);return i===n?typeof e=="function"&&!el(e)?e:t.get(e):i}function vo(e,t,n,i,o={canDeactivateChecks:[],canActivateChecks:[]}){let a=di(t);return e.children.forEach(r=>{JM(r,a[r.value.outlet],n,i.concat([r.value]),o),delete a[r.value.outlet]}),Object.entries(a).forEach(([r,s])=>Co(s,n.getContext(r),o)),o}function JM(e,t,n,i,o={canDeactivateChecks:[],canActivateChecks:[]}){let a=e.value,r=t?t.value:null,s=n?n.getContext(e.value.outlet):null;if(r&&a.routeConfig===r.routeConfig){let l=UM(r,a,a.routeConfig.runGuardsAndResolvers);l?o.canActivateChecks.push(new is(i)):(a.data=r.data,a._resolvedData=r._resolvedData),a.component?vo(e,t,s?s.children:null,i,o):vo(e,t,n,i,o),l&&s&&s.outlet&&s.outlet.isActivated&&o.canDeactivateChecks.push(new mi(s.outlet.component,r))}else r&&Co(t,s,o),o.canActivateChecks.push(new is(i)),a.component?vo(e,null,s?s.children:null,i,o):vo(e,null,n,i,o);return o}function UM(e,t,n){if(typeof n=="function")return ce(t._environmentInjector,()=>n(e,t));switch(n){case"pathParamsChange":return!vt(e.url,t.url);case"pathParamsOrQueryParamsChange":return!vt(e.url,t.url)||!on(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Dd(e,t)||!on(e.queryParams,t.queryParams);default:return!Dd(e,t)}}function Co(e,t,n){let i=di(e),o=e.value;Object.entries(i).forEach(([a,r])=>{o.component?t?Co(r,t.children.getContext(a),n):Co(r,null,n):Co(r,t,n)}),o.component?t&&t.outlet&&t.outlet.isActivated?n.canDeactivateChecks.push(new mi(t.outlet.component,o)):n.canDeactivateChecks.push(new mi(null,o)):n.canDeactivateChecks.push(new mi(null,o))}function Lo(e){return typeof e=="function"}function WM(e){return typeof e=="boolean"}function qM(e){return e&&Lo(e.canLoad)}function $M(e){return e&&Lo(e.canActivate)}function YM(e){return e&&Lo(e.canActivateChild)}function ZM(e){return e&&Lo(e.canDeactivate)}function QM(e){return e&&Lo(e.canMatch)}function Lf(e){return e instanceof Yn||e?.name==="EmptyError"}var Fr=Symbol("INITIAL_VALUE");function ki(){return ln(e=>Fs(e.map(t=>t.pipe(rn(1),Bs(Fr)))).pipe(J(t=>{for(let n of t)if(n!==!0){if(n===Fr)return Fr;if(n===!1||XM(n))return n}return!0}),an(t=>t!==Fr),rn(1)))}function XM(e){return hi(e)||e instanceof Ri}function Of(e){return e.aborted?T(void 0).pipe(rn(1)):new N(t=>{let n=()=>{t.next(),t.complete()};return e.addEventListener("abort",n),()=>e.removeEventListener("abort",n)})}function Ff(e){return Zn(Of(e))}function eS(e){return me(t=>{let{targetSnapshot:n,currentSnapshot:i,guards:{canActivateChecks:o,canDeactivateChecks:a}}=t;return a.length===0&&o.length===0?T(b(f({},t),{guardsResult:!0})):nS(a,n,i).pipe(me(r=>r&&WM(r)?tS(n,o,e):T(r)),J(r=>b(f({},t),{guardsResult:r})))})}function nS(e,t,n){return te(e).pipe(me(i=>sS(i.component,i.route,n,t)),sn(i=>i!==!0,!0))}function tS(e,t,n){return te(t).pipe(ra(i=>Ot(oS(i.route.parent,n),iS(i.route,n),rS(e,i.path),aS(e,i.route))),sn(i=>i!==!0,!0))}function iS(e,t){return e!==null&&t&&t(new Zr(e)),T(!0)}function oS(e,t){return e!==null&&t&&t(new $r(e)),T(!0)}function aS(e,t){let n=t.routeConfig?t.routeConfig.canActivate:null;if(!n||n.length===0)return T(!0);let i=n.map(o=>Ti(()=>{let a=t._environmentInjector,r=Di(o,a),s=$M(r)?r.canActivate(t,e):ce(a,()=>r(t,e));return xt(s).pipe(sn())}));return T(i).pipe(ki())}function rS(e,t){let n=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(a=>jM(a)).filter(a=>a!==null).map(a=>Ti(()=>{let r=a.guards.map(s=>{let l=a.node._environmentInjector,c=Di(s,l),d=YM(c)?c.canActivateChild(n,e):ce(l,()=>c(n,e));return xt(d).pipe(sn())});return T(r).pipe(ki())}));return T(o).pipe(ki())}function sS(e,t,n,i){let o=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!o||o.length===0)return T(!0);let a=o.map(r=>{let s=t._environmentInjector,l=Di(r,s),c=ZM(l)?l.canDeactivate(e,t,n,i):ce(s,()=>l(e,t,n,i));return xt(c).pipe(sn())});return T(a).pipe(ki())}function lS(e,t,n,i,o){let a=t.canLoad;if(a===void 0||a.length===0)return T(!0);let r=a.map(s=>{let l=Di(s,e),c=qM(l)?l.canLoad(t,n):ce(e,()=>l(t,n)),d=xt(c);return o?d.pipe(Ff(o)):d});return T(r).pipe(ki(),Hf(i))}function Hf(e){return Is(Ue(t=>{if(typeof t!="boolean")throw ts(e,t)}),J(t=>t===!0))}function cS(e,t,n,i,o){let a=t.canMatch;if(!a||a.length===0)return T(!0);let r=a.map(s=>{let l=Di(s,e),c=QM(l)?l.canMatch(t,n):ce(e,()=>l(t,n));return xt(c).pipe(Ff(o))});return T(r).pipe(ki(),Hf(i))}var Mn=class e extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,e.prototype)}},Eo=class e extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,e.prototype)}};function dS(e){throw new k(4e3,!1)}function uS(e){throw If(!1,ue.GuardRejected)}var Sd=class{urlSerializer;urlTree;constructor(t,n){this.urlSerializer=t,this.urlTree=n}lineralizeSegments(t,n){return V(this,null,function*(){let i=[],o=n.root;for(;;){if(i=i.concat(o.segments),o.numberOfChildren===0)return i;if(o.numberOfChildren>1||!o.children[S])throw dS(`${t.redirectTo}`);o=o.children[S]}})}applyRedirectCommands(t,n,i,o,a){return V(this,null,function*(){let r=yield mS(n,o,a);if(r instanceof Je)throw new Eo(r);let s=this.applyRedirectCreateUrlTree(r,this.urlSerializer.parse(r),t,i);if(r[0]==="/")throw new Eo(s);return s})}applyRedirectCreateUrlTree(t,n,i,o){let a=this.createSegmentGroup(t,n.root,i,o);return new Je(a,this.createQueryParams(n.queryParams,this.urlTree.queryParams),n.fragment)}createQueryParams(t,n){let i={};return Object.entries(t).forEach(([o,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);i[o]=n[s]}else i[o]=a}),i}createSegmentGroup(t,n,i,o){let a=this.createSegments(t,n.segments,i,o),r={};return Object.entries(n.children).forEach(([s,l])=>{r[s]=this.createSegmentGroup(t,l,i,o)}),new H(a,r)}createSegments(t,n,i,o){return n.map(a=>a.path[0]===":"?this.findPosParam(t,a,o):this.findOrReturn(a,i))}findPosParam(t,n,i){let o=i[n.path.substring(1)];if(!o)throw new k(4001,!1);return o}findOrReturn(t,n){let i=0;for(let o of n){if(o.path===t.path)return n.splice(i),o;i++}return t}};function mS(e,t,n){if(typeof e=="string")return Promise.resolve(e);let i=e,{queryParams:o,fragment:a,routeConfig:r,url:s,outlet:l,params:c,data:d,title:u,paramMap:h,queryParamMap:m}=t;return Gr(xt(ce(n,()=>i({params:c,data:d,queryParams:o,fragment:a,routeConfig:r,url:s,outlet:l,title:u,paramMap:h,queryParamMap:m}))))}function hS(e,t){return e.providers&&!e._injector&&(e._injector=ro(e.providers,t,`Route: ${e.path}`)),e._injector??t}function je(e){return e.outlet||S}function pS(e,t){let n=e.filter(i=>je(i)===t);return n.push(...e.filter(i=>je(i)!==t)),n}var Cd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function fS(e,t,n,i,o,a){let r=Bf(e,t,n);return r.matched?(i=hS(t,i),cS(i,t,n,o,a).pipe(J(s=>s===!0?r:f({},Cd)))):T(r)}function Bf(e,t,n){if(t.path==="")return t.pathMatch==="full"&&(e.hasChildren()||n.length>0)?f({},Cd):{matched:!0,consumedSegments:[],remainingSegments:n,parameters:{},positionalParamSegments:{}};let o=(t.matcher||df)(n,e,t);if(!o)return f({},Cd);let a={};Object.entries(o.posParams??{}).forEach(([s,l])=>{a[s]=l.path});let r=o.consumed.length>0?f(f({},a),o.consumed[o.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:o.consumed,remainingSegments:n.slice(o.consumed.length),parameters:r,positionalParamSegments:o.posParams??{}}}function rf(e,t,n,i){return n.length>0&&kS(e,n,i)?{segmentGroup:new H(t,RS(i,new H(n,e.children))),slicedSegments:[]}:n.length===0&&yS(e,n,i)?{segmentGroup:new H(e.segments,gS(e,n,i,e.children)),slicedSegments:n}:{segmentGroup:new H(e.segments,e.children),slicedSegments:n}}function gS(e,t,n,i){let o={};for(let a of n)if(rs(e,t,a)&&!i[je(a)]){let r=new H([],{});o[je(a)]=r}return f(f({},i),o)}function RS(e,t){let n={};n[S]=t;for(let i of e)if(i.path===""&&je(i)!==S){let o=new H([],{});n[je(i)]=o}return n}function kS(e,t,n){return n.some(i=>rs(e,t,i)&&je(i)!==S)}function yS(e,t,n){return n.some(i=>rs(e,t,i))}function rs(e,t,n){return(e.hasChildren()||t.length>0)&&n.pathMatch==="full"?!1:n.path===""}function DS(e,t,n){return t.length===0&&!e.children[n]}var Ad=class{};function vS(e,t,n,i,o,a,r="emptyOnly",s){return V(this,null,function*(){return new xd(e,t,n,i,o,r,a,s).recognize()})}var MS=31,xd=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,n,i,o,a,r,s,l){this.injector=t,this.configLoader=n,this.rootComponentType=i,this.config=o,this.urlTree=a,this.paramsInheritanceStrategy=r,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Sd(this.urlSerializer,this.urlTree)}noMatchError(t){return new k(4002,`'${t.segmentGroup}'`)}recognize(){return V(this,null,function*(){let t=rf(this.urlTree.root,[],[],this.config).segmentGroup,{children:n,rootSnapshot:i}=yield this.match(t),o=new Ae(i,n),a=new wo("",o),r=vf(i,[],this.urlTree.queryParams,this.urlTree.fragment);return r.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(r),{state:a,tree:r}})}match(t){return V(this,null,function*(){let n=new Mt([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),S,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,t,S,n),rootSnapshot:n}}catch(i){if(i instanceof Eo)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Mn?this.noMatchError(i):i}})}processSegmentGroup(t,n,i,o,a){return V(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(t,n,i,a);let r=yield this.processSegment(t,n,i,i.segments,o,!0,a);return r instanceof Ae?[r]:[]})}processChildren(t,n,i,o){return V(this,null,function*(){let a=[];for(let l of Object.keys(i.children))l==="primary"?a.unshift(l):a.push(l);let r=[];for(let l of a){let c=i.children[l],d=pS(n,l),u=yield this.processSegmentGroup(t,d,c,l,o);r.push(...u)}let s=_f(r);return SS(s),s})}processSegment(t,n,i,o,a,r,s){return V(this,null,function*(){for(let l of n)try{return yield this.processSegmentAgainstRoute(l._injector??t,n,l,i,o,a,r,s)}catch(c){if(c instanceof Mn||Lf(c))continue;throw c}if(DS(i,o,a))return new Ad;throw new Mn(i)})}processSegmentAgainstRoute(t,n,i,o,a,r,s,l){return V(this,null,function*(){if(je(i)!==r&&(r===S||!rs(o,a,i)))throw new Mn(o);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,o,i,a,r,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(t,o,n,i,a,r,l);throw new Mn(o)})}expandSegmentAgainstRouteUsingRedirect(t,n,i,o,a,r,s){return V(this,null,function*(){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:u,remainingSegments:h}=Bf(n,o,a);if(!l)throw new Mn(n);typeof o.redirectTo=="string"&&o.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>MS&&(this.allowRedirects=!1));let m=new Mt(a,c,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,sf(o),je(o),o.component??o._loadedComponent??null,o,lf(o),t),g=ns(m,s,this.paramsInheritanceStrategy);if(m.params=Object.freeze(g.params),m.data=Object.freeze(g.data),this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let D=yield this.applyRedirects.applyRedirectCommands(d,o.redirectTo,u,m,t),E=yield this.applyRedirects.lineralizeSegments(o,D);return this.processSegment(t,i,n,E.concat(h),r,!1,s)})}matchSegmentAgainstRoute(t,n,i,o,a,r){return V(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=yield Gr(fS(n,i,o,t,this.urlSerializer,this.abortSignal));if(i.path==="**"&&(n.children={}),!s?.matched)throw new Mn(n);t=i._injector??t;let{routes:l}=yield this.getChildConfig(t,i,o),c=i._loadedInjector??t,{parameters:d,consumedSegments:u,remainingSegments:h}=s,m=new Mt(u,d,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,sf(i),je(i),i.component??i._loadedComponent??null,i,lf(i),t),g=ns(m,r,this.paramsInheritanceStrategy);m.params=Object.freeze(g.params),m.data=Object.freeze(g.data);let{segmentGroup:D,slicedSegments:E}=rf(n,u,h,l);if(E.length===0&&D.hasChildren()){let Mi=yield this.processChildren(c,l,D,m);return new Ae(m,Mi)}if(l.length===0&&E.length===0)return new Ae(m,[]);let I=je(i)===a,Fe=yield this.processSegment(c,l,D,E,I?S:a,!0,m);return new Ae(m,Fe instanceof Ae?[Fe]:[])})}getChildConfig(t,n,i){return V(this,null,function*(){if(n.children)return{routes:n.children,injector:t};if(n.loadChildren){if(n._loadedRoutes!==void 0){let a=n._loadedNgModuleFactory;return a&&!n._loadedInjector&&(n._loadedInjector=a.create(t).injector),{routes:n._loadedRoutes,injector:n._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Gr(lS(t,n,i,this.urlSerializer,this.abortSignal))){let a=yield this.configLoader.loadChildren(t,n);return n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,a}throw uS(n)}return{routes:[],injector:t}})}};function SS(e){e.sort((t,n)=>t.value.outlet===S?-1:n.value.outlet===S?1:t.value.outlet.localeCompare(n.value.outlet))}function CS(e){let t=e.value.routeConfig;return t&&t.path===""}function _f(e){let t=[],n=new Set;for(let i of e){if(!CS(i)){t.push(i);continue}let o=t.find(a=>i.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...i.children),n.add(o)):t.push(i)}for(let i of n){let o=_f(i.children);t.push(new Ae(i.value,o))}return t.filter(i=>!n.has(i))}function sf(e){return e.data||{}}function lf(e){return e.resolve||{}}function AS(e,t,n,i,o,a,r){return me(s=>V(null,null,function*(){let{state:l,tree:c}=yield vS(e,t,n,i,s.extractedUrl,o,a,r);return b(f({},s),{targetSnapshot:l,urlAfterRedirects:c})}))}function xS(e){return me(t=>{let{targetSnapshot:n,guards:{canActivateChecks:i}}=t;if(!i.length)return T(t);let o=new Set(i.map(s=>s.route)),a=new Set;for(let s of o)if(!a.has(s))for(let l of Gf(s))a.add(l);let r=0;return te(a).pipe(ra(s=>o.has(s)?bS(s,n,e):(s.data=ns(s,s.parent,e).resolve,T(void 0))),Ue(()=>r++),sa(1),me(s=>r===a.size?T(t):re))})}function Gf(e){let t=e.children.map(n=>Gf(n)).flat();return[e,...t]}function bS(e,t,n){let i=e.routeConfig,o=e._resolve;return i?.title!==void 0&&!Tf(i)&&(o[Po]=i.title),Ti(()=>(e.data=ns(e,e.parent,n).resolve,wS(o,e,t).pipe(J(a=>(e._resolvedData=a,e.data=f(f({},e.data),a),null)))))}function wS(e,t,n){let i=pd(e);if(i.length===0)return T({});let o={};return te(i).pipe(me(a=>TS(e[a],t,n).pipe(sn(),Ue(r=>{if(r instanceof Ri)throw ts(new jn,r);o[a]=r}))),sa(1),J(()=>o),Ei(a=>Lf(a)?re:Os(a)))}function TS(e,t,n){let i=t._environmentInjector,o=Di(e,i),a=o.resolve?o.resolve(t,n):ce(i,()=>o(t,n));return xt(a)}function cf(e){return ln(t=>{let n=e(t);return n?te(n).pipe(J(()=>t)):T(t)})}var Ed=(()=>{class e{buildTitle(n){let i,o=n.root;for(;o!==void 0;)i=this.getResolvedTitleForRoute(o)??i,o=o.children.find(a=>a.outlet===S);return i}getResolvedTitleForRoute(n){return n.data[Po]}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>p(Kf),providedIn:"root"})}return e})(),Kf=(()=>{class e extends Ed{title;constructor(n){super(),this.title=n}updateTitle(n){let i=this.buildTitle(n);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||e)(x(Xp))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Oo=new v("",{factory:()=>({})}),Fo=new v(""),zf=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=p(Yc);loadComponent(n,i){return V(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let o=V(this,null,function*(){try{let a=yield mf(ce(n,()=>i.loadComponent())),r=yield Jf(jf(a));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=r,r}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,o),o})}loadChildren(n,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let o=V(this,null,function*(){try{let a=yield Vf(i,this.compiler,n,this.onLoadEndListener);return i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Vf(e,t,n,i){return V(this,null,function*(){let o=yield mf(ce(n,()=>e.loadChildren())),a=yield Jf(jf(o)),r;a instanceof Sr||Array.isArray(a)?r=a:r=yield t.compileModuleAsync(a),i&&i(e);let s,l,c=!1,d;return Array.isArray(r)?(l=r,c=!0):(s=r.create(n).injector,d=r,l=s.get(Fo,[],{optional:!0,self:!0}).flat()),{routes:l.map(Td),injector:s,factory:d}})}function ES(e){return e&&typeof e=="object"&&"default"in e}function jf(e){return ES(e)?e.default:e}function Jf(e){return V(this,null,function*(){return e})}var ss=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>p(PS),providedIn:"root"})}return e})(),PS=(()=>{class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,i){return n}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Uf=new v("");var IS=()=>{},Wf=new v(""),qf=(()=>{class e{currentNavigation=ve(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ve(null);events=new ae;transitionAbortWithErrorSubject=new ae;configLoader=p(zf);environmentInjector=p(X);destroyRef=p(Qe);urlSerializer=p(Io);rootContexts=p(yi);location=p(li);inputBindingEnabled=p(as,{optional:!0})!==null;titleStrategy=p(Ed);options=p(Oo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=p(ss);createViewTransition=p(Uf,{optional:!0});navigationErrorHandler=p(Wf,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>T(void 0);rootComponentType=null;destroyed=!1;constructor(){let n=o=>this.events.next(new Wr(o)),i=o=>this.events.next(new qr(o));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=n,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(n){let i=++this.navigationId;en(()=>{this.transitions?.next(b(f({},n),{extractedUrl:this.urlHandlingStrategy.extract(n.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))})}setupNavigations(n){return this.transitions=new Q(null),this.transitions.pipe(an(i=>i!==null),ln(i=>{let o=!1,a=new AbortController,r=()=>!o&&this.currentTransition?.id===i.id;return T(i).pipe(ln(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",ue.SupersededByNewNavigation),re;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?b(f({},l),{previousNavigation:null}):null,abort:()=>a.abort()});let c=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new Cn(s.id,this.urlSerializer.serialize(s.rawUrl),"",xo.IgnoredSameUrlNavigation)),s.resolve(!1),re;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return T(s).pipe(ln(u=>(this.events.next(new Ct(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),u.id!==this.navigationId?re:Promise.resolve(u))),AS(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),Ue(u=>{i.targetSnapshot=u.targetSnapshot,i.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=u.urlAfterRedirects,m));let h=new pi(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(h)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:u,extractedUrl:h,source:m,restoredState:g,extras:D}=s,E=new Ct(u,this.urlSerializer.serialize(h),m,g);this.events.next(E);let I=bf(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=b(f({},s),{targetSnapshot:I,urlAfterRedirects:h,extras:b(f({},D),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Fe=>(Fe.finalUrl=h,Fe)),T(i)}else return this.events.next(new Cn(s.id,this.urlSerializer.serialize(s.extractedUrl),"",xo.IgnoredByUrlHandlingStrategy)),s.resolve(!1),re}),J(s=>{let l=new Vr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=b(f({},s),{guards:VM(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),eS(s=>this.events.next(s)),ln(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw ts(this.urlSerializer,s.guardsResult);let l=new jr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!r())return re;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",ue.GuardRejected),re;if(s.guards.canActivateChecks.length===0)return T(s);let c=new Jr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!r())return re;let d=!1;return T(s).pipe(xS(this.paramsInheritanceStrategy),Ue({next:()=>{d=!0;let u=new Ur(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(u)},complete:()=>{d||this.cancelNavigationTransition(s,"",ue.NoDataFromResolver)}}))}),cf(s=>{let l=d=>{let u=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;u.push(this.configLoader.loadComponent(h,d.routeConfig).then(m=>{d.component=m}))}for(let h of d.children)u.push(...l(h));return u},c=l(s.targetSnapshot.root);return c.length===0?T(s):te(Promise.all(c).then(()=>s))}),cf(()=>this.afterPreactivation()),ln(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?te(c).pipe(J(()=>i)):T(i)}),rn(1),J(s=>{let l=_M(n.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=b(f({},s),{targetRouterState:l}),this.currentNavigation.update(c=>(c.targetRouterState=l,c)),this.events.next(new fi),r()&&(new Md(n.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),r()&&(o=!0,this.currentNavigation.update(c=>(c.abort=IS,c)),this.lastSuccessfulNavigation.set(en(this.currentNavigation)),this.events.next(new Sn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)))}),Zn(Of(a.signal).pipe(an(()=>!o&&!i.targetRouterState),Ue(()=>{this.cancelNavigationTransition(i,a.signal.reason+"",ue.Aborted)}))),Ue({complete:()=>{o=!0}}),Zn(this.transitionAbortWithErrorSubject.pipe(Ue(s=>{throw s}))),Hs(()=>{a.abort(),o||this.cancelNavigationTransition(i,"",ue.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ei(s=>{if(o=!0,this.destroyed)return i.resolve(!1),re;if(Nf(s))this.events.next(new Oe(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),zM(s)?this.events.next(new gi(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new At(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=ce(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Ri){let{message:d,cancellationCode:u}=ts(this.urlSerializer,c);this.events.next(new Oe(i.id,this.urlSerializer.serialize(i.extractedUrl),d,u)),this.events.next(new gi(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return re}))}))}cancelNavigationTransition(n,i,o){let a=new Oe(n.id,this.urlSerializer.serialize(n.extractedUrl),i,o);this.events.next(a),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let n=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=en(this.currentNavigation),o=i?.targetBrowserUrl??i?.extractedUrl;return n.toString()!==o?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function NS(e){return e!==So}var $f=new v("");var Yf=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>p(LS),providedIn:"root"})}return e})(),os=class{shouldDetach(t){return!1}store(t,n){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,n){return t.routeConfig===n.routeConfig}shouldDestroyInjector(t){return!0}},LS=(()=>{class e extends os{static \u0275fac=(()=>{let n;return function(o){return(n||(n=ur(e)))(o||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Pd=(()=>{class e{urlSerializer=p(Io);options=p(Oo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=p(li);urlHandlingStrategy=p(ss);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Je;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:n,initialUrl:i,targetBrowserUrl:o}){let a=n!==void 0?this.urlHandlingStrategy.merge(n,i):i,r=o??a;return r instanceof Je?this.urlSerializer.serialize(r):r}commitTransition({targetRouterState:n,finalUrl:i,initialUrl:o}){i&&n?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,o),this.routerState=n):this.rawUrlTree=o}routerState=bf(null,p(X));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>p(OS),providedIn:"root"})}return e})(),OS=(()=>{class e extends Pd{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{n(i.url,i.state,"popstate")})})}handleRouterEvent(n,i){n instanceof Ct?this.updateStateMemento():n instanceof Cn?this.commitTransition(i):n instanceof pi?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):n instanceof fi?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):n instanceof Oe&&!xf(n)?this.restoreHistory(i):n instanceof At?this.restoreHistory(i,!0):n instanceof Sn&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,{extras:i,id:o}){let{replaceUrl:a,state:r}=i;if(this.location.isCurrentPathEqualTo(n)||a){let s=this.browserPageId,l=f(f({},r),this.generateNgRouterState(o,s));this.location.replaceState(n,"",l)}else{let s=f(f({},r),this.generateNgRouterState(o,this.browserPageId+1));this.location.go(n,"",s)}}restoreHistory(n,i=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,a=this.currentPageId-o;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===n.finalUrl&&a===0&&(this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(n),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:n}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,i){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:i}:{navigationId:n}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=ur(e)))(o||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Id(e,t){e.events.pipe(an(n=>n instanceof Sn||n instanceof Oe||n instanceof At||n instanceof Cn),J(n=>n instanceof Sn||n instanceof Cn?0:(n instanceof Oe?n.code===ue.Redirect||n.code===ue.SupersededByNewNavigation:!1)?2:1),an(n=>n!==2),rn(1)).subscribe(()=>{t()})}var Zf={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Qf={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},ls=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=p(jc);stateManager=p(Pd);options=p(Oo,{optional:!0})||{};pendingTasks=p(fn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=p(qf);urlSerializer=p(Io);location=p(li);urlHandlingStrategy=p(ss);injector=p(X);_events=new ae;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=p(Yf);injectorCleanup=p($f,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=p(Fo,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!p(as,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:n=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Z;subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(i=>{try{let o=this.navigationTransitions.currentTransition,a=en(this.navigationTransitions.currentNavigation);if(o!==null&&a!==null){if(this.stateManager.handleRouterEvent(i,a),i instanceof Oe&&i.code!==ue.Redirect&&i.code!==ue.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Sn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof gi){let r=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,o.currentRawUrl),l=f({scroll:o.extras.scroll,browserUrl:o.extras.browserUrl,info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:o.extras.replaceUrl||this.urlUpdateStrategy==="eager"||NS(o.source)},r);this.scheduleNavigation(s,So,null,l,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}HM(i)&&this._events.next(i)}catch(o){this.navigationTransitions.transitionAbortWithErrorSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),So,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,i,o)=>{this.navigateToSyncWithBrowser(n,o,i)})}navigateToSyncWithBrowser(n,i,o){let a={replaceUrl:!0},r=o?.navigationId?o:null;if(o){let l=f({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(a.state=l)}let s=this.parseUrl(n);this.scheduleNavigation(s,i,r,a).catch(l=>{this.disposed||this.injector.get(Xe)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return en(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(Td),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,i={}){let{relativeTo:o,queryParams:a,fragment:r,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:r,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=f(f({},this.currentUrlTree.queryParams),a);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=a||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{let h=o?o.snapshot:this.routerState.snapshot.root;u=Mf(h)}catch(h){(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),u=this.currentUrlTree.root}return Sf(u,n,d,c??null,this.urlSerializer)}navigateByUrl(n,i={skipLocationChange:!1}){let o=hi(n)?n:this.parseUrl(n),a=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(a,So,null,i)}navigate(n,i={skipLocationChange:!1}){return FS(n),this.navigateByUrl(this.createUrlTree(n,i),i)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch(i){return this.console.warn(Hi(4018,!1)),this.urlSerializer.parse("/")}}isActive(n,i){let o;if(i===!0?o=f({},Zf):i===!1?o=f({},Qf):o=i,hi(n))return ef(this.currentUrlTree,n,o);let a=this.parseUrl(n);return ef(this.currentUrlTree,a,o)}removeEmptyProps(n){return Object.entries(n).reduce((i,[o,a])=>(a!=null&&(i[o]=a),i),{})}scheduleNavigation(n,i,o,a,r){if(this.disposed)return Promise.resolve(!1);let s,l,c;r?(s=r.resolve,l=r.reject,c=r.promise):c=new Promise((u,h)=>{s=u,l=h});let d=this.pendingTasks.add();return Id(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:a,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function FS(e){for(let t=0;t<e.length;t++)if(e[t]==null)throw new k(4008,!1)}var _S=new v("");function Nd(e,...t){return Gi([{provide:Fo,multi:!0,useValue:e},[],{provide:Jn,useFactory:GS},{provide:Ar,multi:!0,useFactory:KS},t.map(n=>n.\u0275providers)])}function GS(){return p(ls).routerState.root}function KS(){let e=p(we);return t=>{let n=e.get(Rt);if(t!==n.components[0])return;let i=e.get(ls),o=e.get(zS);e.get(VS)===1&&i.initialNavigation(),e.get(jS,null,{optional:!0})?.setUpPreloading(),e.get(_S,null,{optional:!0})?.init(),i.resetRootComponentType(n.componentTypes[0]),o.closed||(o.next(),o.complete(),o.unsubscribe())}}var zS=new v("",{factory:()=>new ae}),VS=new v("",{factory:()=>1});var jS=new v("");var cs=class{constructor(){this.content=null,this.isPlaying=!1,this.currentTime=0}};var ds=(()=>{class e{constructor(){this.state=new Q(new cs)}performAction(n,i,o){let a=this.state.value;switch(n){case"play":i&&this.state.next({content:i,isPlaying:!0,currentTime:0});break;case"pause":this.state.next(b(f({},a),{isPlaying:!1}));break;case"stop":this.state.next(b(f({},a),{isPlaying:!1,currentTime:0}));break;case"seek":typeof o=="number"&&this.state.next(b(f({},a),{currentTime:o}));break}}getState(){return this.state.asObservable()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Xf=[{episodio:"B",titulo:"Resident #stayhome #quedateencasa special - Sunsetstrip Home Edition 4/4/2020",likes:"48",descargas:"51.2K",fecha:null,descripcion:`Full Sunsetstrip Home Edition 5 hr set, recorded on 4/4/2020
Please support you charity of choice Cruz Roja Argentina COAS UN Foundation Buena Productora`,link:"https://mcdn.podbean.com/mf/download/7ij5vk/Hernan_Cattaneo_-_Sunsetstrip_Home_Edition_4-4-2020.mp3",tracklist:"Full Sunsetstrip Home Edition 5 hr set, recorded on 4/4/2020"},{episodio:"A",titulo:"Resident #stayhome #quedateencasa special - Sunsetstrip 2020",likes:"91",descargas:"66.9K",fecha:null,descripcion:"Hi everyone. I'm uploading a 7 hours set, recorded live from Sunsetstrip Buenos Aires on Feb 29th 2020 in an attempt to keep you company in these challenging times. Please, #stayhome and be safe. Hernan and BUENA Productora ----------------------- Hola a todos. Subo un set de 7 horas, grabado en Sunsetstrip Buenos Aires el 29 de Febrero de 2020, con la intenci\xF3n de hacerles compa\xF1\xEDa en \xE9stos tiempos dif\xEDciles. Por favor, #quedateencasa y cuidense. Hernan y BUENA Productora",link:"https://mcdn.podbean.com/mf/download/zc6x2c/HC_SunsetStrip_BA_2020-02-29.mp3",tracklist:"Hi everyone. I'm uploading a 7 hours set, recorded live from Sunsetstrip Buenos Aires on Feb 29th 2020 in an attempt to keep you company in these challenging times. Please, #stayhome and be safe. Hernan and BUENA Productora ----------------------- Hola a todos. Subo un set de 7 horas, grabado en Sunsetstrip Buenos Aires el 29 de Febrero de 2020, con la intenci\xF3n de hacerles compa\xF1\xEDa en \xE9stos tiempos dif\xEDciles. Por favor, #quedateencasa y cuidense. Hernan y BUENA Productora"},{episodio:"774",titulo:"Resident / Episode 774 / Mar 07 2026",descripcion:`1 - Tato Seco - Dream Collector
2 - Digital Mess - Deuterium (Auditoria Remix)
3 - Checo Cotela - Echoes In Time
4 - Kasper Koman - Amethyst Deceiver
5 - Tobi Amuchastegui - Rish
6 - Jomoss, Melaniya - Eclipse
7 - Ric Niels - Aeron
8 - Abuk, Golden Hour - Eterna
9 - ZAC - Equalizer
10 - Hernan Cattaneo & Soundexile - Mad Zen Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"11.1K",fecha:"2026-03-07",link:"https://mcdn.podbean.com/mf/download/ijf4fgpd3eiimety/774-HernanCattaneo-2026-03-07.mp3",tracklist:`Tato Seco - Dream Collector
Digital Mess - Deuterium (Auditoria Remix)
Checo Cotela - Echoes In Time
Kasper Koman - Amethyst Deceiver
Tobi Amuchastegui - Rish
Jomoss, Melaniya - Eclipse
Ric Niels - Aeron
Abuk, Golden Hour - Eterna
ZAC - Equalizer`},{episodio:"773",titulo:"Resident / Episode 773 / Feb 28 2026",descripcion:`1 - Uccelli - Flicker
2 - Steve Parry - Freeze
3 - Quivver - Moonlight Pools (Cruz Vittor Remix)
4 - Circulation, Cass (UK) - Nuke the Site From Orbit (Cass Skunkworks Remix)
5 - Gai Barone - Macula (Extended Mix)
6 - Thaddeus X - Life in Wave (Noel Barbeito Edit)
7 - UNWA - Lonely (Katrin Souza Remix)
8 - Nick Stoynoff - Strawberry Fields
9 - Calcou - Closer
10 - HVOB - The Blame Game (Roman & Juan Ib\xE1\xF1ez Bootleg) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"15.5K",fecha:"2026-02-28",link:"https://mcdn.podbean.com/mf/download/xfke6wb9zbf77g68/773-HernanCattaneo-2026-02-28.mp3",tracklist:`Uccelli - Flicker
Steve Parry - Freeze
Quivver - Moonlight Pools (Cruz Vittor Remix)
Circulation, Cass (UK) - Nuke the Site From Orbit (Cass Skunkworks Remix)
Gai Barone - Macula (Extended Mix)
Thaddeus X - Life in Wave (Noel Barbeito Edit)
UNWA - Lonely (Katrin Souza Remix)
Nick Stoynoff - Strawberry Fields
Calcou - Closer`},{episodio:"086",titulo:"Resident / Episode 086 / December 29 2012",descripcion:`Part 1 Tracklist

Clockwork, Tale Of Us, The/Das - Life & death

Sound Process - The Unthinkable

Estroe - Living Apart Together (Ian O\xB4Donnovan)

Santi Mossman & Rodrigo Mateo - Microcosmos Beat Syndrome - White Lie Part 2 Tracklist

Horizons - Iguazu (Graziano Raffa remix)

Ricky Ryan - Mess Monster (Barry Jamieson Mix)

Forrest People - Schabauch (Original Mix)

Dibby Dougherty & Dave Young - The Swan

Rod - Yolo`,likes:"4",descargas:"53.3K",fecha:"2012-12-29",link:"https://mcdn.podbean.com/mf/download/uzbzz/086-HernanCattaneo-2012-12-30.mp3",tracklist:`Part 1

Clockwork, Tale Of Us, The/Das - Life & death

Sound Process - The Unthinkable

Estroe - Living Apart Together (Ian O\xB4Donnovan)

Santi Mossman & Rodrigo Mateo - Microcosmos Beat Syndrome - White Lie Part 2

Horizons - Iguazu (Graziano Raffa remix)

Ricky Ryan - Mess Monster (Barry Jamieson Mix)

Forrest People - Schabauch (Original Mix)

Dibby Dougherty & Dave Young - The Swan

Rod - Yolo`},{episodio:"087",titulo:"Resident / Episode 087 / January 05 2013",descripcion:`Part 1 Tracklist

Steve Bug - Long Run

Guy Gerber ft. Jaw - Steady (Guy J mix)

Erdi Irmak - Swarm Of Spittle

Biologik - Break me down(Silinder Remix)

Part 2 Tracklist

Henry Saiz - Uncharted

Tripswitch - Deer Park (Radioactive Sandwich House Remix)

Sonic Union & Rumor - Whats It Called (Oscar Vazquez Remix)

Andy Arias - Right and Straight

Loisan - Nothern Pearls (Ilya Malyuev Remix)`,likes:"5",descargas:"62.4K",fecha:"2013-01-05",link:"https://mcdn.podbean.com/mf/download/3wj46/087-HernanCattaneo-2013-01-06.mp3",tracklist:`Part 1

Steve Bug - Long Run

Guy Gerber ft. Jaw - Steady (Guy J mix)

Erdi Irmak - Swarm Of Spittle

Biologik - Break me down(Silinder Remix)

Part 2

Henry Saiz - Uncharted

Tripswitch - Deer Park (Radioactive Sandwich House Remix)

Sonic Union & Rumor - Whats It Called (Oscar Vazquez Remix)

Andy Arias - Right and Straight

Loisan - Nothern Pearls (Ilya Malyuev Remix)`},{episodio:"076",titulo:"Resident / Episode 076 / October 20 2012",descripcion:`Part 1 Tracklist

Jon Hopkins - The Journey / Temple (from Monsters OST)

Li Polymer - The Dreamer

Matthew Dekay & Lee Burridge - Holding On

AndrewzVee & KN - Sky Fall

Part 2 Tracklist

Klartraum	- Aaron

James Zabiela - Healing (Hot Chip Remix)

East Cafe - Question One

Dark Soul Project & Santiago Garcia - Erks (Marc Poppcke Remix)`,likes:"3",descargas:"43K",fecha:"2012-10-20",link:"https://mcdn.podbean.com/mf/download/tr954k/076-HernanCattaneo-2012-10-21.mp3",tracklist:`Part 1

Jon Hopkins - The Journey / Temple (from Monsters OST)

Li Polymer - The Dreamer

Matthew Dekay & Lee Burridge - Holding On

AndrewzVee & KN - Sky Fall

Part 2

Klartraum	- Aaron

James Zabiela - Healing (Hot Chip Remix)

East Cafe - Question One

Dark Soul Project & Santiago Garcia - Erks (Marc Poppcke Remix)`},{episodio:"077",titulo:"Resident / Episode 077 / October 27 2012",descripcion:`Part 1 Tracklist

Mauro Norti-Last Day (Oliver Lieb Remix)

Dzim - Limits (Rodrigo Mateo Remix)

Terje Saether- Last Resort

Balcazar - My Fault

Ballibat (Lauer Mix) \xA0 \xA0Taragana Pyjarama

Part 2 Tracklist

Mauro Norti-You and Me (Max Cooper Remix)

James Zabiela-Healing (Midland Remix)

Hernan Cattaneo & John Tonks - Warsaw (Marcelo Vasami)

Marc-Pollen-Time To Connect (Yoram Remix)`,likes:"3",descargas:"43.2K",fecha:"2012-10-27",link:"https://mcdn.podbean.com/mf/download/8yd3df/077-HernanCattaneo-2012-10-28.mp3",tracklist:`Part 1

Mauro Norti-Last Day (Oliver Lieb Remix)

Dzim - Limits (Rodrigo Mateo Remix)

Terje Saether- Last Resort

Balcazar - My Fault

Ballibat (Lauer Mix) \xA0 \xA0Taragana Pyjarama

Part 2

Mauro Norti-You and Me (Max Cooper Remix)

James Zabiela-Healing (Midland Remix)

Hernan Cattaneo & John Tonks - Warsaw (Marcelo Vasami)

Marc-Pollen-Time To Connect (Yoram Remix)`},{episodio:"066",titulo:"Resident / Episode 066 / August 11 2012",descripcion:`Part 1 Tracklist

Andrew Grant, Lomez - Distant Thunder (Original Mix)

Stimming, David August - Sexy Biest (Gui Boratto Remix)

Kollektiv Turmstrasse - Schwindelig (Ian O'Donovan Remix)

Kassey Voorn - Lost In Jumeira (Tom Middleton Liquatech Mix)

Part 2 Tracklist

Kollektiv Turmstrasse - Lapacha (youANDme & Cosmic Cowboys Remix)

Gvozdin - Harmony & Balance (Fran Von Vie Remix)

Nikko.Z - Love Dose (Guy Mantzur & Khen)

Ferdy - Vanilla Sky

Santiago Garcia - Long Illness (Andrea Casino Mix)`,likes:"5",descargas:"31.1K",fecha:"2012-08-11",link:"https://mcdn.podbean.com/mf/download/qbb8jg/066-HernanCattaneo-2012-08-12.mp3",tracklist:`Part 1

Andrew Grant, Lomez - Distant Thunder (Original Mix)

Stimming, David August - Sexy Biest (Gui Boratto Remix)

Kollektiv Turmstrasse - Schwindelig (Ian O'Donovan Remix)

Kassey Voorn - Lost In Jumeira (Tom Middleton Liquatech Mix)

Part 2

Kollektiv Turmstrasse - Lapacha (youANDme & Cosmic Cowboys Remix)

Gvozdin - Harmony & Balance (Fran Von Vie Remix)

Nikko.Z - Love Dose (Guy Mantzur & Khen)

Ferdy - Vanilla Sky

Santiago Garcia - Long Illness (Andrea Casino Mix)`},{episodio:"067",titulo:"Resident / Episode 067 / August 18 2012",descripcion:`Part 1 Tracklist

St Savor - Derelict Windmill

Sea Flight (Navar's Big Dub Remix)

Colourblock - Breed (Santiago Garcia Remix)

Henry Saiz - Our Discovery

Djuma Soundsystem - Come Together

Part 2 Tracklist

Mario Puccio - Serenade\xA0 (Daneel Old School Remix)

Juan Deminicis, Dark Soul Project & Santiago Garcia )

Michael, Levan & Stiven Rivic - Violence [Marcelo Vasami Remix]

LOKII - Something (King Unique Remix)`,likes:"3",descargas:"32.2K",fecha:"2012-08-18",link:"https://mcdn.podbean.com/mf/download/eguq49/067-HernanCattaneo-2012-08-19.mp3",tracklist:`Part 1

St Savor - Derelict Windmill

Sea Flight (Navar's Big Dub Remix)

Colourblock - Breed (Santiago Garcia Remix)

Henry Saiz - Our Discovery

Djuma Soundsystem - Come Together

Part 2

Mario Puccio - Serenade\xA0 (Daneel Old School Remix)

Juan Deminicis, Dark Soul Project & Santiago Garcia )

Michael, Levan & Stiven Rivic - Violence [Marcelo Vasami Remix]

LOKII - Something (King Unique Remix)`},{episodio:"056",titulo:"Resident / Episode 056 / June 02 2012",descripcion:`Part 1 Tracklist

Unknown- Saschienne

Jose Wated Feat. Lola Pink - Typical Song (Deaf Pillow Remix)

My Favorite Robot - The Waiting Rain (Mind Against Remix)

FunkForm - Lost In The Wild

Part 2 Tracklist

Let the music play ft. UTRB - Don't Weigh Me Down - Guy J Remix

Mindlook - Drowned In The Mood

Detroit Grand Pubahs, Psycatron-NVRSAYNVR (Dustin Zahn Remix)

JDNMGJ - Trezzz`,likes:"5",descargas:"26.6K",fecha:"2012-06-02",link:"https://mcdn.podbean.com/mf/download/haakv9/056-HernanCattaneo-2012-06-02.mp3",tracklist:`Part 1

Unknown- Saschienne

Jose Wated Feat. Lola Pink - Typical Song (Deaf Pillow Remix)

My Favorite Robot - The Waiting Rain (Mind Against Remix)

FunkForm - Lost In The Wild

Part 2

Let the music play ft. UTRB - Don't Weigh Me Down - Guy J Remix

Mindlook - Drowned In The Mood

Detroit Grand Pubahs, Psycatron-NVRSAYNVR (Dustin Zahn Remix)

JDNMGJ - Trezzz`},{episodio:"057",titulo:"Resident / Episode 057 / June 09 2012",descripcion:`Part 1 Tracklist

My Favorite Robot - Barricade

Jaded & James Petrou - Tonis Pain (INXECs Morphine Mashup)

Li-Polymer - Third Element (Andy Arias Remix)

Slap Lovers - Oberlead (Marco Zenker Remix)

Ugur Soygur - Let's Deep Absolutely (Spennu Remix)

Part 2 Tracklist

Dominic James - Concious Moment

Dousk - Winchme

Asten - Borealis (Microtrauma\`s Offshore Dub)

Cora Novoa - Unattainable Love [Marcelo Vasami Remix]`,likes:"8",descargas:"28.9K",fecha:"2012-06-09",link:"https://mcdn.podbean.com/mf/download/eb5k8a/057-HernanCattaneo-2012-06-09.mp3",tracklist:`Part 1

My Favorite Robot - Barricade

Jaded & James Petrou - Tonis Pain (INXECs Morphine Mashup)

Li-Polymer - Third Element (Andy Arias Remix)

Slap Lovers - Oberlead (Marco Zenker Remix)

Ugur Soygur - Let's Deep Absolutely (Spennu Remix)

Part 2

Dominic James - Concious Moment

Dousk - Winchme

Asten - Borealis (Microtrauma\`s Offshore Dub)

Cora Novoa - Unattainable Love [Marcelo Vasami Remix]`},{episodio:"046",titulo:"Resident / Episode 046 / March 24 2012",descripcion:`Part 1 Tracklist

Daneel - Melancholy

Pole Folder & Amine Edge - Minor Theory (Liubo Ursiny edit)

Oxia - Harmonie

Mehmet Akar & Dr. Avalance - Marmara (Matias Chilano Remix)

Part 2 Tracklist

Ishome - Nothing (Ormatie Remix)

Hernan Cerbello - It's Your Choice (Santiago Garcia Remix)

Vinayak^A - Scale of historical facts

Guy J - Nightstalker`,likes:"6",descargas:"12.3K",fecha:"2012-03-24",link:"https://mcdn.podbean.com/mf/download/sm6eap/046-HernanCattaneo-2012-03-23.mp3",tracklist:`Part 1

Daneel - Melancholy

Pole Folder & Amine Edge - Minor Theory (Liubo Ursiny edit)

Oxia - Harmonie

Mehmet Akar & Dr. Avalance - Marmara (Matias Chilano Remix)

Part 2

Ishome - Nothing (Ormatie Remix)

Hernan Cerbello - It's Your Choice (Santiago Garcia Remix)

Vinayak^A - Scale of historical facts

Guy J - Nightstalker`},{episodio:"036",titulo:"Resident / Episode 036 / January 14 2012",descripcion:`Part 1 Tracklist

Nhar - Motionless (Original Mix)

Bizet Reactions - All I Want (Estroe Remix)

Lank, Zajac - Juice Box (Rodskeez Remix)

Andrew McDonnell - Flys In The Village (Lonya Remix) Part 2 Tracklist

Indira Boka - Next To You (Oliver Schories Remix)

Jemmy - Suede Desert (Marc Marzenit)

Gui Boratto - Paralelo (Solee Remix)

Ki:Theory - Wanna Run (feat. Maura Davis) (Nick Warren Remix)`,likes:"4",descargas:"9.9K",fecha:"2012-01-14",link:"https://mcdn.podbean.com/mf/download/vq7iwi/036-HernanCattaneo-2012-01-14.mp3",tracklist:`Part 1

Nhar - Motionless (Original Mix)

Bizet Reactions - All I Want (Estroe Remix)

Lank, Zajac - Juice Box (Rodskeez Remix)

Andrew McDonnell - Flys In The Village (Lonya Remix) Part 2

Indira Boka - Next To You (Oliver Schories Remix)

Jemmy - Suede Desert (Marc Marzenit)

Gui Boratto - Paralelo (Solee Remix)

Ki:Theory - Wanna Run (feat. Maura Davis) (Nick Warren Remix)`},{episodio:"026",titulo:"Resident / Episode 026 / October 29 2011",descripcion:"Part 1 Tracklist Days Off - Geminius [Michael King Remix] Mark Reeve - Curl The Selph - Evening Falls Elon - Carlos (Exercise One Remix) Apologist And Unsettled - Zabriskie Point Part 2 Tracklist Marcelo Vasami - Every Night (Scotty.A's Dark Dub) Fiord - Shadows of you (Triangle) Ioan Gamboa - Isis Deadpan - Revolution (Seb Dhajje remix)",likes:"6",descargas:"9.7K",fecha:"2011-10-29",link:"https://mcdn.podbean.com/mf/download/kb62j/026-HernanCattaneo-2011-10-29.mp3",tracklist:"Part 1 Days Off - Geminius [Michael King Remix] Mark Reeve - Curl The Selph - Evening Falls Elon - Carlos (Exercise One Remix) Apologist And Unsettled - Zabriskie Point Part 2 Marcelo Vasami - Every Night (Scotty.A's Dark Dub) Fiord - Shadows of you (Triangle) Ioan Gamboa - Isis Deadpan - Revolution (Seb Dhajje remix)"},{episodio:"016",titulo:"Resident / Episode 016 / August 20 2011",descripcion:`Part 1 tracklist Lemontrip - Undiscovered

Pawas - Huis Huis (Mike Machine Remix)

Marco Effe - Ayurveda's Notes

Matthias Meyer - More Or Less feat. Christopher Groove (Christian Burkhardt & Einzelkind Remix)

Minilogue - Blessed Part 2 Tracklist Gabriel Rhome - Ronde

Raxon - Into The Summer (Nick Muir Remix)

Neshproject - The way it used to be

Fergie - PCP (King Unique Remix)`,likes:"6",descargas:"4.5K",fecha:"2011-08-20",link:"https://mcdn.podbean.com/mf/download/zwez45/016-HernanCattaneo-2011-08-20.mp3",tracklist:`Part 1 Lemontrip - Undiscovered

Pawas - Huis Huis (Mike Machine Remix)

Marco Effe - Ayurveda's Notes

Matthias Meyer - More Or Less feat. Christopher Groove (Christian Burkhardt & Einzelkind Remix)

Minilogue - Blessed Part 2 Gabriel Rhome - Ronde

Raxon - Into The Summer (Nick Muir Remix)

Neshproject - The way it used to be

Fergie - PCP (King Unique Remix)`},{episodio:"017",titulo:"Resident / Episode 017 / August 27  2011",descripcion:`Part 1 Tracklist Mano Le Tough - Stories Marcus Meinhardt - Chain Of Memories Joel Armstrong - Silvermoon (Mode B Remix) Charles K - Goodbye Robot

Mike Griego - In That Moment (Dark Soul Project)

Part 2 Tracklist

Lanny May - All Things Are One Thing

Mathew Lynch - Water waves (original mix)

Gregor Tresher - Lights From The Inside (Dosem Remix)

Marcelo Vasami & Ariel AB - Too Long Too Late (Silinder Remix)

Examine - Stand Alone (Estroe Remix)`,likes:"10",descargas:"4.3K",fecha:null,link:"https://mcdn.podbean.com/mf/download/ifuu36/017-HernanCattaneo-2011-08-27.mp3",tracklist:`Part 1 Mano Le Tough - Stories Marcus Meinhardt - Chain Of Memories Joel Armstrong - Silvermoon (Mode B Remix) Charles K - Goodbye Robot

Mike Griego - In That Moment (Dark Soul Project)

Part 2

Lanny May - All Things Are One Thing

Mathew Lynch - Water waves (original mix)

Gregor Tresher - Lights From The Inside (Dosem Remix)

Marcelo Vasami & Ariel AB - Too Long Too Late (Silinder Remix)

Examine - Stand Alone (Estroe Remix)`},{episodio:"006",titulo:"Resident / Episode 006 / June 11 2011",descripcion:"Part1 Tracklist Manuel Sofia - Simple Things Taras van de Voorde/ Estroe - Hear This (Neil Quigley) Alex Niggemann - Lately Dousk - Estrange (Roger Martinez ReFunk) Pig & Dan - Tears Of A Clown Part2 Tracklist Maceo Plex & Elon - Bummalo Cozzy D, Eric Volta - The Gift (Kevin Griffiths Northern Exposure Remix) Claus Von Klunk - Fandango (Dousk remix) Mango, Kazusa - Asphalt Lines (Ryan David Interpretation ) John Digweed & Nick Muir - 30 Northeast",likes:"10",descargas:"6.8K",fecha:"2011-06-11",link:"https://mcdn.podbean.com/mf/download/hsxr7/006-HernanCattaneo-2011-06-11.mp3",tracklist:"Part 1 Manuel Sofia - Simple Things Taras van de Voorde/ Estroe - Hear This (Neil Quigley) Alex Niggemann - Lately Dousk - Estrange (Roger Martinez ReFunk) Pig & Dan - Tears Of A Clown Part 2 Maceo Plex & Elon - Bummalo Cozzy D, Eric Volta - The Gift (Kevin Griffiths Northern Exposure Remix) Claus Von Klunk - Fandango (Dousk remix) Mango, Kazusa - Asphalt Lines (Ryan David Interpretation ) John Digweed & Nick Muir - 30 Northeast"},{episodio:"007",titulo:"Resident / Episode 007 / June 18 2011",descripcion:"Part 1 Tracklist Sebo K - Mr. Duk Rowdent - Garage sale Ocean Wave - Clearwater (Chloe Harris Remix) Inkfish - Detroit Quivver feat Cari Golden - Happy Part 2 Tracklist Ryan Davis, Transistor - Nature Is The Law (Original Mix) Mike Griego - In That Moment Martin Morning, Mattia Cunico - Outside Its Better (Hernan Cattaneo & Soundexile rmx) Martin Morning, Mattia Cunico - Duuud (Hernan Cattaneo & Soundexile rmx)",likes:"4",descargas:"7K",fecha:"2011-06-18",link:"https://mcdn.podbean.com/mf/download/hbhkkc/007-HernanCattaneo-2011-06-18.mp3",tracklist:"Part 1 Sebo K - Mr. Duk Rowdent - Garage sale Ocean Wave - Clearwater (Chloe Harris Remix) Inkfish - Detroit Quivver feat Cari Golden - Happy Part 2 Ryan Davis, Transistor - Nature Is The Law (Original Mix) Mike Griego - In That Moment Martin Morning, Mattia Cunico - Outside Its Better (Hernan Cattaneo & Soundexile rmx) Martin Morning, Mattia Cunico - Duuud (Hernan Cattaneo & Soundexile rmx)"},{episodio:"001",titulo:"Resident / Episode 001.1 / May 7th 2011",descripcion:"01. Who Made Who - Every Minute Alone (Michael Mayer Remix) 02. Roger Martinez - Andromeda (Dub Mix) 03. Sasha - Minimal - QAT (Nomad in the Dark dub) 04. Ruede Hagelstein - Emergency (Super Flu's Gentle Dental Nurse Remix )",likes:"33",descargas:"11.5K",fecha:"2011-05-07",link:"https://mcdn.podbean.com/mf/download/926aiz/001_1-HernanCattaneo-2011-05-07.mp3",tracklist:"Who Made Who - Every Minute Alone (Michael Mayer Remix) 02. Roger Martinez - Andromeda (Dub Mix) 03. Sasha - Minimal - QAT (Nomad in the Dark dub) 04. Ruede Hagelstein - Emergency (Super Flu's Gentle Dental Nurse Remix )"},{episodio:"002",titulo:"Resident / Episode 002.1 / May 14th 2011",descripcion:"Part 1 tracklist Chaim-Alive (Kiki Extended Remix) Siopsis-I Try To Fight feat. Alfons Midland-Through Motion Glimpse, Martin Dawson-No One Belongs Here More Than You - (Ewan's Balearos Maximos Remix) Alex Arnout - Vanishing Point",likes:"14",descargas:"6.7K",fecha:"2011-05-14",link:"https://mcdn.podbean.com/mf/download/emu6ik/002_1-HernanCattaneo-2011-05-14.mp3",tracklist:"Part 1 Chaim-Alive (Kiki Extended Remix) Siopsis-I Try To Fight feat. Alfons Midland-Through Motion Glimpse, Martin Dawson-No One Belongs Here More Than You - (Ewan's Balearos Maximos Remix) Alex Arnout - Vanishing Point"},{episodio:"003",titulo:"Resident / Episode 003 / May 21st 2011",descripcion:"Part 1 tracklist Espen, Elusive - Albatross Confessions (Ryan Davis rework) Jimpster - Alsace & Lorraine (Ripperton Remix Lee Foss - Your Turn Girl (Shonky & Dyed Soundorom remix) Kid Bliss - Discoshit Ryan Luciano - l\xB4 jenwar (Silinder Remix) Part 2 tracklist Nhar - Innerplace (John Daily mix) Gregor Tresher - Through the shadow glass Kassey Voorn - Viola Egostereo - Sex Pistols (Hernan Cattaneo & Soundexile rmx)",likes:"11",descargas:"7.3K",fecha:"2011-05-21",link:"https://mcdn.podbean.com/mf/download/te8ea/003-HernanCattaneo-2011-05-21.mp3",tracklist:"Part 1 Espen, Elusive - Albatross Confessions (Ryan Davis rework) Jimpster - Alsace & Lorraine (Ripperton Remix Lee Foss - Your Turn Girl (Shonky & Dyed Soundorom remix) Kid Bliss - Discoshit Ryan Luciano - l\xB4 jenwar (Silinder Remix) Part 2 Nhar - Innerplace (John Daily mix) Gregor Tresher - Through the shadow glass Kassey Voorn - Viola Egostereo - Sex Pistols (Hernan Cattaneo & Soundexile rmx)"},{episodio:"004",titulo:"Resident / Episode 004 / May 28th 2011",descripcion:"Part 1 tracklist Ryan Davis - My White Zebra (Estroe Remix ) Arithmetics - For The Faint of Heart [ Arithmetics] CamelPhat - Watergate Rodskeez & Adam Jace - In My Naked Village Patrice Baumel - To Insanity And Beyond Part 2 tracklist Dave Shtorn - Magic Moments (Eelke Kleijn's Magical Dub Ride) Sven Vath - Ballet Romance (Yousef) Andrew McDonnell - @am dj Scotty A - Persistence",likes:"8",descargas:"8.1K",fecha:"2011-05-28",link:"https://mcdn.podbean.com/mf/download/wu3yxg/004-HernanCattaneo-2011-05-28.mp3",tracklist:"Part 1 Ryan Davis - My White Zebra (Estroe Remix ) Arithmetics - For The Faint of Heart [ Arithmetics] CamelPhat - Watergate Rodskeez & Adam Jace - In My Naked Village Patrice Baumel - To Insanity And Beyond Part 2 Dave Shtorn - Magic Moments (Eelke Kleijn's Magical Dub Ride) Sven Vath - Ballet Romance (Yousef) Andrew McDonnell - @am dj Scotty A - Persistence"},{episodio:"005",titulo:"Resident / Episode 005 / June 04 2011",descripcion:"Part 1 tracklist Paneoh- Sanatrack (Gregers Remix) Mario & Vidis feat. Ernesto - Changed (Andre Lodemann Remix) Heiko Laux & Teo Schulte - Suol Hug (Till von Sein Last Minute DoomDub) System 7 - Positive Noise (Original Cub Mix) DJ Freddy & Michael Avannier - Mechanic system Part 2 tracklist Tim Deluxe & Mat Playford - Back to the Rocket (Club Mix) Slow - Cold Slow (Speiltape Remix) Android Cartel - Wake Up (Dark Soul Project Remix) Kasey Taylor - Similarity (Barry Jamieson Remix)",likes:"9",descargas:"6.9K",fecha:"2011-06-04",link:"https://mcdn.podbean.com/mf/download/um7mc/005-HernanCattaneo-2011-06-04.mp3",tracklist:"Part 1 Paneoh- Sanatrack (Gregers Remix) Mario & Vidis feat. Ernesto - Changed (Andre Lodemann Remix) Heiko Laux & Teo Schulte - Suol Hug (Till von Sein Last Minute DoomDub) System 7 - Positive Noise (Original Cub Mix) DJ Freddy & Michael Avannier - Mechanic system Part 2 Tim Deluxe & Mat Playford - Back to the Rocket (Club Mix) Slow - Cold Slow (Speiltape Remix) Android Cartel - Wake Up (Dark Soul Project Remix) Kasey Taylor - Similarity (Barry Jamieson Remix)"},{episodio:"008",titulo:"Resident / Episode 008 / June 25 2011",descripcion:"Part 1 Tracklist The XX - Fantasy (Sound Process) Guy J - Sahara Gregor Tresher - LEAVING Jimmy Van M Feat. Steve T \u2013 We Are Children Part 2 tracklist Lonya and Aruba feat. Patrick Grob - Cannibals Moby vs Mohrr Kai Handberg - Hengemyr Verche - Awakening",likes:"4",descargas:"7.5K",fecha:"2011-06-25",link:"https://mcdn.podbean.com/mf/download/sqswd/008-HernanCattaneo-2011-06-25.mp3",tracklist:"Part 1 The XX - Fantasy (Sound Process) Guy J - Sahara Gregor Tresher - LEAVING Jimmy Van M Feat. Steve T \u2013 We Are Children Part 2 Lonya and Aruba feat. Patrick Grob - Cannibals Moby vs Mohrr Kai Handberg - Hengemyr Verche - Awakening"},{episodio:"009",titulo:"Resident / Episode 009 / July 02 2011",descripcion:`Part 1 Tracklist Martin Buttrich - Rocket

Adam Port feat. Ruede Hagelstein - Corrosive Love

Baboop vs Thodoris Triantafillou & CJ Jeff -Bottle U (King Unique Bootleg)

Midnight Ramblers - Scarab Part 2 Tracklist Raxon - Into The Summer

Chris Fortier - Round Turn Life

Giorgos Gatzigristos - Natural Selection

Tom Hades - Come one`,likes:"4",descargas:"7.2K",fecha:"2011-07-02",link:"https://mcdn.podbean.com/mf/download/7sgv36/009-HernanCattaneo-2011-07-02.mp3",tracklist:`Part 1 Martin Buttrich - Rocket

Adam Port feat. Ruede Hagelstein - Corrosive Love

Baboop vs Thodoris Triantafillou & CJ Jeff -Bottle U (King Unique Bootleg)

Midnight Ramblers - Scarab Part 2 Raxon - Into The Summer

Chris Fortier - Round Turn Life

Giorgos Gatzigristos - Natural Selection

Tom Hades - Come one`},{episodio:"010",titulo:"Resident / Episode 010 / July 09 2011",descripcion:"Part 1 Tracklist Mason featuring Aqualung - Little Angel (Robert Babicz Sunshine Mix) Claude Vonstroke - Bird Brain (Ryan Luciano Rework) Tone Float - Blue Velvet 9west - Chasing Demons Part 2 Tracklist Paul Kalkbrenner - Kruppzeug Steffen Nehrig - Mouth Of The Canal (Original Mix ) Anja Schneider, And.Id - Imagination (Original Mix ) Gus Gus - Selfoss (Deepfunk's Unofficial Remix) K-pax - Space ( Bs As deep Remix)",likes:"3",descargas:"7.1K",fecha:"2011-07-09",link:"https://mcdn.podbean.com/mf/download/rape27/010-HernanCattaneo-2011-07-09.mp3",tracklist:"Part 1 Mason featuring Aqualung - Little Angel (Robert Babicz Sunshine Mix) Claude Vonstroke - Bird Brain (Ryan Luciano Rework) Tone Float - Blue Velvet 9west - Chasing Demons Part 2 Paul Kalkbrenner - Kruppzeug Steffen Nehrig - Mouth Of The Canal (Original Mix ) Anja Schneider, And.Id - Imagination (Original Mix ) Gus Gus - Selfoss (Deepfunk's Unofficial Remix) K-pax - Space ( Bs As deep Remix)"},{episodio:"011",titulo:"Resident / Episode 011 / July 16 2011",descripcion:"Part 1 Tracklist Rodriguez Jr Lila Bamako vz Rupert - Neve (Astraway Mash) Florian Gasperini & Jose Maria Ramon - Unbreakable (Pole Folder mix) Soulwerk - Wind Rose Joel Armstrong - Silver Moon (Pig & Dan Remix) Ellez Marinni - Ez Style (Shiftone Remix) Part 2 Tracklist Oliver Lieb - Extrasolar Guy Mantzur - Wisper Me Flowly Tvardovsky - Under The Mask (Pacco\xA0 &\xA0 Rudy B Remix) Funk Dvoid - Toro Dosem - Origin",likes:"4",descargas:"7.9K",fecha:"2011-07-16",link:"https://mcdn.podbean.com/mf/download/5iq8kz/011-HernanCattaneo-2011-07-16.mp3",tracklist:"Part 1 Rodriguez Jr Lila Bamako vz Rupert - Neve (Astraway Mash) Florian Gasperini & Jose Maria Ramon - Unbreakable (Pole Folder mix) Soulwerk - Wind Rose Joel Armstrong - Silver Moon (Pig & Dan Remix) Ellez Marinni - Ez Style (Shiftone Remix) Part 2 Oliver Lieb - Extrasolar Guy Mantzur - Wisper Me Flowly Tvardovsky - Under The Mask (Pacco\xA0 &\xA0 Rudy B Remix) Funk Dvoid - Toro Dosem - Origin"},{episodio:"012",titulo:"Resident / Episode 012 / July 23 2011",descripcion:`Part 1 Tracklist

Daniel Bortz & Sascha Sibler - Color Of Love

Daniel Bortz & Sascha Sibler - Fantasy

Marquez Ill vs Pole Folde - Nocturne (Alexanderplatz Mix)

Ellen Allien - Searching (Shonky Remix)

Part 2 Tracklist

Henry Saiz - The way The sunlight plays upon her hair

Romano Alfieri & Luca Bear - Leave The Valley

Ruede Hagelstein - In A Stream (Original Mix)

Hishmulator - Skiz nir (Marc Marzenit Remix)`,likes:"4",descargas:"7.7K",fecha:"2011-07-23",link:"https://mcdn.podbean.com/mf/download/imsur/012-HernanCattaneo-2011-07-23.mp3",tracklist:`Part 1

Daniel Bortz & Sascha Sibler - Color Of Love

Daniel Bortz & Sascha Sibler - Fantasy

Marquez Ill vs Pole Folde - Nocturne (Alexanderplatz Mix)

Ellen Allien - Searching (Shonky Remix)

Part 2

Henry Saiz - The way The sunlight plays upon her hair

Romano Alfieri & Luca Bear - Leave The Valley

Ruede Hagelstein - In A Stream (Original Mix)

Hishmulator - Skiz nir (Marc Marzenit Remix)`},{episodio:"013",titulo:"Resident / Episode 013 / July 30 2011",descripcion:`Part 1 Tracklist

Leseman & Cohen ft. Colin Mutchler - Fung Shway (Camiel Daamen Remix)

Moby - Lie Down In Darkness (Gregor Tresher Mix)

Dana Ruh - What I'm Telling You

Silicone Soul - Time Mariner's Mirrour

Squilacce/Guti - That Ginger Pony Tail

Part 1 Tracklist

Kassey Voorn - Ghalantomos (Deepfunk Remix)

Guy J & Miriam Vaga - Fly (Simon Vuarambon & Kevin Di Serna Main Mix)

Astraway - Payment in Full

John Digweed & Nick Muir \u2013 30 Northeast (Nikko.Z Unofficial Remix)`,likes:"8",descargas:"7.8K",fecha:"2011-07-30",link:"https://mcdn.podbean.com/mf/download/xanufg/013-HernanCattaneo-2011-07-30.mp3",tracklist:`Part 1

Leseman & Cohen ft. Colin Mutchler - Fung Shway (Camiel Daamen Remix)

Moby - Lie Down In Darkness (Gregor Tresher Mix)

Dana Ruh - What I'm Telling You

Silicone Soul - Time Mariner's Mirrour

Squilacce/Guti - That Ginger Pony Tail

Part 1

Kassey Voorn - Ghalantomos (Deepfunk Remix)

Guy J & Miriam Vaga - Fly (Simon Vuarambon & Kevin Di Serna Main Mix)

Astraway - Payment in Full

John Digweed & Nick Muir \u2013 30 Northeast (Nikko.Z Unofficial Remix)`},{episodio:"014",titulo:"Resident / Episode 014 / August 06 2011",descripcion:"Part 1 Tracklist Azari & III - Manic - Maceo Plex Remix Jin Choi - Half Baked (Maceo Plex Groove Remix) Hakan Libdo -Meatmatching - Summer (Brendon Collins) Alex Celler - Blue Vaudeville (Shonky Remix) Part 2 Tracklist Santiago Garcia - Needing Rest (Original mix) Radiohead - Codex (Henry Saiz Rmx) Dark Soul Project & Andy Arias - To Be Or Not To Be Lonya & Audio Junkies - Fetish (Audio Junkies Mix) Oliver Lieb - Extrasolar",likes:"4",descargas:"7.9K",fecha:"2011-08-06",link:"https://mcdn.podbean.com/mf/download/cxidps/014-HernanCattaneo-2011-08-06.mp3",tracklist:"Part 1 Azari & III - Manic - Maceo Plex Remix Jin Choi - Half Baked (Maceo Plex Groove Remix) Hakan Libdo -Meatmatching - Summer (Brendon Collins) Alex Celler - Blue Vaudeville (Shonky Remix) Part 2 Santiago Garcia - Needing Rest (Original mix) Radiohead - Codex (Henry Saiz Rmx) Dark Soul Project & Andy Arias - To Be Or Not To Be Lonya & Audio Junkies - Fetish (Audio Junkies Mix) Oliver Lieb - Extrasolar"},{episodio:"015",titulo:"Resident / Episode 015 / August 13 2011",descripcion:`Part 1 Tracklist Deep Mariano - Secret Passage

Vector Lovers - Melodies And Memory (Marquez Ill Remix)

T lectual - Glass walls (Diyo Remix)

Reference - Another Place

Microtrauma - Circulate Part 2 Tracklist Hartmut Kiss - Water Games (Eelke Kleijn's Vintage Remix)

Paperclip People - 4 My Peepz (Dubfire Rework)

Whebba - Human Interface

Carl Cox - Family Guy (Jon Rundell)`,likes:"3",descargas:"7.7K",fecha:"2011-08-13",link:"https://mcdn.podbean.com/mf/download/9wfn7p/015-HernanCattaneo-2011-08-13.mp3",tracklist:`Part 1 Deep Mariano - Secret Passage

Vector Lovers - Melodies And Memory (Marquez Ill Remix)

T lectual - Glass walls (Diyo Remix)

Reference - Another Place

Microtrauma - Circulate Part 2 Hartmut Kiss - Water Games (Eelke Kleijn's Vintage Remix)

Paperclip People - 4 My Peepz (Dubfire Rework)

Whebba - Human Interface

Carl Cox - Family Guy (Jon Rundell)`},{episodio:"018",titulo:"Resident / Episode 018 / September 03  2011",descripcion:`Part 1 Tracklist

Tom Glass - Naive
Shonky - Oasis
Wiretappeur Everybody Loves Ice Cream - Vinzenzo Remix
Tone Float & Neil Quigley - In Pursuit
Barem - Better

Part 2 Tracklist

Stefan Hellstrom - Velcro Mind (Montano Remix)
Eelke Kleijn - Theme For Nosey (Peter Makto & Gregory S remix)
Mike Griego vs Mohrr
Nikko.Z - L.A
Steve Slight - Triton`,likes:"12",descargas:"4.6K",fecha:null,link:"https://mcdn.podbean.com/mf/download/mact7y/018-HernanCattaneo-2011-09-03.mp3",tracklist:`Part 1

Tom Glass - Naive
Shonky - Oasis
Wiretappeur Everybody Loves Ice Cream - Vinzenzo Remix
Tone Float & Neil Quigley - In Pursuit
Barem - Better

Part 2

Stefan Hellstrom - Velcro Mind (Montano Remix)
Eelke Kleijn - Theme For Nosey (Peter Makto & Gregory S remix)
Mike Griego vs Mohrr
Nikko.Z - L.A
Steve Slight - Triton`},{episodio:"019",titulo:"Resident / Episode 019 / September 10 2011",descripcion:"Tracklist Part 1 The Sushi Club -Dopia - Christian Burkhardt Remix Moonbeam - No Regrets feat. Pryce Oliver (H.O.S.H. Remix ) Florian Meindl, Ricardo Phillips - Desert Times (Boris Brejcha Remix) Andy Arias - Pamperland UNKLE - Rabbit In Your Headlight (King Unique Remix) ----------- Tracklist Part 2 Martin Woerner - Braintwister (Frank Leicher.. Pascal Feos Remix) Tom Glass - Naive (Nick Warren) Juan Deminicis - Dark Concience (Original Mix) Bollen &\xA0 Fichtner - pis- en kots (Audiotox & Watson)",likes:"7",descargas:"4.3K",fecha:"2011-09-10",link:"https://mcdn.podbean.com/mf/download/jwubh3/019-HernanCattaneo-2011-09-10.mp3",tracklist:"Tracklist Part 1 The Sushi Club -Dopia - Christian Burkhardt Remix Moonbeam - No Regrets feat. Pryce Oliver (H.O.S.H. Remix ) Florian Meindl, Ricardo Phillips - Desert Times (Boris Brejcha Remix) Andy Arias - Pamperland UNKLE - Rabbit In Your Headlight (King Unique Remix) ----------- Tracklist Part 2 Martin Woerner - Braintwister (Frank Leicher.. Pascal Feos Remix) Tom Glass - Naive (Nick Warren) Juan Deminicis - Dark Concience (Original Mix) Bollen &\xA0 Fichtner - pis- en kots (Audiotox & Watson)"},{episodio:"020",titulo:"Resident / Episode 020 / September 17 2011",descripcion:`Part 1 Tracklist

Michel De Hey Vs. M.I.R.K.O. - Give Me A Light (Rodriguez Jr. Remix) Lair - Spada Sven Elmlund - Loud (Alexander Kowalski Remix) Slideshow Park - Shining (Solee Remix) Max Cooper - Qualia

Part 2 Tracklist

Rich Curtis - Partial Credit (Scotty.A Remix) Giorgos Gatzigristos - Flush (Paul Hazendonk Manual Remix) Villains - Slow Thump (Sian insulated remix) Marc Poppcke & Max von Valentiner - Never Go Back Diego Poblets - Meridians And Parallels`,likes:"3",descargas:"4.2K",fecha:"2011-09-17",link:"https://mcdn.podbean.com/mf/download/g943rw/020-HernanCattaneo-2011-09-17.mp3",tracklist:`Part 1

Michel De Hey Vs. M.I.R.K.O. - Give Me A Light (Rodriguez Jr. Remix) Lair - Spada Sven Elmlund - Loud (Alexander Kowalski Remix) Slideshow Park - Shining (Solee Remix) Max Cooper - Qualia

Part 2

Rich Curtis - Partial Credit (Scotty.A Remix) Giorgos Gatzigristos - Flush (Paul Hazendonk Manual Remix) Villains - Slow Thump (Sian insulated remix) Marc Poppcke & Max von Valentiner - Never Go Back Diego Poblets - Meridians And Parallels`},{episodio:"021",titulo:"Resident / Episode 021 / September 24 2011",descripcion:"Part 1 Tracklist Mechanique - Karoshi Gregor Tresher - Lights From The Inside (Nick Curly Remix) Inxec, Droog - Westbound Hal Incandenza - Little Mountains (Mono Electric) Guy Mantzur - Mediterranean blue Part 2 Tracklist Gui Boratto - The Third Deepfunk - Monday (Luis Bondio Unofficial Remix) Red Devil - Gamelan (Martin Garcia Remix) Loacs Erepams - I Can't Figure It Out (Paul Hazendonk's Manual remix)",likes:"3",descargas:"11.1K",fecha:"2011-09-24",link:"https://mcdn.podbean.com/mf/download/bp2vxr/021-HernanCattaneo-2011-09-24.mp3",tracklist:"Part 1 Mechanique - Karoshi Gregor Tresher - Lights From The Inside (Nick Curly Remix) Inxec, Droog - Westbound Hal Incandenza - Little Mountains (Mono Electric) Guy Mantzur - Mediterranean blue Part 2 Gui Boratto - The Third Deepfunk - Monday (Luis Bondio Unofficial Remix) Red Devil - Gamelan (Martin Garcia Remix) Loacs Erepams - I Can't Figure It Out (Paul Hazendonk's Manual remix)"},{episodio:"022",titulo:"Resident / Episode 022 / October 01 2011",descripcion:"Part 1 Tracklist Superpitcher - White Lightning Stel & Sasse - The Z James What - It Feels Wrong Enrico Trevis - Spirits (Daneel Remix) Part 2 tracklist Russian Linesman - I am Narcassist - Ryan Davis 'Leaves of Autumn' Remix Hugcaro feat James Hurr - Stranded Again (Liz Cirelli remix) Dmitry Globa - La Aurora Boreal [Nick Stoynoff Remix) Dousk - Estrange (Kasey Taylor Remix)",likes:"5",descargas:"10.1K",fecha:"2011-10-01",link:"https://mcdn.podbean.com/mf/download/xr6ciw/022-HernanCattaneo-2011-10-01.mp3",tracklist:"Part 1 Superpitcher - White Lightning Stel & Sasse - The Z James What - It Feels Wrong Enrico Trevis - Spirits (Daneel Remix) Part 2 Russian Linesman - I am Narcassist - Ryan Davis 'Leaves of Autumn' Remix Hugcaro feat James Hurr - Stranded Again (Liz Cirelli remix) Dmitry Globa - La Aurora Boreal [Nick Stoynoff Remix) Dousk - Estrange (Kasey Taylor Remix)"},{episodio:"023",titulo:"Resident / Episode 023 / October 08 2011",descripcion:"Part 1 Tracklist The Field - It\xB4s Up There Rodrigo Mateo - Carbon Monoxide (Santiago Garcia Remix) Ian O'Donovan - Orient Express B.I.G. - A Promise (Dark Soul Project Remix) Part 2 Tracklist Flying Practice - Gui Boratto Jacob Singer - Why Smak aka Steve McCready - Deundo Soulwerk - Fraktals Raxon - Into The Summer (Cid Inc Remix)",likes:"9",descargas:"10K",fecha:"2011-10-08",link:"https://mcdn.podbean.com/mf/download/b888hb/023-HernanCattaneo-2011-10-08.mp3",tracklist:"Part 1 The Field - It\xB4s Up There Rodrigo Mateo - Carbon Monoxide (Santiago Garcia Remix) Ian O'Donovan - Orient Express B.I.G. - A Promise (Dark Soul Project Remix) Part 2 Flying Practice - Gui Boratto Jacob Singer - Why Smak aka Steve McCready - Deundo Soulwerk - Fraktals Raxon - Into The Summer (Cid Inc Remix)"},{episodio:"024",titulo:"Resident / Episode 024 / October 15 2011",descripcion:"Part 1 Tracklist Rainer - 8000 feet up (Shaun Reeves & Tale of us rmx) Sunset Blvd - Clockwater (Nikos Diamantopoulos Rmx) Serafim Tsotsonis - Alone In The Stars (Scsi9 Moderndance Mix) Max Cue - Des Sentiments Melanges Hiroshi Watanabe - Gemini (Vince Watson Rmx) Part 2 Tracklist Aviran Shahino - My dark house The Selph - Evening Falls Guy Mantzur & Sahar Z - Coton Candy (Apologist Remix) Sound Process - Simple Chords (Nikko.Z Remix)",likes:"5",descargas:"9.9K",fecha:"2011-10-15",link:"https://mcdn.podbean.com/mf/download/hcw6uh/024-HernanCattaneo-2011-10-15.mp3",tracklist:"Part 1 Rainer - 8000 feet up (Shaun Reeves & Tale of us rmx) Sunset Blvd - Clockwater (Nikos Diamantopoulos Rmx) Serafim Tsotsonis - Alone In The Stars (Scsi9 Moderndance Mix) Max Cue - Des Sentiments Melanges Hiroshi Watanabe - Gemini (Vince Watson Rmx) Part 2 Aviran Shahino - My dark house The Selph - Evening Falls Guy Mantzur & Sahar Z - Coton Candy (Apologist Remix) Sound Process - Simple Chords (Nikko.Z Remix)"},{episodio:"025",titulo:"Resident / Episode 025 / October 22 2011",descripcion:"Part 1 Tracklist Tracey Thorn - Swimming (Visionquest Remix, Ewan Pearson Re-Edit) Matthias Vog - Copying The Future We Fell To Earth - The Double ( Cocolino Edit ) Shamique & Stephan Bazbaz - Buoquet ( Lank Remix ) Part 2 Tracklist Nick Curly-Libero Hall North-levinas-(Soulwerk) Luis Bondio & Ivan Jaime - Ballest Style Guy J and Henry Saiz\xA0 Meridian",likes:"6",descargas:"10.1K",fecha:"2011-10-22",link:"https://mcdn.podbean.com/mf/download/q8bnec/025-HernanCattaneo-2011-10-22.mp3",tracklist:"Part 1 Tracey Thorn - Swimming (Visionquest Remix, Ewan Pearson Re-Edit) Matthias Vog - Copying The Future We Fell To Earth - The Double ( Cocolino Edit ) Shamique & Stephan Bazbaz - Buoquet ( Lank Remix ) Part 2 Nick Curly-Libero Hall North-levinas-(Soulwerk) Luis Bondio & Ivan Jaime - Ballest Style Guy J and Henry Saiz\xA0 Meridian"},{episodio:"027",titulo:"Resident / Episode 027 / November 05 2011",descripcion:"Part 1 Tracklist Joe Stawarz - Deep Cut (Mihalis Safras Remix) Lee Brinx - Over You feat Tina Geru (Wildkats Mix) Tim Wolff - Get Ready (Quince's Stripped Down Reconstruction) Mr. G & Gary Beck - All My People Frank Lorber, Sante - Rootdown Part 2 Tracklist Juan Deminicis - Rainbows (Rikesto Alma En Coma Remix) Sonic Union - Solar Flare Gabriel Ananda - Hey blop\xA0 (Christian Smith) Francesco Pico feat Royal Sapien - You Changed My Way",likes:"5",descargas:"8.5K",fecha:"2011-11-05",link:"https://mcdn.podbean.com/mf/download/6a2u3q/027-HernanCattaneo-2011-11-05.mp3",tracklist:"Part 1 Joe Stawarz - Deep Cut (Mihalis Safras Remix) Lee Brinx - Over You feat Tina Geru (Wildkats Mix) Tim Wolff - Get Ready (Quince's Stripped Down Reconstruction) Mr. G & Gary Beck - All My People Frank Lorber, Sante - Rootdown Part 2 Juan Deminicis - Rainbows (Rikesto Alma En Coma Remix) Sonic Union - Solar Flare Gabriel Ananda - Hey blop\xA0 (Christian Smith) Francesco Pico feat Royal Sapien - You Changed My Way"},{episodio:"028",titulo:"Resident / Episode 028 / November 19 2011",descripcion:"Part 1 Tracklist Terje Saether - Scared Feat. Malin Pettersen (Of Norway Version) Stuart Mckwown - Chemical Thurst (Daruis& Lister rmx) Part 2 Tracklist Simao Ferreira - Kid (Pole Folder) Rich Curtis - Slices Of Dust (Santiago Garcia Remix) Egbert - Vrijheid Franz Kirmann - Liza (Charlie May Atlantic Club Mix)",likes:"8",descargas:"9.1K",fecha:"2011-11-19",link:"https://mcdn.podbean.com/mf/download/5kej6x/028-HernanCattaneo-2011-11-19.mp3",tracklist:"Part 1 Terje Saether - Scared Feat. Malin Pettersen (Of Norway Version) Stuart Mckwown - Chemical Thurst (Daruis& Lister rmx) Part 2 Simao Ferreira - Kid (Pole Folder) Rich Curtis - Slices Of Dust (Santiago Garcia Remix) Egbert - Vrijheid Franz Kirmann - Liza (Charlie May Atlantic Club Mix)"},{episodio:"029",titulo:"Resident / Episode 029 / November 26 2011",descripcion:"Part 1 Tracklist The Bluestorm feat. Vera Ostrova - Icelandic (Pole Folder Remix) Babak - Melancholin (Marc Cotterell Remix) Thomas Gandey - Piano track-(Radioslave mix) Randall Jones - Business As Usual Part 2 Tracklist Ripperton - Lost In Colors (Robert Babicz Remix) Massive Attack - United Snakes (Andy Arias Warm Tent Rework) Rikesto - Dynamic Surrealism Mike Griego - People Change",likes:"4",descargas:"11.4K",fecha:"2011-11-26",link:"https://mcdn.podbean.com/mf/download/xwys7b/029-HernanCattaneo-2011-11-26.mp3",tracklist:"Part 1 The Bluestorm feat. Vera Ostrova - Icelandic (Pole Folder Remix) Babak - Melancholin (Marc Cotterell Remix) Thomas Gandey - Piano track-(Radioslave mix) Randall Jones - Business As Usual Part 2 Ripperton - Lost In Colors (Robert Babicz Remix) Massive Attack - United Snakes (Andy Arias Warm Tent Rework) Rikesto - Dynamic Surrealism Mike Griego - People Change"},{episodio:"030",titulo:"Resident / Episode 030 / December 3 2011",descripcion:`Part 1 Tracklist

Dominik Eulberg - Der Tanz der Gluehwuermchen (Kollektiv Turmstrasse\xA0 Dirt Glow Remix)

Burial - Fostercare [Marcelo Vasami Remix]

Mario Puccio - Rosario

Hawaii - Pure (Andrez Remix)

Part 2 Tracklist

Dominik Eulberg-Taeuschnungs - Blume (Ryan Davis 'Narciss' Render)

Audio Junkies feat. Mei Finegold - Deeper (Lonya Remix)

Fefo - Semillas

Marek Hemmann -Infinity`,likes:"4",descargas:"10.9K",fecha:"2011-12-03",link:"https://mcdn.podbean.com/mf/download/rdqg54/030-HernanCattaneo-2011-12-03.mp3",tracklist:`Part 1

Dominik Eulberg - Der Tanz der Gluehwuermchen (Kollektiv Turmstrasse\xA0 Dirt Glow Remix)

Burial - Fostercare [Marcelo Vasami Remix]

Mario Puccio - Rosario

Hawaii - Pure (Andrez Remix)

Part 2

Dominik Eulberg-Taeuschnungs - Blume (Ryan Davis 'Narciss' Render)

Audio Junkies feat. Mei Finegold - Deeper (Lonya Remix)

Fefo - Semillas

Marek Hemmann -Infinity`},{episodio:"031",titulo:"Resident / Episode 031 / December 10 2011",descripcion:"Part 1 tracklist Stay High Baby - Maceo Plex Sirenize - Empty Your Mind JOSEL - Is This The End For Us Applescal - Mr Cold John Digweed - Warung Beach (Kiki Remix) Part 2 tracklist Navar - Loved Ones Fady Ferraye - An Aquarian Exposition [Marcelo Vasami Remix] Liz Cirelli & Minski - Trip Of The Dolphin (master) Graziano Blanco - Weekend Heroes (Matias Vila Weekend mix) Pao C - Fool Moon [Andy Lau)",likes:"5",descargas:"11.2K",fecha:"2011-12-10",link:"https://mcdn.podbean.com/mf/download/bd35w/031-HernanCattaneo-2011-12-10.mp3",tracklist:"Part 1 Stay High Baby - Maceo Plex Sirenize - Empty Your Mind JOSEL - Is This The End For Us Applescal - Mr Cold John Digweed - Warung Beach (Kiki Remix) Part 2 Navar - Loved Ones Fady Ferraye - An Aquarian Exposition [Marcelo Vasami Remix] Liz Cirelli & Minski - Trip Of The Dolphin (master) Graziano Blanco - Weekend Heroes (Matias Vila Weekend mix) Pao C - Fool Moon [Andy Lau)"},{episodio:"032",titulo:"Resident / Episode 032 / December 17 2011",descripcion:"Part 1 Tracklist Jay West - Smile Dominik Eulberg-H2O (Hot Chip Remix (Extended Vocal Mix)) Prommer & BarckThe Barking Grizzle (Detroit-Berlin) (Norman & Jerome Sydenham Remix Yoram-Avalanche Part 2 Tracklist Maetrik-Revenge Of Jack David Duque - Wind Master (Scotty.A remix) Guy Mantzur - Rubber Man Nils Koenig-tonight (Original Mix)",likes:"5",descargas:"12.6K",fecha:"2011-12-17",link:"https://mcdn.podbean.com/mf/download/j7qus/032-HernanCattaneo-2011-12-17.mp3",tracklist:"Part 1 Jay West - Smile Dominik Eulberg-H2O (Hot Chip Remix (Extended Vocal Mix)) Prommer & BarckThe Barking Grizzle (Detroit-Berlin) (Norman & Jerome Sydenham Remix Yoram-Avalanche Part 2 Maetrik-Revenge Of Jack David Duque - Wind Master (Scotty.A remix) Guy Mantzur - Rubber Man Nils Koenig-tonight (Original Mix)"},{episodio:"033",titulo:"Resident / Episode 033 / December 24 2011",descripcion:`Part 1 Tracklist

Ryan Davis - The Wolve (Joff Logartz In The Bergerie Remix) Totem Pole\xA0 - Dark Chapel (Original Mix)

Ripples -IssacRemix

Piyush Awasthi - Faces [Marcelo Vasami's Chords Remix) Part 2 Tracklist

Next To You (Oliver Schories Remix) Indira Boka

Li Polymer - Third Element (Andy Arias Remix)

DJ Denise And Jen Woolfe- Seattle Maybe (NomadInTheDark)

Audiotox & Watson - Once again`,likes:"4",descargas:"9.5K",fecha:"2011-12-24",link:"https://mcdn.podbean.com/mf/download/irwurf/033-HernanCattaneo-2011-12-24.mp3",tracklist:`Part 1

Ryan Davis - The Wolve (Joff Logartz In The Bergerie Remix) Totem Pole\xA0 - Dark Chapel (Original Mix)

Ripples -IssacRemix

Piyush Awasthi - Faces [Marcelo Vasami's Chords Remix) Part 2

Next To You (Oliver Schories Remix) Indira Boka

Li Polymer - Third Element (Andy Arias Remix)

DJ Denise And Jen Woolfe- Seattle Maybe (NomadInTheDark)

Audiotox & Watson - Once again`},{episodio:"034",titulo:"Resident / Episode 034 / December 31 2011",descripcion:"Part 1 Tracklist Dapple Apple - Cardboard Spaceship For The Cat Rodrigo Mateo - Carbon Monoxide (Praveen Achary) Diego Poblets - Meridians and Parallels (Luis Bondio Remix) Vanyamo - Memories (Dark Soul Project Goes Deeper Remix) Part 2 Tracklist Gui Boratto - Paralelo (Oliver Schories Remix) Matador - Korrado Petar Dundov And Gregor Tresher - Duo Tone Oliver Huntemann - The End",likes:"2",descargas:"9.6K",fecha:"2011-12-31",link:"https://mcdn.podbean.com/mf/download/wt7q3/034-HernanCattaneo-2011-12-31.mp3",tracklist:"Part 1 Dapple Apple - Cardboard Spaceship For The Cat Rodrigo Mateo - Carbon Monoxide (Praveen Achary) Diego Poblets - Meridians and Parallels (Luis Bondio Remix) Vanyamo - Memories (Dark Soul Project Goes Deeper Remix) Part 2 Gui Boratto - Paralelo (Oliver Schories Remix) Matador - Korrado Petar Dundov And Gregor Tresher - Duo Tone Oliver Huntemann - The End"},{episodio:"035",titulo:"Resident / Episode 035 / January 07 2012",descripcion:`Part 1 Tracklist

Unknown - You and me (Guti rmx)

Soy Mustafa - Return Of The Anunnaki (John Tejada Remix)

Rodskeez - SBS (Kasey Taylor Dub)

Matador Nomans - Land

Luis Junior - Alibi (Ryan Davis remix)

Part 2 Tracklist

Bliss - Mehmet Akar booty

Piyush Aswathi - Soundscape (Juan Deminicis Remix)

Tvardovsky - Brain Code (Santiago Garcia Remix)

Thomas Moon & Massimo Mephisto-K - Hole (Cactus Twisters Remix )`,likes:"9",descargas:"12.6K",fecha:"2012-01-07",link:"https://mcdn.podbean.com/mf/download/sqk5kg/035-HernanCattaneo-2012-01-06.mp3",tracklist:`Part 1

Unknown - You and me (Guti rmx)

Soy Mustafa - Return Of The Anunnaki (John Tejada Remix)

Rodskeez - SBS (Kasey Taylor Dub)

Matador Nomans - Land

Luis Junior - Alibi (Ryan Davis remix)

Part 2

Bliss - Mehmet Akar booty

Piyush Aswathi - Soundscape (Juan Deminicis Remix)

Tvardovsky - Brain Code (Santiago Garcia Remix)

Thomas Moon & Massimo Mephisto-K - Hole (Cactus Twisters Remix )`},{episodio:"037",titulo:"Resident / Episode 037 / January 21 2012",descripcion:`Part 1 Tracklist

Sample Bots - Alpha (Original Mix)

Soy Mustafa - Return of the Anunnaki

Uner - Nuribo (Vincenzo Remix)

Rodskeez - SBS

Part 2 Tracklist

Deetron - Collide

Max Cooper - Epoch

Matador - Mambo

Deepfunk - Red Light`,likes:"2",descargas:"10.7K",fecha:"2012-01-21",link:"https://mcdn.podbean.com/mf/download/twziyf/037-HernanCattaneo-2012-01-21.mp3",tracklist:`Part 1

Sample Bots - Alpha (Original Mix)

Soy Mustafa - Return of the Anunnaki

Uner - Nuribo (Vincenzo Remix)

Rodskeez - SBS

Part 2

Deetron - Collide

Max Cooper - Epoch

Matador - Mambo

Deepfunk - Red Light`},{episodio:"038",titulo:"Resident / Episode 038 / January 28 2012",descripcion:`Part 1 Tracklist

Goldfrapp - Strict Machine (Jamie Jones Remix)

Igor Cold - 2 Moons

Caytas & Patz - Are You Afraid

Deepmariano - Find me on the ocean

John Gham - Cortinas Rojas Part 2 Tracklist

Guy Mantzur - Amorphous Love (Deepfunk's 2am Mix)

UNKLE - Heaven (Juan Deminicis Unofficial Remix)

Nikko.Z - The Lizard King

Guy J - My Thought Of You (Sian's telepathic mix)`,likes:"5",descargas:"11.1K",fecha:"2012-01-28",link:"https://mcdn.podbean.com/mf/download/25b9i/038-HernanCattaneo-2012-01-28.mp3",tracklist:`Part 1

Goldfrapp - Strict Machine (Jamie Jones Remix)

Igor Cold - 2 Moons

Caytas & Patz - Are You Afraid

Deepmariano - Find me on the ocean

John Gham - Cortinas Rojas Part 2

Guy Mantzur - Amorphous Love (Deepfunk's 2am Mix)

UNKLE - Heaven (Juan Deminicis Unofficial Remix)

Nikko.Z - The Lizard King

Guy J - My Thought Of You (Sian's telepathic mix)`},{episodio:"039",titulo:"Resident / Episode 039 / February 04 2012",descripcion:`Part 1 Tracklist

Procesos - Brandub

Nadja Lind & Paul Loraine - Great Mistake

Blueprint feat Fritz Kalkbrenner & Thalstroem (Kollektiv Turmstrasse Remix)

Gregor Tresher & Karotte - Wave Goodbye

Dark Soul Project & Santiago Garcia - Erks (Original Mix) CDR

Part 2 Tracklist

Vinayak^a - Sands of goa

NameSpace - Not Found

Kulturn - 126 (Juan Deminicis Night Remix)

Mechanique - Adding Insult to Injury

Dartek - Soopertrance (Fefo Remix)`,likes:"6",descargas:"10.6K",fecha:"2012-02-04",link:"https://mcdn.podbean.com/mf/download/g4twv7/039-HernanCattaneo-2012-02-04.mp3",tracklist:`Part 1

Procesos - Brandub

Nadja Lind & Paul Loraine - Great Mistake

Blueprint feat Fritz Kalkbrenner & Thalstroem (Kollektiv Turmstrasse Remix)

Gregor Tresher & Karotte - Wave Goodbye

Dark Soul Project & Santiago Garcia - Erks (Original Mix) CDR

Part 2

Vinayak^a - Sands of goa

NameSpace - Not Found

Kulturn - 126 (Juan Deminicis Night Remix)

Mechanique - Adding Insult to Injury

Dartek - Soopertrance (Fefo Remix)`},{episodio:"040",titulo:"Resident / Episode 040 / February 11 2012",descripcion:`Part 1 Tracklist

Fame (Catz N Dogz & Martin Dawson Sweet Saturday Remix)

Young Pretenders - Jeremy P. Caulfield & Cesare Vs Disorder

The Blame - take II

Ruede Hagelstein & The Noblettes - A Priori (Ruede Remix)

Norman H,Minoru Hirata - La Bu

Part 2 Tracklist

Vincenzo - Sometimes Saturday (Tom Middleton Remix)

NameSpace - Not Found [Dr. Avalance Remix]

Richie G - But Her Fly

Alessandro Diga - Zwijnenstal

Andrez & Miss M - So Now What! (Dub Mix)`,likes:"7",descargas:"11.4K",fecha:"2012-02-11",link:"https://mcdn.podbean.com/mf/download/s59yn4/040-HernanCattaneo-2012-02-11.mp3",tracklist:`Part 1

Fame (Catz N Dogz & Martin Dawson Sweet Saturday Remix)

Young Pretenders - Jeremy P. Caulfield & Cesare Vs Disorder

The Blame - take II

Ruede Hagelstein & The Noblettes - A Priori (Ruede Remix)

Norman H,Minoru Hirata - La Bu

Part 2

Vincenzo - Sometimes Saturday (Tom Middleton Remix)

NameSpace - Not Found [Dr. Avalance Remix]

Richie G - But Her Fly

Alessandro Diga - Zwijnenstal

Andrez & Miss M - So Now What! (Dub Mix)`},{episodio:"041",titulo:"Resident / Episode 041 / February 18 2012",descripcion:`Part 1 Tracklist

Amirali - Beautiful World (Daniel Bortz Remix)

Magit Cacoon & Nunu - Soul Motion

Black scorpion

Abstraxion - Moribayasa (Argys Back To Techno Mix)

Guy J & Miriam Vaga - Fly (Hybrid Soundsystem Remix)

Part 2 Tracklist

Coherent - Archetypal

Coherent - Archetypal (Tvardovsky Remix)

Simon Firth - Time Lapse (Guy Mantzur & Khen remix)

Oosfera - Oto\xF1o`,likes:"4",descargas:"11.7K",fecha:"2012-02-18",link:"https://mcdn.podbean.com/mf/download/dfmteh/041-HernanCattaneo-2012-02-18.mp3",tracklist:`Part 1

Amirali - Beautiful World (Daniel Bortz Remix)

Magit Cacoon & Nunu - Soul Motion

Black scorpion

Abstraxion - Moribayasa (Argys Back To Techno Mix)

Guy J & Miriam Vaga - Fly (Hybrid Soundsystem Remix)

Part 2

Coherent - Archetypal

Coherent - Archetypal (Tvardovsky Remix)

Simon Firth - Time Lapse (Guy Mantzur & Khen remix)

Oosfera - Oto\xF1o`},{episodio:"042",titulo:"Resident / Episode 042 / February 25 2012",descripcion:`Part 1 Tracklist

Dan Drastic - Noodle Stories (Martin Buttrich Remix)

Tres - Sunrise

Caytas & Patz - Are You Afraid (Joel Mull Dub)

Malandra Jr - Conquest (Dark Soul Project Remix)

Unknown-Himawari

Part 2 Tracklist

Li - Polymer - Supernatural

Kasey Taylor - Out With The Old (Rodskeez Remix)

Chris Richardson - Philadelphia (Diyo Remix)

Mathew lynch - Interstellar space`,likes:"4",descargas:"12.1K",fecha:"2012-02-25",link:"https://mcdn.podbean.com/mf/download/nbjvjw/042-HernanCattaneo-2012-02-25.mp3",tracklist:`Part 1

Dan Drastic - Noodle Stories (Martin Buttrich Remix)

Tres - Sunrise

Caytas & Patz - Are You Afraid (Joel Mull Dub)

Malandra Jr - Conquest (Dark Soul Project Remix)

Unknown-Himawari

Part 2

Li - Polymer - Supernatural

Kasey Taylor - Out With The Old (Rodskeez Remix)

Chris Richardson - Philadelphia (Diyo Remix)

Mathew lynch - Interstellar space`},{episodio:"043",titulo:"Resident / Episode 043 / March 03 2012",descripcion:"Part 1 Tracklist Piotr Bejnar - Rainbow Pills (Yapacc Remix) Poison Pro, Miusha - Alien (Kobana Remix) Sophie Moleta - Paul Eluard [Marcelo Vasami Bootleg] Baboop - Split Horizon Carlos Fox - Magic Tears [Silinder Remix] Part 2 Tracklist Yunus Guvenen -Tides Nick Stoynoff - Brandenburg Solar & Poppcke - Lightest Shades Of Grey (Marc Poppcke Remix) Verve - Elevate",likes:"5",descargas:"11.8K",fecha:"2012-03-03",link:"https://mcdn.podbean.com/mf/download/8rhf78/043-HernanCattaneo-2012-03-03.mp3",tracklist:"Part 1 Piotr Bejnar - Rainbow Pills (Yapacc Remix) Poison Pro, Miusha - Alien (Kobana Remix) Sophie Moleta - Paul Eluard [Marcelo Vasami Bootleg] Baboop - Split Horizon Carlos Fox - Magic Tears [Silinder Remix] Part 2 Yunus Guvenen -Tides Nick Stoynoff - Brandenburg Solar & Poppcke - Lightest Shades Of Grey (Marc Poppcke Remix) Verve - Elevate"},{episodio:"044",titulo:"Resident / Episode 044 / March 10 2012",descripcion:"Part 1 Tracklist Alex Arnout, Seb Zito - Moments of You January Tuesday - True Love's Sake (Andre Lodemann Vocal Mix) Alexander Daf & Spieltape - Be Water (Rodriguez Jr. Remix) Lank - Random Condom Santi Mossman - Eteric Signal Part 2 Tracklist Traumer - Zyklisch Issac - Things Get Moving Sound Process - Brain Notes Tvardovsky - Brain Code (Santiago Garcia)",likes:"4",descargas:"13.3K",fecha:"2012-03-10",link:"https://mcdn.podbean.com/mf/download/5vakhx/044-HernanCattaneo-2012-03-10.mp3",tracklist:"Part 1 Alex Arnout, Seb Zito - Moments of You January Tuesday - True Love's Sake (Andre Lodemann Vocal Mix) Alexander Daf & Spieltape - Be Water (Rodriguez Jr. Remix) Lank - Random Condom Santi Mossman - Eteric Signal Part 2 Traumer - Zyklisch Issac - Things Get Moving Sound Process - Brain Notes Tvardovsky - Brain Code (Santiago Garcia)"},{episodio:"045",titulo:"Resident / Episode 045 / March 17 2012",descripcion:"Part 1 Tracklist Sasha and James Teej - Night Track (M.A.N.D.Y. Remix) Mescis - Lately [Tim Penner Remix] Li - Polymer - Voices And Visions Fiord and Simon Flower - HIgh Tail (Tripple) Part 2 Tracklist Patrick Siech & Gustav Sollscher - Flogiston Hot Chip - I Feel Better (Max Cooper Remix) Rodriguez Jr. - Bittersweet (Sebastian Radlmeier Remix) Sasha and James Teej - As You Fall",likes:"3",descargas:"11.9K",fecha:"2012-03-17",link:"https://mcdn.podbean.com/mf/download/e9cf2v/045-HernanCattaneo-2012-03-17.mp3",tracklist:"Part 1 Sasha and James Teej - Night Track (M.A.N.D.Y. Remix) Mescis - Lately [Tim Penner Remix] Li - Polymer - Voices And Visions Fiord and Simon Flower - HIgh Tail (Tripple) Part 2 Patrick Siech & Gustav Sollscher - Flogiston Hot Chip - I Feel Better (Max Cooper Remix) Rodriguez Jr. - Bittersweet (Sebastian Radlmeier Remix) Sasha and James Teej - As You Fall"},{episodio:"047",titulo:"Resident / Episode 047 / March 31 2013",descripcion:`Part 1 Tracklist

Douglas Greed - Shiver ft. Delhia de France (Ruede Hagelstein)

Of Norway - Hedone feat. Ane (Original Mix)

Hartmut Kiss - Flaming passion (Guy J Remix ) Douglas Greed - Back Room Deal feat Delhia de France (Clara Moto)

Rodrigo Mateo - Stereotypes

Part 2 Tracklist

Nicholas Van Orton - Klonas

Kassey Voorn - Viola (Dosem Remix)

Khen - Ginger (Guy Mantzur & Khen remix)

Eelke Kleijn - Levensgenieter (Dosem Remix)`,likes:"4",descargas:"13K",fecha:"2013-03-31",link:"https://mcdn.podbean.com/mf/download/cj7rhd/047-HernanCattaneo-2012-03-31.mp3",tracklist:`Part 1

Douglas Greed - Shiver ft. Delhia de France (Ruede Hagelstein)

Of Norway - Hedone feat. Ane (Original Mix)

Hartmut Kiss - Flaming passion (Guy J Remix ) Douglas Greed - Back Room Deal feat Delhia de France (Clara Moto)

Rodrigo Mateo - Stereotypes

Part 2

Nicholas Van Orton - Klonas

Kassey Voorn - Viola (Dosem Remix)

Khen - Ginger (Guy Mantzur & Khen remix)

Eelke Kleijn - Levensgenieter (Dosem Remix)`},{episodio:"048",titulo:"Resident / Episode 048 / April 7 2012",descripcion:`Part 1 Tracklist

Estroe - Living Apart Together\xA0 2012 Edit

Fran Von Vie -Love your life

Olivier Weiter - Unknown

Homegroove Project - Let Me In

Part 2 Tracklist

Petar Dundov - Brownian Interplay

Hal Incandenza - Ventura

Nick Curly - Underground (Andy Arias Remix)

Microtrauma - Juno (SQL Remix)`,likes:"6",descargas:"13.1K",fecha:"2012-04-07",link:"https://mcdn.podbean.com/mf/download/457ixy/048-HernanCattaneo-2012-04-07.mp3",tracklist:`Part 1

Estroe - Living Apart Together\xA0 2012 Edit

Fran Von Vie -Love your life

Olivier Weiter - Unknown

Homegroove Project - Let Me In

Part 2

Petar Dundov - Brownian Interplay

Hal Incandenza - Ventura

Nick Curly - Underground (Andy Arias Remix)

Microtrauma - Juno (SQL Remix)`},{episodio:"049",titulo:"Resident / Episode 049 / April 14 2012",descripcion:`Part 1 Tracklist

Luis luchetti-Between The Blues

Mic Newman-Knickerbocker

Sanedrachunter -Just a groove

Tilt ft Maria Nayler-My Release (Ben Shaw Remix)

Part 2 Tracklist

Derek Howell & Joshua Michael-J

Kassey Voorn-Siege

Daniele Papini & Riccardo Ferri -Los Draio (Kay Instrumental Interpretation)

Lank - Daily Surprise (Dark Soul Project & Santiago Garcia Remix)`,likes:"3",descargas:"13.4K",fecha:"2012-04-14",link:"https://mcdn.podbean.com/mf/download/csw2au/049-HernanCattaneo-2012-04-14.mp3",tracklist:`Part 1

Luis luchetti-Between The Blues

Mic Newman-Knickerbocker

Sanedrachunter -Just a groove

Tilt ft Maria Nayler-My Release (Ben Shaw Remix)

Part 2

Derek Howell & Joshua Michael-J

Kassey Voorn-Siege

Daniele Papini & Riccardo Ferri -Los Draio (Kay Instrumental Interpretation)

Lank - Daily Surprise (Dark Soul Project & Santiago Garcia Remix)`},{episodio:"050",titulo:"Resident / Episode 050 / April 21 2012",descripcion:`Part 1 Tracklist

Klartraum - Secret Moon Klartraum

Deaf Pillow - Resistance (Danny eM Remix)

Chris Wood & Meat-Tazarine

Deepfunk - Black Lemon Trees (Wide Angle Recordings) Part 2 Tracklist

Asten - Over the mountains

Ozgur Ozkan - Beautiful Afterhours (Fran Von Vie Remix)

Modular - Sirenize

Mueller & Mitch - Hold on

Paolo Mojo - Comsa`,likes:"4",descargas:"14.5K",fecha:"2012-04-21",link:"https://mcdn.podbean.com/mf/download/e8xvfv/050-HernanCattaneo-2012-04-21.mp3",tracklist:`Part 1

Klartraum - Secret Moon Klartraum

Deaf Pillow - Resistance (Danny eM Remix)

Chris Wood & Meat-Tazarine

Deepfunk - Black Lemon Trees (Wide Angle Recordings) Part 2

Asten - Over the mountains

Ozgur Ozkan - Beautiful Afterhours (Fran Von Vie Remix)

Modular - Sirenize

Mueller & Mitch - Hold on

Paolo Mojo - Comsa`},{episodio:"051",titulo:"Resident / Episode 051 / April 28 2012",descripcion:`Part 1 Tracklist

Sirenize -Compromised

Soulfire 'Eris' - Marcelo Vasami Remix

Anil Chawla & Dale Anderson - Leftorium (Alberto Blanco & Matias Vila 2012 Unofficial Remix)

Moan - Deep Nite (Deep Mariano Remix)

Part 2 Tracklist

Graziano Raffa - Answers

Yanaheinstein - M(armelada)

Nijna - Summer (Brendon Collins)

Stas Drive & Enformig - Aquamarine (Scotty.As Deeper Shade Remix)`,likes:"5",descargas:"14.6K",fecha:"2012-04-28",link:"https://mcdn.podbean.com/mf/download/svchfg/051-HernanCattaneo-2012-04-28.mp3",tracklist:`Part 1

Sirenize -Compromised

Soulfire 'Eris' - Marcelo Vasami Remix

Anil Chawla & Dale Anderson - Leftorium (Alberto Blanco & Matias Vila 2012 Unofficial Remix)

Moan - Deep Nite (Deep Mariano Remix)

Part 2

Graziano Raffa - Answers

Yanaheinstein - M(armelada)

Nijna - Summer (Brendon Collins)

Stas Drive & Enformig - Aquamarine (Scotty.As Deeper Shade Remix)`},{episodio:"052",titulo:"Resident / Episode 052 / May 05 2012",descripcion:`Part 1 Tracklist

Cesar Lopez/Giddy Head-tune 11

Nicolas Jaar - Don't Break My Love (Pablo Acenso Unofficial Remix)

Nobuyuki Tokunaga -Solid

Neil Quigley Tone Float Cari Golden -Deal With The Devil

Dr.Avalance-Stairs

Part 2 Tracklist

Ben Archbold-Time Has Run Out (Bens Dubtech Mix)

Christian Drost - Molecules

Oliver Shories-Mother

Nat Monday & Jay Welsh -Waiting (Facundo Mohrr & Sound Process Remix)`,likes:"2",descargas:"17.2K",fecha:"2012-05-05",link:"https://mcdn.podbean.com/mf/download/9bw7ib/052-HernanCattaneo-2012-05-05.mp3",tracklist:`Part 1

Cesar Lopez/Giddy Head-tune 11

Nicolas Jaar - Don't Break My Love (Pablo Acenso Unofficial Remix)

Nobuyuki Tokunaga -Solid

Neil Quigley Tone Float Cari Golden -Deal With The Devil

Dr.Avalance-Stairs

Part 2

Ben Archbold-Time Has Run Out (Bens Dubtech Mix)

Christian Drost - Molecules

Oliver Shories-Mother

Nat Monday & Jay Welsh -Waiting (Facundo Mohrr & Sound Process Remix)`},{episodio:"053",titulo:"Resident / Episode 053 / May 12 2012",descripcion:`Part 1 Tracklist

Banfield audio-Aereal Forms

Noir Feat. Richard Davis-Found Out (Deetron Sunshower Dub)

Frankey & Sandrino -Comeback (Giom Remix)

Issac - Dead Love

tONKPROJECT - When you don't know that i know (Lonya Remix)

Part 2 Tracklist

Compuphonic-Sequoia (diskJokke Remix)

Mehmet Akar - Your Breath (Fran Von Vie Remix)

Oliver Schories-The Voice

Slam-Azure (Carl Craig Remix)`,likes:"5",descargas:"15.5K",fecha:"2012-05-12",link:"https://mcdn.podbean.com/mf/download/pg7cie/053-HernanCattaneo-2012-05-12.mp3",tracklist:`Part 1

Banfield audio-Aereal Forms

Noir Feat. Richard Davis-Found Out (Deetron Sunshower Dub)

Frankey & Sandrino -Comeback (Giom Remix)

Issac - Dead Love

tONKPROJECT - When you don't know that i know (Lonya Remix)

Part 2

Compuphonic-Sequoia (diskJokke Remix)

Mehmet Akar - Your Breath (Fran Von Vie Remix)

Oliver Schories-The Voice

Slam-Azure (Carl Craig Remix)`},{episodio:"054",titulo:"Resident / Episode 054 / May 19 2012",descripcion:`Part 1 Tracklist

Cubenx - Grass (Robin Guthrie remix)

TJ Kong, Modular K - The Last World Of Mr. Goddard

Juan Deminicis - Treshold night vs Pillowtalk - Strange love

Mirza - Zadeh - Heart Of Glass

Tini Tun - Noisy Distractions

Part 2 Tracklist

Abdomen Burst - Ex Machina (Baunder remix)

Fretwell - Fever (Luke Chable's Haunted House Remix)

Li -Polymer - Plataforms (Nick Stoynoff Remix)

Vincenzo - Walk Home`,likes:"4",descargas:"16.2K",fecha:"2012-05-19",link:"https://mcdn.podbean.com/mf/download/42qgzi/054-HernanCattaneo-2012-05-19.mp3",tracklist:`Part 1

Cubenx - Grass (Robin Guthrie remix)

TJ Kong, Modular K - The Last World Of Mr. Goddard

Juan Deminicis - Treshold night vs Pillowtalk - Strange love

Mirza - Zadeh - Heart Of Glass

Tini Tun - Noisy Distractions

Part 2

Abdomen Burst - Ex Machina (Baunder remix)

Fretwell - Fever (Luke Chable's Haunted House Remix)

Li -Polymer - Plataforms (Nick Stoynoff Remix)

Vincenzo - Walk Home`},{episodio:"055",titulo:"Resident / Episode 055 / May 26 2012",descripcion:`Part 1 Tracklist

Martin Garcia - Surveyor

Praveen Achary - Morning & More (Color Ray Remix)

WhoMadeWho - Running Man (Dave DK Mix)

Fran Von Vie - Wake Me Up When Everything Has Changed

Part 2 Tracklist

Lonya & Roy Okev - Backlash (Facundo Mohrr Remix)

Jonas Afonso - Traveling By Subwave (Embliss Remix)

Tester Peter and Heartik - Rapture

Ivan Picazo - One Step`,likes:"5",descargas:"19.1K",fecha:"2012-05-26",link:"https://mcdn.podbean.com/mf/download/wcy6yb/055-HernanCattaneo-2012-05-26.mp3",tracklist:`Part 1

Martin Garcia - Surveyor

Praveen Achary - Morning & More (Color Ray Remix)

WhoMadeWho - Running Man (Dave DK Mix)

Fran Von Vie - Wake Me Up When Everything Has Changed

Part 2

Lonya & Roy Okev - Backlash (Facundo Mohrr Remix)

Jonas Afonso - Traveling By Subwave (Embliss Remix)

Tester Peter and Heartik - Rapture

Ivan Picazo - One Step`},{episodio:"058",titulo:"Resident / Episode 058 / June 16 2012",descripcion:`Part 1 Tracklist

Simon Firth-Winter Solstice

Facundo Mohrr - My Moon

Rodrigo Mateo - Blossom Out Of Nothing

Shenoda - Chasing Clouds

Tvardovsky - Essention (Sound Process )

Part 2 Tracklist

Ryan Davis - Beluga

Gab Rhome - The color of thyme

Jaksa Pavicevic - Guilty For Fifty (Verche remix)

FunkForm - My Hands On You

Marc Poppcke - Payback Time`,likes:"5",descargas:"30.7K",fecha:"2012-06-16",link:"https://mcdn.podbean.com/mf/download/ng2cus/058-HernanCattaneo-2012-06-16.mp3",tracklist:`Part 1

Simon Firth-Winter Solstice

Facundo Mohrr - My Moon

Rodrigo Mateo - Blossom Out Of Nothing

Shenoda - Chasing Clouds

Tvardovsky - Essention (Sound Process )

Part 2

Ryan Davis - Beluga

Gab Rhome - The color of thyme

Jaksa Pavicevic - Guilty For Fifty (Verche remix)

FunkForm - My Hands On You

Marc Poppcke - Payback Time`},{episodio:"059",titulo:"Resident / Episode 059 / June 23 2012",descripcion:`Part 1 Tracklist

Chris Fortier - Don't Hide What You Believe (Perc Trufax Remix)

Barrio Weedwagon - Exhale

Silicone Soul - Feeling Blue (Kultrun Remix)

16 Bit Lolitas - Fat fly

Sierra Sam\xA0 & Paris The Black Fu - Welcome To The Blackout

Part 2 Tracklist

Matias Larrosa & Bramus-D - Breaking Away

Cristian R - Deimos

Nikko Z-The Lizard King (Luke Porter mix)

Daniel Dexter - Sirens`,likes:"4",descargas:"30.1K",fecha:"2012-06-23",link:"https://mcdn.podbean.com/mf/download/c4hzh/059-HernanCattaneo-2012-06-23.mp3",tracklist:`Part 1

Chris Fortier - Don't Hide What You Believe (Perc Trufax Remix)

Barrio Weedwagon - Exhale

Silicone Soul - Feeling Blue (Kultrun Remix)

16 Bit Lolitas - Fat fly

Sierra Sam\xA0 & Paris The Black Fu - Welcome To The Blackout

Part 2

Matias Larrosa & Bramus-D - Breaking Away

Cristian R - Deimos

Nikko Z-The Lizard King (Luke Porter mix)

Daniel Dexter - Sirens`},{episodio:"060",titulo:"Resident / Episode 060 / June 30 2012",descripcion:`Part 1 Tracklist

Superpitcher - Moon Fever Remixe (Gluteus Maximus Mix)

Sam Matters - Matter And Motion

Lefrenk - Return (Oliver Schories remix )

Guy Gerber - Golden sun

MASH - Style is the Answer

Part 2 Tracklist

FortDax - Fortune Telling Fish (Rich Curtis Bootleg)

Diyo - Smooth ride (Graziano Raffa & Alberto Blanco rmx)

Ezequiel Andrade - Bring Me Back (Erich Von Kollar & East Cafe)

Derek Howell & Faskil -Un Poema Cinematogr\xE1fico`,likes:"9",descargas:"32.3K",fecha:"2012-06-30",link:"https://mcdn.podbean.com/mf/download/4z94ra/060-HernanCattaneo-2012-06-30.mp3",tracklist:`Part 1

Superpitcher - Moon Fever Remixe (Gluteus Maximus Mix)

Sam Matters - Matter And Motion

Lefrenk - Return (Oliver Schories remix )

Guy Gerber - Golden sun

MASH - Style is the Answer

Part 2

FortDax - Fortune Telling Fish (Rich Curtis Bootleg)

Diyo - Smooth ride (Graziano Raffa & Alberto Blanco rmx)

Ezequiel Andrade - Bring Me Back (Erich Von Kollar & East Cafe)

Derek Howell & Faskil -Un Poema Cinematogr\xE1fico`},{episodio:"061",titulo:"Resident / Episode 061 / July 07 2012",descripcion:`Part 1 Tracklist

SLOK - Feel Alive feat. My Favorite Robot (LOPAZZ & CasioCasino Remix)

Verche - Simple As That (Estroe Remix)

DNYO - Fruits

Ernest Luminor - Jaga [Pako & Frederik Remix]

Part 2 Tracklist

Matias Vila - Volviendo al principio

Uner - Cuac

Scotty A - Continue

10dens - In a distant world

Anthony Yarranton & Pete McCarthey - The gutter and the stars`,likes:"5",descargas:"30.7K",fecha:"2012-07-07",link:"https://mcdn.podbean.com/mf/download/rd7qt/061-HernanCattaneo-2012-07-07.mp3",tracklist:`Part 1

SLOK - Feel Alive feat. My Favorite Robot (LOPAZZ & CasioCasino Remix)

Verche - Simple As That (Estroe Remix)

DNYO - Fruits

Ernest Luminor - Jaga [Pako & Frederik Remix]

Part 2

Matias Vila - Volviendo al principio

Uner - Cuac

Scotty A - Continue

10dens - In a distant world

Anthony Yarranton & Pete McCarthey - The gutter and the stars`},{episodio:"062",titulo:"Resident / Episode 062 / July 14 2012",descripcion:`Part 1 Tracklist

Matthew Dekay & Lee Burridge - Lost In A Moment (Original Mix)

Night On Fire - Claptone

Slam - Slides collide

Rex Hansson - She (Patrick Siech Remix)

Part 2 Tracklist

Ryan Davis - The Wolve (Traumer Polar Pads Remix)

Kai Handberg - Silent pleasure

Federico Grazzini - Mother\xB4s Groove (Romano Alfieri Remix)

Pele, Findling & Shawnecy - Suspect

Fran Von Vie - Albatros (Blusoul Rmx)`,likes:"5",descargas:"29.7K",fecha:"2012-07-14",link:"https://mcdn.podbean.com/mf/download/wmgxek/062-HernanCattaneo-2012-07-14.mp3",tracklist:`Part 1

Matthew Dekay & Lee Burridge - Lost In A Moment (Original Mix)

Night On Fire - Claptone

Slam - Slides collide

Rex Hansson - She (Patrick Siech Remix)

Part 2

Ryan Davis - The Wolve (Traumer Polar Pads Remix)

Kai Handberg - Silent pleasure

Federico Grazzini - Mother\xB4s Groove (Romano Alfieri Remix)

Pele, Findling & Shawnecy - Suspect

Fran Von Vie - Albatros (Blusoul Rmx)`},{episodio:"063",titulo:"Resident / Episode 063 / July 21 2012",descripcion:`Part 1 Tracklist

Flowers and Sea Creatures-Head First Then Heart (Ytre Rymden Dansskola Remix)

AndrewzVee & KN-dreaming

Marc_Miroir - ECO_QUEST_Pornbugs feat Dole&Kom Remix)

Absolution - Pleasure Delayer

Moby - Victoria Lucas (Santi Mossman Unofficial Remix)

Part 2 Tracklist

Pete Lazonby - Sacred Cycles (Nick Stoynoff Remix)

Max Cue-Libelle

Andre Sobota - Surrounded (Dosem Remix)

Ferdy-Computers In Space`,likes:"5",descargas:"33K",fecha:"2012-07-21",link:"https://mcdn.podbean.com/mf/download/kkz7qz/063-HernanCattaneo-2012-07-21.mp3",tracklist:`Part 1

Flowers and Sea Creatures-Head First Then Heart (Ytre Rymden Dansskola Remix)

AndrewzVee & KN-dreaming

Marc_Miroir - ECO_QUEST_Pornbugs feat Dole&Kom Remix)

Absolution - Pleasure Delayer

Moby - Victoria Lucas (Santi Mossman Unofficial Remix)

Part 2

Pete Lazonby - Sacred Cycles (Nick Stoynoff Remix)

Max Cue-Libelle

Andre Sobota - Surrounded (Dosem Remix)

Ferdy-Computers In Space`},{episodio:"064",titulo:"Resident / Episode 064 / July 28 2012",descripcion:`Part 1 Tracklist Marcelo Vasami & Deepfunk - Remote Templates (Hakimonu Cause And Effect Dub) Arjun Vagale - Danger Mouse (Pawas Remix)

Rodriguez Jr - Satellite

El Mariachi - Monde (Checkor Remix)

Part 2 Tracklist

Umit Han - Im Herzens Garten Erstarb Die Rose

Derek Howell - Laughing It Up (Kassey Voorn Remix)

Mehmet Akar - The Lights Goes On (Dark Soul Project Old School Remix)

Luke Chable - Into The Storm (Lautaro Varela Rework)

Andre Sobota - Time (King Unique Stopped Watch Remix)`,likes:"3",descargas:"27.6K",fecha:"2012-07-28",link:"https://mcdn.podbean.com/mf/download/ggfi8x/064-HernanCattaneo-2012-07-28.mp3",tracklist:`Part 1 Marcelo Vasami & Deepfunk - Remote Templates (Hakimonu Cause And Effect Dub) Arjun Vagale - Danger Mouse (Pawas Remix)

Rodriguez Jr - Satellite

El Mariachi - Monde (Checkor Remix)

Part 2

Umit Han - Im Herzens Garten Erstarb Die Rose

Derek Howell - Laughing It Up (Kassey Voorn Remix)

Mehmet Akar - The Lights Goes On (Dark Soul Project Old School Remix)

Luke Chable - Into The Storm (Lautaro Varela Rework)

Andre Sobota - Time (King Unique Stopped Watch Remix)`},{episodio:"065",titulo:"Resident / Episode 065 / August 04 2012",descripcion:`Part 1 Tracklist

Mind In Rewind (JDB More Strings Change edit)

El Mariachi - Monde (Checkor Remix)

Omid 16B - Melodica (Original Dub)

Tone Float - Ultramantra

Part 2 Tracklist

DNYO - Roots

Kazell - Temporary Bliss

Soulfinder - Satellite Circus (Nick Stoynoff Mix)

GRG4 - Stretch (Luis Junior Remix)`,likes:"4",descargas:"28.7K",fecha:"2012-08-04",link:"https://mcdn.podbean.com/mf/download/jb97u5/065-HernanCattaneo-2012-08-05.mp3",tracklist:`Part 1

Mind In Rewind (JDB More Strings Change edit)

El Mariachi - Monde (Checkor Remix)

Omid 16B - Melodica (Original Dub)

Tone Float - Ultramantra

Part 2

DNYO - Roots

Kazell - Temporary Bliss

Soulfinder - Satellite Circus (Nick Stoynoff Mix)

GRG4 - Stretch (Luis Junior Remix)`},{episodio:"068",titulo:"Resident / Episode 068 / August 25 2012",descripcion:`Part 1 Tracklist

Zee&Eli - Theres no love (Balcazar & Sordo Remix)

Autim-Digitaria - Fragment_You Bring Me Down (Tini Tun Edit)

Shenoda-Moments (Huxley Remix)

Kollektiv Turmstrasse-Ordinary (Lake People's Circle Motive Remix)

Part 2 Tracklist

Yoram-Into The Light

Fake Truth - A Night With You ( Kasall Remix)

Dark Soul Project & Solar Sphere - Sunshine Night

Casa Flava - Eterna [Marcelo Vasami Remix]

Konektiv - Hauz`,likes:"4",descargas:"33.8K",fecha:"2012-08-25",link:"https://mcdn.podbean.com/mf/download/mzsfuh/068-HernanCattaneo-2012-08-26.mp3",tracklist:`Part 1

Zee&Eli - Theres no love (Balcazar & Sordo Remix)

Autim-Digitaria - Fragment_You Bring Me Down (Tini Tun Edit)

Shenoda-Moments (Huxley Remix)

Kollektiv Turmstrasse-Ordinary (Lake People's Circle Motive Remix)

Part 2

Yoram-Into The Light

Fake Truth - A Night With You ( Kasall Remix)

Dark Soul Project & Solar Sphere - Sunshine Night

Casa Flava - Eterna [Marcelo Vasami Remix]

Konektiv - Hauz`},{episodio:"069",titulo:"Resident / Episode 069 / September 01 2012",descripcion:`Part 1 Tracklist

Conure - Indian summer

Phonogenic - Desen Jumi

Simian Mobile Disco -Unfixed

Matt Black - Lightcycle (Kieran J remix)

Saschienne - Unknown (Mario Puccio remix)

Part 2 Tracklist

Asten - Memories

LoQuai - Other dimension (Graziano Raffa remix)

OMB - Sea Air

Paul Hazendonk - Sunburnt`,likes:"4",descargas:"34K",fecha:"2012-09-01",link:"https://mcdn.podbean.com/mf/download/2cjq6d/069-HernanCattaneo-2012-09-02.mp3",tracklist:`Part 1

Conure - Indian summer

Phonogenic - Desen Jumi

Simian Mobile Disco -Unfixed

Matt Black - Lightcycle (Kieran J remix)

Saschienne - Unknown (Mario Puccio remix)

Part 2

Asten - Memories

LoQuai - Other dimension (Graziano Raffa remix)

OMB - Sea Air

Paul Hazendonk - Sunburnt`},{episodio:"070",titulo:"Resident / Episode 070 / September 08 2012",descripcion:`Part 1 Tracklist

Ryan Luciano - Rio

Sascha Sonido - Medusa

Steve Rachmad - Bling It Up

Diplomatic Brothers - Unknown

Part 2 Tracklist

Koreless - Lost in Tokyo (Andy Arias Jam Mix)

Kassey Voorn - Before You Fall (feat. Amber Long)

l3d - Symbol

Silinder - Penthouse

ThermalBear - U Love (Sasha Remix)`,likes:"5",descargas:"36.9K",fecha:"2012-09-08",link:"https://mcdn.podbean.com/mf/download/yjv5dd/070-HernanCattaneo-2012-09-09.mp3",tracklist:`Part 1

Ryan Luciano - Rio

Sascha Sonido - Medusa

Steve Rachmad - Bling It Up

Diplomatic Brothers - Unknown

Part 2

Koreless - Lost in Tokyo (Andy Arias Jam Mix)

Kassey Voorn - Before You Fall (feat. Amber Long)

l3d - Symbol

Silinder - Penthouse

ThermalBear - U Love (Sasha Remix)`},{episodio:"071",titulo:"Resident / Episode 071 / September 15 2012",descripcion:`Part 1 Tracklist

Asten - Memories (Dan Kubo Remix)

John Gham - Valentino

Mark Henning - Sunday Slide

Marc Marzenit & Henry Saiz - Sirens Land

Death in Vegas - Anita Berber (Dark Soul Project & Agus V Remix)

Part 2 Tracklist

JOSEL - AnotherEarth

Michael, Levan & Stiven Rivic - Violence (Marcelo Vasami remix)

Kay - I m Dead Twice

Unkle - Heaven (Paul Lyman Remix)`,likes:"5",descargas:"35.9K",fecha:"2012-09-15",link:"https://mcdn.podbean.com/mf/download/v9xm7f/071-HernanCattaneo-2012-09-16.mp3",tracklist:`Part 1

Asten - Memories (Dan Kubo Remix)

John Gham - Valentino

Mark Henning - Sunday Slide

Marc Marzenit & Henry Saiz - Sirens Land

Death in Vegas - Anita Berber (Dark Soul Project & Agus V Remix)

Part 2

JOSEL - AnotherEarth

Michael, Levan & Stiven Rivic - Violence (Marcelo Vasami remix)

Kay - I m Dead Twice

Unkle - Heaven (Paul Lyman Remix)`},{episodio:"072",titulo:"Resident / Episode 072 / September 22 2012",descripcion:`Part 1 Tracklist

Bookashade - Tomorrow

Simon Firth - Transporter (Checkor Remix)

Deepfunk - Talking to Yourself

Dennis A - Black Sun (Guy Mantzur & Sahar Z Remix)

Part 2 Tracklist

Lonya - Fairy

Nick Warren - In Search Of Silver (Diyo Remix)

TILT vs Ben Shaw - Sly One (Andre Sobota Remix)

LoQuai - Acuity

Pig&Dan - Natives (Dosem Remix)`,likes:"4",descargas:"37.6K",fecha:"2012-09-22",link:"https://mcdn.podbean.com/mf/download/jfgevp/072-HernanCattaneo-2012-09-25.mp3",tracklist:`Part 1

Bookashade - Tomorrow

Simon Firth - Transporter (Checkor Remix)

Deepfunk - Talking to Yourself

Dennis A - Black Sun (Guy Mantzur & Sahar Z Remix)

Part 2

Lonya - Fairy

Nick Warren - In Search Of Silver (Diyo Remix)

TILT vs Ben Shaw - Sly One (Andre Sobota Remix)

LoQuai - Acuity

Pig&Dan - Natives (Dosem Remix)`},{episodio:"073",titulo:"Resident / Episode 073 / September 29 2012",descripcion:`Part 1 Tracklist

Tomas Barfod feat. Nina Kinert	- Till We Die (Blond:ish Remix)

Jemmy - Quarry Bank (Stelios Vassiloudis Remix)

Marc Poppcke - Blaze of Glory (Luis Bondio Remix)

Luis Bondio -Vintage Colors (Marc Poppcke Remix)

Part 2 Tracklist

GRG-Nova (Spada Remix)

Denis A - Black Sun (Luis Junior Remix)

Mitrinique - Colorshock (Marcelo Vasami)

Hernan Cattaneo & Soundexile - Teleport (Pete McCarthey Unofficial remix)`,likes:"8",descargas:"39.5K",fecha:"2012-09-29",link:"https://mcdn.podbean.com/mf/download/mhtwzm/073-HernanCattaneo-2012-09-30.mp3",tracklist:`Part 1

Tomas Barfod feat. Nina Kinert	- Till We Die (Blond:ish Remix)

Jemmy - Quarry Bank (Stelios Vassiloudis Remix)

Marc Poppcke - Blaze of Glory (Luis Bondio Remix)

Luis Bondio -Vintage Colors (Marc Poppcke Remix)

Part 2

GRG-Nova (Spada Remix)

Denis A - Black Sun (Luis Junior Remix)

Mitrinique - Colorshock (Marcelo Vasami)

Hernan Cattaneo & Soundexile - Teleport (Pete McCarthey Unofficial remix)`},{episodio:"074",titulo:"Resident / Episode 074 / October 06 2012",descripcion:`Part 1 Tracklist

Andrew Benson & Asten - Freefall

Dirty Culture - Fade In Fade Out (Ferdy Unreleased Remix)

Lori - Moon

Danza Macabra - The Woods (Patlac Remix)

John Debo - Reconciliation

Part 2 Tracklist

Guy Gerber - Steady feat. Jaw

JOSEL - Ekfrasis

Deepfunk - Black Lemon Trees (Andy Arias Blackmambo Mix)

Hot Chip - Flames (Sasha remix)`,likes:"4",descargas:"41.9K",fecha:"2012-10-06",link:"https://mcdn.podbean.com/mf/download/wnfue3/074-HernanCattaneo-2012-10-07.mp3",tracklist:`Part 1

Andrew Benson & Asten - Freefall

Dirty Culture - Fade In Fade Out (Ferdy Unreleased Remix)

Lori - Moon

Danza Macabra - The Woods (Patlac Remix)

John Debo - Reconciliation

Part 2

Guy Gerber - Steady feat. Jaw

JOSEL - Ekfrasis

Deepfunk - Black Lemon Trees (Andy Arias Blackmambo Mix)

Hot Chip - Flames (Sasha remix)`},{episodio:"075",titulo:"Resident / Episode 075 / October 13 2012",descripcion:`Part 1 Tracklist

Andy Weed - No Man's Land (ADE edit)

Dr. Avalance - Stairs

Dmitry Molosh	- The Labyrinth

OMB - Sea Air (Silinder Remix)

Part 2 Tracklist

Inkfish - Afraid (Konektiv Remix)

Nick Curly -B - Eastern curve (Uner remix)

Neil Davidge - Awakening (Gui Boratto Remix)

Max Cooper feat Braides - Pleasures`,likes:"4",descargas:"41K",fecha:"2012-10-13",link:"https://mcdn.podbean.com/mf/download/3g5fq4/075-HernanCattaneo-2012-10-14.mp3",tracklist:`Part 1

Andy Weed - No Man's Land (ADE edit)

Dr. Avalance - Stairs

Dmitry Molosh	- The Labyrinth

OMB - Sea Air (Silinder Remix)

Part 2

Inkfish - Afraid (Konektiv Remix)

Nick Curly -B - Eastern curve (Uner remix)

Neil Davidge - Awakening (Gui Boratto Remix)

Max Cooper feat Braides - Pleasures`},{episodio:"078",titulo:"Resident / Episode 078 / November 03 2012",descripcion:`Part 1 Tracklist

M.A.N.D.Y - Twisted Sister

M.A.N.D.Y - Superstitious

Hunter - Game An Angel

Filter B - Song Of Life

Henry Saiz & Cora Novoa - Dreama

Part 2 Tracklist

Diego Azocar -Recall

Stephen J. Kroos - The Archetype \xA0(Estroe Melo Remix)

Dark Soul Project & Solar Sphere - Sunshine Night (Nikko.Z )

Graziano Raffa - Globe`,likes:"3",descargas:"46.4K",fecha:"2012-11-03",link:"https://mcdn.podbean.com/mf/download/6tn2cq/078-HernanCattaneo-2012-11-04.mp3",tracklist:`Part 1

M.A.N.D.Y - Twisted Sister

M.A.N.D.Y - Superstitious

Hunter - Game An Angel

Filter B - Song Of Life

Henry Saiz & Cora Novoa - Dreama

Part 2

Diego Azocar -Recall

Stephen J. Kroos - The Archetype \xA0(Estroe Melo Remix)

Dark Soul Project & Solar Sphere - Sunshine Night (Nikko.Z )

Graziano Raffa - Globe`},{episodio:"079",titulo:"Resident / Episode 079 / November 10 2012",descripcion:`Part 1 Tracklist

Derek Howell feat. Mz Sunday Luv - Here We Go Again

HVOB - Dogs (Oliver Koletzki Remix)

Magic Panda - Distant Places (Max Cooper Remix)

Auntie Flo - Sun Ritual

J. Khobb - Retrolution

Part 2 Tracklist

Santiago Teillagorry - Samsara

Amethyst & Lenny Lenoks - The Race (Beat Syndrome Remix)

Omar Fayyad - The Future (Nikko.Z Remix)

Oliver Schories - Bombay Sunrise (Microtrauma)`,likes:"6",descargas:"40K",fecha:"2012-11-10",link:"https://mcdn.podbean.com/mf/download/h3r4xh/079-HernanCattaneo-2012-11-11.mp3",tracklist:`Part 1

Derek Howell feat. Mz Sunday Luv - Here We Go Again

HVOB - Dogs (Oliver Koletzki Remix)

Magic Panda - Distant Places (Max Cooper Remix)

Auntie Flo - Sun Ritual

J. Khobb - Retrolution

Part 2

Santiago Teillagorry - Samsara

Amethyst & Lenny Lenoks - The Race (Beat Syndrome Remix)

Omar Fayyad - The Future (Nikko.Z Remix)

Oliver Schories - Bombay Sunrise (Microtrauma)`},{episodio:"080",titulo:"Resident / Episode 080 / November 17 2012",descripcion:`Part 1 Tracklist

Send- Return Hope \xA0(LoQuai Remix)

Cumiks & Fran Von Vie-Unknown

Martin Patino-Ruta 5 (Daso Remix)

Nick Curly - Love machine

Jonny Cruz-Devil's Hex

Part 2 Tracklist

Enki - Tim Burton Abduction

Dosem - A Modern Ritual

Loopsize - Handling

Liz Cirelli - I Pray (Cora Novoa Remix)`,likes:"3",descargas:"42.3K",fecha:"2012-11-17",link:"https://mcdn.podbean.com/mf/download/zp4zsa/080-HernanCattaneo-2012-11-18.mp3",tracklist:`Part 1

Send- Return Hope \xA0(LoQuai Remix)

Cumiks & Fran Von Vie-Unknown

Martin Patino-Ruta 5 (Daso Remix)

Nick Curly - Love machine

Jonny Cruz-Devil's Hex

Part 2

Enki - Tim Burton Abduction

Dosem - A Modern Ritual

Loopsize - Handling

Liz Cirelli - I Pray (Cora Novoa Remix)`},{episodio:"081",titulo:"Resident / Episode 081 / November 24 2012",descripcion:`Part 1 Tracklist

Jonny Cruz - Devil's Hex (Avatism & Jeremy P Caulfield Remix)

Fefo - Fin Sin

Pedro Aguiar - Watching you leave

dPen - As we dance

Part 2 Tracklist

Orbital - Where is it going (In Plain Sight remix)

Flume - Sleepless \xA0- Midland Dub

Lateral Cut Groove - Organised Chaos

Totem Pole - Dark Chapel [Ewan Rill Remix]

Nikko.Z - Dopamine (Chris Mozio Remix)`,likes:"3",descargas:"41.5K",fecha:"2012-11-24",link:"https://mcdn.podbean.com/mf/download/tjtsx/081-HernanCattaneo-2012-11-25.mp3",tracklist:`Part 1

Jonny Cruz - Devil's Hex (Avatism & Jeremy P Caulfield Remix)

Fefo - Fin Sin

Pedro Aguiar - Watching you leave

dPen - As we dance

Part 2

Orbital - Where is it going (In Plain Sight remix)

Flume - Sleepless \xA0- Midland Dub

Lateral Cut Groove - Organised Chaos

Totem Pole - Dark Chapel [Ewan Rill Remix]

Nikko.Z - Dopamine (Chris Mozio Remix)`},{episodio:"082",titulo:"Resident / Episode 082 / December 01 2012",descripcion:`Part 1 Tracklist

Guy Gerber - Steady (Deepfunk Back in '89 Mix)

Hi-Fi Mystery School - The Triune Force

Hugo Ibarra - Ambar (Daneel Remix)

Da-Ni-Lo - Sensitive green

WayWork - In Tears

Part 2 Tracklist

Simon Baker - Hideout

Li-Polymer - Mission Control

Heinrich Mendez - Tau Am Morgen (Marc Poppcke remix)

Guille Quero & Sound Process - Modular

Rich Curtis - Lower My Voice (Pig & Dan Remix)`,likes:"5",descargas:"42.4K",fecha:"2012-12-01",link:"https://mcdn.podbean.com/mf/download/52i9q/082-HernanCattaneo-2012-12-03.mp3",tracklist:`Part 1

Guy Gerber - Steady (Deepfunk Back in '89 Mix)

Hi-Fi Mystery School - The Triune Force

Hugo Ibarra - Ambar (Daneel Remix)

Da-Ni-Lo - Sensitive green

WayWork - In Tears

Part 2

Simon Baker - Hideout

Li-Polymer - Mission Control

Heinrich Mendez - Tau Am Morgen (Marc Poppcke remix)

Guille Quero & Sound Process - Modular

Rich Curtis - Lower My Voice (Pig & Dan Remix)`},{episodio:"083",titulo:"Resident / Episode 083 / December 08 2012",descripcion:`Part 1 Tracklist

Hegrustin - Rising Of The Sun (Asten remix)

Dilby - Let Me Chant (Original Live Mix)

Juan Deminicis - Past (Mastered)

Lamb - She Walks ( WayWork & Cris Xalambri)

Ian Pooley - CompuRhythm (Baikal Remix)

Part 2 Tracklist

Markus Homm - City Tax (Original Mix)

Dosem - 64 207 From The Edge (Original Mix)

Deltano - Survival Instinct (Nicolas Masseyeff Remix)

Alan Fitzpatrick - Skeksis (Original Mix)

Robert Clouth - Bubble Steam (Microtrauma Remix)`,likes:"2",descargas:"37.2K",fecha:"2012-12-08",link:"https://mcdn.podbean.com/mf/download/hy282c/083-HernanCattaneo-2012-12-09.mp3",tracklist:`Part 1

Hegrustin - Rising Of The Sun (Asten remix)

Dilby - Let Me Chant (Original Live Mix)

Juan Deminicis - Past (Mastered)

Lamb - She Walks ( WayWork & Cris Xalambri)

Ian Pooley - CompuRhythm (Baikal Remix)

Part 2

Markus Homm - City Tax (Original Mix)

Dosem - 64 207 From The Edge (Original Mix)

Deltano - Survival Instinct (Nicolas Masseyeff Remix)

Alan Fitzpatrick - Skeksis (Original Mix)

Robert Clouth - Bubble Steam (Microtrauma Remix)`},{episodio:"084",titulo:"Resident / Episode 084 / December 15 2012",descripcion:`Part 1 Tracklist

Zwaan - Doom

Lonely Warrior - Ciur Remix

Verve - Enchant (Matias Chilano Remix)

Erreome - Cosmic box (Original mix)

Mitrinique - High On Chocolate (Mauro Norti Remix)

Part 2 Tracklist

Dominik Eulberg - Offenbach Li-Polymer - The Dreamer ( original_mix) Criss Deeper - Voyager Spark

Beat Syndrome - Ebullience`,likes:"5",descargas:"41.3K",fecha:"2012-12-15",link:"https://mcdn.podbean.com/mf/download/2vf3e/084-HernanCattaneo-2012-12-16.mp3",tracklist:`Part 1

Zwaan - Doom

Lonely Warrior - Ciur Remix

Verve - Enchant (Matias Chilano Remix)

Erreome - Cosmic box (Original mix)

Mitrinique - High On Chocolate (Mauro Norti Remix)

Part 2

Dominik Eulberg - Offenbach Li-Polymer - The Dreamer ( original_mix) Criss Deeper - Voyager Spark

Beat Syndrome - Ebullience`},{episodio:"085",titulo:"Resident / Episode 085 / December 22 2012",descripcion:`Part 1 Tracklist

Oliver Lieb - The Shortest Day

Tripswitch - Deer Park (Seb Dhajje From Zurich Remix)

Maxi Iborquiza - Moonride

Stelios Vassiloudis - Coma

Part 2 Tracklist

Blusoul Feat. Amber Long - The Future Is Yours

Led Zeppelin - No Quarter (Progress Inn Remix)

Mariana - Mariana

Marc Poppcke - Simplify Matters (Kevin Di Serna Remix)

Luis Bondio & Cesar Lombardi - Freak Motion (Original Mix)`,likes:"6",descargas:"42.9K",fecha:"2012-12-22",link:"https://mcdn.podbean.com/mf/download/3hfa7h/085-HernanCattaneo-2012-12-23.mp3",tracklist:`Part 1

Oliver Lieb - The Shortest Day

Tripswitch - Deer Park (Seb Dhajje From Zurich Remix)

Maxi Iborquiza - Moonride

Stelios Vassiloudis - Coma

Part 2

Blusoul Feat. Amber Long - The Future Is Yours

Led Zeppelin - No Quarter (Progress Inn Remix)

Mariana - Mariana

Marc Poppcke - Simplify Matters (Kevin Di Serna Remix)

Luis Bondio & Cesar Lombardi - Freak Motion (Original Mix)`},{episodio:"088",titulo:"Resident / Episode 088 / January 12 2013",descripcion:`Part 1 Tracklist

Kyodai - My thing

Estroe - Punchie (Paronator)

Kollektiv Turmstrasse - 208 Kontakt (Sieg uber die Sonne Remix)

Markus Homm - Key Frame (Leo Leal & Adrian Garza Remix)

Dilby - Let Me Chant (John Debo Mix)

Part 2 Tracklist

Andrew Bayer - Gaff's Eulogy (Ryan Davis Interpretation)

Harvey Hunzed Productions - Hope

Ultraista - Smalltalk (Four Tet remix)

Binary & Durden - Smalltalk - Chiemsee (Rodriguez Jr Remix)

dPen & Epsilon - Winter Is Coming`,likes:"5",descargas:"9.1K",fecha:"2013-01-12",link:"https://mcdn.podbean.com/mf/download/ixvtyj/088-HernanCattaneo-2013-01-13.mp3",tracklist:`Part 1

Kyodai - My thing

Estroe - Punchie (Paronator)

Kollektiv Turmstrasse - 208 Kontakt (Sieg uber die Sonne Remix)

Markus Homm - Key Frame (Leo Leal & Adrian Garza Remix)

Dilby - Let Me Chant (John Debo Mix)

Part 2

Andrew Bayer - Gaff's Eulogy (Ryan Davis Interpretation)

Harvey Hunzed Productions - Hope

Ultraista - Smalltalk (Four Tet remix)

Binary & Durden - Smalltalk - Chiemsee (Rodriguez Jr Remix)

dPen & Epsilon - Winter Is Coming`},{episodio:"089",titulo:"Resident / Episode 089 / January 19 2013",descripcion:`Part 1 Tracklist

BP - Inspirado Por Usted

Mauro Norti vs Trentemoller & Ievgeniy Kozlov - Thinking About Maktub (George Marvel Mushup)

Jonnie Sparko - Platano Maduro (Luke Hunter Remix)

Juan Deminicis - Behind the Sun

Part 2 Tracklist

PF - Is There Anybody Out There (Dihk Espinoza Remix)

Fabio Gianelli - Maintain (Just Be Deep Mix)

Julinan Marazuela - Suspiros (Original Mix)

Corei - Kolours (Original Mix)`,likes:"4",descargas:"59.3K",fecha:"2013-01-19",link:"https://mcdn.podbean.com/mf/download/f86du/089-HernanCattaneo-2013-01-20.mp3",tracklist:`Part 1

BP - Inspirado Por Usted

Mauro Norti vs Trentemoller & Ievgeniy Kozlov - Thinking About Maktub (George Marvel Mushup)

Jonnie Sparko - Platano Maduro (Luke Hunter Remix)

Juan Deminicis - Behind the Sun

Part 2

PF - Is There Anybody Out There (Dihk Espinoza Remix)

Fabio Gianelli - Maintain (Just Be Deep Mix)

Julinan Marazuela - Suspiros (Original Mix)

Corei - Kolours (Original Mix)`},{episodio:"090",titulo:"Resident / Episode 090 / January 26 2013",descripcion:`Part 1 Tracklist

Tiefschwarz - No Message (David K's Allegro remix)

BP - Inspirado (Guy J mix)

Daneel - Stairs

Totem Pole - Andromeda (Original Mix)

Part 2 Tracklist

Jimmy Van M - QR

Spitzer - CLUNKER feat. Fab (Avatism remix)

Deepfunk & Kassey Voorn - Long Time Coming (Oliver Lieb Remix)

Dave Seaman & John 00 Fleming - Pixelated (Dibby Dougherty & David Young Remix)

Mehmet Akar - Seni Seviyorum (Dale Middleton Remix)`,likes:"2",descargas:"62.6K",fecha:"2013-01-26",link:"https://mcdn.podbean.com/mf/download/pxzrsa/090-HernanCattaneo-2013-01-27.mp3",tracklist:`Part 1

Tiefschwarz - No Message (David K's Allegro remix)

BP - Inspirado (Guy J mix)

Daneel - Stairs

Totem Pole - Andromeda (Original Mix)

Part 2

Jimmy Van M - QR

Spitzer - CLUNKER feat. Fab (Avatism remix)

Deepfunk & Kassey Voorn - Long Time Coming (Oliver Lieb Remix)

Dave Seaman & John 00 Fleming - Pixelated (Dibby Dougherty & David Young Remix)

Mehmet Akar - Seni Seviyorum (Dale Middleton Remix)`},{episodio:"091",titulo:"Resident / Episode 091 / February 02 2013",descripcion:`Part 1 Tracklist

Balcazar & Sordo - Sacrifice

Fabio Gianelli - 27 Maintain, M.A.N.D.Y.

Echomen Feat. Mark Nigrelli - Dont hold back

Alexkid - Enty

Rikki Sawyer - In a moment

Part 2 Tracklist

Makson - Awake (Karl M Remix)

Makson - Awake(Alec Troniq Remix)

Inkfish - Wait In Vain (Lesovsky Remix)

Quivver - The Fog (Kassey Voorn vintage interpretation)`,likes:"5",descargas:"64.9K",fecha:"2013-02-02",link:"https://mcdn.podbean.com/mf/download/97vhmr/091-HernanCattaneo-2013-02-03.mp3",tracklist:`Part 1

Balcazar & Sordo - Sacrifice

Fabio Gianelli - 27 Maintain, M.A.N.D.Y.

Echomen Feat. Mark Nigrelli - Dont hold back

Alexkid - Enty

Rikki Sawyer - In a moment

Part 2

Makson - Awake (Karl M Remix)

Makson - Awake(Alec Troniq Remix)

Inkfish - Wait In Vain (Lesovsky Remix)

Quivver - The Fog (Kassey Voorn vintage interpretation)`},{episodio:"092",titulo:"Resident / Episode 092 / February 09 2013",descripcion:`Part 1 Tracklist

Carlo - Flying away

St. Savor - Mysterious Russian Souls

Martin Aquino - Aomame (Simon Garcia's Gets You There remix)

Clarian - Remove Control

Darren Flecta - In Moments (Luis Bondio Remix)

Part 2 Tracklist

Layo & Bushwacka - Delta Ahead (Uner Remix)

Eelke Kleijin - Flierefluiter

Matias Chilano - Shockroom

Kassey Voorn & Deepfunk - Long Time Coming`,likes:"4",descargas:"66.9K",fecha:"2013-02-09",link:"https://mcdn.podbean.com/mf/download/jcpc8/092-HernanCattaneo-2013-02-10.mp3",tracklist:`Part 1

Carlo - Flying away

St. Savor - Mysterious Russian Souls

Martin Aquino - Aomame (Simon Garcia's Gets You There remix)

Clarian - Remove Control

Darren Flecta - In Moments (Luis Bondio Remix)

Part 2

Layo & Bushwacka - Delta Ahead (Uner Remix)

Eelke Kleijin - Flierefluiter

Matias Chilano - Shockroom

Kassey Voorn & Deepfunk - Long Time Coming`},{episodio:"093",titulo:"Resident / Episode 093 / February 16 2013",descripcion:`Part 1 Tracklist

Clarian & Guy Gerber - Claire

Anthony Middleton - Till the End of... (Just Be Remix)

Miguel Bastida & Florian Kaltstr\xF8m - Glasso Phone -Philipp Straub & caTekk Remix

Shpongle feat. Anabel Englund - Nothing Is Something Worth Doing (Santiago Garcia Unofficial Remix)

Andromo - Full Effect

Part 2 Tracklist

Fran Von Vie - Raining since 87

Darin Epsilon - Ryan Davis reconstruct

Cumiks - Six Feet Above

Max Cooper - Pleasures (Andy Arias Remix)`,likes:"6",descargas:"63.6K",fecha:"2013-02-16",link:"https://mcdn.podbean.com/mf/download/3awi2m/093-HernanCattaneo-2013-02-17.mp3",tracklist:`Part 1

Clarian & Guy Gerber - Claire

Anthony Middleton - Till the End of... (Just Be Remix)

Miguel Bastida & Florian Kaltstr\xF8m - Glasso Phone -Philipp Straub & caTekk Remix

Shpongle feat. Anabel Englund - Nothing Is Something Worth Doing (Santiago Garcia Unofficial Remix)

Andromo - Full Effect

Part 2

Fran Von Vie - Raining since 87

Darin Epsilon - Ryan Davis reconstruct

Cumiks - Six Feet Above

Max Cooper - Pleasures (Andy Arias Remix)`},{episodio:"094",titulo:"Resident / Episode 094 / February 23 2013",descripcion:`Part 1 Tracklist

Layo & Bushwacka - Delta Ahead

Piek feat. Bjerk Peterson - Nasty (Pawas Remix)

Eelke Kleijn - Kitten of Mass Destruction (MUUI Remix) Henry Saiz - OurDiscovery ( OrgueElectronique) Part 2 Tracklist

Simon Vuarambon - Violet Petals

VQ024 B3 Clarian - U

Rodskeez - School of Thought (Jamie Stevens Golden Return Remix)

Mikael Stavostrand - The Other One' (Simon Garcia's Tunnel Vision dub)

Marco Bailey - The falcon`,likes:"4",descargas:"69.9K",fecha:"2013-02-23",link:"https://mcdn.podbean.com/mf/download/qz8qm/094-HernanCattaneo-2013-02-17.mp3",tracklist:`Part 1

Layo & Bushwacka - Delta Ahead

Piek feat. Bjerk Peterson - Nasty (Pawas Remix)

Eelke Kleijn - Kitten of Mass Destruction (MUUI Remix) Henry Saiz - OurDiscovery ( OrgueElectronique) Part 2

Simon Vuarambon - Violet Petals

VQ024 B3 Clarian - U

Rodskeez - School of Thought (Jamie Stevens Golden Return Remix)

Mikael Stavostrand - The Other One' (Simon Garcia's Tunnel Vision dub)

Marco Bailey - The falcon`},{episodio:"764",titulo:"Resident / Episode 764 / Dec 27 2025",descripcion:"Hernan Cattaneo live @Woodstock 69 - Netherlands - July 2025 - Part 1 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"14",descargas:"22.1K",fecha:"2025-12-27",link:"https://mcdn.podbean.com/mf/download/82n7ckxyrpmbuhny/764-HernanCattaneo-2025-12-27.mp3"},{episodio:"763",titulo:"Resident / Episode 763 / Dec 20 2025",descripcion:`1 - John Cosani - Snano /\xA0
2 - Nick Varon, Deekay /\xA0
3 - D-Nox, Andr\xE9 Moret - Try to Make It /\xA0
4 - Kasey Taylor & Gai Barone - Spiral /\xA0
5 - BLANCAh - Beyond The Stars (Danny In Space Remix) /\xA0
6 - E A N P - Fantastic /\xA0
7 - Molac, Anonimat - Raptor /\xA0
8 - Hobin Rude - Fading Silhouettes (Fabri Lopez Remix) /\xA0
9 - Nichols Roark - Empyrean (Matthew Sona Remix) /\xA0
10 - The Chemicals Brothers - The Pills Won't Help You Now (Juani Ramirez Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"35.2K",fecha:"2025-12-20",link:"https://mcdn.podbean.com/mf/download/feurb34k9m79ygr5/763-HernanCattaneo-2025-12-20.mp3",tracklist:`John Cosani - Snano /
Nick Varon, Deekay /
D-Nox, Andr\xE9 Moret - Try to Make It /
Kasey Taylor & Gai Barone - Spiral /
BLANCAh - Beyond The Stars (Danny In Space Remix) /
E A N P - Fantastic /
Molac, Anonimat - Raptor /
Hobin Rude - Fading Silhouettes (Fabri Lopez Remix) /
Nichols Roark - Empyrean (Matthew Sona Remix) /`},{episodio:"753",titulo:"Resident / Episode 753 / Oct 11 2025",descripcion:`1 - John Moblack - Sofia (Ewan Rill Remix) /\xA0
2 - Will DeKeizer - Dixieland /\xA0
3 - Not Demure - Core Memory /\xA0
4 - Facundo Leiarz - Peak Peak /\xA0
5 - Mateo Tapia, Carlos Gatto - Sharp Hook /\xA0
6 - Juan Pablo Torrez - Immensity /\xA0
7 - Gonzalo Sacc, Franco Leonardini - Honey (Juan Iba\xF1ez Remix) /\xA0
8 - RIVVO - Celestial Drift (Solis [US] remix) /\xA0
9 - Henry Saiz- \xA0The Pulse /\xA0
10 - Genius Of Time x Devlant - Rave Breaks (Kevin Di Serna 'Balance' Mix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"31.7K",fecha:"2025-10-11",link:"https://mcdn.podbean.com/mf/download/6xmwcqfzypvnxy54/753-HernanCattaneo-2025-10-11.mp3",tracklist:`John Moblack - Sofia (Ewan Rill Remix) /
Will DeKeizer - Dixieland /
Not Demure - Core Memory /
Facundo Leiarz - Peak Peak /
Mateo Tapia, Carlos Gatto - Sharp Hook /
Juan Pablo Torrez - Immensity /
Gonzalo Sacc, Franco Leonardini - Honey (Juan Iba\xF1ez Remix) /
RIVVO - Celestial Drift (Solis [US] remix) /
Henry Saiz- \xA0The Pulse /`},{episodio:"754",titulo:"Resident / Episode 754 / Oct 18 2025",descripcion:`1 - EMPHI - Moongazer /\xA0
2 - Exe Cruz - Passion Fruit Perfume /\xA0
3 - Hobin Rude - Hollow /\xA0
4 - McKeown & Bassiray - An Introduction (Ricky Ryan & Maze 28 Reform) /\xA0
5 - RADON, Guuse - Cant Leave /\xA0
6 - M.O.S - Without You - Quivver Remix /\xA0
7 - Lonya - New Form /\xA0
8 - Fernando Olaya, Gorkiz - Soulful Embrace /\xA0
9 - Luciano Elvira - Babel /\xA0
10 - Gheist - Searching Places (Checo Cotela Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"31.2K",fecha:"2025-10-18",link:"https://mcdn.podbean.com/mf/download/9k2n8k2i643rppta/754-HernanCattaneo-2025-10-18.mp3",tracklist:`EMPHI - Moongazer /
Exe Cruz - Passion Fruit Perfume /
Hobin Rude - Hollow /
McKeown & Bassiray - An Introduction (Ricky Ryan & Maze 28 Reform) /
RADON, Guuse - Cant Leave /
M.O.S - Without You - Quivver Remix /
Lonya - New Form /
Fernando Olaya, Gorkiz - Soulful Embrace /
Luciano Elvira - Babel /`},{episodio:"743",titulo:"Resident / Episode 743 / Aug 02 2025",descripcion:`1 - Juan Iba\xF1ez, Nicolas Viana - Eira /\xA0
2 - M83 - Oblivion feat Susanne Sundf\xF8r (Gabbe Unofficial Remix) /\xA0
3 - Chris Cargo - Chemical dreams /\xA0
4 - Lonya - Sadness (Ziger Remix) /\xA0
5 - Yashar - One Step Closer /\xA0
6 - Valdovinos -Yellow Flowers /\xA0
7 - Fabian Argomedo - \xA0Shanti /\xA0
8 - Disto (SL) - Closing Duties /\xA0
9 - Sofia Deren - New Air /\xA0
10 - Temper Trap - Sweet Disposition (Cristian Caro Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"34.6K",fecha:"2025-08-02",link:"https://mcdn.podbean.com/mf/download/k6jwjpzvzxiic72e/743-HernanCattaneo-2025-08-02.mp3",tracklist:`Juan Iba\xF1ez, Nicolas Viana - Eira /
M83 - Oblivion feat Susanne Sundf\xF8r (Gabbe Unofficial Remix) /
Chris Cargo - Chemical dreams /
Lonya - Sadness (Ziger Remix) /
Yashar - One Step Closer /
Valdovinos -Yellow Flowers /
Fabian Argomedo - \xA0Shanti /
Disto (SL) - Closing Duties /
Sofia Deren - New Air /`},{episodio:"744",titulo:"Resident / Episode 744 / Aug 09 2025",descripcion:`1 - Shayan Pasha - Ninja Groove /\xA0
2 - Alan Schultz - Bubble Shapes /\xA0
3 - Alan Cerra - End of the Line (Gai Barone Remix) /\xA0
4 - Tato Seco & Gero Pellizzon - Benne Geserit /\xA0
5 \xA0- Sandra Collins & Micke - Thirteen (Quivver Remix) /\xA0
6 - Gustin & Around Us - The Cause /\xA0
7 - Agustin Pengov & Tirso Enriquez (AR) - Tempest (Aubrey Fry & Gai Barone Remix) /\xA0
8 - B.I.R.DD (AR), Roman - Beyond My Sound /\xA0
9 - Mariano Mellino - Mong Kok /\xA0
10 - Hector Cortes y Fran Bux Ft. B\xE4da - Surrender / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"35.9K",fecha:"2025-08-09",link:"https://mcdn.podbean.com/mf/download/f5eh2xsubsfp96tb/744-HernanCattaneo-2025-08-09.mp3",tracklist:`Shayan Pasha - Ninja Groove /
Alan Schultz - Bubble Shapes /
Alan Cerra - End of the Line (Gai Barone Remix) /
Tato Seco & Gero Pellizzon - Benne Geserit /
Sandra Collins & Micke - Thirteen (Quivver Remix) /
Gustin & Around Us - The Cause /
Agustin Pengov & Tirso Enriquez (AR) - Tempest (Aubrey Fry & Gai Barone Remix) /
B.I.R.DD (AR), Roman - Beyond My Sound /
Mariano Mellino - Mong Kok /`},{episodio:"733",titulo:"Resident / Episode 733 / May 24 2025",descripcion:`1 - Danny Howells & Matt Masters - Introspection /\xA0
2 - Kit Lawson - Night Light /\xA0
3 - Grisel Esquivel - Ethereal Soul /\xA0
4 - Franbro - Double Espresso (Hobin Rude Remix) /\xA0
5 - Mareveg - What I Need /\xA0
6 - Nick Varon - Knotty Days /\xA0
7 - Tantum - Spaya (Weird Sounding Dude Remix) /\xA0
8 - Kalima - Combuco /\xA0
9 - Sinca - Silver Lines /\xA0
10 - Le Carousel - We're All Gonna Hurt / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"33.6K",fecha:"2025-05-24",link:"https://mcdn.podbean.com/mf/download/9bue34r592ugdibp/733-HernanCattaneo-2025-05-24.mp3",tracklist:`Danny Howells & Matt Masters - Introspection /
Kit Lawson - Night Light /
Grisel Esquivel - Ethereal Soul /
Franbro - Double Espresso (Hobin Rude Remix) /
Mareveg - What I Need /
Nick Varon - Knotty Days /
Tantum - Spaya (Weird Sounding Dude Remix) /
Kalima - Combuco /
Sinca - Silver Lines /`},{episodio:"734",titulo:"Resident / Episode 734 / May 31 2025",descripcion:`1 - Juan Yarin - If I Could Stop The Sunset (Roy Rosenfeld Remix) /\xA0
2 - SHAZZE, Floyo, Jo Cruz - Rave All Night /\xA0
3 - Mariusso - No Fear /\xA0
4 - Martin Fredes - Green Valley /\xA0
5 - Simply City and Dimuth K - Resonance /\xA0
6 - Solis [US] - Subatomic Flux /\xA0
7 - George X & Anonimat - Telazar /\xA0
8 - Benja Molina - Astre /\xA0
9 - Ric Niels - Metal Fury /\xA0
10 - Because Of Art - Queens Park / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"27K",fecha:"2025-05-31",link:"https://mcdn.podbean.com/mf/download/kx8ij2m7mtn9jv6p/734-HernanCattaneo-2025-05-31.mp3",tracklist:`Juan Yarin - If I Could Stop The Sunset (Roy Rosenfeld Remix) /
SHAZZE, Floyo, Jo Cruz - Rave All Night /
Mariusso - No Fear /
Martin Fredes - Green Valley /
Simply City and Dimuth K - Resonance /
Solis [US] - Subatomic Flux /
George X & Anonimat - Telazar /
Benja Molina - Astre /
Ric Niels - Metal Fury /`},{episodio:"723",titulo:"Resident / Episode 723 / Mar 15 2025",descripcion:`1 - Gai Barone - Fractals /\xA0
2 - J Lauda - Lifeline /\xA0
3 - Tomas Garcia - Nuke /\xA0
4 - Julian Nates - Synchronicity /\xA0
5 - E A N P - STRSSHNE /\xA0
6 - Tonaco - Gautama (Andr\xE9 Moret Remix) /\xA0
7 - Nick Stoynoff - The Hero's Journey /\xA0
8 - EMPHI - Locate /\xA0
9 - Ziger - Constellation (Santi Mossman Remix) /\xA0
10 - Oliverio Sofia - Agua (Dario Arcas Sunset Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"27.9K",fecha:"2025-03-15",link:"https://mcdn.podbean.com/mf/download/etkcitmgt693cxw4/723-HernanCattaneo-2025-03-15.mp3",tracklist:`Gai Barone - Fractals /
J Lauda - Lifeline /
Tomas Garcia - Nuke /
Julian Nates - Synchronicity /
E A N P - STRSSHNE /
Tonaco - Gautama (Andr\xE9 Moret Remix) /
Nick Stoynoff - The Hero's Journey /
EMPHI - Locate /
Ziger - Constellation (Santi Mossman Remix) /`},{episodio:"713",titulo:"Resident / Episode 713 / Jan 04 2025",descripcion:`LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.1 
Featuring Pole Folder. Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"39.1K",fecha:"2025-01-04",link:"https://mcdn.podbean.com/mf/download/3q9xqj6sfifv9r3y/713-HernanCattaneo-2025-01-04.mp3",tracklist:"LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.1"},{episodio:"703",titulo:"Resident / Episode 703 / Oct 26 2024",descripcion:`1 - Ethan Tait, Boskasie - The Journey (Tamir Regev Remix) /\xA0
2 - Tomomi Ukumori, DJ Maar, Yumi Kobayashi, Yamitonma - Tsukiyomi (Henna Onna Remix) /\xA0
3 - Dougal Fox - Intimate Spaces (Hernan Cattaneo and Simply City Remix) /\xA0
4 - Enzo Paradiso & Rodrigo Pochelu - Stay Magical (Govinda (Arg) Remix) /\xA0
5 - Fabricio Mosoni - Lux Interior /\xA0
6 - Andr\xE9 Moret, Gorkiz - Soul Encounters /\xA0
7 - Emma Vazquez, Soul Relay - Wishing Well /\xA0
8 - VegaZ (SL) & Nicolas Benedetti - Metanoia /\xA0
9 - Kamilo Sanclemente, Andr\xE9 Moret - Surge /\xA0
10 - Rise And Fall - Pipeline / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"34.4K",fecha:"2024-10-26",link:"https://mcdn.podbean.com/mf/download/euseimtetmv9dsze/703-HernanCattaneo-2024-10-26.mp3",tracklist:`Ethan Tait, Boskasie - The Journey (Tamir Regev Remix) /
Tomomi Ukumori, DJ Maar, Yumi Kobayashi, Yamitonma - Tsukiyomi (Henna Onna Remix) /
Dougal Fox - Intimate Spaces (Hernan Cattaneo and Simply City Remix) /
Enzo Paradiso & Rodrigo Pochelu - Stay Magical (Govinda (Arg) Remix) /
Fabricio Mosoni - Lux Interior /
Andr\xE9 Moret, Gorkiz - Soul Encounters /
Emma Vazquez, Soul Relay - Wishing Well /
VegaZ (SL) & Nicolas Benedetti - Metanoia /
Kamilo Sanclemente, Andr\xE9 Moret - Surge /`},{episodio:"693",titulo:"Resident / Episode 693 / Aug 17 2024",descripcion:`1 - Shayan Pasha - Leaves on the Wall /\xA0
2 - Shayan Pasha - Dancing With Wolves /\xA0
3 - RTIK - The Light We Can't See (Gai Barone Remix) /\xA0
4 - Forty Cats - 4.30 /\xA0
5 - Neuralis - Floating Free /\xA0
6 - Will DeKeizer - Sound of Neptune /\xA0
7 - Steve Parry - Won't You Believe /\xA0
8 - Eichenbaum - Transcender (Andr\xE9s Moris Trip Mix) /\xA0
9 - Federico Epis - The Day After /\xA0
10 - Dan Mlinar - Velvet Nights / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"34K",fecha:"2024-08-17",link:"https://mcdn.podbean.com/mf/download/4aumsetf52idwfsn/693-HernanCattaneo-2024-08-17.mp3",tracklist:`Shayan Pasha - Leaves on the Wall /
Shayan Pasha - Dancing With Wolves /
RTIK - The Light We Can't See (Gai Barone Remix) /
Forty Cats - 4.30 /
Neuralis - Floating Free /
Will DeKeizer - Sound of Neptune /
Steve Parry - Won't You Believe /
Eichenbaum - Transcender (Andr\xE9s Moris Trip Mix) /
Federico Epis - The Day After /`},{episodio:"683",titulo:"Resident / Episode 683 / Jun 08 2024",descripcion:`1 - JP M\xE4yeur - Make It Happen /\xA0
2 - Paul Hazendonk - Colori /\xA0
3 - Iovino - Deep Jungle /\xA0
4 - GMJ, Jiminy Hop - Frozen Mind /\xA0
5 - John Tejada, Plaid - Freeways /\xA0
6 - Paul Roux - Himalaya /\xA0
7 - Boraa - Frozen Memories /\xA0
8 - Checo Cotela - Sinag /\xA0
9 - Yudi Watanabe - Gaia /\xA0
10 - Fernando Olaya - Memories From The Future / Download episode on MP3 (Right click, save link as...) p>Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"46K",fecha:"2024-06-08",link:"https://mcdn.podbean.com/mf/download/zdyt2i8pdecqb2xi/683-HernanCattaneo-2024-06-08.mp3",tracklist:`JP M\xE4yeur - Make It Happen /
Paul Hazendonk - Colori /
Iovino - Deep Jungle /
GMJ, Jiminy Hop - Frozen Mind /
John Tejada, Plaid - Freeways /
Paul Roux - Himalaya /
Boraa - Frozen Memories /
Checo Cotela - Sinag /
Yudi Watanabe - Gaia /`},{episodio:"663",titulo:"Resident / Episode 663 / Jan 20 2024",descripcion:"20/1 - LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Part 5 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"15",descargas:"56.2K",fecha:"2024-01-20",link:"https://mcdn.podbean.com/mf/download/p8jag5/663-HernanCattaneo-2024-01-20.mp3"},{episodio:"653",titulo:"Resident / Episode 653 / Nov 11 2023",descripcion:`1 - Facundo Mohrr - As It Happens /\xA0
2 - Jhordan Welsch & Mindlancholic - The Sound of Sadness (Carlos Gatto Remix) /\xA0
3 - Elysian - Love Wins (Hyunji-A Remix) /\xA0
4 - E A N P - Divinity /\xA0
5 - VITE & Hole Box - Midway /\xA0
6 - Forty Cats - Custom (McKeown & Bassiray Remix) /\xA0
7 - Danny Bonnici/Sanoi - Reflections Of The Other Side /\xA0
8 - Eko Centrik - Half Light Island (Jamie Stevens Remix) /\xA0
9 - Will DeKeizer - 2000 B.C. /\xA0
10 - Nila & Luis Damora - Safe From Harm / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"60.3K",fecha:"2023-11-11",link:"https://mcdn.podbean.com/mf/download/wsd9my/653-HernanCattaneo-2023-11-11.mp3",tracklist:`Facundo Mohrr - As It Happens /
Jhordan Welsch & Mindlancholic - The Sound of Sadness (Carlos Gatto Remix) /
Elysian - Love Wins (Hyunji-A Remix) /
E A N P - Divinity /
VITE & Hole Box - Midway /
Forty Cats - Custom (McKeown & Bassiray Remix) /
Danny Bonnici/Sanoi - Reflections Of The Other Side /
Eko Centrik - Half Light Island (Jamie Stevens Remix) /
Will DeKeizer - 2000 B.C. /`},{episodio:"643",titulo:"Resident / Episode 643 / Sep 02 2023",descripcion:`1 - Ucleden - Last Train To Nowhere (Hot Tuneik Remix) /\xA0
2 - Hobin Rude - Fog Of Illusion /\xA0
3 - Sistersweet - Sunrise In Lanka /\xA0
4 - Facundo Mohrr, Maxi Degrassi - Make Today A Good Day /\xA0
5 - Luciano Elvira - Dudemile /\xA0
6 - Nicolas Benedetti - Meraki /\xA0
7 - Bemannte & Bruder - Embers Of Time (Nicolas Benedetti \xB4No Vocal\xB4 Remix) /\xA0
8 - Luciano Elvira - Akisa /\xA0
9 - Grigore\xCC \xA0 - The Journey /\xA0
10 - X-Press 2 - Smoke Machine (Mariano Mellino & FOLGAR Rework) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"63.5K",fecha:"2023-09-02",link:"https://mcdn.podbean.com/mf/download/wujm7e/643-HernanCattaneo-2023-09-02.mp3",tracklist:`Ucleden - Last Train To Nowhere (Hot Tuneik Remix) /
Hobin Rude - Fog Of Illusion /
Sistersweet - Sunrise In Lanka /
Facundo Mohrr, Maxi Degrassi - Make Today A Good Day /
Luciano Elvira - Dudemile /
Nicolas Benedetti - Meraki /
Bemannte & Bruder - Embers Of Time (Nicolas Benedetti \xB4No Vocal\xB4 Remix) /
Luciano Elvira - Akisa /
Grigore\xCC \xA0 - The Journey /`},{episodio:"633",titulo:"Resident / Episode 633 / Jun 24 2023",descripcion:`1 - Matter - Living Dream /\xA0
2 - Chris Cargo - Future Elements /\xA0
3 - Ruben Karapetyan - Amberd (NOIYSE Project Remix) /\xA0
4 - Ric Niels & Will DeKeizer - Destroyer /\xA0
5 - East Cafe - Summer Solstice (Apste Remix) /\xA0
6 - Orsen - Afterlight /\xA0
7 - Lehar - Let People Know /\xA0
8 - Apste - Tempo /\xA0
9 - Dmitry Molosh - Glide /\xA0
10 - Emi Galvan & Albuquerque - Stay High / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"60.5K",fecha:"2023-06-24",link:"https://mcdn.podbean.com/mf/download/3z27gb/633-HernanCattaneo-2023-06-24.mp3",tracklist:`Matter - Living Dream /
Chris Cargo - Future Elements /
Ruben Karapetyan - Amberd (NOIYSE Project Remix) /
Ric Niels & Will DeKeizer - Destroyer /
East Cafe - Summer Solstice (Apste Remix) /
Orsen - Afterlight /
Lehar - Let People Know /
Apste - Tempo /
Dmitry Molosh - Glide /`},{episodio:"623",titulo:"Resident / Episode 623 / Apr 15 2023",descripcion:`1 - Emma Vazquez - Florine /\xA0
2 - Paul Fonte - William's Wonder /\xA0
3 - Mattim - Rosa (Alan Cerra Remix) /\xA0
4 - Akiva - Irreversible (Hobin Rude) /\xA0
5 - Berni Turletti - Samana /\xA0
6 - Bodaishin - \xA0Koru Master /\xA0
7 - Luis Damora - In The Room /\xA0
8 - Maximo Gambini - Safari /\xA0
9 - Hyunji-A - Across Space And TIme /\xA0
10 - Kris Dur - Yaxkin / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"62.5K",fecha:"2023-04-15",link:"https://mcdn.podbean.com/mf/download/ikvmuk/623-HernanCattaneo-2023-04-15.mp3",tracklist:`Emma Vazquez - Florine /
Paul Fonte - William's Wonder /
Mattim - Rosa (Alan Cerra Remix) /
Akiva - Irreversible (Hobin Rude) /
Berni Turletti - Samana /
Bodaishin - \xA0Koru Master /
Luis Damora - In The Room /
Maximo Gambini - Safari /
Hyunji-A - Across Space And TIme /`},{episodio:"624",titulo:"Resident / Episode 624 / Apr 22 2023",descripcion:`1 - Hernan Cattaneo & Jody Barr - Clara's Dream /\xA0
2 - Mindlancholic - Lost In A Dream (Poli Siufi Remix) /\xA0
3 - MiraculuM - Constellation (Erich Von Kollar Remix) /\xA0
4 - Ruben Karapetyan - Frequency Formula /\xA0
5 - Jiminy Hop - Colatrix (Matter Remix) /\xA0
6 - Ramiro Drisdale - Search /\xA0
7 - Sebastian Busto - Witchcraft /\xA0
8 - Scanners - Shivver (Maxi Iborquiza Boot) /\xA0
9 - \xC2me & Mathew Jonson - Transmoderna (Baunder Club Edit) /\xA0
10 - Radio Slave - Strobe Queen / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"69.4K",fecha:"2023-04-22",link:"https://mcdn.podbean.com/mf/download/zrgjvy/624-HernanCattaneo-2023-04-22.mp3",tracklist:`Hernan Cattaneo & Jody Barr - Clara's Dream /
Mindlancholic - Lost In A Dream (Poli Siufi Remix) /
MiraculuM - Constellation (Erich Von Kollar Remix) /
Ruben Karapetyan - Frequency Formula /
Jiminy Hop - Colatrix (Matter Remix) /
Ramiro Drisdale - Search /
Sebastian Busto - Witchcraft /
Scanners - Shivver (Maxi Iborquiza Boot) /
\xC2me & Mathew Jonson - Transmoderna (Baunder Club Edit) /`},{episodio:"613",titulo:"Resident / Episode 613 / Feb 04 2023",descripcion:`1 - Husa & Zeyada - Inside out (16BL & Wild Dark remix) /\xA0
2 - El Mundo, Satori, Anatolian Sessions, Danny Shamoun, Qualista - Amida (Satori & El Mundo Remix) /\xA0
3 - Will DeKeizer - Route 66 /\xA0
4 - David Museen, Erik Christiansen \xA0- Psychologika (Martin Gardoqui & Topo Larocca Remix) /\xA0
5 - S.o.U.L. ViBRaTioN, DNCN, Freddy Be - Knock Me Off My Feet (LA RIOTS Remix) /\xA0
6 - Juan Sapia - Little Boy /\xA0
7 - Noiyse Project - Groove Child /\xA0
8 - Bachir Salloum - White Samurai [Balance Music] /\xA0
9 - Bojan B, Hobin Rude - Apicem /\xA0
10 - Cosmicat - Can You Feel / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"35",descargas:"52.6K",fecha:"2023-02-04",link:"https://mcdn.podbean.com/mf/download/debcsi/613-HernanCattaneo-2023-02-04.mp3",tracklist:`Husa & Zeyada - Inside out (16BL & Wild Dark remix) /
El Mundo, Satori, Anatolian Sessions, Danny Shamoun, Qualista - Amida (Satori & El Mundo Remix) /
Will DeKeizer - Route 66 /
David Museen, Erik Christiansen \xA0- Psychologika (Martin Gardoqui & Topo Larocca Remix) /
S.o.U.L. ViBRaTioN, DNCN, Freddy Be - Knock Me Off My Feet (LA RIOTS Remix) /
Juan Sapia - Little Boy /
Noiyse Project - Groove Child /
Bachir Salloum - White Samurai [Balance Music] /
Bojan B, Hobin Rude - Apicem /`},{episodio:"603",titulo:"Resident / Episode 603 / Nov 26 2022",descripcion:`1 - Tim Green- We've been here before /\xA0
2 - Alex O'Rion - Echium (GMJ & Matter Remix) /\xA0
3 - Paul Lennar Ft Alium - Arisen Earlier /\xA0
4 - Enamour - Cause and Affection /\xA0
5 - Eichenbaum, Fede Pals - Instabilis /\xA0
6 - Selsi - Dust (Framewerk Remix) /\xA0
7 - GHEIST - Losing Game /\xA0
8 - Alex O'Rion - The Chase (Roger Martinez Interdimensional Remix) /\xA0
9 - Larrosa & Gardoqui , Lautaro De Agostino - No Way /\xA0
10 - D-Nox & Beckers - Control (The Wash Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"50.5K",fecha:"2022-11-26",link:"https://mcdn.podbean.com/mf/download/2hc7tj/603-HernanCattaneo-2022-11-26.mp3",tracklist:`Tim Green- We've been here before /
Alex O'Rion - Echium (GMJ & Matter Remix) /
Paul Lennar Ft Alium - Arisen Earlier /
Enamour - Cause and Affection /
Eichenbaum, Fede Pals - Instabilis /
Selsi - Dust (Framewerk Remix) /
GHEIST - Losing Game /
Alex O'Rion - The Chase (Roger Martinez Interdimensional Remix) /
Larrosa & Gardoqui , Lautaro De Agostino - No Way /`},{episodio:"593",titulo:"Resident / Episode 593 / Sep 17 2022",descripcion:`1 - Emma Vazquez - Shadowland (Kris Dur Remix) /\xA0
2 - Partenaire - Desiderata /\xA0
3 - Stefan Obermaier - Laya /\xA0
4 - BOg & Diana MIro- Underwater (HC & MV dub mix) /\xA0
5 - Panayiotis Tassis - AN /\xA0
6 - Jaydee - Eyeball /\xA0
7 - MATIRAMIC - Masai (Spencer Brown Rethink) /\xA0
8 - Rez Dorsia - Manet Green (Freedo Mosho Remix) /\xA0
9 - Sam Hopgood - Oceans /\xA0
10 - IDQ - Borderline (KeeQ Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"59.2K",fecha:"2022-09-17",link:"https://mcdn.podbean.com/mf/download/ck7ym4/593-HernanCattaneo-2022-09-17.mp3",tracklist:`Emma Vazquez - Shadowland (Kris Dur Remix) /
Partenaire - Desiderata /
Stefan Obermaier - Laya /
BOg & Diana MIro- Underwater (HC & MV dub mix) /
Panayiotis Tassis - AN /
Jaydee - Eyeball /
MATIRAMIC - Masai (Spencer Brown Rethink) /
Rez Dorsia - Manet Green (Freedo Mosho Remix) /
Sam Hopgood - Oceans /`},{episodio:"583",titulo:"Resident / Episode 583 / Jul 09 2022",descripcion:`1 - Dimuth K & Forerunners \xA0- Exit Reality /\xA0
2 - Kris Dur - Solos /\xA0
3 - Juan Martin (Ar) - Imperius /\xA0
4 - Mayro - Panorama /\xA0
5 - Stephan Bodzin - Ataraxia (Nico Sparvieri, Esteban Romano Unofficial Remix /\xA0
6 - Callecat - Fantasmagoric /\xA0
7 - Scala - Running In Circles /\xA0
8 - Fat Cosmoe, Henri Bergmann, Wennink - Higher Dimension (Jonathan Kaspar Remix) /\xA0
9 - Ric Niels & George Alhabel - Mentalism (Not Demure Remix) /\xA0
10 - Lea Porcelain - Choirs to Heaven (Frank Wiedemann Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"54.1K",fecha:"2022-07-09",link:"https://mcdn.podbean.com/mf/download/r6aceq/583-HernanCattaneo-2022-07-09.mp3",tracklist:`Dimuth K & Forerunners \xA0- Exit Reality /
Kris Dur - Solos /
Juan Martin (Ar) - Imperius /
Mayro - Panorama /
Stephan Bodzin - Ataraxia (Nico Sparvieri, Esteban Romano Unofficial Remix /
Callecat - Fantasmagoric /
Scala - Running In Circles /
Fat Cosmoe, Henri Bergmann, Wennink - Higher Dimension (Jonathan Kaspar Remix) /
Ric Niels & George Alhabel - Mentalism (Not Demure Remix) /`},{episodio:"573",titulo:"Resident / Episode 573 / Apr 30 2022",descripcion:`1 - \xD3lafur Arnalds feat. Arnor Dan - A Stutter (Nico Sparvieri, Esteban Romano Bootleg Mix) /\xA0
2 - Fur Coat, Alfa Romero- Icarus Wings /\xA0
3 - Tao Andra - Sola Fide (Rennie Foster remix) /\xA0
4 - K3V - Kingdom of Dreams (Subandrio Remix) /\xA0
5 - Alex O'Rion - Aperon /\xA0
6 - Paul Angelo, Don Argento - Hyperion /\xA0
7 - Hoten - 29 Summers (D-Nox, Nine One Remix) /\xA0
8 - Nolan - Hang Back ft Manu Dalgo (Lehar Remix) /\xA0
9 - Lexer - Glowing /\xA0
10 - 2up - Devotion (D-Nox Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"53K",fecha:"2022-04-30",link:"https://mcdn.podbean.com/mf/download/5e3pez/573-HernanCattaneo-2022-04-30.mp3",tracklist:`\xD3lafur Arnalds feat. Arnor Dan - A Stutter (Nico Sparvieri, Esteban Romano Bootleg Mix) /
Fur Coat, Alfa Romero- Icarus Wings /
Tao Andra - Sola Fide (Rennie Foster remix) /
K3V - Kingdom of Dreams (Subandrio Remix) /
Alex O'Rion - Aperon /
Paul Angelo, Don Argento - Hyperion /
Hoten - 29 Summers (D-Nox, Nine One Remix) /
Nolan - Hang Back ft Manu Dalgo (Lehar Remix) /
Lexer - Glowing /`},{episodio:"563",titulo:"Resident / Episode 563 / Feb 19 2022",descripcion:`1 - SANDHAUS + Arude & Sincz- Sleepless Nights (Namito Remix) /\xA0
2 - Juan Martin - Solis /\xA0
3 - ANUQRAM - Conjunction /\xA0
4 - Luciano Scheffer - Austral /\xA0
5 - Husa & Zeyada - Piece of Mind (Timo Maas Remix) /\xA0
6 - Forerunners - The Watchers (John Cosani Remix) /\xA0
7 - Steven Weston - Liquid /\xA0
8 - Michael Kiwanuka - Cold Little Heart (Antrim Remix) /\xA0
9 - VONDA7 - High Tide /\xA0
10 - mOat - Paradise (\xC2me Extended Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"32",descargas:"55.3K",fecha:"2022-02-19",link:"https://mcdn.podbean.com/mf/download/qgeeh3/563-HernanCattaneo-2022-02-19.mp3",tracklist:`SANDHAUS + Arude & Sincz- Sleepless Nights (Namito Remix) /
Juan Martin - Solis /
ANUQRAM - Conjunction /
Luciano Scheffer - Austral /
Husa & Zeyada - Piece of Mind (Timo Maas Remix) /
Forerunners - The Watchers (John Cosani Remix) /
Steven Weston - Liquid /
Michael Kiwanuka - Cold Little Heart (Antrim Remix) /
VONDA7 - High Tide /`},{episodio:"553",titulo:"Resident / Episode 553 / Dec 11 2021",descripcion:`1 - Kris Dur - Triomatico /\xA0
2 - Alan Schultz - Resolution /\xA0
3 - Fabri Lopez - Maybe /\xA0
4 - Kamilo Sanclemente, Dabeat - Paradisum /\xA0
5 - Mind Against - Reveries /\xA0
6 - Santo Adriano - Good Citizen /\xA0
7 - EANP - Lysithea /\xA0
8 - Evolution feat. Jayn Hanna - Walking On Fire (Nicolas Rada Unofficial Remix) /\xA0
9 - Lucio Gastaldo - Panorama (Nicolas Benedetti Remix) /\xA0
10 - R\xDCF\xDCS DU SOL - I Don\u2019t Wanna Leave (Innellea Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"56.1K",fecha:"2021-12-11",link:"https://mcdn.podbean.com/mf/download/hjutpp/553-HernanCattaneo-2021-12-11.mp3",tracklist:`Kris Dur - Triomatico /
Alan Schultz - Resolution /
Fabri Lopez - Maybe /
Kamilo Sanclemente, Dabeat - Paradisum /
Mind Against - Reveries /
Santo Adriano - Good Citizen /
EANP - Lysithea /
Evolution feat. Jayn Hanna - Walking On Fire (Nicolas Rada Unofficial Remix) /
Lucio Gastaldo - Panorama (Nicolas Benedetti Remix) /`},{episodio:"543",titulo:"Resident / Episode 543 / Oct 02 2021",descripcion:`1 - Kollmorgen - You Are The (Patrice B\xE4umel Mix) /\xA0
2 - Michael Levan and Steven Rivic - \xA0Dallas (Randall Jones FDub Remix) /\xA0
3 - Hoj + Newman - Want To Run Away feat. Amega (Dub Mix) /\xA0
4 - Hoj + Newman - Listening Close feat. Aaron Percy /\xA0
5 - Arnold T & Alain Pauwels - Nexus 8 /\xA0
6 - Dan & Dan - Disfunktional Lover (Abel Meyer remix) /\xA0
7 - Qubica - Organ Juice /\xA0
8 - Skatman - All Is Vanity /\xA0
9 - Stephan Bodzin -Trancoso /\xA0
10 - Rinzen, Enamour - Photon / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"56K",fecha:"2021-10-02",link:"https://mcdn.podbean.com/mf/download/vypuu8/543-HernanCattaneo-2021-10-02.mp3",tracklist:`Kollmorgen - You Are The (Patrice B\xE4umel Mix) /
Michael Levan and Steven Rivic - \xA0Dallas (Randall Jones FDub Remix) /
Hoj + Newman - Want To Run Away feat. Amega (Dub Mix) /
Hoj + Newman - Listening Close feat. Aaron Percy /
Arnold T & Alain Pauwels - Nexus 8 /
Dan & Dan - Disfunktional Lover (Abel Meyer remix) /
Qubica - Organ Juice /
Skatman - All Is Vanity /
Stephan Bodzin -Trancoso /`},{episodio:"544",titulo:"Resident / Episode 544 / Oct 09 2021",descripcion:`1 - Elliot Moriarty - There's Always Light /\xA0
2 - Kamilo Sanclemente - Fable /\xA0
3 - Red Curtain (Amarcord Remix) /\xA0
4 - Tristan Case - Bubble Modulators (Maximo Gambini & Q.A.T Remix) /\xA0
5 - Eelke Kleijn - Woodstock (Mano Le Tough Remix) /\xA0
6 - Ezequiel Arias - Meloman\xEDa /\xA0
7 - Cream - Sandpo (Nicolas Rada Remix) /\xA0
8 - Stephan Bodzin - LLL /\xA0
9 - Sasha Carassi - Shiver (8Kays Remix) /\xA0
10 - Henri Bergmann - Protection (Dodi Palese Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"57K",fecha:"2021-10-09",link:"https://mcdn.podbean.com/mf/download/qw5niq/544-HernanCattaneo-2021-10-09.mp3",tracklist:`Elliot Moriarty - There's Always Light /
Kamilo Sanclemente - Fable /
Red Curtain (Amarcord Remix) /
Tristan Case - Bubble Modulators (Maximo Gambini & Q.A.T Remix) /
Eelke Kleijn - Woodstock (Mano Le Tough Remix) /
Ezequiel Arias - Meloman\xEDa /
Cream - Sandpo (Nicolas Rada Remix) /
Stephan Bodzin - LLL /
Sasha Carassi - Shiver (8Kays Remix) /`},{episodio:"533",titulo:"Resident / Episode 533 / Jul 24 2021",descripcion:`1 - Kevin Yair - Unnoficial /\xA0
2 - John Cosani - Bootes (Hicky & Kalo Remix) /\xA0
3 - Rage & Cortazar - Euphoria /\xA0
4 - Spencer Brown - Thanks, Guy /\xA0
5 - Etherwave - Leonids (Subandrio's Reboot Remix) /\xA0
6 - Anton Borin, Bondarev - Samadhi (Kasper Koman Remix) /\xA0
7 - CANCCI - Daylight (Rick Pier O'Neil Remix) /\xA0
8 - Fur Coat - Ephemera /\xA0
9 - Fathomz - Fortitude /\xA0
10 - Jeremy Olander - Sagan / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"35",descargas:"56.5K",fecha:"2021-07-24",link:"https://mcdn.podbean.com/mf/download/ekbq2i/533-HernanCattaneo-2021-07-24.mp3",tracklist:`Kevin Yair - Unnoficial /
John Cosani - Bootes (Hicky & Kalo Remix) /
Rage & Cortazar - Euphoria /
Spencer Brown - Thanks, Guy /
Etherwave - Leonids (Subandrio's Reboot Remix) /
Anton Borin, Bondarev - Samadhi (Kasper Koman Remix) /
CANCCI - Daylight (Rick Pier O'Neil Remix) /
Fur Coat - Ephemera /
Fathomz - Fortitude /`},{episodio:"523",titulo:"Resident / Episode 523 / May 15 2021",descripcion:`1 - Gadi Mitrani - Out Of Time (Vincenzo Remix) /\xA0
2 - Anton MAKe - Arepo (John Cosani Remix) /\xA0
3 - Dark Soul Project - Indigo /\xA0
4 - Fideles - Awe /\xA0
5 - Raphael Mader - X-ray /\xA0
6 - Rashid Ajami - You Dont Know Me /\xA0
7 - Diamond Mouth - Stare At Me (Frankey & Sandrino Remix) /\xA0
8 - FOLGAR - Lost in Time (Main Dub) /\xA0
9 - AMPISH - Solitude /\xA0
10 - Oona Dahl feat. Kirsty Hawkshaw - Serenity / Download episode on MP3 (Right click, save link as...)`,likes:"14",descargas:"48.5K",fecha:"2021-05-15",link:"https://mcdn.podbean.com/mf/download/r2uzqq/523-HernanCattaneo-2021-05-15.mp3",tracklist:`Gadi Mitrani - Out Of Time (Vincenzo Remix) /
Anton MAKe - Arepo (John Cosani Remix) /
Dark Soul Project - Indigo /
Fideles - Awe /
Raphael Mader - X-ray /
Rashid Ajami - You Dont Know Me /
Diamond Mouth - Stare At Me (Frankey & Sandrino Remix) /
FOLGAR - Lost in Time (Main Dub) /
AMPISH - Solitude /`},{episodio:"513",titulo:"Resident / Episode 513 / Mar 06 2021",descripcion:`1 - Radiohead - Street Spirit (Fran Bux Unofficial Remix) /\xA0
2 - Dynacom & Bodai - What Makes You Strong /\xA0
3 - Innerphonic - Line Of Dream (Dj Bird Remix) /\xA0
4 - Booka Shade - Pray (Monkey Safari Remix) /\xA0
5 - Luciano Scheffer - Saudade /\xA0
6 - Micah ft. Kiki Cave - Evening Winds /\xA0
7 - Mariano Mellino Feat Paula Os - Misery (Baunder & Folgar Remix) /\xA0
8 - Colyn ft. Maurits Colijn - Bridges In The Sky /\xA0
9 - SatoshiFumi - Regalecus /\xA0
10 - Tee Mango - You are the sun(Sun Down Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"38",descargas:"46.5K",fecha:"2021-03-06",link:"https://mcdn.podbean.com/mf/download/tujmz3/513-HernanCattaneo-2021-03-06.mp3",tracklist:`Radiohead - Street Spirit (Fran Bux Unofficial Remix) /
Dynacom & Bodai - What Makes You Strong /
Innerphonic - Line Of Dream (Dj Bird Remix) /
Booka Shade - Pray (Monkey Safari Remix) /
Luciano Scheffer - Saudade /
Micah ft. Kiki Cave - Evening Winds /
Mariano Mellino Feat Paula Os - Misery (Baunder & Folgar Remix) /
Colyn ft. Maurits Colijn - Bridges In The Sky /
SatoshiFumi - Regalecus /`},{episodio:"503",titulo:"Resident / Episode 503 / Dec 26 2020",descripcion:`1 - Gadi Mitrani, Megan Morrison - Searching (Urmet K Dub Mix) /
2 - Lio Q, Anhauser, Nicolas Leonelli - Sands of Time (East Cafe Remix) /
3 - New Order - Crystal (Diego Berrondo Unofficial Remix) /
4 - Framewerk - Metropolis /
5 - Framewerk - Together (We Are Unified) /
6 - Marsh feat. Mimi Page - Foss /
7 - Jamie Stevens - Soul Anchor /
8 - Aves Volare, Jamie Stevens - Freedom to the Sky /
9 - Diego Poblets - Planeta /
10 - Fabri Lopez - Rosario Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"39.1K",fecha:"2020-12-26",link:"https://mcdn.podbean.com/mf/download/wayk98/503-HernanCattaneo-2020-12-26.mp3",tracklist:`Gadi Mitrani, Megan Morrison - Searching (Urmet K Dub Mix) /
Lio Q, Anhauser, Nicolas Leonelli - Sands of Time (East Cafe Remix) /
New Order - Crystal (Diego Berrondo Unofficial Remix) /
Framewerk - Metropolis /
Framewerk - Together (We Are Unified) /
Marsh feat. Mimi Page - Foss /
Jamie Stevens - Soul Anchor /
Aves Volare, Jamie Stevens - Freedom to the Sky /
Diego Poblets - Planeta /`},{episodio:"493",titulo:"Resident / Episode 493 / Oct 17 2020",descripcion:`1 - Damian Lazarus & Jem Cooke - Into The Sun (Nathan Fake Remix) /\xA0
2 - Blindsmyth - Gryllidae (Shayde Remix) /\xA0
3 - Matthias Meyer, Xinobi - Lacuna (Facundo Mohrr Remix) /\xA0
4 - Sascha Braemer - Analog Garden /\xA0
5 - Nina Schatz - Spirale /\xA0
6 - Dee Montero - Aria (Newman (I Love) remix) /\xA0
7 - Yashar - Colleda (Mauro Augugliaro Deconstructive Mix) /\xA0
8 - Kamakura ENV - Say /\xA0
9 - Satoshi Fumi - Forester /\xA0
10 - Moby - Morningside (Expansive Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"37K",fecha:"2020-10-17",link:"https://mcdn.podbean.com/mf/download/ssrrfd/493-HernanCattaneo-2020-10-17.mp3",tracklist:`Damian Lazarus & Jem Cooke - Into The Sun (Nathan Fake Remix) /
Blindsmyth - Gryllidae (Shayde Remix) /
Matthias Meyer, Xinobi - Lacuna (Facundo Mohrr Remix) /
Sascha Braemer - Analog Garden /
Nina Schatz - Spirale /
Dee Montero - Aria (Newman (I Love) remix) /
Yashar - Colleda (Mauro Augugliaro Deconstructive Mix) /
Kamakura ENV - Say /
Satoshi Fumi - Forester /`},{episodio:"483",titulo:"Resident / Episode 483 / Aug 08 2020",descripcion:`1 - Muchak - Air / 
2 - Santi Cebrero, Chapa & Castelo - Hilaridad (DSF Remix) / 
3 - Cassian - Imagination (Yotto Extended Remix) / 
4 - Don Patrick Lucid / 
5 - Tim Engelhardt - Rooted / 
6 - Golan Zocher, Eric Lune - North to South (Michael A Remix) / 
7 - Cream (PL) - Illusion / 
8 - Nicol\xE1s Irazoqui - Wolf Code / 
9 - Ewan Rill - Cute Beast (Weird Sounding Dude Remix) / 
10 - Rodriguez Jr - Monolith garden (Steve Bug Remix / Download episode on MP3 (Right click, save link as...)`,likes:"41",descargas:"36.9K",fecha:"2020-08-08",link:"https://mcdn.podbean.com/mf/download/a5ndhn/483-HernanCattaneo-2020-08-08.mp3",tracklist:`Muchak - Air /
Santi Cebrero, Chapa & Castelo - Hilaridad (DSF Remix) /
Cassian - Imagination (Yotto Extended Remix) /
Don Patrick Lucid /
Tim Engelhardt - Rooted /
Golan Zocher, Eric Lune - North to South (Michael A Remix) /
Cream (PL) - Illusion /
Nicol\xE1s Irazoqui - Wolf Code /
Ewan Rill - Cute Beast (Weird Sounding Dude Remix) /`},{episodio:"473",titulo:"Resident / Episode 473 / May 30 2020",descripcion:`1 - Henry Saiz - Iridescent / 
2 - Julio Largente - No sense of time / 
3 - Federico Puentes - Far Beyond the Sun / 
4 - Nila - Brute Force / 
5 - Berni Turletti & Forerunners - Mediator / 
6 - Depeche Mode - My Little Universe (Kevin Di Serna Blue Illusion' Mix) / 
7 - Ezequiel Arias, & Artfaq - Duality / 
8 - Nila - Essential Elements / 
9 - Juan Maclean - Bufomania / 
10 - Soma Soul - Breaking Dawn (BOg Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"37.7K",fecha:"2020-05-30",link:"https://mcdn.podbean.com/mf/download/7wvv88/473-HernanCattaneo-2020-05-30.mp3",tracklist:`Henry Saiz - Iridescent /
Julio Largente - No sense of time /
Federico Puentes - Far Beyond the Sun /
Nila - Brute Force /
Berni Turletti & Forerunners - Mediator /
Depeche Mode - My Little Universe (Kevin Di Serna Blue Illusion' Mix) /
Ezequiel Arias, & Artfaq - Duality /
Nila - Essential Elements /
Juan Maclean - Bufomania /`},{episodio:"464",titulo:"Resident / Episode 464 / Mar 28 2020",descripcion:`1 - Jody Wisternoff & James Grant - Nightwhisper / 
2 - Opals - Andhim / 
3 - Solomun - Rotweinfleck / 
4 - Henrik Schwarz - Omnibus / 
5 - Pedro Capelossi - Montjuic (Missus Remix) /\xA0
6 - She\u2019s in heaven (Marco Tegui & Danny Faber Remix) / 
7 - Fabri Lopez - There For The Winter / 
8 - Cubicolor - Wake Up (Dark Soul Project Remix) / 
9 - Spalamp - Into The Dark (Hannes Bieger Remix) / 
10 - Julian Nates - Wild SIde (Analog Jungs Remix) Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"35.3K",fecha:"2020-03-28",link:"https://mcdn.podbean.com/mf/download/rifqwz/464-HernanCattaneo-2020-03-28.mp3",tracklist:`Jody Wisternoff & James Grant - Nightwhisper /
Opals - Andhim /
Solomun - Rotweinfleck /
Henrik Schwarz - Omnibus /
Pedro Capelossi - Montjuic (Missus Remix) /
She\u2019s in heaven (Marco Tegui & Danny Faber Remix) /
Fabri Lopez - There For The Winter /
Cubicolor - Wake Up (Dark Soul Project Remix) /
Spalamp - Into The Dark (Hannes Bieger Remix) /`},{episodio:"455",titulo:"Resident / Episode 455 / Jan 25 2020",descripcion:"Live at Woodstock 69 part 5 Download episode on MP3 (Right click, save link as...)",likes:"42",descargas:"58.7K",fecha:"2020-01-25",link:"https://mcdn.podbean.com/mf/download/cmxfhb/455-HernanCattaneo-2020-01-25.mp3"},{episodio:"445",titulo:"Resident / Episode 445 / Nov 16 2019",descripcion:`1 - Underworld - Toluca Stars (Vanuan Unofficial Remix) / 
2 - Lanvary - Sakura / 
3 - Hasith - Birds of Paradise / 
4 - Federico Monachesi - Panharmonikon / 
5 - Woodland - Oracle / 
6 - Maximo Boskis - Sanerg\xEDa / 
7 - Kamilo Sanclemente, Giovanny Aparicio feat Velve - Forgiven / 
8 - Hasith & Juan Sapia - Orange Tree / 
9 - Dhany G - The Past Behind Your Back / 
10 - Angeleri , Gardoqui & Larrosa - Middles / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"53.5K",fecha:"2019-11-16",link:"https://mcdn.podbean.com/mf/download/ytn8n4/445-HernanCattaneo-2019-11-16.mp3",tracklist:`Underworld - Toluca Stars (Vanuan Unofficial Remix) /
Lanvary - Sakura /
Hasith - Birds of Paradise /
Federico Monachesi - Panharmonikon /
Woodland - Oracle /
Maximo Boskis - Sanerg\xEDa /
Kamilo Sanclemente, Giovanny Aparicio feat Velve - Forgiven /
Hasith & Juan Sapia - Orange Tree /
Dhany G - The Past Behind Your Back /`},{episodio:"435",titulo:"Resident / Episode 435 / Sep 07 2019",descripcion:`1 - Savvas - Falling Into (Gadi Mitrani Remix) / 
2 - Espen, Max Margolin - Until Tomorrow (K Nass Remix) / 
3 - Matter, Dimuth K - Road to Stanton Moor / 
4 - Emiliano Manzano - Primula / 
5 - Fairmont - Agony and Exstacy / 
6 - AFFKT - Yourself feat. Butterjack / 
7 - Tom Zeta - Catharsis / 
8 - Tomas Tejeda - Reborn (Mir Omar Remix) / 
9 - Hermanez & Eran Aviner - Third One / 
10 - Fideles - The Last Glow / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"39K",fecha:"2019-09-07",link:"https://mcdn.podbean.com/mf/download/q7gbit/435-HernanCattaneo-2019-09-07.mp3",tracklist:`Savvas - Falling Into (Gadi Mitrani Remix) /
Espen, Max Margolin - Until Tomorrow (K Nass Remix) /
Matter, Dimuth K - Road to Stanton Moor /
Emiliano Manzano - Primula /
Fairmont - Agony and Exstacy /
AFFKT - Yourself feat. Butterjack /
Tom Zeta - Catharsis /
Tomas Tejeda - Reborn (Mir Omar Remix) /
Hermanez & Eran Aviner - Third One /`},{episodio:"425",titulo:"Resident / Episode 425 / Jun 29 2019",descripcion:`1 - Chapa Ruiz - Sunday / 
2 - Martijn ten Velden - A New Beginning / 
3 - Gai Barone - When The Swallows Come Back Home (Quivver Remix) / 
4 - Eli Nissan - Arpu / 
5 - Juan Deminicis - Disorder (Andrea Cassino Remix) / 
6 - Partenaire - R\xEAve (Armandhe Remix) / 
7 - Russlan Jaafreh - Hanguk (Fabri Lopez Remix) / 
8 - EarthLife - Color Of Birds / 
9 - Bontan feat. Bengle - 10 Days / 
10 - Speaking In Tongues - Eraser / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"40K",fecha:"2019-06-29",link:"https://mcdn.podbean.com/mf/download/rc443a/425-HernanCattaneo-2019-06-29.mp3",tracklist:`Chapa Ruiz - Sunday /
Martijn ten Velden - A New Beginning /
Gai Barone - When The Swallows Come Back Home (Quivver Remix) /
Eli Nissan - Arpu /
Juan Deminicis - Disorder (Andrea Cassino Remix) /
Partenaire - R\xEAve (Armandhe Remix) /
Russlan Jaafreh - Hanguk (Fabri Lopez Remix) /
EarthLife - Color Of Birds /
Bontan feat. Bengle - 10 Days /`},{episodio:"415",titulo:"Resident / Episode 415 / Apr 20 2019",descripcion:`1 - Paula OS - Pearl (Powel Remix) / 
2 - Modd - Ruskeala / 
3 - Davide Ferrario - Model (Bengal Remix) / 
4 - Davide Ferrario - Jewel Ice / 
5 - Nhar - Appel Lointain / 
6 - Applescal -Baunder edit / 
7 - Roy Rosenfeld - The Struggle / 
8 - Gvozdini - Pasadena (East Cafe Remix) / 
9 - Gvozdini - Pasadena (Subandrio Remix) / 
10 - Golan Zocher Feat Mila Egred - Shush (Alex O'Rion Deep Dub Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"36.5K",fecha:"2019-04-20",link:"https://mcdn.podbean.com/mf/download/5em46i/415-HernanCattaneo-2019-04-20.mp3",tracklist:`Paula OS - Pearl (Powel Remix) /
Modd - Ruskeala /
Davide Ferrario - Model (Bengal Remix) /
Davide Ferrario - Jewel Ice /
Nhar - Appel Lointain /
Applescal -Baunder edit /
Roy Rosenfeld - The Struggle /
Gvozdini - Pasadena (East Cafe Remix) /
Gvozdini - Pasadena (Subandrio Remix) /`},{episodio:"405",titulo:"Resident / Episode 405 / Feb 09 2019",descripcion:`1 - Ferher - Unity (Erdi Irmak X Noom Reinterpretation) / 
2 - Daniel Rateuke - Abangane / 
3 - After burn - We go first (Dark Soul Project Pres Anatolian Remix) / 
4 - Mulya & Sobek - Upfront venture / 
5 - Y\xF6urr - Cassius / 
6 - Chris Cargo - SBD remix / 
7 - Mike Griego - Rocket 91 / 
8 - JP Lantieri - Onesterdam (RIGOONI Remix) / 
9 - Andre Sobota - Fast Forward (Tripswitch Remix) / 
10 - Stereo Underground feat. Sealine - Flashes (D-Nox & Beckers Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"38.2K",fecha:"2019-02-09",link:"https://mcdn.podbean.com/mf/download/fik3cp/405-HernanCattaneo-2019-02-09.mp3",tracklist:`Ferher - Unity (Erdi Irmak X Noom Reinterpretation) /
Daniel Rateuke - Abangane /
After burn - We go first (Dark Soul Project Pres Anatolian Remix) /
Mulya & Sobek - Upfront venture /
Y\xF6urr - Cassius /
Chris Cargo - SBD remix /
Mike Griego - Rocket 91 /
JP Lantieri - Onesterdam (RIGOONI Remix) /
Andre Sobota - Fast Forward (Tripswitch Remix) /`},{episodio:"406",titulo:"Resident / Episode 406 / Feb 16 2019",descripcion:`1 - Innellea - Impurity
2 - Matias Vila - Ahora (Eran Aviner & Hermanez Remix) / 
3 - Muhammed felfel - The Eye of Truth (RPO Remix) / 
4 - Stage Van H - Brand New Day (Emi Galvan Remix) / 
5 - After Burn - Apocalliptic love / 
6 - Scippo - Wave / 
7 - Antrim feat. Sarah Chilanti - Until The End / 
8 - Oliver Lieb Presents Smoked - Metro (Fabrizio Spachuk Bootleg Mix) / 
9 - Constantijn Lange, Tim Engelhardt - Synced / 
10 - Phonique Feat. Erlend Oye - For The Time Being (Gardoqui Larrosa & Puccio Pres. Through Noise Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"55",descargas:"39.7K",fecha:"2019-02-16",link:"https://mcdn.podbean.com/mf/download/5a2bn8/406-HernanCattaneo-2019-02-16.mp3",tracklist:`Innellea - Impurity
Matias Vila - Ahora (Eran Aviner & Hermanez Remix) /
Muhammed felfel - The Eye of Truth (RPO Remix) /
Stage Van H - Brand New Day (Emi Galvan Remix) /
After Burn - Apocalliptic love /
Scippo - Wave /
Antrim feat. Sarah Chilanti - Until The End /
Oliver Lieb Presents Smoked - Metro (Fabrizio Spachuk Bootleg Mix) /
Constantijn Lange, Tim Engelhardt - Synced /`},{episodio:"395",titulo:"Resident / Episode 395 / Dec 01 2018",descripcion:`Colle - Limerence / 
DSF - Sandal / 
Budakid feat. Westseven - Quixotic / 
P&F - Re-Rendered / 
A-Jay (SL) - Nebula / 
Subandrioo - Reevolve / 
Themba - Better Days / 
Sobek - Stoned Romance / 
Hasith - Silk Road (Julian Rodriguez & Nico Cerban Remix) / 
Budakid ft. Sterioa - Anesthesia / Download episode on MP3 (Right click, save link as...)`,likes:"31",descargas:"37.4K",fecha:"2018-12-01",link:"https://mcdn.podbean.com/mf/download/eykgmv/395-HernanCattaneo-2018-12-01.mp3",tracklist:`Colle - Limerence /
DSF - Sandal /
Budakid feat. Westseven - Quixotic /
P&F - Re-Rendered /
A-Jay (SL) - Nebula /
Subandrioo - Reevolve /
Themba - Better Days /
Sobek - Stoned Romance /
Hasith - Silk Road (Julian Rodriguez & Nico Cerban Remix) /`},{episodio:"385",titulo:"Resident / Episode 385 / Sep 22 2018",descripcion:`Terranova, Sifa, Ivory - Let it fall / 
Matter & GMJ - To the Stars / 
Jonas Saalbach & Yuven - Semaphore / 
Kay-D - Heads Above (East Cafe Remix) / 
Dmitry Molosh - Only U / 
GMJ & RPO - Immersion / 
Eli Nissan - Reloded / 
Evegrem - Athrak (Billy Alex Northern Remix) / 
AxeLara - Anestesy (Gardoqui Larrosa Dezus Remix) / 
Dmitry Molosh - Sacra / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"39.5K",fecha:"2018-09-22",link:"https://mcdn.podbean.com/mf/download/x3hdsy/385-HernanCattaneo-2018-09-22.mp3",tracklist:`Terranova, Sifa, Ivory - Let it fall /
Matter & GMJ - To the Stars /
Jonas Saalbach & Yuven - Semaphore /
Kay-D - Heads Above (East Cafe Remix) /
Dmitry Molosh - Only U /
GMJ & RPO - Immersion /
Eli Nissan - Reloded /
Evegrem - Athrak (Billy Alex Northern Remix) /
AxeLara - Anestesy (Gardoqui Larrosa Dezus Remix) /`},{episodio:"375",titulo:"Resident / Episode 375 / Jul 14 2018",descripcion:`Armen Miran - Reborn [Dave Pad's Reborn Sunset Mix] / 
DJ KOZE - Planet Hase (feat. Mano Le Tough) / 
Martin Gardoqui & Niceshot - Deep Ride / 
Gadi Mitrani - Mirror room / 
Mario Puccio - Aura (Diego Berrondo Remix) / 
Nobilis - Asynchronicus (Fabri Lopez Remix) / 
Ben Archbold - Dark Rush (Nomad in the Dark Remix) / 
Nick Warren & Nicholas Rada - The Land Of Dreams / 
Ewan Rill - Vessel of Water / 
Nick Muir - Saving Me (Marcelo Vasami Rework) / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"35.9K",fecha:"2018-07-14",link:"https://mcdn.podbean.com/mf/download/h6ameq/375-HernanCattaneo-2018-07-14.mp3",tracklist:`Armen Miran - Reborn [Dave Pad's Reborn Sunset Mix] /
DJ KOZE - Planet Hase (feat. Mano Le Tough) /
Martin Gardoqui & Niceshot - Deep Ride /
Gadi Mitrani - Mirror room /
Mario Puccio - Aura (Diego Berrondo Remix) /
Nobilis - Asynchronicus (Fabri Lopez Remix) /
Ben Archbold - Dark Rush (Nomad in the Dark Remix) /
Nick Warren & Nicholas Rada - The Land Of Dreams /
Ewan Rill - Vessel of Water /`},{episodio:"365",titulo:"Resident / Episode 365 / May 05 2018",descripcion:`Bjork - Mutual Core (Nicolas Rada Remix) / 
Temporarily Unknown - Blue Smoke (Francisco Garcia Devrient Remix) / 
Rick Pier O'Neil - Landscape (Lucas Rossi Remix) / 
Anton Make & Shamil OM - Omnibus (Subandrio Remix) / 
Agnes Obel - Familiar (Federico Monachesi Bootleg) / 
Paul Angelo & Don Argento - Fountain of Youth / 
Kamilo Sanclemente - Secret Garden / 
Memory & Ezequiel Arias - Jade / 
Undo - Disconnect (Zombies In Miami Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"56",descargas:"45.2K",fecha:"2018-05-05",link:"https://mcdn.podbean.com/mf/download/9anu98/365-HernanCattaneo-2018-05-05.mp3",tracklist:`Bjork - Mutual Core (Nicolas Rada Remix) /
Temporarily Unknown - Blue Smoke (Francisco Garcia Devrient Remix) /
Rick Pier O'Neil - Landscape (Lucas Rossi Remix) /
Anton Make & Shamil OM - Omnibus (Subandrio Remix) /
Agnes Obel - Familiar (Federico Monachesi Bootleg) /
Paul Angelo & Don Argento - Fountain of Youth /
Kamilo Sanclemente - Secret Garden /
Memory & Ezequiel Arias - Jade /`},{episodio:"355",titulo:"Resident / Episode 355 / Feb 24 2018",descripcion:`The Antelope - Sleepchamber / 
Marcus Worgull - Skango / 
Roy Rosenfeld - Gutfeelin / 
Freedo Mosho - Back To The Woods (Luis Junior Remix) / 
Moshic - Dragon beard / 
Speaking Minds & Amarcord - Hit me / 
Masumerci - Kamakura / 
Jono Ma, Dreems-A Love Trance Mission From Nk To 7s / 
Kymatik - The Ultimate Answer (Martin Roth Ultraviolet Remix) / 
Martin Roth - Hypno / Download episode on MP3 (Right click, save link as...)`,likes:"16",descargas:"33.4K",fecha:"2018-02-24",link:"https://mcdn.podbean.com/mf/download/y9nhpt/355-HernanCattaneo-2018-02-24.mp3",tracklist:`The Antelope - Sleepchamber /
Marcus Worgull - Skango /
Roy Rosenfeld - Gutfeelin /
Freedo Mosho - Back To The Woods (Luis Junior Remix) /
Moshic - Dragon beard /
Speaking Minds & Amarcord - Hit me /
Masumerci - Kamakura /
Jono Ma, Dreems-A Love Trance Mission From Nk To 7s /
Kymatik - The Ultimate Answer (Martin Roth Ultraviolet Remix) /`},{episodio:"345",titulo:"Resident / Episode 345 / Dec 16 2017",descripcion:`Juan Sapia - Mother's Eyes / 
Andres W - Blisstering Ideas (Analog Jungs Remix) / 
Antrim & Luis Bondio - Us And Them (Sugarfreeq Remix) / 
Dance Spirit feat. Fab Morvan - Voices / 
Emerson, Digweed & Muir - Fanfare (Victoria Rodriguez Remix) / 
Diego Berrondo - Maria Elena / 
Zone+ & Bachir Salloum - Aurora (Pablo Bolivar Remake) / 
Ri Za - Alpaca (Anatolian Instrumental Remix) / 
EANP - Negev / 
Nicole Moudaber & Carl Cox - See You Next Tuesday (Danny Tenaglia's Return To Twilo Mix) Download episode on MP3 (Right click, save link as...)`,likes:"11",descargas:"34K",fecha:"2017-12-16",link:"https://mcdn.podbean.com/mf/download/64fft3/345-HernanCattaneo-2017-12-16.mp3",tracklist:`Juan Sapia - Mother's Eyes /
Andres W - Blisstering Ideas (Analog Jungs Remix) /
Antrim & Luis Bondio - Us And Them (Sugarfreeq Remix) /
Dance Spirit feat. Fab Morvan - Voices /
Emerson, Digweed & Muir - Fanfare (Victoria Rodriguez Remix) /
Diego Berrondo - Maria Elena /
Zone+ & Bachir Salloum - Aurora (Pablo Bolivar Remake) /
Ri Za - Alpaca (Anatolian Instrumental Remix) /
EANP - Negev /`},{episodio:"335",titulo:"Resident / Episode 335 / Oct 07 2017",descripcion:`Modd - Mohican / 
MUUI - Ale / 
Dark Architects & Stage Van H - Cosmology (Dimuth K Remix) / 
Uccelli - Humedad / 
Nahuel Lucena - Bloody Mary / 
Magitman - Recovery (East Cafe Remix) / 
Code - Condor / 
M\xF8nje - Behind The Cracks / 
Berni Turletti - To Feel In The Distance / 
Niko Christo & Synas - Melaina (ft. Orson Welles) / Download episode on MP3 (Right click, save link as...)`,likes:"19",descargas:"32.2K",fecha:"2017-10-07",link:"https://mcdn.podbean.com/mf/download/nypabs/335-HernanCattaneo-2017-10-07.mp3",tracklist:`Modd - Mohican /
MUUI - Ale /
Dark Architects & Stage Van H - Cosmology (Dimuth K Remix) /
Uccelli - Humedad /
Nahuel Lucena - Bloody Mary /
Magitman - Recovery (East Cafe Remix) /
Code - Condor /
M\xF8nje - Behind The Cracks /
Berni Turletti - To Feel In The Distance /`},{episodio:"325",titulo:"Resident / Episode 325 / Jul 29 2017",descripcion:`Claudio Cornejo - Andromeda / 
Robert R. Hardy - Desired / 
Goran Bregovic - Ederlezi (George Yammine Unofficial Remix) / 
Subconscious Tales - Colibri / 
Antrim - I Hear The Distance / 
Namatijra - Five O'Clock Shadow / 
Boris Brejcha - Lost Memory ( Anton Make unofficial remix) / 
Sentre - Sunshine ( Sentre Club Mix ) / 
Petar Dundov & Henry Saiz - Infinite promises / 
Marvin & Guy - The Train of Fantastic feat. Fantastic Twins (Original Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"33.9K",fecha:"2017-07-29",link:"https://mcdn.podbean.com/mf/download/kvvdqj/325-HernanCattaneo-2017-07-29.mp3",tracklist:`Claudio Cornejo - Andromeda /
Robert R. Hardy - Desired /
Goran Bregovic - Ederlezi (George Yammine Unofficial Remix) /
Subconscious Tales - Colibri /
Antrim - I Hear The Distance /
Namatijra - Five O'Clock Shadow /
Boris Brejcha - Lost Memory ( Anton Make unofficial remix) /
Sentre - Sunshine ( Sentre Club Mix ) /
Petar Dundov & Henry Saiz - Infinite promises /`},{episodio:"315",titulo:"Resident / Episode 315 / May 20 2017",descripcion:`Michael A - Inner Voices / 
Diego Berrondo - Conversation / 
Pete K - Perseu / 
Matter - Seed (Lanvary Remix) / 
Paul Deep - Winter Solstice / 
Antrim & Analog Jungs - Konephoros (Robert R. Hardy Remix) / 
Ezequiel Arias - No Paranoia / 
Universal Principles - Flyin' High (Scuba's Illicit Surveillance Mix) / 
Matan Caspi - Paranara (Kastis Torrau Remix) / 
Oliver Schories - Steady State (Dale Middleton Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.1K",fecha:"2017-05-20",link:"https://mcdn.podbean.com/mf/download/5hw6wx/315-HernanCattaneo-2017-05-20.mp3",tracklist:`Michael A - Inner Voices /
Diego Berrondo - Conversation /
Pete K - Perseu /
Matter - Seed (Lanvary Remix) /
Paul Deep - Winter Solstice /
Antrim & Analog Jungs - Konephoros (Robert R. Hardy Remix) /
Ezequiel Arias - No Paranoia /
Universal Principles - Flyin' High (Scuba's Illicit Surveillance Mix) /
Matan Caspi - Paranara (Kastis Torrau Remix) /`},{episodio:"305",titulo:"Resident / Episode 305 / Mar 11 2017",descripcion:`Bjork - Moon (Deep Within Bootleg)
Baunder - False Awakenings
Valeron - Guzin
Dr. Alfred & Iokhonda - Ceres (Michael A Remix)
Rick Pier O'Neil - Just happened
Robert Hardy - Perception (Santo Adriano Remix)
Zukiwave - Higgs Particles
Da Luca - Chiron (Marcelo Vasami Remix)
Khen - Baby Steps
Marc Marzenit - The Imaginary Trip To Hawaii (Dosem Remix) Download episode on MP3 (Right click, save link as...)`,likes:"17",descargas:"34.8K",fecha:"2017-03-11",link:"https://mcdn.podbean.com/mf/download/qs5wyv/305-HernanCattaneo-2017-03-11.mp3",tracklist:`Bjork - Moon (Deep Within Bootleg)
Baunder - False Awakenings
Valeron - Guzin
Dr. Alfred & Iokhonda - Ceres (Michael A Remix)
Rick Pier O'Neil - Just happened
Robert Hardy - Perception (Santo Adriano Remix)
Zukiwave - Higgs Particles
Da Luca - Chiron (Marcelo Vasami Remix)
Khen - Baby Steps`},{episodio:"295",titulo:"Resident / Episode 295 / Dec 31 2016",descripcion:`Part 1 Tracklist Cazap & Boskis, Esteban Abramovich - Sahara's journey
AudioStorm - Karma
Utopia - Utopia (GMJ & Matter Remix)
Ankytrixx - Maxima Part 2 Tracklist Fernando Olaya - I've Lost My Dragon (Arturo Hevia 'Looking For The Dragon')
Reinier Zonneveld - Plastic people
THe WHite SHadow (FR) - Goodbye {PHCK Edition}
Subconscious Tales - Aura Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"33.1K",fecha:"2016-12-31",link:"https://mcdn.podbean.com/mf/download/gwtfx7/295-HernanCattaneo-2016-12-31.mp3",tracklist:`Part 1 Cazap & Boskis, Esteban Abramovich - Sahara's journey
AudioStorm - Karma
Utopia - Utopia (GMJ & Matter Remix)
Ankytrixx - Maxima Part 2 Fernando Olaya - I've Lost My Dragon (Arturo Hevia 'Looking For The Dragon')
Reinier Zonneveld - Plastic people
THe WHite SHadow (FR) - Goodbye {PHCK Edition}`},{episodio:"285",titulo:"Resident / Episode 285 / Oct 22 2016",descripcion:"Part 1 Tracklist Paul Deep & Martin Gardoqui - Hairless Groovy Alberto Blanco & Marcelo Paladini - Nightmares (Beat Syndrome Remix) Marcelo Paladini - The Blind Facundo Mohrr, Valdovinos - Faun Part 2 Tracklist DYA - Do it East Cafe - Under Our Shady Tree Tim Engelhardt, Leonard Bywa - Chymera Oxia - Secret BOg - Hacienda Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"30.7K",fecha:"2016-10-22",link:"https://mcdn.podbean.com/mf/download/u3juqq/285-HernanCattaneo-2016-10-22.mp3"},{episodio:"235",titulo:"Resident / Episode 235 / Nov 07 2015",descripcion:"Part 1 Tracklist Doves - Last Broadcast [Ryan Luciano & Cabellero's Unofficial Remix) Ariel AB - Melodias Ocultas (Li-Polymer Remix) E nissan - Hope temp Mosaic - In an empty glass Part 2 Tracklist Ozgur Ozkan - Alone 'with you\u2019 Juan Astudillo - Alfa & Giulietta Fernando Picon - Life (Diego Berrondo Remix) Michael Gin - Indepth Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:null,fecha:"2015-11-07",link:"http://hernancattaneo.podbean.com/mf/web/jk9t6v/235-HernanCattaneo-2015-11-07.mp3"},{episodio:"275",titulo:"Resident / Episode 275 / Aug 13 2016",descripcion:"Part 1 Tracklist Goraieb - Ayer se Fue Jean Michel Jarre & Rone - The Heart Of Noise (Paul Deep & Martin Gardoqui Remix) Moderat - Running (Tale Of Us Remix) Secret Cinema - Poolside (Original) Part 2 Tracklist Nissim Gavriel & Simos Tagias - Disclosure Nissan Lee - Skinner Box Kay D - Pulsar Monkey Safary - Boris (Guy Mantzur rmx) Download episode on MP3 (Right click, save link as...)",likes:"22",descargas:"28.3K",fecha:"2016-08-13",link:"https://mcdn.podbean.com/mf/download/6c2mmy/275-HernanCattaneo-2016-08-13.mp3"},{episodio:"234",titulo:"Resident / Episode 234 / Oct 31 2015",descripcion:"Part 1 Tracklist Charlie Pec - Bhakti Cristian R - Bamboo Forest Interaxxis - Sadness City Federico Monachesi - Sephdar Kamilo Sanclemente & Juan Pablo Torrez - Arisen Part 2 Tracklist Fractal Architect - Conditioned Verche - Mad World Taz Michail - Groove Hugs by Warriors Progress Inn - Veterans (Dmitry Molosh Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:null,fecha:"2015-10-31",link:"http://hernancattaneo.podbean.com/mf/web/tnpwqi/234-HernanCattaneo-2015-10-31.mp3"},{episodio:"232",titulo:"Resident / Episode 232 / Oct 17 2015",descripcion:"Part 1 Tracklist AudioStorm - Monumental Architecture Khen - Pollen Spreader Rick Pier Oneil & Chris Gavin - Another World Dmitry Molosh - Pharaoh Travis MacDonald - Afterwards Part 2 Tracklist Andrea Cassino - De Los Alpes A Los Andes (Pole Folder Remix) Slacker - See The World (Criss Deeper 1.5 Remix) Kasall & Cristian R And Sonic Union - Eden Digweed & Muir - Track For Life (Argy Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:null,fecha:"2015-10-17",link:"http://hernancattaneo.podbean.com/mf/web/mu3ceb/232-HernanCattaneo-2015-10-17.mp3"},{episodio:"265",titulo:"Resident / Episode 265 / Jun 04 2016",descripcion:"Part 1 Tracklist Gerardo Moro - When Philip Chedid - Bayti (Golan Zocher Remix) Dark Soul Project & Lavigne Feat Pau Os - Berlin Sigur Ros - Svefn G Englar (Mariano Mellino Back To Roots Edit) Part 2 Tracklist Underground Ticket - Sin City (N'Pot Remix) Claude VonStroke - Who's Afraid Of Detroit (Visionquest Remix) Tiefstone - Odin Eagles & Butterfiles - Comet My Favorite Robot - Garden Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"31.6K",fecha:"2016-06-04",link:"https://mcdn.podbean.com/mf/download/9t2jme/265-HernanCattaneo-2016-06-04.mp3"},{episodio:"255",titulo:"Resident / Episode 255 / Mar 26 / 2016",descripcion:"Part 1 Tracklist Allen Andrs - Feel It (Lopazz And Casio Casino Remix) Robert R. Hardy - Way For Work (Li-Polymer Remix) Lehar - Number One Hero (Peter Pardeike Remix) Tech D - Changes Part 2 Tracklist Cullen - Connections (Martin Berger Remix) Namatijra - Iluminar East Cafe - One Silent Cloudburst Maribou State - Rituals (Sasha Remix) Download episode on MP3 (Right click, save link as...)",likes:"16",descargas:"34.6K",fecha:null,link:"https://mcdn.podbean.com/mf/download/2gw7xg/255-HernanCattaneo-2016-03-26.mp3"},{episodio:"245",titulo:"Resident / Episode 245 / Jan 16 2016",descripcion:"Part 1 Tracklist Beats maniacs - Aqua Robert R. Hardy - Stratified Music Brian Cid - Aurora Damian Lazarus & The Ancient Moons - We Will Return (Serge Devant Remix) Part 2 Tracklist RWAC - Im Schlepptau LFO (Tim Engelhardt Remix) Nick Koplan & Ian Mayer - Riviera (Anton Make Remix-) Ryan Davis, Microtrauma - Harmonia Chicola - I remember u MiraculuM - Quantumswarm (East Cafe Remix) Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"35.8K",fecha:"2016-01-16",link:"https://mcdn.podbean.com/mf/download/yphgai/245-HernanCattaneo-2016-01-16.mp3"},{episodio:"236",titulo:"Resident / Episode 236 / Nov 14 2015",descripcion:"Part 1 Tracklist Timujin - OMSK Dustin Nantais - Marching Through The Universe (Pole Folder Remix) Ditian - Where the Roses Bloom Victor Stancov - Soft square Aguizi & Fahim - Ethnicity Part 2 Tracklist Victor Stancov - Glingglang Oliver Lieb - Magnetite dPen, Kosmas Epsilon - Winter is coming Shmuel Flash - Chilling Moments (Robert R. Hardy Unofficial ReWork) Download episode on MP3 (Right click, save link as...)",likes:"13",descargas:"34.6K",fecha:"2015-11-14",link:"https://mcdn.podbean.com/mf/download/cq4jx2/236-HernanCattaneo-2015-11-14.mp3"},{episodio:"225",titulo:"Resident / Episode 225 / Aug 29 2015",descripcion:"Part 1 Tracklist Blondish-Endless Games Patrice B\xE4umel Mix) William Burroughs - Advice for Young People - (BunkerHill1940s Unofficial Giddyhead) Dean Demanuele - Blumen Soultrick - Nativus Andre Hommen - Introspectral Part 2 Tracklist Groj - Disco Soleil Lonya & Mz Sunday Luv - Judgement Day (King Unique Remix) Martin Landsky - Under The Bridge Li-Polymer - Silence Between Us Denis Sulta - La Ruffgarden (Terrace Mix) Download episode on MP3 (Right click, save link as...)",likes:"11",descargas:"37.4K",fecha:"2015-08-29",link:"https://mcdn.podbean.com/mf/download/b5p7ja/225-HernanCattaneo-2015-08-29.mp3"},{episodio:"215",titulo:"Resident / Episode 215 / Jun 20 2015",descripcion:"Part 1 Tracklist Paul Hazendonk & Noraj Cue - Recaptured ft. Patchy Frank Amp Tony & Bob Moses - Holding On (Mariano Montori Boot) Kevin Di Serna - Bless Dave DK - Smukke Lyde Part 2 Tracklist Juan Deminicis - At Dawn LoQuai - Virtual Place (Anton MAKe remix) Alba Go Bragh - Juan Astudillo GMJ - Forgotten Wisdom (Rich Curtis) Download episode on MP3 (Right click, save link as...)",likes:"10",descargas:"37.2K",fecha:"2015-06-20",link:"https://mcdn.podbean.com/mf/download/sn5ba8/215-HernanCattaneo-2015-06-20.mp3"},{episodio:"206",titulo:"Resident / Episode 206 / April 18 2015",descripcion:"Part 1 Tracklist Damian Lazarus & The Ancent Moons - Vermillion Jaap Ligthart feat. Alice Rose - I Know Change (him_self_her Remix) Anton MAKe - Lost In Amsterdam (Erich Von Kollar Remix) Chaim - Cosmology Part 2 Tracklist 2040 - Bipolar (Simply City Rmx) Derek Howell - Interstellar Homecoming (East Cafe) Brian Cid - Release Beat Factory - Forgiveness (Dilby Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"68.6K",fecha:"2015-04-18",link:"https://mcdn.podbean.com/mf/download/wgj5c3/206-HernanCattaneo-2015-04-18.mp3"},{episodio:"196",titulo:"Resident / Episode 196 / February 07 2015",descripcion:"Part 1 Tracklist SBRO - Queens, NY Hugo Ibarra - Sharp Stone John Cosani - Animals Navid Mehr - Elyon (Stas Drive Remix) Part 2 Tracklist Madloch & Matias Vila - Reading Souls (James Teej's Holographic Moon Mix) Madloch & Matias Vila - Reading Souls (Nikko Z Remix) Lee Van Dowski - 050504 Franco Dubois - I Try (Juan Deminicis & Martin Etchegaray Remix) Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"42.4K",fecha:"2015-02-07",link:"https://mcdn.podbean.com/mf/download/57yw32/196-HernanCattaneo-2015-02-07.mp3"},{episodio:"186",titulo:"Resident / Episode 186 / November 29 2014",descripcion:"Part 1 Tracklist THe WHite SHadow (FR) - The Sky Kaban - Kepler Ezequiel Anile - A Part of Myself (Stas Drive Remix) Angel Moraes - Transformation Wollion, Harada - Thinking Less (Jaymo & Andy George Remix) Part 2 Tracklist Dauwd - Moiety Marcelo Vasami - Her Face Ariel AB - Stak (Max Cue Remix) Nils Frahm - Peter (Dark Soul Project Remix ) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"46.9K",fecha:"2014-11-29",link:"https://mcdn.podbean.com/mf/download/iuw9e4/186-HernanCattaneo-2014-11-29.mp3"},{episodio:"176",titulo:"Resident / Episode 176 / September 20 2014",descripcion:"Part 1 Tracklist Mike Griego & Stas Drive - Final Whisper Francesco Rossi \u2014 Godspeed You (Martin Buttrich Remix) [feat. Ozark Henry] Lefrenk - Time Ian Pooley - The Beginning Part 2 Tracklist Angel Moraes - Transformation Lucas Rossi - Before the Calm Scotty.A - The Way She Smiles (Lonya Remix) Cristor - Fusion Field Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"49.8K",fecha:"2014-09-20",link:"https://mcdn.podbean.com/mf/download/72nct6/176-HernanCattaneo-2014-20-13.mp3"},{episodio:"166",titulo:"Resident / Episode 166 / July 12 2014",descripcion:`Part 1 Tracklist Alex Gragnani - MSP (Simply City Remix)
Rob Benninger - Techno Angel
Junior Dee - I believe in free
Tommi Oskari - Stress Test (Stress Test (Namatjira Remix) Part 2 Tracklist Kasbah Zoo & OniWax - New era
Booka Shade Feat. Fritz Helder - Love Drug (Mihai Popoviciu Remix)
Darin Epsilon & Deeprogressv - The Conclusion (Mike Griego Trippy Mix)
Quivver - Unknown (Guy Manztur) Download episode on MP3 (Right click, save link as...)`,likes:"5",descargas:"40.5K",fecha:"2014-07-12",link:"https://mcdn.podbean.com/mf/download/vanp5d/166-HernanCattaneo-2014-07-12.mp3",tracklist:`Part 1 Alex Gragnani - MSP (Simply City Remix)
Rob Benninger - Techno Angel
Junior Dee - I believe in free
Tommi Oskari - Stress Test (Stress Test (Namatjira Remix) Part 2 Kasbah Zoo & OniWax - New era
Booka Shade Feat. Fritz Helder - Love Drug (Mihai Popoviciu Remix)
Darin Epsilon & Deeprogressv - The Conclusion (Mike Griego Trippy Mix)`},{episodio:"156",titulo:"Resident / Episode 156 / May 03 2014",descripcion:"Part 1 Tracklist Brickman - Reborn (Nadja Lind Remix) Diego Azocar - Works of your hands My fav Robot - My other feet is my car (Balcazar & Sordo Remix) Jelly for the babies - Just Another Day Richard Switch - Triangular Part 2 Tracklist Mariano Montori & PARGA - Soaked Guys Omar El Gamal - Roll Dice Steve Ness - Westwood (Anton MAKe remix) Some little things - Lines Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"28.2K",fecha:"2014-05-03",link:"https://mcdn.podbean.com/mf/download/bgjf67/156-HernanCattaneo-2014-05-03.mp3"},{episodio:"136",titulo:"Resident / Episode 136 / December 14 2013",descripcion:`Part 1 Tracklist Fujiya & Miyagi - Ankle Injuries (Sahar Z & Khen)
Julian Rodriguez - Tequila Al Atardecer (Niko Mayer Rmx)
Omar El Gamal - Control (Original Mix)
Egbert - Hemelpoort Part 2 Tracklist Marc Poppcke - Stringent
Rodrigo-K & Filter B - Wake Up
Praveen Achary - Suspended Animation
Federico Monachesi - Nu octantis
Hunter Game - Distant Storms (Christian Prommer Remix)`,likes:"4",descargas:"35.2K",fecha:"2013-12-14",link:"https://mcdn.podbean.com/mf/download/4zwb63/136-HernanCattaneo-2013-12-14.mp3",tracklist:`Part 1 Fujiya & Miyagi - Ankle Injuries (Sahar Z & Khen)
Julian Rodriguez - Tequila Al Atardecer (Niko Mayer Rmx)
Omar El Gamal - Control (Original Mix)
Egbert - Hemelpoort Part 2 Marc Poppcke - Stringent
Rodrigo-K & Filter B - Wake Up
Praveen Achary - Suspended Animation
Federico Monachesi - Nu octantis
Hunter Game - Distant Storms (Christian Prommer Remix)`},{episodio:"137",titulo:"Resident / Episode 137 / December 21 2013",descripcion:`Part 1 Tracklist Roni Iron feat. Anna Maria - De Grecia (Nick Varon Remix)
Patlac - La Nuit feat. Christina (Downtown Party Network Remix)
Magshine - Grand Tartaria
Edu Yattah - Sharghai Girl Part 2 Tracklist Simon Baker - Sonar
Nicolas Petracca & Diego Azocar - Cinema
Marc Marzenit - Run Wild
Deepfunk & Van Did - Endless Space
Hunter Game - Keep The Other Things Out (Petar Dundov Remix)`,likes:"3",descargas:"32.5K",fecha:"2013-12-21",link:"https://mcdn.podbean.com/mf/download/wb634c/137-HernanCattaneo-2013-12-21.mp3",tracklist:`Part 1 Roni Iron feat. Anna Maria - De Grecia (Nick Varon Remix)
Patlac - La Nuit feat. Christina (Downtown Party Network Remix)
Magshine - Grand Tartaria
Edu Yattah - Sharghai Girl Part 2 Simon Baker - Sonar
Nicolas Petracca & Diego Azocar - Cinema
Marc Marzenit - Run Wild
Deepfunk & Van Did - Endless Space
Hunter Game - Keep The Other Things Out (Petar Dundov Remix)`},{episodio:"138",titulo:"Resident / Episode 138 / December 28 2013",descripcion:`Part 1 Tracklist Reference - Ghetto nebula
Wankelmut - Wood & Wine (Ian Pooley Remix)
Dp - End of story (Lautaro Varela remix)
Fabio Gianelli - Drifted Brain Part 2 Tracklist SQL - Patchwork (Thankyou City Remix)
Eric Volta - Love your ilusion
Genius Spark - Under Your Skin (Pete Mccarthey Remix)
Genius Spark - Under Your Skin (Dark Soul Project Remix)`,likes:"5",descargas:"33.8K",fecha:"2013-12-28",link:"https://mcdn.podbean.com/mf/download/qqy2gj/138-HernanCattaneo-2013-12-28.mp3",tracklist:`Part 1 Reference - Ghetto nebula
Wankelmut - Wood & Wine (Ian Pooley Remix)
Dp - End of story (Lautaro Varela remix)
Fabio Gianelli - Drifted Brain Part 2 SQL - Patchwork (Thankyou City Remix)
Eric Volta - Love your ilusion
Genius Spark - Under Your Skin (Pete Mccarthey Remix)
Genius Spark - Under Your Skin (Dark Soul Project Remix)`},{episodio:"126",titulo:"Resident / Episode 126 / October 05 2013",descripcion:`Tracklist Part 1 Kieran J - Hippy Shack
Tobias Linden - Anima
Andy Arias - Dolem & Bew (Original Mix)
Stas Drive - One love Tracklist Part 2 Temper Trap - Resurrection (Ryan Luciano Remix)
Erdi Irmak - Departures (Baunder remix)
Jimpster, Simon Jinadu - These Times (Dixon's Retouch)-
Estroe - Sustainable Illusion
Neptune Blues`,likes:"3",descargas:"36.3K",fecha:"2013-10-05",link:"https://mcdn.podbean.com/mf/download/iur3tj/126-HernanCattaneo-2013-10-05.mp3",tracklist:`Tracklist Part 1 Kieran J - Hippy Shack
Tobias Linden - Anima
Andy Arias - Dolem & Bew (Original Mix)
Stas Drive - One love Tracklist Part 2 Temper Trap - Resurrection (Ryan Luciano Remix)
Erdi Irmak - Departures (Baunder remix)
Jimpster, Simon Jinadu - These Times (Dixon's Retouch)-
Estroe - Sustainable Illusion
Neptune Blues`},{episodio:"127",titulo:"Resident / Episode 127 / October 12 2013",descripcion:`Tracklist Part 1 Nick Stoynoff - Da Izz
Audioglider - Lazy Tears
Stefan Z - No words
Genius Spark - Lucky Flashback Tracklist Part 2 Depeche Mode - Precious (Daneel Bootleg Remix)
Kevin Di Serna - Ailes
MUUI - Sotaque (Quivver)
Darin Epsilon - Valencia (Jamie Stevens Remix)`,likes:"2",descargas:"34.1K",fecha:"2013-10-12",link:"https://mcdn.podbean.com/mf/download/wnfvv6/127-HernanCattaneo-2013-10-12.mp3",tracklist:`Tracklist Part 1 Nick Stoynoff - Da Izz
Audioglider - Lazy Tears
Stefan Z - No words
Genius Spark - Lucky Flashback Tracklist Part 2 Depeche Mode - Precious (Daneel Bootleg Remix)
Kevin Di Serna - Ailes
MUUI - Sotaque (Quivver)
Darin Epsilon - Valencia (Jamie Stevens Remix)`},{episodio:"116",titulo:"Resident / Episode 116 / July 27 2013",descripcion:`Part 1 Tracklist Antrim - Come To Me
Victoria Wilson James, Mr.C - Open Up (David Scuba, Dance Spirit Remix)
Edu Imbernon - Ditto feat. Rosina (Fairmont remix)
Andre Sobota - Pulsatilla (Henry Saiz Remix) Part 2 Tracklist Timid Boy - Psycho
Progress Inn - The Endless Caravan
Genius Spark - Fractal
Nikko Z - In The Dark Room
Axel Bartsch - Don't Forget The Funk`,likes:"3",descargas:"46.2K",fecha:"2013-07-27",link:"https://mcdn.podbean.com/mf/download/hsx7p/116-HernanCattaneo-2013-07-27.mp3",tracklist:`Part 1 Antrim - Come To Me
Victoria Wilson James, Mr.C - Open Up (David Scuba, Dance Spirit Remix)
Edu Imbernon - Ditto feat. Rosina (Fairmont remix)
Andre Sobota - Pulsatilla (Henry Saiz Remix) Part 2 Timid Boy - Psycho
Progress Inn - The Endless Caravan
Genius Spark - Fractal
Nikko Z - In The Dark Room
Axel Bartsch - Don't Forget The Funk`},{episodio:"117",titulo:"Resident / Episode 117 / August 03 2013",descripcion:`Part 1 Tracklist Joelle Atkins - Jammin (Norman H & Wez Saunders Remix) 
Timo Maas feat. Katie Cruel - Articulation (Simon Vuarambon Space Mix) 
Hugo Ibarra - Ambar (Lautaro Varela Remix) 
Seamless - Castle In The Sky (Nick Brennan remix) Part 2 Tracklist Alice Is Easy - (Nick Brennan booty) 
East Cafe - Liebesleid (Stas Drive remix) 
Navid Mehr - 1984 (Original Mix) 
Grum-The Theme (Daniel Trim Remix)`,likes:"5",descargas:"43.8K",fecha:"2013-08-03",link:"https://mcdn.podbean.com/mf/download/g9uupa/117-HernanCattaneo-2013-08-03.mp3",tracklist:`Part 1 Joelle Atkins - Jammin (Norman H & Wez Saunders Remix)
Timo Maas feat. Katie Cruel - Articulation (Simon Vuarambon Space Mix)
Hugo Ibarra - Ambar (Lautaro Varela Remix)
Seamless - Castle In The Sky (Nick Brennan remix) Part 2 Alice Is Easy - (Nick Brennan booty)
East Cafe - Liebesleid (Stas Drive remix)
Navid Mehr - 1984 (Original Mix)
Grum-The Theme (Daniel Trim Remix)`},{episodio:"106",titulo:"Resident / Episode 106 / May 18 2013",descripcion:`Part 1 Tracklist

Silinder - Pavement (Paul Hazendonk & Noraj Cue Remix)

Namatjira - Birkenmeier

Totem Pole - Sobrenatural

Butch - Dimensions

Part 2 Tracklist

Lowb - Inward Outburst (Ripperton Remix)

Charlie May - Night Light (Kay Aka Khalil Touihri Remix)

Forest People - Shabauch (Hunter Slay Remix)

Terje Saether - Blinded

Deepfunk - Switch`,likes:"3",descargas:"38.7K",fecha:"2013-05-18",link:"https://mcdn.podbean.com/mf/download/kucfnd/106-HernanCattaneo-2013-05-18.mp3",tracklist:`Part 1

Silinder - Pavement (Paul Hazendonk & Noraj Cue Remix)

Namatjira - Birkenmeier

Totem Pole - Sobrenatural

Butch - Dimensions

Part 2

Lowb - Inward Outburst (Ripperton Remix)

Charlie May - Night Light (Kay Aka Khalil Touihri Remix)

Forest People - Shabauch (Hunter Slay Remix)

Terje Saether - Blinded

Deepfunk - Switch`},{episodio:"107",titulo:"Resident / Episode 107 / May 25 2013",descripcion:`Part 1 Tracklist

Soul Button feat. Stee Downes - In My Stride (Atapy Remix)

Gone Deville - From Loving You (Martin Roth Remix)

Marcelo Paladini - Gumdrops (Matias Vila Remix)

Kassey Voorn - A Stride In The Dark (Deep mix)

Kolsch - Goldfisch (Original Mix)

Part 2 Tracklist

James Teej - A Civil Duty (Original Mix)

Rave Child - Ryan Davis Cinematic Rebuild

Andre Sobota - Lost Igor Zaharov & Sober System - Soul Cut (Knob Remix) Michael Mayer - Good Times (Agoria Sunlune Mix)`,likes:"3",descargas:"38.3K",fecha:"2013-05-25",link:"https://mcdn.podbean.com/mf/download/q5wtem/107-HernanCattaneo-2013-05-25.mp3",tracklist:`Part 1

Soul Button feat. Stee Downes - In My Stride (Atapy Remix)

Gone Deville - From Loving You (Martin Roth Remix)

Marcelo Paladini - Gumdrops (Matias Vila Remix)

Kassey Voorn - A Stride In The Dark (Deep mix)

Kolsch - Goldfisch (Original Mix)

Part 2

James Teej - A Civil Duty (Original Mix)

Rave Child - Ryan Davis Cinematic Rebuild

Andre Sobota - Lost Igor Zaharov & Sober System - Soul Cut (Knob Remix) Michael Mayer - Good Times (Agoria Sunlune Mix)`},{episodio:"096",titulo:"Resident / Episode 096 / March 09 2013",descripcion:`Part 1 Tracklist

Art Department - Robot Heart (Fran Von Vie Feat Cio May Remix)

Edu Yattah - Restless Love (feat Natascha Stern)

C-Jay - Lightism

uP & pG feat. David Kareyan - Follow you

Issac - Chilled Green Part 2 Tracklist dPen - As Far As It Goes (Nick Varon Remix)

AndrewzVee & KN - Fairytale

Li-Polymer - Loverground

Oscar Vazquez - My Way

Dosem- Black Unicorn`,likes:"4",descargas:"58.6K",fecha:"2013-03-09",link:"https://mcdn.podbean.com/mf/download/d4pim/096-HernanCattaneo-2013-03-09.mp3",tracklist:`Part 1

Art Department - Robot Heart (Fran Von Vie Feat Cio May Remix)

Edu Yattah - Restless Love (feat Natascha Stern)

C-Jay - Lightism

uP & pG feat. David Kareyan - Follow you

Issac - Chilled Green Part 2 dPen - As Far As It Goes (Nick Varon Remix)

AndrewzVee & KN - Fairytale

Li-Polymer - Loverground

Oscar Vazquez - My Way

Dosem- Black Unicorn`},{episodio:"097",titulo:"Resident / Episode 097 / March 16 2013",descripcion:`Part 1 Tracklist

Sivesgaard - Half Dreaming (Inxec Remix)

One Opinion - Driving

False Image - Ocelot

Marcus Worgull, Frank Wiedemann - Muwekma

Markus Homm - Drei Eins

Part 2 Tracklist Luis Bondio - Mumetta (dPen Remix) Benjamin Damage & Doc Daneeka (Feat Abigail Wyles ) - Battleships (Sasha remix) Frankie Watch - Geiri Fairmont - Last Dance (Ewan Pearson Remix)`,likes:"5",descargas:"41.4K",fecha:"2013-03-16",link:"https://mcdn.podbean.com/mf/download/s9wr6i/097-HernanCattaneo-2013-03-16.mp3",tracklist:`Part 1

Sivesgaard - Half Dreaming (Inxec Remix)

One Opinion - Driving

False Image - Ocelot

Marcus Worgull, Frank Wiedemann - Muwekma

Markus Homm - Drei Eins

Part 2 Luis Bondio - Mumetta (dPen Remix) Benjamin Damage & Doc Daneeka (Feat Abigail Wyles ) - Battleships (Sasha remix) Frankie Watch - Geiri Fairmont - Last Dance (Ewan Pearson Remix)`},{episodio:"098",titulo:"Resident / Episode 098 / March 23 2013",descripcion:`Part 1 Tracklist

Isolee - Allowance

Uvo - False forms

Shyam - Let me in

Daniel Dexter - Why so serious

Part 2 Tracklist

Ben Watt - Guinea pig (Marcelo Vasami remix)

Konektiv - Hhauz (Ferdy mix)

Revolt - Rise

Der Dritte Raum - Alienoid (Dominik Eulberg & Gabriel Ananda)

Scotty A - What make us smile`,likes:"5",descargas:"60.5K",fecha:"2013-03-23",link:"https://mcdn.podbean.com/mf/download/5z43x/098-HernanCattaneo-2013-03-23.mp3",tracklist:`Part 1

Isolee - Allowance

Uvo - False forms

Shyam - Let me in

Daniel Dexter - Why so serious

Part 2

Ben Watt - Guinea pig (Marcelo Vasami remix)

Konektiv - Hhauz (Ferdy mix)

Revolt - Rise

Der Dritte Raum - Alienoid (Dominik Eulberg & Gabriel Ananda)

Scotty A - What make us smile`},{episodio:"099",titulo:"Resident / Episode 099 / March 30 2013",descripcion:`Part 1 Tracklist

Manuel Moreno - Switchback (Afrilounge deep pattern mix)

Tube & Berger, P.A.C.O - Greyjoy (Einmusik Remix)

Sasch-Marian (Marc Poppcke Remix)

Sid Le Rock - Here we are

Part 2 Tracklist

Darin Epsilon - Valencia Doomwork - One religion WayWork & Cris Xalambri - Black way (Cut Knob Remix) East Cafe - Question One (Nikko.Z Remix)`,likes:"5",descargas:"63.5K",fecha:"2013-03-30",link:"https://mcdn.podbean.com/mf/download/v98a52/099-HernanCattaneo-2013-03-30.mp3",tracklist:`Part 1

Manuel Moreno - Switchback (Afrilounge deep pattern mix)

Tube & Berger, P.A.C.O - Greyjoy (Einmusik Remix)

Sasch-Marian (Marc Poppcke Remix)

Sid Le Rock - Here we are

Part 2

Darin Epsilon - Valencia Doomwork - One religion WayWork & Cris Xalambri - Black way (Cut Knob Remix) East Cafe - Question One (Nikko.Z Remix)`},{episodio:"100",titulo:"Resident / Episode 100 / April 06 2013",descripcion:`Part 1 Tracklist

Luca Bacchetti - Atlantic

Jori Hulkkonen - Liquid hologram feat. Jiihoo (Jori Hulkkonen remix)

Henry Saiz - All the evil of this world (Chaim remix)

Le Carousel - Carousel (Phil Kieran mix)

Part 2 Tracklist

Depeche Mode - My little universe (Audiotox & Watson)

Momu - Rising (Issac)

Holbrook & Skykeeper - Without us

Loans Erepams - Stellar wind (Rich Curtis remix)

Sigur Ros - Saegoplur (Paolo Mojo remix)`,likes:"10",descargas:"56.2K",fecha:"2013-04-06",link:"https://mcdn.podbean.com/mf/download/d7rmki/100-HernanCattaneo-2013-04-06.mp3",tracklist:`Part 1

Luca Bacchetti - Atlantic

Jori Hulkkonen - Liquid hologram feat. Jiihoo (Jori Hulkkonen remix)

Henry Saiz - All the evil of this world (Chaim remix)

Le Carousel - Carousel (Phil Kieran mix)

Part 2

Depeche Mode - My little universe (Audiotox & Watson)

Momu - Rising (Issac)

Holbrook & Skykeeper - Without us

Loans Erepams - Stellar wind (Rich Curtis remix)

Sigur Ros - Saegoplur (Paolo Mojo remix)`},{episodio:"101",titulo:"Resident / Episode 101 / April 13 2013",descripcion:`Part 1 Tracklist MNR - City of shadows Issac - Chilled green Frankly & Sandrino - We are all dust

The Confusion and dj Emil - No problem (Dandy & Gregory S)

Part 2 Tracklist

Vinayak^a - You may sit and wonder

Blusoul - Voyager (Li-Polymer Remix)

Kaan Koray - Brust Of Emotion (Original Mix)

Mononoid - Two terms

Snake Sedrick - Fields (Lautaro Varela green fields bootleg)`,likes:"7",descargas:"45.2K",fecha:"2013-04-13",link:"https://mcdn.podbean.com/mf/download/tqz2n/101-HernanCattaneo-2013-04-13.mp3",tracklist:`Part 1 MNR - City of shadows Issac - Chilled green Frankly & Sandrino - We are all dust

The Confusion and dj Emil - No problem (Dandy & Gregory S)

Part 2

Vinayak^a - You may sit and wonder

Blusoul - Voyager (Li-Polymer Remix)

Kaan Koray - Brust Of Emotion (Original Mix)

Mononoid - Two terms

Snake Sedrick - Fields (Lautaro Varela green fields bootleg)`},{episodio:"102",titulo:"Resident / Episode 102 / April 20 2013",descripcion:`Part 1 Tracklist

Cine City - Are You Sure Joe (Neil Quigley's journey to Metaluna)

3Deep feat. Ryan Vail - Coming home

Rootfellen - Wanna love you

Amirali - No strings

Chaim - We Are feat. Meital Derazone

Part 2 Tracklist

The Revenge - Maia

Ben Hoo - Maledictum

Antrim - Shine Evolving

Eze Ramirez - Nekhael

CoMa - My Orbit`,likes:"5",descargas:"47.1K",fecha:"2013-04-20",link:"https://mcdn.podbean.com/mf/download/2tvn9a/102-HernanCattaneo-2013-04-20.mp3",tracklist:`Part 1

Cine City - Are You Sure Joe (Neil Quigley's journey to Metaluna)

3Deep feat. Ryan Vail - Coming home

Rootfellen - Wanna love you

Amirali - No strings

Chaim - We Are feat. Meital Derazone

Part 2

The Revenge - Maia

Ben Hoo - Maledictum

Antrim - Shine Evolving

Eze Ramirez - Nekhael

CoMa - My Orbit`},{episodio:"103",titulo:"Resident / Episode 103 / April 27 2013",descripcion:`Part 1 Tracklist

Tale of Us - Discochord

Ben Hoo - Maledictum (Nicolas Duvoisin Rmx )

Antix & Tim Richards - Another Day (SQL Dub Mix)

Skinnerbox - Purgatory Five (Sound Process Unofficial Deep Remix)

16B - Escape (Kevin Di Serna)

Part 2 Tracklist

Namatjira - Ethos

Max Cooper & Nicolas Bouga\xEFeff - Meadows (Microtrauma Remix)

Layo & Bushwacka! - Born In The Backwoods (Nicole Maudaber Remix)

Traumer - Escape`,likes:"4",descargas:"41.4K",fecha:"2013-04-27",link:"https://mcdn.podbean.com/mf/download/g6e3nw/103-HernanCattaneo-2013-04-27.mp3",tracklist:`Part 1

Tale of Us - Discochord

Ben Hoo - Maledictum (Nicolas Duvoisin Rmx )

Antix & Tim Richards - Another Day (SQL Dub Mix)

Skinnerbox - Purgatory Five (Sound Process Unofficial Deep Remix)

16B - Escape (Kevin Di Serna)

Part 2

Namatjira - Ethos

Max Cooper & Nicolas Bouga\xEFeff - Meadows (Microtrauma Remix)

Layo & Bushwacka! - Born In The Backwoods (Nicole Maudaber Remix)

Traumer - Escape`},{episodio:"104",titulo:"Resident / Episode 104 / May 04 2013",descripcion:`Part 1 Tracklist

Ultrasone - High dawn

Ednner Soares - An Doasage (Uvos Over Dose Remix)

Andrew McDonnell - One day in Kowloon

Patrick M - Velvet Aurora

Part 2 Tracklist

Ian O Donovan - Firenze

Alterimage - My Cortex

Constan - Go The Forest\xA0 (AudioTox & Watson remix)

Terje Saether - Human Lifestyle (Lonya Remix)`,likes:"2",descargas:"39.8K",fecha:"2013-05-04",link:"https://mcdn.podbean.com/mf/download/f5c/104-HernanCattaneo-2013-05-04.mp3",tracklist:`Part 1

Ultrasone - High dawn

Ednner Soares - An Doasage (Uvos Over Dose Remix)

Andrew McDonnell - One day in Kowloon

Patrick M - Velvet Aurora

Part 2

Ian O Donovan - Firenze

Alterimage - My Cortex

Constan - Go The Forest\xA0 (AudioTox & Watson remix)

Terje Saether - Human Lifestyle (Lonya Remix)`},{episodio:"105",titulo:"Resident / Episode 105 / May 11 2013",descripcion:`Part 1 Tracklist

Craig Bentley - Analogue Dreams (Bonar Bradberry Remix)

Chaim - Summer Rains

Marc Poppcke - Breakable

C-Jay & Yoram - RadioSchaduw

Tvardovsky - Colours

Part 2 Tracklist

Santiago Teillagorry - A Gray Day

Maxi Iborquiza - Just Love

Khen & Sonic Union - Introspection (Cid Inc Remix)

Dave Angel - Harlequin`,likes:"3",descargas:"38.5K",fecha:"2013-05-11",link:"https://mcdn.podbean.com/mf/download/kh2hmd/105-HernanCattaneo-2013-05-11.mp3",tracklist:`Part 1

Craig Bentley - Analogue Dreams (Bonar Bradberry Remix)

Chaim - Summer Rains

Marc Poppcke - Breakable

C-Jay & Yoram - RadioSchaduw

Tvardovsky - Colours

Part 2

Santiago Teillagorry - A Gray Day

Maxi Iborquiza - Just Love

Khen & Sonic Union - Introspection (Cid Inc Remix)

Dave Angel - Harlequin`},{episodio:"108",titulo:"Resident / Episode 108 / June 01 2013",descripcion:`Part 1 Tracklist

Joelle Atkins - Jammin

No tomorrow - Nord

Progress In - Fifth planet

Juan Deminicis - Unknown

Darin Epsilon pres. Eventide - Cosmic Discovery (Kastis Torrau & Arnas D Remix)

Part 2 Tracklist

Eyal Cohen - People & mess

Yunus - Meeting Molly

Jimmy Van M- QR (Facundo Mohrr & Sound Process Remix)

Sin Cos Tan - Trust`,likes:"3",descargas:"41.5K",fecha:"2013-06-01",link:"https://mcdn.podbean.com/mf/download/bvp9hs/108-HernanCattaneo-2013-06-01.mp3",tracklist:`Part 1

Joelle Atkins - Jammin

No tomorrow - Nord

Progress In - Fifth planet

Juan Deminicis - Unknown

Darin Epsilon pres. Eventide - Cosmic Discovery (Kastis Torrau & Arnas D Remix)

Part 2

Eyal Cohen - People & mess

Yunus - Meeting Molly

Jimmy Van M- QR (Facundo Mohrr & Sound Process Remix)

Sin Cos Tan - Trust`},{episodio:"109",titulo:"Resident / Episode 109 / June 08 2013",descripcion:`Part 1 Tracklist

Wanderhouse - Lights (Ed Lee)

Dinky - Falling Angel

Antrim - Rita

Deepfunk - Minus

Markus Homm - No train to Alaska

Part 2 Tracklist

Applescal - Blank Value

Lautaro Varela - Downing Street (Graziano Raffa Remix)

MNR - The Pillars of the Earth

John Morrison - North Coast

Alan Live - Horizon`,likes:"4",descargas:"42.9K",fecha:"2013-06-08",link:"https://mcdn.podbean.com/mf/download/fveaqj/109-HernanCattaneo-2013-06-08.mp3",tracklist:`Part 1

Wanderhouse - Lights (Ed Lee)

Dinky - Falling Angel

Antrim - Rita

Deepfunk - Minus

Markus Homm - No train to Alaska

Part 2

Applescal - Blank Value

Lautaro Varela - Downing Street (Graziano Raffa Remix)

MNR - The Pillars of the Earth

John Morrison - North Coast

Alan Live - Horizon`},{episodio:"110",titulo:"Resident / Episode 110 / June 15 2013",descripcion:`Part 1 Tracklist

Neftali Blasko - Time Traveller (Demian Deep Mix)

Namatjira - Momota

Omar El Gamal - Keep Calm

Genius Spark - Such A Fool

Part 2 Tracklist

Kevin Di Serna - Clair de Lune

Solee - Blown

Monojoke - Evolution 99 (Cut Knob Remix)

Danko - The Arrival

Andre Sobota - Befinnings`,likes:"2",descargas:"42K",fecha:"2013-06-15",link:"https://mcdn.podbean.com/mf/download/fmt5sp/110-HernanCattaneo-2013-06-15.mp3",tracklist:`Part 1

Neftali Blasko - Time Traveller (Demian Deep Mix)

Namatjira - Momota

Omar El Gamal - Keep Calm

Genius Spark - Such A Fool

Part 2

Kevin Di Serna - Clair de Lune

Solee - Blown

Monojoke - Evolution 99 (Cut Knob Remix)

Danko - The Arrival

Andre Sobota - Befinnings`},{episodio:"111",titulo:"Resident / Episode 111 / June 22 2013",descripcion:`Part 1 Tracklist

Bjork - Mutual Core (Atapy Remix)

Boss axis - Nevada (Solee Remix)

Verche - Raw Substance (MNR Paradise On The Patio Mix)

Boo Williams - Peaking Point

Part 2 Tracklist

Alberto Blanco & Marcelo Paladini - Chrome Substance

Riccicomoto And Helly Larson - Doppler Effect

MaybeTomorrow - Flying Shark-Kenji Takashima remix

Smak feat. Ryan Vail - In The Beginning (Ian O'Donovan Remix)`,likes:"4",descargas:"42.1K",fecha:"2013-06-22",link:"https://mcdn.podbean.com/mf/download/h8ppz7/111-HernanCattaneo-2013-06-22.mp3",tracklist:`Part 1

Bjork - Mutual Core (Atapy Remix)

Boss axis - Nevada (Solee Remix)

Verche - Raw Substance (MNR Paradise On The Patio Mix)

Boo Williams - Peaking Point

Part 2

Alberto Blanco & Marcelo Paladini - Chrome Substance

Riccicomoto And Helly Larson - Doppler Effect

MaybeTomorrow - Flying Shark-Kenji Takashima remix

Smak feat. Ryan Vail - In The Beginning (Ian O'Donovan Remix)`},{episodio:"112",titulo:"Resident / Episode 112 / June 29 2013",descripcion:`Part 1 Tracklist

Noa Romana & Deersky - See You Soon (Matias Chilano Remix)

Vinayak - Set her free (Martin Buttrich)

Nico Purman - Logan's Dream

Prommer & Barck - I want you

Part 2 Tracklist

Peet - Reflection (Uvo Remix)

Progreg - Deep Harmony (Absolution Remix) Doomwork - Midnight blue Henry Saiz - Fill Me Up (Edu Imbernon remix)`,likes:"5",descargas:"43.3K",fecha:"2013-06-29",link:"https://mcdn.podbean.com/mf/download/jufhq/112-HernanCattaneo-2013-06-29.mp3",tracklist:`Part 1

Noa Romana & Deersky - See You Soon (Matias Chilano Remix)

Vinayak - Set her free (Martin Buttrich)

Nico Purman - Logan's Dream

Prommer & Barck - I want you

Part 2

Peet - Reflection (Uvo Remix)

Progreg - Deep Harmony (Absolution Remix) Doomwork - Midnight blue Henry Saiz - Fill Me Up (Edu Imbernon remix)`},{episodio:"113",titulo:"Resident / Episode 113 / July 06 2013",descripcion:`Part 1 Tracklist M.A.N.D.Y. vs LOPAZZ feat Nick Maurer - Feel it in your brain ( Baikal Remix )
Stephen J. Kroos - Theia (MUUI Remix)
Marc Poppcke - Silent Picture (Fran Von Vie & Cumiks Remix)
Cocteau Twins - Blue Bell Knoll (Federico Monachesi Bootleg dub)
Nick Stoynoff - Tresor Blackout (Marc Poppke) Part 2 Tracklist Louis Kolben - Don't Lose Your Way (Eelke Kleijn Get Lost Re-Edit)
C-Jay - Lightism - Marc Pollen Remix
Qbical - Rise (Cid Inc remix)
Antrim - Life To Peace (van Bellen Mix)`,likes:"3",descargas:"46.2K",fecha:"2013-07-06",link:"https://mcdn.podbean.com/mf/download/7kbden/113-HernanCattaneo-2013-07-06.mp3",tracklist:`Part 1 M.A.N.D.Y. vs LOPAZZ feat Nick Maurer - Feel it in your brain ( Baikal Remix )
Stephen J. Kroos - Theia (MUUI Remix)
Marc Poppcke - Silent Picture (Fran Von Vie & Cumiks Remix)
Cocteau Twins - Blue Bell Knoll (Federico Monachesi Bootleg dub)
Nick Stoynoff - Tresor Blackout (Marc Poppke) Part 2 Louis Kolben - Don't Lose Your Way (Eelke Kleijn Get Lost Re-Edit)
C-Jay - Lightism - Marc Pollen Remix
Qbical - Rise (Cid Inc remix)
Antrim - Life To Peace (van Bellen Mix)`},{episodio:"114",titulo:"Resident / Episode 114 / July 13 2013",descripcion:`Part 1 Tracklist The XX - Reunion (Ame)
Timo Maas feat Katie Cruel - Articulation (youANDme remix)
Michael Mayer - Roses (Terranova Mix)
Luis Bondio - Imaginarium (Dousk Remix) Part 2 Tracklist Echomen ft Mark Nigrelli - Don't hold back
Lykke LI - I Follow Rivers (Phonic Scoupe & Dzim Remix)
Edu Imbernon & Triumph - Veranoski
Michael & Levan and Stiven Rivic-Uranium (Tini Tun Remix)
Paul Hazendonk- Slack Tide (Guy Mantzur & Khen Mix)`,likes:"12",descargas:"44.7K",fecha:"2013-07-13",link:"https://mcdn.podbean.com/mf/download/ft7wg6/114-HernanCattaneo-2013-07-13.mp3",tracklist:`Part 1 The XX - Reunion (Ame)
Timo Maas feat Katie Cruel - Articulation (youANDme remix)
Michael Mayer - Roses (Terranova Mix)
Luis Bondio - Imaginarium (Dousk Remix) Part 2 Echomen ft Mark Nigrelli - Don't hold back
Lykke LI - I Follow Rivers (Phonic Scoupe & Dzim Remix)
Edu Imbernon & Triumph - Veranoski
Michael & Levan and Stiven Rivic-Uranium (Tini Tun Remix)
Paul Hazendonk- Slack Tide (Guy Mantzur & Khen Mix)`},{episodio:"115",titulo:"Resident / Episode 115 / July 20 2013",descripcion:'Part 1 Tracklist Marian Brito - Limbo Anthony Yarranton - Bag of Bells Bambook - Give it \xA0up (Chaim remix) Nikko.Z - Slope (Vocal Mix) Part 2 Tracklist Matias Chilano - Autopilot (Neftali Blasko Remix) Progess Inn - Spinal projection Boss Axis - Challenger (Alle Farben Remix) Prompt - Depth (Marc Marzenit "Karma" Remix) Edu Imbernon & Triumph - Veranoski (Henry Saiz Remix)',likes:"2",descargas:"46K",fecha:"2013-07-20",link:"https://mcdn.podbean.com/mf/download/24nsf/115-HernanCattaneo-2013-07-20.mp3",tracklist:'Part 1 Marian Brito - Limbo Anthony Yarranton - Bag of Bells Bambook - Give it \xA0up (Chaim remix) Nikko.Z - Slope (Vocal Mix) Part 2 Matias Chilano - Autopilot (Neftali Blasko Remix) Progess Inn - Spinal projection Boss Axis - Challenger (Alle Farben Remix) Prompt - Depth (Marc Marzenit "Karma" Remix) Edu Imbernon & Triumph - Veranoski (Henry Saiz Remix)'},{episodio:"118",titulo:"Resident / Episode 118 / August 10 2013",descripcion:`Part 1 Tracklist Guy J - Rose (Silinder Remix)
Eze Ramirez - Arial
Progreg - Deep Harmony (Absolution Remix)
Timo Maas feat. Katie Cruel - Articulation (Simon Vuarambon Space Mix)
Jorg - If I Tarry Part 2 Tracklist Francys - Memories (Marco Resman Remix)
Francys - Memories
Moshic - Delicate Times
Dale Middleton - \xA0Daylight darkness (Daneel remix)
Big Al - Captured (Lateral Cut Groove s Deep Mix)`,likes:"6",descargas:"44.3K",fecha:"2013-08-10",link:"https://mcdn.podbean.com/mf/download/39v45x/118-HernanCattaneo-2013-08-10.mp3",tracklist:`Part 1 Guy J - Rose (Silinder Remix)
Eze Ramirez - Arial
Progreg - Deep Harmony (Absolution Remix)
Timo Maas feat. Katie Cruel - Articulation (Simon Vuarambon Space Mix)
Jorg - If I Tarry Part 2 Francys - Memories (Marco Resman Remix)
Francys - Memories
Moshic - Delicate Times
Dale Middleton - \xA0Daylight darkness (Daneel remix)
Big Al - Captured (Lateral Cut Groove s Deep Mix)`},{episodio:"119",titulo:"Resident / Episode 119 / August 17 2013",descripcion:`Part 1 Tracklist Kriece - Morning Star
YouANDme pres. You and the machines - Beyond
Beckwith feat. Catherine Porter - Back To Love
Worakls - Good night my love (Joachim Pastor Remix) Part 2 Tracklist Julian Rodriguez - Golochyn Mount (Aviran Shahino Remix)
Pedro Aguiar - Night Shift (Mike Griego Remix)
Michael Levan & Stiven Rivic - Justice (Sahar Z Remix)
Erich Von Kollar - Parallel Flashbacks`,likes:"4",descargas:"49.6K",fecha:"2013-08-17",link:"https://mcdn.podbean.com/mf/download/qunzt2/119-HernanCattaneo-2013-08-17.mp3",tracklist:`Part 1 Kriece - Morning Star
YouANDme pres. You and the machines - Beyond
Beckwith feat. Catherine Porter - Back To Love
Worakls - Good night my love (Joachim Pastor Remix) Part 2 Julian Rodriguez - Golochyn Mount (Aviran Shahino Remix)
Pedro Aguiar - Night Shift (Mike Griego Remix)
Michael Levan & Stiven Rivic - Justice (Sahar Z Remix)
Erich Von Kollar - Parallel Flashbacks`},{episodio:"120",titulo:"Resident / Episode 120 / August 24 2013",descripcion:`Part 1 Tracklist St. Savor - Savor's Dream
Kevin Mc Kay - Ease Your Pain (Illyus master)
Erreome - Cosmic Box
Frangellico A.k.A The man in dark suit\xA0- Sooner or later
Olaf Stuut - Libre (DJ edit) Part 2 Tracklist Dave Angel - Come To Papa
Deepfunk & Acidulant - Cosmos
JJ Salinas - Direct Order (Manuel Sofia Remix)
SQL - Reveal (Kassey Voorn remix)`,likes:"3",descargas:"82.9K",fecha:"2013-08-24",link:"https://mcdn.podbean.com/mf/download/y6s6j/120-HernanCattaneo-2013-08-24.mp3",tracklist:`Part 1 St. Savor - Savor's Dream
Kevin Mc Kay - Ease Your Pain (Illyus master)
Erreome - Cosmic Box
Frangellico A.k.A The man in dark suit\xA0- Sooner or later
Olaf Stuut - Libre (DJ edit) Part 2 Dave Angel - Come To Papa
Deepfunk & Acidulant - Cosmos
JJ Salinas - Direct Order (Manuel Sofia Remix)
SQL - Reveal (Kassey Voorn remix)`},{episodio:"121",titulo:"Resident / Episode 121 / August 31 2013",descripcion:`Part 1 Tracklist Dave DK - Home Again Feat. Heiko Voss (Dub Version)
Dave DK - Home Again Feat. Heiko Voss
Will McGlone - Orryn
Pupkulies & Rebecca - Could not be better (Mario Puccio Unofficial Remix) Part 2 Tracklist Guille Quero & Sound Process - Whatever
Chymera - Fathoms (Asten remix)
Simply City - Zero Distance
Silinder - A World Is Watching
Tom Middleton - WYV AUW CHU`,likes:"4",descargas:"40.5K",fecha:"2013-08-31",link:"https://mcdn.podbean.com/mf/download/wx55fn/121-HernanCattaneo-2013-08-31.mp3",tracklist:`Part 1 Dave DK - Home Again Feat. Heiko Voss (Dub Version)
Dave DK - Home Again Feat. Heiko Voss
Will McGlone - Orryn
Pupkulies & Rebecca - Could not be better (Mario Puccio Unofficial Remix) Part 2 Guille Quero & Sound Process - Whatever
Chymera - Fathoms (Asten remix)
Simply City - Zero Distance
Silinder - A World Is Watching
Tom Middleton - WYV AUW CHU`},{episodio:"122",titulo:"Resident / Episode 122 / September 07 2013",descripcion:`Part 1 Tracklist Estroe - After I m Gone (Jarno s Walking Backwards Remix)
Maher Daniel & Gab Rhome - With The Rain Comes Sorrow
Guy J - Milestone
Pole Folder - Chelsea's Lane
Scotty.A. - The World Turns and We Turn With It (David Calo Remix) Part 2 Tracklist Juan Deminicis - Past (Luis Bondio Remix)
DAVI - Two Suns In The Sky
Enthousiaste Gasten & Freak Strano - Slide it In (Sebastian Davidson Remix)
Jacob Seville - Rocketman
Andre Sobota - Move`,likes:"4",descargas:"40.8K",fecha:"2013-09-07",link:"https://mcdn.podbean.com/mf/download/cst9sr/122-HernanCattaneo-2013-09-07.mp3",tracklist:`Part 1 Estroe - After I m Gone (Jarno s Walking Backwards Remix)
Maher Daniel & Gab Rhome - With The Rain Comes Sorrow
Guy J - Milestone
Pole Folder - Chelsea's Lane
Scotty.A. - The World Turns and We Turn With It (David Calo Remix) Part 2 Juan Deminicis - Past (Luis Bondio Remix)
DAVI - Two Suns In The Sky
Enthousiaste Gasten & Freak Strano - Slide it In (Sebastian Davidson Remix)
Jacob Seville - Rocketman
Andre Sobota - Move`},{episodio:"123",titulo:"Resident / Episode 123 / September 14 2013",descripcion:`Part 1 Tracklist Pole Folder - Mad Love
Applescal feat. Ryan Davis - Creatures
Lonya, Roi Okev - February (Carlo Toma Remix)
Demian Muller, Andre Butano - Old Job (Markus Homm Remix) Part 2 Tracklist 16BL & Radio Slave - Energy Time (Kevin Di Serna Edit)
Tanseer - Both Sides (Dale Middleton Remix)
Hugo Ibarra & Uvo - Fragments
Klangkarussell Feat Phoniques - Sonnentanz (Dsp Edit)`,likes:"3",descargas:"42.4K",fecha:"2013-09-14",link:"https://mcdn.podbean.com/mf/download/7sq8wd/123-HernanCattaneo-2013-09-14.mp3",tracklist:`Part 1 Pole Folder - Mad Love
Applescal feat. Ryan Davis - Creatures
Lonya, Roi Okev - February (Carlo Toma Remix)
Demian Muller, Andre Butano - Old Job (Markus Homm Remix) Part 2 16BL & Radio Slave - Energy Time (Kevin Di Serna Edit)
Tanseer - Both Sides (Dale Middleton Remix)
Hugo Ibarra & Uvo - Fragments
Klangkarussell Feat Phoniques - Sonnentanz (Dsp Edit)`},{episodio:"124",titulo:"Resident / Episode 124 / September 21 2013",descripcion:`Part 1 Tracklist Martin Buttrich & Mousse T - Sunseeker
Muui - Lost in what you know (Pink Hope Mix)
Amine Edge, Dance - Mistakes (The Midnight Perverts & Subtron Remix)
Hermanez - Ayahuaska Part 2 Tracklist Khen - Thousand Mirrors
Mindshield - Parana (Progress Inn Remix)
Tele Vizion - We Walk Everyday (Steve Lovesey Remix)
Marc Houle & Click Box - Razzmatazz`,likes:"2",descargas:"41.2K",fecha:"2013-09-21",link:"https://mcdn.podbean.com/mf/download/us92rz/124-HernanCattaneo-2013-09-21.mp3",tracklist:`Part 1 Martin Buttrich & Mousse T - Sunseeker
Muui - Lost in what you know (Pink Hope Mix)
Amine Edge, Dance - Mistakes (The Midnight Perverts & Subtron Remix)
Hermanez - Ayahuaska Part 2 Khen - Thousand Mirrors
Mindshield - Parana (Progress Inn Remix)
Tele Vizion - We Walk Everyday (Steve Lovesey Remix)
Marc Houle & Click Box - Razzmatazz`},{episodio:"125",titulo:"Resident / Episode 125 / September 28 2013",descripcion:`Part 1 Tracklist Pete Gooding & Tyrell D - Get Loaded (Tim Angrave Remix)
Rodrigo-K - Walking Towards The Sunrise (Julian Rodriguez Remix)
GMJ - This path of least resistance.
Zoo Brazil featuring Philip - Heart's a Legend (Sasse Remix)
58 BPM (Mano Le Tough Remix) Tensnake, Fiora Part 2 Tracklist Banco Di Gaia - Heliopolis [Silinder Remix]
Jonatan Ramonda - Long Way To Sky (Jelly For The Babies Remix)
Stas Drive - Arkaim (Original Mix)
Satoshi Fumi - The Messenger (Ian O Donovan Rmx)`,likes:"3",descargas:"38.5K",fecha:"2013-09-28",link:"https://mcdn.podbean.com/mf/download/ivirz/125-HernanCattaneo-2013-09-28.mp3",tracklist:`Part 1 Pete Gooding & Tyrell D - Get Loaded (Tim Angrave Remix)
Rodrigo-K - Walking Towards The Sunrise (Julian Rodriguez Remix)
GMJ - This path of least resistance.
Zoo Brazil featuring Philip - Heart's a Legend (Sasse Remix)
58 BPM (Mano Le Tough Remix) Tensnake, Fiora Part 2 Banco Di Gaia - Heliopolis [Silinder Remix]
Jonatan Ramonda - Long Way To Sky (Jelly For The Babies Remix)
Stas Drive - Arkaim (Original Mix)
Satoshi Fumi - The Messenger (Ian O Donovan Rmx)`},{episodio:"128",titulo:"Resident / Episode 128 / October 19 2013",descripcion:`Tracklist Part 1 Applescal & Ryan Davis - Creatures (Mehmet Akar's Deeper Underground Remix)
Marcelo Vasami - Zeit
Niko Mayer - Last House in BsAs (Original Mix)
Alex Niggemann - Boujuma (Matthias Meyer Remix) Tracklist Part 2 Progress Inn - Corrupt
Autim - Mission Control (Nick Robson Remix)
Antrim - For Me For You (Omar El Gamal Remix)
Navid Mehr - No ego`,likes:"7",descargas:"36.3K",fecha:"2013-10-19",link:"https://mcdn.podbean.com/mf/download/hkjumv/128-HernanCattaneo-2013-10-19.mp3",tracklist:`Tracklist Part 1 Applescal & Ryan Davis - Creatures (Mehmet Akar's Deeper Underground Remix)
Marcelo Vasami - Zeit
Niko Mayer - Last House in BsAs (Original Mix)
Alex Niggemann - Boujuma (Matthias Meyer Remix) Tracklist Part 2 Progress Inn - Corrupt
Autim - Mission Control (Nick Robson Remix)
Antrim - For Me For You (Omar El Gamal Remix)
Navid Mehr - No ego`},{episodio:"129",titulo:"Resident / Episode 129 / October 26 2013",descripcion:`Tracklist Part 1 Santi Mossman & Rodrigo Mateo - MicroCosmos ( Sahar Z Remix )
Zusammenklang - We Do
Denny Trajkov - The Talk (Original Mix)
Busy P - This Song (Andy Arias Dub Mix)
D00sh - 2013 (Tini Tun Remix) Tracklist Part 2 Marcelo Vasami - Smoog (Deepfunk Remix)
Han Haak - Hazy About Disgrace
Jelly For The Babies - Perfect blue
Seb Dhajje - Fifth Season (Nick Brennan remix)
Bookashade - Love Inc (Hot Since 82 Remix)`,likes:"3",descargas:"37.8K",fecha:"2013-10-26",link:"https://mcdn.podbean.com/mf/download/d7i2im/129-HernanCattaneo-2013-10-26.mp3",tracklist:`Tracklist Part 1 Santi Mossman & Rodrigo Mateo - MicroCosmos ( Sahar Z Remix )
Zusammenklang - We Do
Denny Trajkov - The Talk (Original Mix)
Busy P - This Song (Andy Arias Dub Mix)
D00sh - 2013 (Tini Tun Remix) Tracklist Part 2 Marcelo Vasami - Smoog (Deepfunk Remix)
Han Haak - Hazy About Disgrace
Jelly For The Babies - Perfect blue
Seb Dhajje - Fifth Season (Nick Brennan remix)
Bookashade - Love Inc (Hot Since 82 Remix)`},{episodio:"130",titulo:"Resident / Episode 130 / November 02 2013",descripcion:`Tracklist Part 1 Slow Hands - I wish I knew
Thermalbear Feat. Arrows Down - Turn The Tide (John Rosignoli Remix)
Eagles & Butterflies - Studio 54 (John Tejada remix)
Chris Fortier - Been There Used To Do That (Luis Junior Remix)
Silinder - Penthouse (GRG Deep Remix) Tracklist Part 2 Matias Fernandez Vi\xF1a - Si Me Sientes
Daneel feat Sublime - Doin\` time
Kobana & Sonic Union - Maelstrom / Unity
Khen - Voices From The Past
Underground Allstars - Night Pressure (Quivver Remix)`,likes:"3",descargas:"37.4K",fecha:"2013-11-02",link:"https://mcdn.podbean.com/mf/download/iuchxa/130-HernanCattaneo-2013-11-02.mp3",tracklist:`Tracklist Part 1 Slow Hands - I wish I knew
Thermalbear Feat. Arrows Down - Turn The Tide (John Rosignoli Remix)
Eagles & Butterflies - Studio 54 (John Tejada remix)
Chris Fortier - Been There Used To Do That (Luis Junior Remix)
Silinder - Penthouse (GRG Deep Remix) Tracklist Part 2 Matias Fernandez Vi\xF1a - Si Me Sientes
Daneel feat Sublime - Doin\` time
Kobana & Sonic Union - Maelstrom / Unity
Khen - Voices From The Past
Underground Allstars - Night Pressure (Quivver Remix)`},{episodio:"131",titulo:"Resident / Episode 131 / November 09 2013",descripcion:`Part 1 Tracklist Robert Babicz - Rosegarden
Dubspeeka - Timaeus
Luis Bondio & Cesar Lombardi - Solar Attraction (Stas Drive remix)
Marvin Zeyss - Solitary Life (Mario Aureo Remix)
Ron Hes & Steve Slight - Shoot Part 2 Tracklist Ferdinand - Souvenir
Dejan Dex - Thin Skin
Omar El Gamal - New One
Jamie Stevens - Foreign Utopia (Sonic Union Remix)
bRUNA -Youve been light to me (Marc Marzenit Back to Disco Remix)`,likes:"2",descargas:"36.4K",fecha:"2013-11-09",link:"https://mcdn.podbean.com/mf/download/tifbpt/131-HernanCattaneo-2013-11-09.mp3",tracklist:`Part 1 Robert Babicz - Rosegarden
Dubspeeka - Timaeus
Luis Bondio & Cesar Lombardi - Solar Attraction (Stas Drive remix)
Marvin Zeyss - Solitary Life (Mario Aureo Remix)
Ron Hes & Steve Slight - Shoot Part 2 Ferdinand - Souvenir
Dejan Dex - Thin Skin
Omar El Gamal - New One
Jamie Stevens - Foreign Utopia (Sonic Union Remix)
bRUNA -Youve been light to me (Marc Marzenit Back to Disco Remix)`},{episodio:"132",titulo:"Resident / Episode 132 / November 16 2013",descripcion:`Part 1 Tracklist Nutia - Papo (Lake People Remix)
Those Beats - Highrise
Pete Lazonby - Sacred Cycles (Dandy aka Peter Makto & Gregory S remix)
DAVI - The Bay 6
Olivier Weiter - Angelus Part 2 Tracklist Scotty.A - Sense of an Ending (Navar Remix)
B-Toriyama - Airport to station
Nir Shoshani Feat. Dana Rose - Make me
Dark Soul Project - Al Sur`,likes:"3",descargas:"36.2K",fecha:"2013-11-16",link:"https://mcdn.podbean.com/mf/download/3mn4st/132-HernanCattaneo-2013-11-16.mp3",tracklist:`Part 1 Nutia - Papo (Lake People Remix)
Those Beats - Highrise
Pete Lazonby - Sacred Cycles (Dandy aka Peter Makto & Gregory S remix)
DAVI - The Bay 6
Olivier Weiter - Angelus Part 2 Scotty.A - Sense of an Ending (Navar Remix)
B-Toriyama - Airport to station
Nir Shoshani Feat. Dana Rose - Make me
Dark Soul Project - Al Sur`},{episodio:"133",titulo:"Resident / Episode 133 / November 23 2013",descripcion:`Part 1 Tracklist Patlac - Firmament
Marcelo Vasami - Micro Diamond (Andrea Cassino Mix)
Jamie Stevens - Dandelion
Roni Iron - De Grecia (Nikko.Z Remix) Part 2 Tracklist Daneel - Felicidad
Antrim - Labyrinth (Silinder Remix)
Luis Bondio & Mariano Favre - The Magic Ride of Mr. RosCor (Khen remix)
Peet & Uvo - Pelagic
Michael & Levan and Stiven Rivic - Unknown (Dale Middleton Remix)`,likes:"4",descargas:"35.9K",fecha:"2013-11-23",link:"https://mcdn.podbean.com/mf/download/quf4vm/133-HernanCattaneo-2013-11-23.mp3",tracklist:`Part 1 Patlac - Firmament
Marcelo Vasami - Micro Diamond (Andrea Cassino Mix)
Jamie Stevens - Dandelion
Roni Iron - De Grecia (Nikko.Z Remix) Part 2 Daneel - Felicidad
Antrim - Labyrinth (Silinder Remix)
Luis Bondio & Mariano Favre - The Magic Ride of Mr. RosCor (Khen remix)
Peet & Uvo - Pelagic
Michael & Levan and Stiven Rivic - Unknown (Dale Middleton Remix)`},{episodio:"134",titulo:"Resident / Episode 134 / November 30 2013",descripcion:`Part 1 Tracklist Navar - The Liquid Escape 
MNR - Siphon
Danton Eeprom - FemDom
Ten Walls - Ankaris
White Rhino & Ariel AB - Galaxies at War Part 2 Tracklist UVO - When I Start To Forget (Deepfunk's Forgotten Remix)
Cristior - Lissome (Lonya and Kobb Remix)
Constan - Empire (Stas Drive remix)
Hunter Game - Keep The Other Things Out (Original Mix)`,likes:"4",descargas:"32.4K",fecha:"2013-11-30",link:"https://mcdn.podbean.com/mf/download/nipjj/134-HernanCattaneo-2013-11-30.mp3",tracklist:`Part 1 Navar - The Liquid Escape
MNR - Siphon
Danton Eeprom - FemDom
Ten Walls - Ankaris
White Rhino & Ariel AB - Galaxies at War Part 2 UVO - When I Start To Forget (Deepfunk's Forgotten Remix)
Cristior - Lissome (Lonya and Kobb Remix)
Constan - Empire (Stas Drive remix)
Hunter Game - Keep The Other Things Out (Original Mix)`},{episodio:"135",titulo:"Resident / Episode 135 / December 07 2013",descripcion:`Part 1 Tracklist
Hugo Ibarra - Camile
Chris Gavin - Nice View (Omid 16B Remix)
Mehmet Akar - Mental Health Hotline
MUUI - Standing in the Street Lights (Jamie Stevens Remix)
Neil Quigley - Rain feat. Ange

Part 2 Tracklist
Antrim - Lives Loose
Dousk - Look Good Tonight (Soulwerk Remix)
Navid Mehr - Sungazer (Silinder Remix)
Mario Kahn - Arp from th Heart (Andy Arias Remix)`,likes:"5",descargas:"32.4K",fecha:"2013-12-07",link:"https://mcdn.podbean.com/mf/download/snqwx3/135-HernanCattaneo-2013-12-07.mp3",tracklist:`Part 1
Hugo Ibarra - Camile
Chris Gavin - Nice View (Omid 16B Remix)
Mehmet Akar - Mental Health Hotline
MUUI - Standing in the Street Lights (Jamie Stevens Remix)
Neil Quigley - Rain feat. Ange

Part 2
Antrim - Lives Loose
Dousk - Look Good Tonight (Soulwerk Remix)
Navid Mehr - Sungazer (Silinder Remix)
Mario Kahn - Arp from th Heart (Andy Arias Remix)`},{episodio:"139",titulo:"Resident / Episode 139 / January 04 2014",descripcion:`Part 1 Tracklist
Checkor - Reminisce
Ant\xFC Coimbra & Ivan Melnik - Pleasure feat. Margot
The Revolving Junkie - And why not
Deaf Pillow - Deviant

Part 2 Tracklist
Marcelo Vasami - Vocal Femme
Mehmet Akar - Mental Healt Hotline 
Mathew Johnson - Lebel 7 (Dixon Remix)
Alex Niggemann - Don't Wait (Alberto Blanco & Marcelo Paladini Rework)
Smight - Magic`,likes:"11",descargas:"36.3K",fecha:"2014-01-04",link:"https://mcdn.podbean.com/mf/download/xd8qhr/139-HernanCattaneo-2014-01-04.mp3",tracklist:`Part 1
Checkor - Reminisce
Ant\xFC Coimbra & Ivan Melnik - Pleasure feat. Margot
The Revolving Junkie - And why not
Deaf Pillow - Deviant

Part 2
Marcelo Vasami - Vocal Femme
Mehmet Akar - Mental Healt Hotline
Mathew Johnson - Lebel 7 (Dixon Remix)
Alex Niggemann - Don't Wait (Alberto Blanco & Marcelo Paladini Rework)
Smight - Magic`},{episodio:"140",titulo:"Resident / Episode 140 / January 11 2014",descripcion:`Part 1 Tracklist The XX - Swept Away (New Jackson Remix)
Igor Cold - Far North Maps (Henry Saiz Far South Maps Remix)
Cosmic Boys - Zero Gravity Love (Matthias Meyer & Patlac Remix)
Sonogama - Try This
Beat Maniacs - 1992 Part 2 Tracklist Sjoerd Korsuize - Sistema ( GMJ deeper meaning mix)
Marcelo Paladini - Ultrasonic
Yuri from Russia - Psychokinesis
Alan Fitzpatrick - We are forever young Download episode on MP3 (Right click, save link as..)`,likes:"10",descargas:"33.3K",fecha:"2014-01-11",link:"https://mcdn.podbean.com/mf/download/t3izx/140-HernanCattaneo-2014-01-11.mp3",tracklist:`Part 1 The XX - Swept Away (New Jackson Remix)
Igor Cold - Far North Maps (Henry Saiz Far South Maps Remix)
Cosmic Boys - Zero Gravity Love (Matthias Meyer & Patlac Remix)
Sonogama - Try This
Beat Maniacs - 1992 Part 2 Sjoerd Korsuize - Sistema ( GMJ deeper meaning mix)
Marcelo Paladini - Ultrasonic
Yuri from Russia - Psychokinesis`},{episodio:"141",titulo:"Resident / Episode 141 / January 18 2014",descripcion:"Part 1 Tracklist Johannes Brecht - Whats about Deepmariano - Satisfaction brought it back Dandy aka Peter Makto & Gregory S - Discount Sagi Berger - Die Prinzessin Der Dunkelheit (Erdi Irmak Remix) Part 2 Tracklist Lake People - Brooklyn Love over entropy - Off the grid Manuelle Musik - No Excuse (Mario Aureo remix) OMB - Naica Crystal Oniris - Better Days Download episode on MP3 (Right click, save link as..)",likes:"5",descargas:"34K",fecha:"2014-01-18",link:"https://mcdn.podbean.com/mf/download/52rq6k/141-HernanCattaneo-2014-01-18.mp3"},{episodio:"142",titulo:"Resident / Episode 142 / January 25 2014",descripcion:"Part 1 Tracklist Yana Heinstein - Close Encounters Ten Walls - Requiem Bastards of Funk & Sonic Union - Mists of Dawn (Remix) Akra - Pure Part 2 Tracklist Ame - Den Ratta (feat. Vulkano) OMB - Naica crystal Dark Soul Project - Dancing To The Moon ( Original Mix) Gregor Tresher - Nightcolors (Garnier without the B devotions remix) Download episode on MP3 (Right click, save link as..)",likes:"4",descargas:"31.3K",fecha:"2014-01-25",link:"https://mcdn.podbean.com/mf/download/dcu8tq/142-HernanCattaneo-2014-01-25.mp3"},{episodio:"143",titulo:"Resident / Episode 143 / February 01 2014",descripcion:"Part 1 Tracklist Beacon - Bring you back (Christian Cabrera Remix) Mindaugas Jak - Deeplandia (Alex Villanueva & Kabalo in Love Remix) D'Sebastian - Save the love DJ Yoko - Sky Drive Dj Yellow & Flowers And Sea Creatures - No One Gets Left Behind (Nicolas Rada Remix) Part 2 Tracklist Uvo - When I Start to Forget (Erdi Irmak Remix) James Monro - Singularity Criss Deeper - Glittering Sky Bj\xF6rk - Moon (Antrim Unofficial Remix) Download episode on MP3 (Right click, save link as..)",likes:"4",descargas:"33.5K",fecha:"2014-02-01",link:"https://mcdn.podbean.com/mf/download/bz33fg/143-HernanCattaneo-2014-02-01.mp3"},{episodio:"144",titulo:"Resident / Episode 144 / February 08 2014",descripcion:"Part 1 Tracklist RezQ Sound - Bounce (AudioVice remix) Solaris Heights - Midnight (Neil Quigley's Zero Dark remix) Teshbe - Sundance Kid (Child Remix) Slumber - Lost in Paradise Part 2 Tracklist Ry Cuming, Frank Wiedemann - Howling (Kintar Bootleg Mix) Omar El Gamal - Kanaka Subandrio - Silicone Oasis Krisol - Si (Andrea Cassino Remix) Download episode on MP3 (Right click, save link as..)",likes:"5",descargas:"32K",fecha:"2014-02-08",link:"https://mcdn.podbean.com/mf/download/zpp678/144-HernanCattaneo-2014-02-08.mp3"},{episodio:"145",titulo:"Resident / Episode 145 / February 15 2014",descripcion:"Part 1 Tracklist Mindaugas Jak - Persona (Pole Folder Remix) Flowers Sea Creatures feat. Wrong Jeremy - The Very Next Day Viviera - Issac Remix Ryan Crosson - Take me back Namatijra - Torquay (Chicola) Part 2 Tracklist Net Son - End Of Story (RezQ Sound Remix) Cornucopia - Emotional tourist DJ Emmo - Entangled Singularity Level 2 \xA0(George Yammine Remix) Mantu - Artbridge (Habischman Remix) Luis Bondio & Cesar Lombardi - Solar Atraction Download episode on MP3 (Right click, save link as..)",likes:"9",descargas:"34K",fecha:"2014-02-15",link:"https://mcdn.podbean.com/mf/download/2ntd28/145-HernanCattaneo-2014-02-15.mp3"},{episodio:"146",titulo:"Resident / Episode 146 / February 22 2014",descripcion:`Part 1 Tracklist Klautram - Map Of Truth (UGLH, Lucio Spain Deep Mix)
Martin Roth - One Cozy Flipside
FictiOne - I Found U
Cornucopia - This is Cornucopia Part 2 Tracklist Roi Koch - Leaves (Arturo Hevia Remix)
Neil Browne - Panic Pot
Ian O' Donovan - World Away
Diego Azocar - Coming back to life
Cid Inc - Indigene (Guy J mix 2) Download episode on MP3 (Right click, save link as..)`,likes:"4",descargas:"35.6K",fecha:"2014-02-22",link:"https://mcdn.podbean.com/mf/download/crdwg4/146-HernanCattaneo-2014-02-22.mp3",tracklist:`Part 1 Klautram - Map Of Truth (UGLH, Lucio Spain Deep Mix)
Martin Roth - One Cozy Flipside
FictiOne - I Found U
Cornucopia - This is Cornucopia Part 2 Roi Koch - Leaves (Arturo Hevia Remix)
Neil Browne - Panic Pot
Ian O' Donovan - World Away
Diego Azocar - Coming back to life`},{episodio:"147",titulo:"Resident / Episode 147 / March 01 2014",descripcion:"Part 1 Tracklist Mariano Favre-Semper Fidelis (Sonic Union Remix) Mariano Favre - Semper Fidelis (Nikko.Z Remix) Conures - Neptune Blues Feat. Kirk Lake (Tone Float Remix) Marcelo Paladini - Hair (Nicholas Van Orton Remix) Robert Babicz - Venus transit (Babicz In Space Mix) Part 2 Tracklist Eelke Kleijn - Lovely Sweet Divine Ricky Ryan & Kosmas - Pied Piper Replika - Whisperer (Charles Webster Mix 2) Erik Lake - Isle Of Bes Guy Gerber & Dixon - No Distance Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"34.5K",fecha:"2014-03-01",link:"https://mcdn.podbean.com/mf/download/724dg5/147-HernanCattaneo-2014-03-01.mp3"},{episodio:"148",titulo:"Resident / Episode 148 / March 08 2014",descripcion:"Part 1 Tracklist Moby Forever - Olivier Weiter Edit Eelke Kleijn - A Tale of Two Lovers Vorbis - Hemisphere Stas Drive - Twin Souls Jelly For The Babies - Cosmopolis (Matias Larrosa & Nico Sparvieri Remix) Part 2 Tracklist Joelle Atkins - Way out there Erik Lake - Many times Grum - Tears (Dmitry Molosh Remix) Scotty.A - Perception Shapes Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"38K",fecha:"2014-03-08",link:"https://mcdn.podbean.com/mf/download/p27tu9/148-HernanCattaneo-2014-03-08.mp3"},{episodio:"149",titulo:"Resident / Episode 149 / March 15 2014",descripcion:"Part 1 Tracklist Mozaiek - Wake Dan Bodan - Hunger Games (Matias Larrosa & Nico Sparvieri Bootleg Edit) Dousk, JMP - Sensual Poke Dr. Avalance - Cuatro Contra Tres (Kieran J Remix) Dorian Decker - My First Steps Part 2 Tracklist Funk D'Void - Lambo (Juan Deminicis) Lautaro Varela - Gone (Antu Coimbra mix) Navid Mehr - Cuma Stas Drive - Arkaim (Matias Chilano Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"34.8K",fecha:"2014-03-15",link:"https://mcdn.podbean.com/mf/download/85c6ht/149-HernanCattaneo-2014-03-15.mp3"},{episodio:"150",titulo:"Resident / Episode 150 / March 22 2014",descripcion:"Part 1 Tracklist Stas Drive pres. Quattar - Arjuna Eslkimo - Lavender Cumiks - Picture Antrim - Blow Your Mind (Luis Bondio Remix) Part 2 Tracklist Timelapse - Who loves the sun Scotty A - The Heart is a Lonely Hunter (Mike Griego Remix) D-Eye - Silver moon Cut Knob - Dumb raver Alejandro Arroyo - Open Cycle Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"36K",fecha:"2014-03-22",link:"https://mcdn.podbean.com/mf/download/jmk6ux/150-HernanCattaneo-2014-03-22.mp3"},{episodio:"151",titulo:"Resident / Episode 151 / March 29 2014",descripcion:"Part 1 Tracklist JJ Grant - Signs and Wonders (Novikoff Remix) Dousk - JMP - Sensual Poke (Omid 16B, Alex George Remix) Peter Horrevorts - Monsoon Dave Seaman & Funkagenda - Naughty Forest (Nicolas Masseyeff Remix) Cristian R - Fifth Dimension Part 2 Tracklist Guido Elordi - Dauphine (Gebio Remix) Grum - Tears (Kassey Voorn Remix) Diego Poblets - Frog Rich Curtis - Freeloader (Cid Inc Remix) Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"33.1K",fecha:"2014-03-29",link:"https://mcdn.podbean.com/mf/download/ptcgzm/151-HernanCattaneo-2014-03-29.mp3"},{episodio:"152",titulo:"Resident / Episode 152 / April 05 2014",descripcion:"Part 1 Tracklist Frankie Knuckles - Whadda U Want (for me) (Frankie's Deep Dub) Marcelo Vasami - City Reflections Julian Rodriguez & Martin Berger Birdcage (Nicholas Van Orton Remix) AMAN - Tears of the Lotus (Jaap Ligthart Remix) Part 2 Tracklist Anthony Yarranton - Bag Of Bells Juan Sando - Hybrid (Progress Inn Inbred) Kasper Koman - The Void King Unique - Raydrop (7 Hours feat Natalie Arnold) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"36.2K",fecha:"2014-04-05",link:"https://mcdn.podbean.com/mf/download/3ck8xh/152-HernanCattaneo-2014-03-29.mp3"},{episodio:"153",titulo:"Resident / Episode 153 / April 12 2014",descripcion:`Part 1 Tracklist Peet and Millie Gaum - Privacy - Pole Folder Rework
Chunky Thunderbolt - The King of Paper Planes (Kriece RMX)
Tim Green - Helpless Sun feat. Hayley Hutchinson (Ryan Crosson's Mood Vocal Remix)
Li-Polymer - A Bird Inside Of Claudia
Nicolas Petracca - Echoes From Outer Space (Andy Arias Remix) Part 2 Tracklist Kevin Di Serna & Randy - Jouya
Stas Drive - Faraway suns
Ioan Gamboa - Muse
Henry Saiz - Spiricom (Damabiah)
The XX - 7Angels [Phonic Scoupe Dub Remix] Download episode on MP3 (Right click, save link as...)`,likes:"6",descargas:"33.8K",fecha:"2014-04-12",link:"https://mcdn.podbean.com/mf/download/jbn8k9/153-HernanCattaneo-2014-04-12.mp3",tracklist:`Part 1 Peet and Millie Gaum - Privacy - Pole Folder Rework
Chunky Thunderbolt - The King of Paper Planes (Kriece RMX)
Tim Green - Helpless Sun feat. Hayley Hutchinson (Ryan Crosson's Mood Vocal Remix)
Li-Polymer - A Bird Inside Of Claudia
Nicolas Petracca - Echoes From Outer Space (Andy Arias Remix) Part 2 Kevin Di Serna & Randy - Jouya
Stas Drive - Faraway suns
Ioan Gamboa - Muse
Henry Saiz - Spiricom (Damabiah)`},{episodio:"154",titulo:"Resident / Episode 154 / April 19 2014",descripcion:"Part 1 Tracklist Matias Larrosa & Nico Sparvieri - Way Back (Li-Polymer Remix) Pete Mccarthey aka on&on - Maggie (Simply City Remix) Kasall & Cristian R - Genuine Sound Ioan Gamboa - Electronic Colors Daraspa - Rendro Part 2 Tracklist Totem Pole - Studio K0 Imogen Heap - Hide and Seek (Corei Unofficial Mix) Verche - Paradigm Shift Paul Kalkbrenner - Fochleise - Kassette (Santi Mossman & Rodrigo Mateo Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"38.9K",fecha:"2014-04-19",link:"https://mcdn.podbean.com/mf/download/pzsihg/154-HernanCattaneo-2014-04-19.mp3"},{episodio:"155",titulo:"Resident / Episode 155 / April 26 2014",descripcion:`Part 1 Tracklist Terje Saether - Ambrose
Quenum - The Step
Ferdy - Intention (Pole Folder Remix)
Tvardovsky - Colours (Stas Drive Remix) Part 2 Tracklist Moderat - Damage Done [Silinder Remix]
SPHMRS - Off The Rocker [BP]
Nocturna - Microcosmos
Reset Robot - Guitar Man Download episode on MP3 (Right click, save link as...)`,likes:"11",descargas:"37.2K",fecha:"2014-04-26",link:"https://mcdn.podbean.com/mf/download/bv37fe/155-HernanCattaneo-2014-04-26.mp3",tracklist:`Part 1 Terje Saether - Ambrose
Quenum - The Step
Ferdy - Intention (Pole Folder Remix)
Tvardovsky - Colours (Stas Drive Remix) Part 2 Moderat - Damage Done [Silinder Remix]
SPHMRS - Off The Rocker [BP]
Nocturna - Microcosmos`},{episodio:"157",titulo:"Resident / Episode 157 / May 10 2014",descripcion:"Part 1 Tracklist Nick Varon- Awakening Dee Montero & AYA - Fade to Noir Joshua Cantrell vs Bjork - D-Influence Slacker - Hymn to Her(MIcah's Trilogy Tribute to Shem) Christian Prommer - Duckwalk (with Beanfield) (Dinky Remix) Part 2 Tracklist Giddyhead - There Came Nicolas Petracca - Echoes From Outer Space Scotty.A - Perception Shapes (Omar El Gamal Remix) The Echo Brothers feat. Kim Wayman - Key (Jamie Stevens Golden Return Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"35K",fecha:"2014-05-10",link:"https://mcdn.podbean.com/mf/download/3w9v7y/157-HernanCattaneo-2014-05-10.mp3"},{episodio:"158",titulo:"Resident / Episode 158 / May 17 2014",descripcion:"Part 1 Tracklist Deepfunk - Strangers ft. Yews Matthew Sands - La Musica Ioan Gamboa - Mermaids & Sea Creatures Nick Dow - Before the feast Chris Fortier - Music Makes the Body Him Self Her Remix Part 2 Tracklist Tim Penner - Ride Til Dawn Franz Lehmann - Verloren Melodie (Nicholas Van Orton Remix) Hunter Game - Antartide Lovejet - Babylon Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"36.5K",fecha:"2014-05-17",link:"https://mcdn.podbean.com/mf/download/b9zguk/158-HernanCattaneo-2014-05-17.mp3"},{episodio:"159",titulo:"Resident / Episode 159 / May 24 2014",descripcion:"Part 1 Tracklist AMAN - Cosmic Jungle (Marcelo Paladini Remix) Kastis Torrau feat Amber Long - Menace Luis Junior - Time (Lonya + Zombi Remix) Mariano Mellino & Dassie - El Globo Rojo Part 2 Tracklist Chaim - Blue Shadow (Guy Gerber's Barkan Remix) Ernest Luminor - Streeztz (Pako & Frederik Remix) Lonya & Graziano Raffa - RedRoza (Lars Wickinger Remix) Monika Kruse meets Pig & Dan - Natural High Qoob - Silencio (Napalm & d-phrag Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"38.2K",fecha:"2014-05-24",link:"https://mcdn.podbean.com/mf/download/m7edy6/159-HernanCattaneo-2014-05-24.mp3"},{episodio:"160",titulo:"Resident / Episode 160 / May 31 2014",descripcion:`Part 1 Tracklist Just Be - Another late night
Just Be - Trobled Soul
Juan Deminicis - Bedroom riddles
Nathan Fake - The Sky Was Pink (Alejo Gonzalez Bootleg) Part 2 Tracklist London Grammar - Hey Now (Sasha Remix)
Omar El Gamal - Cairo Scene (Michael A & Dmitry Molosh Remix)
Cid Inc - Darpa
Mike Griego & Stas Drive - Mocca Sunset Download episode on MP3 (Right click, save link as...)`,likes:"6",descargas:"38.6K",fecha:"2014-05-31",link:"https://mcdn.podbean.com/mf/download/3av7ij/160-HernanCattaneo-2014-05-31.mp3",tracklist:`Part 1 Just Be - Another late night
Just Be - Trobled Soul
Juan Deminicis - Bedroom riddles
Nathan Fake - The Sky Was Pink (Alejo Gonzalez Bootleg) Part 2 London Grammar - Hey Now (Sasha Remix)
Omar El Gamal - Cairo Scene (Michael A & Dmitry Molosh Remix)
Cid Inc - Darpa`},{episodio:"161",titulo:"Resident / Episode 161 / June 07 2014",descripcion:"Part 1 Tracklist Moderat - This Time (Daraspa Bootleg) Grum - Human Touch (Solaris Heights Remix) Soul Button - 7th Heaven (Dahu Remix) Bageera - Baby Boi (Deep Future Remix) Mikael Delta - New Day (Cristian R Unofficial Remix) Part 2 Tracklist Exoplanet - Intrepid Traveller Nicholas Petracca - Echoes From Outer Space (Silinder Remix) Julian Rodriguez - Tequila Al Atardecer (Erich Von Kollar Haunted Beach Remix) Arjuna Schicks - Complete (Jamie Stevens) Download episode on MP3 (Right click, save link as...)",likes:"8",descargas:"36K",fecha:"2014-06-07",link:"https://mcdn.podbean.com/mf/download/qncdby/161-HernanCattaneo-2014-06-07.mp3"},{episodio:"162",titulo:"Resident / Episode 162 / June 14 2014",descripcion:"Part 1 Tracklist Yunus - Meeting Molly (Guy J mix) Igor Vicente - Ashes Tim Green - Pleanty of Spiders Jelly for Babies - Wish Machine Marcelo Paladini - Sleep in Peace (Erdi Irmak Remix) Part 2 Tracklist Zusammenklang - By your side Biologik - Phoenix Biologik - Feed Your Soul Kasall & Cristian R - Whales Oscar Vazquez - My Way (Rich Curtis Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"39.3K",fecha:"2014-06-14",link:"https://mcdn.podbean.com/mf/download/s3geb9/162-HernanCattaneo-2014-06-14.mp3"},{episodio:"163",titulo:"Resident / Episode 163 / June 21 2014",descripcion:`Part 1 Tracklist
Crudito - Neurosis
One of them - Better this way
Kevin Di Serna & Santiago Franch - Stardust
Luis Santoro - Sarah
East Cafe - No Need To Hide (Diyo Remix)

Part 2 Tracklist
Paul Kalkbrenner - Sky and Sand (Robag's Borsi Alpakka Rehand)
Ioan Gamboa - Niernes
Oxia - Harmonie (Alberto Blanco & Marcelo Paladini Remake)
Daniel Avery - Knowing We'll Be Here (Kink Remix) Download episode on MP3 (Right click, save link as...)`,likes:"4",descargas:"35.1K",fecha:"2014-06-21",link:"https://mcdn.podbean.com/mf/download/tg7n5r/163-HernanCattaneo-2014-06-21.mp3",tracklist:`Part 1
Crudito - Neurosis
One of them - Better this way
Kevin Di Serna & Santiago Franch - Stardust
Luis Santoro - Sarah
East Cafe - No Need To Hide (Diyo Remix)

Part 2
Paul Kalkbrenner - Sky and Sand (Robag's Borsi Alpakka Rehand)
Ioan Gamboa - Niernes
Oxia - Harmonie (Alberto Blanco & Marcelo Paladini Remake)`},{episodio:"164",titulo:"Resident / Episode 164 / June 28 2014",descripcion:"Part 1 Tracklist Mou - Ankaa LOM - Analogue Oliver Schories - Go (Einmusik Remix) We need Cracks - Auster Boss Axis vs Rina Mushonga - Nevada (Solee Remix) vs Eastern Highlands (Joris Voorn Remix) {Rich Curtis Mashup} Part 2 Tracklist Luca Bacchetti - No Gravity D.X.Xavier - Totem Lautaro Varela - The Lonely Forest (Matias Chilano Remix) Gabriel Ananda - Smash (Rob Hes, Noraj Cue & Mark Mywords remix) Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"39.1K",fecha:"2014-06-28",link:"https://mcdn.podbean.com/mf/download/8pkbur/164-HernanCattaneo-2014-06-28.mp3"},{episodio:"165",titulo:"Resident / Episode 165 / July 05 2014",descripcion:`Part 1 Tracklist California - Analog dream
D.X.Xavier - Dreamcatcher
Groven & Naz - Wolves Of The Deep (Cristian R Remix)
Mario M - Break the walls
Frangellico - Floating Part 2 Tracklist Moby - The Last Day (Citizen Kain Remix)
Eze Ramirez - Kaizen
Kaito - Behind My Life (Michael Mayer Mix)
Circulation - Topaz (Matias Larrosa & Nico Sparvieri Remix Edit)
London Grammar - Interlude (Antrim Unofficial Remix) Download episode on MP3 (Right click, save link as...)`,likes:"9",descargas:"39.2K",fecha:"2014-07-05",link:"https://mcdn.podbean.com/mf/download/pbvmzk/165-HernanCattaneo-2014-07-05.mp3",tracklist:`Part 1 California - Analog dream
D.X.Xavier - Dreamcatcher
Groven & Naz - Wolves Of The Deep (Cristian R Remix)
Mario M - Break the walls
Frangellico - Floating Part 2 Moby - The Last Day (Citizen Kain Remix)
Eze Ramirez - Kaizen
Kaito - Behind My Life (Michael Mayer Mix)
Circulation - Topaz (Matias Larrosa & Nico Sparvieri Remix Edit)`},{episodio:"167",titulo:"Resident / Episode 167 / July 19 2014",descripcion:`Part 1 Tracklist Ozgur Ozkan - 4U
Andrew McDonnell - No way
Memory - Childen flying
Paul Hazendonk - Urban Suitcase (Scotty.A remix) Part 2 Tracklist Years Without Days - Universe Under The Skin(Conures Deep Groove Remix)
Damabiah - Du rose sur l'oc\xE9an
Rollers For Pandas - Blackness
Marshall Watson - Do Want What You (Issac Remix)
Avilo - Rubicon (Marcelo Paladini Remix) Download episode on MP3 (Right click, save link as...)`,likes:"8",descargas:"42K",fecha:"2014-07-19",link:"https://mcdn.podbean.com/mf/download/i5vxjz/167-HernanCattaneo-2014-07-19.mp3",tracklist:`Part 1 Ozgur Ozkan - 4U
Andrew McDonnell - No way
Memory - Childen flying
Paul Hazendonk - Urban Suitcase (Scotty.A remix) Part 2 Years Without Days - Universe Under The Skin(Conures Deep Groove Remix)
Damabiah - Du rose sur l'oc\xE9an
Rollers For Pandas - Blackness
Marshall Watson - Do Want What You (Issac Remix)`},{episodio:"168",titulo:"Resident / Episode 168 / July 26 2014",descripcion:`Part 1 Tracklist Nicorus - Wie die Welt einmal davon kam (Groj Remix)
Radiohead - Videotape (Christian Cabrera Re-edit)
Julio Largente - Haiku
Omar El Gamal - Kanaka (East Cafe Remix)
Omar El Gamal - Kanaka (Simos Tagias Remix) Part 2 Tracklist Memory - Freedom
Mitaric - By your side
AIW - Vabene
LOM - Analogue Download episode on MP3 (Right click, save link as...)`,likes:"3",descargas:"42.4K",fecha:"2014-07-26",link:"https://mcdn.podbean.com/mf/download/qp4exh/168-HernanCattaneo-2014-07-26.mp3",tracklist:`Part 1 Nicorus - Wie die Welt einmal davon kam (Groj Remix)
Radiohead - Videotape (Christian Cabrera Re-edit)
Julio Largente - Haiku
Omar El Gamal - Kanaka (East Cafe Remix)
Omar El Gamal - Kanaka (Simos Tagias Remix) Part 2 Memory - Freedom
Mitaric - By your side
AIW - Vabene`},{episodio:"169",titulo:"Resident / Episode 169 / August 02 2014",descripcion:`Part 1 Tracklist Andy Arias feat Janis - Vorash Musique
Kosmas - Arpage
Kassey Voorn - Before You Fall feat. Amber Long
Hasan Mogol - Afrawald
Hasan Mogol - Spectrophobia Part 2 Tracklist Roots Panorama - Mars (Deetron)
Luciaen - The Great Amael
Ozgur Ozkan - We Don't Need A Miracle (Nikko.Z Remix)
Chaim - Remember When Download episode on MP3 (Right click, save link as...)`,likes:"4",descargas:"41.3K",fecha:"2014-08-02",link:"https://mcdn.podbean.com/mf/download/rb9nw6/169-HernanCattaneo-2014-08-02.mp3",tracklist:`Part 1 Andy Arias feat Janis - Vorash Musique
Kosmas - Arpage
Kassey Voorn - Before You Fall feat. Amber Long
Hasan Mogol - Afrawald
Hasan Mogol - Spectrophobia Part 2 Roots Panorama - Mars (Deetron)
Luciaen - The Great Amael
Ozgur Ozkan - We Don't Need A Miracle (Nikko.Z Remix)`},{episodio:"170",titulo:"Resident / Episode 170 / August 09 2014",descripcion:"Part 1 Tracklist AudioStorm - Feel Me AudioStorm - Machu Picchu Napalm & D-Phrag - Strange Dimensions (Kissoff Remix) Pablo Cetrini- \xA0Pleasure Part 2 Tracklist Guy Mantzur & Khen - Highway of Regrets Luciaen - The great Amael Mike Griego - Sofia Download episode on MP3 (Right click, save link as...)",likes:"2",descargas:"46.8K",fecha:"2014-08-09",link:"https://mcdn.podbean.com/mf/download/mkf5qy/170-HernanCattaneo-2014-08-09.mp3"},{episodio:"171",titulo:"Resident / Episode 171 / August 16 2014",descripcion:"Part 1 Tracklist Bob Zopp & \xA0Naz - Gaya (Verche) Greg Benz & Chris Micali - Got Me Wondering [Dousk Remix] Omid 16B - Free (Kevin Di Serna feat. Aless Mix) Dj Frazier - Hey Coco! Part 2 Tracklist Cream & Deep Fog - Tears Of An Angel (Antu Coimbra Remix) SOHN - Lights (Erdi Irmak Edit) Jorgio Kioris - Minerals (Erich Von Kollar Double Dose Remix) David Granha - Catch Me (Pedro Aguiar Remix) Download episode on MP3 (Right click, save link as...)",likes:"2",descargas:"45.4K",fecha:"2014-08-16",link:"https://mcdn.podbean.com/mf/download/bcafky/171-HernanCattaneo-2014-08-16.mp3"},{episodio:"172",titulo:"Resident / Episode 172 / August 23 2014",descripcion:"Part 1 Tracklist Paul Hazendonk & Noraj Cue feat. Alice Rose - In The Dark (Darin Epsilon Remix) Soulwerk - The Lost Paradice (Luis Bondio Remix) Thomas Smith & Issac - Unknown Nicolas Petracca - We can Part 2 Tracklist LOM - Drops Secret Cinema & Max D - Loved-Martina (Jamie Stevens Remix) Daneel - No sleep Blond:ish- Birds Eat Birds Kassey Voorn - Before You Fall feat. Amber Long Download episode on MP3 (Right click, save link as...)",likes:"1",descargas:"39.1K",fecha:"2014-08-23",link:"https://mcdn.podbean.com/mf/download/jxgprq/172-HernanCattaneo-2014-08-23.mp3"},{episodio:"173",titulo:"Resident / Episode 173 / August 30 2014",descripcion:"Part 1 Tracklist Renato Ratier- 3 \xA0Bulls (MANDY Remix) Anthony Middleton - Waves (Marcelo Vasami Rework) Miss Melera - Faith Solee - Traumschiff (2014 Outro Version) Part 2 Tracklist Blondish - Wunderkammer Of Norway - Running Lights Andre Sobota - Fallout Ewan Rill & Anton Ttx - Reason To Live (Hugo Ibarra & Uvo Remix) Dark Soul Project - Beautiful Life (Original Mix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"44.4K",fecha:"2014-08-30",link:"https://mcdn.podbean.com/mf/download/79yxm8/173-HernanCattaneo-2014-08-30.mp3"},{episodio:"174",titulo:"Resident / Episode 174 / September 6 2014",descripcion:"Part 1 Tracklist Sea - Cosmic Love (Stas Drive remix) Sea - Bajo de las Estrellas Dusky - 4T4 Alejandro Arroyo & Kled Baken-United under music Part 2 Tracklist Nicolas Rada - Idle Manuel Sofia - Source & Destination Federico Monachesi - Lunar tide Progress Inn - Veterans John Digweed & Nick Muir - Gigawave ( Fairmont Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"39.9K",fecha:"2014-09-06",link:"https://mcdn.podbean.com/mf/download/j8nd2s/174-HernanCattaneo-2014-09-06.mp3"},{episodio:"175",titulo:"Resident / Episode 175 / September 13 2014",descripcion:"Part 1 Tracklist Fish From Japan - Carry On (Dub Mix) JJ Salinas - Cinerama Dranga - Holographic (Niko Mayer Rmx) Michael A - Magic Superpitcher - Delta Part 2 Tracklist Huminal - Morning Raiser Criss Deeper - Dynamique Billy Alex - Sparkle (Ezequiel Anile & Nicolas Petracca Remix) Jelly For The Babies & Marc Pollen - Flow Motion (Sehat & Sobek Remix) Andre Sobota - Southern Sundance Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"44K",fecha:"2014-09-13",link:"https://mcdn.podbean.com/mf/download/bfsuhp/175-HernanCattaneo-2014-09-13.mp3"},{episodio:"177",titulo:"Resident / Episode 177 / September 27 2014",descripcion:"Part 1 Tracklist Marsbeing - Thread VS Tom Odell - Another Love ( Claes Rosen Mashup ) Magshine - Cosmic Matrix (Stas Drive star matrix remix) &ME - After Dark (Brian Cid) Namespace Feat Amber Long - Turning Back (Dub) Skena - The Next Act Part 2 Tracklist Giddyhead - Tears Apart Marc Romboy & Stephan Bodzin - Callisto (Daneel Reinterpretation Remix) Cutlab - Loud Kissin (Maxi Iborquiza Boot) Cid Inc vs. Darin Epsilon - Outliers Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"50.8K",fecha:"2014-09-27",link:"https://mcdn.podbean.com/mf/download/i2b74u/177-HernanCattaneo-2014-09-27.mp3"},{episodio:"178",titulo:"Resident / Episode 178 / October 4 2014",descripcion:"Part 1 Tracklist Clarian - Wasting Away Again in Moderation Nachklangmusik - One Small Step (Noraj Cue Remix) Vanita - Distance (James Teej Remix) Antrim & Claudio Cornejo - Kalahari (Nicholas Van Orton remix) Shlomi Aber - Tel Aviv Garden (Nic Fanciulli Remix) Part 2 Tracklist Han Haak - Slaves in transit (Paul Deep Remix) Push the Bad Times - Exek (No Master) Stanisha - Guardian Of The East Deas - Freon (Deepfunk Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"42.6K",fecha:"2014-10-04",link:"https://mcdn.podbean.com/mf/download/p87fjm/178-HernanCattaneo-2014-10-02.mp3"},{episodio:"179",titulo:"Resident / Episode 179 / October 11 2014",descripcion:"Part 1 Tracklist Marcelo Vasami - Animals Maxi Iborquiza - Elephants & Butterflys Jemmy - Breathe In ft. Leza Boyland Daniel Bortz - Pictures (Tuff City Kids Dub Mix) EL Mundo - Soulshift Part 2 Tracklist Khen & Sonic Union - Driven By Demand (Pole Folder Remix) Maher Daniel - A Call From Within SiYuder - Open Your Eyes (Nick Warren Remix) Rashid Ajami - Darya (AFFKT Remix) Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"52.6K",fecha:"2014-10-11",link:"https://mcdn.podbean.com/mf/download/f6bqmp/179-HernanCattaneo-2014-10-11.mp3"},{episodio:"180",titulo:"Resident / Episode 180 / October 18 2014",descripcion:"Part 1 Tracklist Stephan Bodzin - Sungam Matthias Meyer - Lagonia Martin Roth - Maya Compuphonic - O Cypres Pedro Mercado & Karada - A Tale Of You (Jimmy Van M Luxor T Remix) Part 2 Tracklist Gunjah - Tick Of The Bass (Original Mix) Inxec - Remember Manu F - Intervencion Divina (Luca Rossi Remix) Darius Bassiray - If You're Lost I'll Be Your Shadow (Deepchild Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"47.4K",fecha:"2014-10-18",link:"https://mcdn.podbean.com/mf/download/392x6h/180-HernanCattaneo-2014-10-18.mp3"},{episodio:"181",titulo:"Resident / Episode 181 / October 25 2014",descripcion:"Part 1 Tracklist El Mundo - Ashram (Dilby Remix) Patlac - Opus Gab Rhome - Shattered Ditian - Corina Part 2 Tracklist Mike Griego - Sofia (Guy Mantzur dub) Gus Gus - Obnoxiously Sexual (Patrice Baumel Mix) Mike Griego - All I Had Vince Watson - Rock it Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"51K",fecha:"2014-10-25",link:"https://mcdn.podbean.com/mf/download/uicxja/181-HernanCattaneo-2014-10-25.mp3"},{episodio:"182",titulo:"Resident / Episode 182 / November 01 2014",descripcion:"Part 1 Tracklist Egokind & Ozean - Mega EugeneToale - Tonality Of The Atom Matias Vila - Ruta Seta (D.X. Xavier Remix) Navar - Jereko (Chaim Remix) Part 2 Tracklist Interaxxis - Ghost Pional - In Another Room (Nicolas Petracca Unofficial Remix) Christian Pommer - Marimba (Jon Charnis Remix) GusGus - Airwaves (Juan Deminicis & Pablo Acenso Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"43.9K",fecha:"2014-11-01",link:"https://mcdn.podbean.com/mf/download/5cgaxs/182-HernanCattaneo-2014-11-01.mp3"},{episodio:"183",titulo:"Resident / Episode 183 / November 08 2014",descripcion:"Part 1 Tracklist Moderat - Versions (Naveen G remix) Antu Coimbra, Hugo Ibarra & Uvo - \xA0Robots dont go to Heaven Marcelo Vasami - Laval Station (Tash a La Gare Profonde Remix) Sound Process - Shivering Part 2 Tracklist Navar - Moments In Life (16 Bit Lolitas Remix) Lonya & Mike Griego - Acid Culture (Roger Martinez Remix) Dale Middleton - Tord Livio & Roby - Ananda (Luca Bacchetti Endless Remix) Download episode on MP3 (Right click, save link as...)",likes:"2",descargas:"49.8K",fecha:"2014-11-08",link:"https://mcdn.podbean.com/mf/download/nexr28/183-HernanCattaneo-2014-11-08.mp3"},{episodio:"184",titulo:"Resident / Episode 184 / November 15 2014",descripcion:"Part 1 Tracklist Navar - Moments In Life (Original Mix) Kasey Taylor & Lister Cooray - Fluidlife Olivier Weiter - Takkie (Einmusik Remix) Wigbert - Nobody (Pascal Feos Remix) Part 2 Tracklist Grum - Autumn (Petar Dundov Remix) Kay Aka Khalil Touihri-Words Of Wisdom Egokind & Ozean - Everybody Dance Now Sven Vath - L'esperanza (Ame Reinterpretation) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"52.8K",fecha:"2014-11-15",link:"https://mcdn.podbean.com/mf/download/vqb8fa/184-HernanCattaneo-2014-11-15.mp3"},{episodio:"185",titulo:"Resident / Episode 185 / November 22 2014",descripcion:"Part 1 Tracklist Rodriguez Jr. - Mistral Andy Arias - Before The Action (Stas Drive remix) Simos Tagias - Drunk State (Andrea Cassino Remix) Diyo - The Final True Madloch - Walls (King Unique Remix) Part 2 Tracklist Sasha - Mongoose (Tini Tun Remix) Lonya - Iron Door Chicola - Falling Down Michael A - Magic Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"50.5K",fecha:"2014-11-22",link:"https://mcdn.podbean.com/mf/download/txckb8/185-HernanCattaneo-2014-11-22.mp3"},{episodio:"187",titulo:"Resident / Episode 187 / December 06 2014",descripcion:"Part 1 Tracklist Darren Roach - Distract German Angeleri - Yellow Fever (Scott Williams Remix) Ameza - No more secrets (Marcelo Vasami Remix) AudioStorm - Mind Prison (Original Mix) Part 2 Tracklist DDamon Albarn - Hostiles (Maxi Iborquiza Boot) BLOT! feat. Lifafa - Empire Waste Mariano Mellino & Dassie - Kai Jin (Praveen Achary Remix) Diego Berrondo - Revolution Frangellico - Girl on Girl Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"44.3K",fecha:"2014-12-06",link:"https://mcdn.podbean.com/mf/download/pwmvuq/187-HernanCattaneo-2014-12-06.mp3"},{episodio:"188",titulo:"Resident / Episode 188 / December 13 2014",descripcion:"Part 1 Tracklist Agoria - Under The River (YokoO's Above The Clouds Live Edit) Rougemont - Bittersweet Thing Ezequiel Arias - If we Kevin Toro - Beautiful Illusion Part 2 Tracklist Randall Jones & Dani Hageman - Angel Fernando Ferreyra - Times (East Cafe Remix) Alex Niggemann - Sorrow feat. Bon Homme (Deetron Remix) Derek Howell - Interstellar Homecoming Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"45K",fecha:"2014-12-13",link:"https://mcdn.podbean.com/mf/download/mf4pz7/188-HernanCattaneo-2014-12-13.mp3"},{episodio:"189",titulo:"Resident / Episode 189 / December 20 2014",descripcion:"Part 1 Tracklist Stas Drive - Inspired By Her Melokolektiv & Konvex AND The Shadow - Reflections Bookashade - Back to Monza Dartek - Offshore (Andy Arias Extended Mix) Part 2 Tracklist Daneel - No sleep Denis A - Heroin (Alberto Blanco & Marcelo Paladini Unofficial Remix) Diego Azocar - Homenaje (Weird Sounding Dude Remix) Guy J- Candyland (King Unique Remix) Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"45.3K",fecha:"2014-12-20",link:"https://mcdn.podbean.com/mf/download/ux6t5n/189-HernanCattaneo-2014-12-20.mp3"},{episodio:"190",titulo:"Resident / Episode 190 / December 27 2014",descripcion:"Part 1 Tracklist Roger Martinez - Garajonay Audio Noir.Under - The Sun (Pole Folder & Cedric Piret Remix) MUUI - Polkadot Syndrome Lehar - Sargas (Mario Basanov Remix) Part 2 Tracklist DAVI - Eclipse Nick Warren - Golden Cap Facundo Mohrr - Clinic Andrea Cassino - De Los Alpes A Los Andes Maceo Plex - Conjure Dreams Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"43.2K",fecha:"2014-12-27",link:"https://mcdn.podbean.com/mf/download/k5dn3f/190-HernanCattaneo-2014-12-27.mp3"},{episodio:"191",titulo:"Resident / Episode 191 / January 03 2015",descripcion:"Part 1 Tracklist Leman & Dieckmann, MS. O - Takes Two Louie Fresco - So Good Interlude (Thugfucker Remix) Leman & Dieckmann - Reset DAVI - The Gates of Babylon Part 2 Tracklist Art Department - Cruel Intentions feat. Seth Troxler (Jerome Sydenham Deep Space Dub) Maxi Iborquiza - Loves & hates (Daneel Remix 2014) Amber Long, Robert Mason, Decker - Apologies (Cid Inc. dub mix) Dark Soul Project Presents Dancing With Myself - You Close Your Eyes Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"50.3K",fecha:"2015-01-03",link:"https://mcdn.podbean.com/mf/download/aq6bsc/191-HernanCattaneo-2015-01-03.mp3"},{episodio:"192",titulo:"Resident / Episode 192 / January 10 2015",descripcion:"Part 1 Tracklist Steppenwolf - Asselian Neil Quigley - Here Goes Nothing Slick - Way out Nick Varon & The Syndrome - Walking Towards The End Ignacio V - Devil Blues Part 2 Tracklist Nhar - In spaces between Diego Poblets - Waves (Namatjira Remix) Untold Stories - Broken Tusk Henry Saiz - We drown together Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"43.8K",fecha:"2015-01-10",link:"https://mcdn.podbean.com/mf/download/2gqkua/192-HernanCattaneo-2015-01-10.mp3"},{episodio:"193",titulo:"Resident / Episode 193 / January 17 2015",descripcion:"Part 1 Tracklist Eduardo de la Calle - Gajapati Kellerkind - Move Me (Joachim Pastor Remix) Mind Against - Strange Days (Recondite Remix) Mind Against - Polarstern Applescal & Ryan Davis - Creatures (N'Pot Unofficial Remix) Part 2 Tracklist Mariano Mellino & Maxi Degrassi - Molly Ditian - Dream on dreamer Sea - Young Lovers Searching Stars (Stas Drive Remix) D33P, Jos & Eli - Galactica (Original Mix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"43.3K",fecha:"2015-01-17",link:"https://mcdn.podbean.com/mf/download/9ufj6h/193-HernanCattaneo-2015-01-17.mp3"},{episodio:"194",titulo:"Resident / Episode 194 / January 24 2015",descripcion:"Part 1 Tracklist Monojoke - Metal (GMJ alchemy meld) Barem - Vanda Matthew Herbert - it's only (dj koze remix) (Jaap Ligthart Reconstruction) Jagwar Ma - Backwards Berlin (Nicolas Rada Remix) Part 2 Tracklist Ellen Allien - Butterfly (Ditian 'High' Mix) Dousk - Look Good Tonight (Nocturna Remix) Diego Berrondo & Rodrigo Kesovija - Memories [Lucas Rossi Remix] Joris Voorn - The Wild Download episode on MP3 (Right click, save link as...)",likes:"2",descargas:"51.7K",fecha:"2015-01-24",link:"https://mcdn.podbean.com/mf/download/hpd9vs/194-HernanCattaneo-2015-01-24.mp3"},{episodio:"195",titulo:"Resident / Episode 195 / January 31 2015",descripcion:"Part 1 Tracklist Animal Picnic - Gravity Sotela & Javier Portilla ft. Emalaine - Your Eyes (King Unique Remix) Joris Voorn - Fall (Vinyl Mix) Marc Marzenit - To Love Until We Say Goodbye (Omar El Gamal Remix) Part 2 Tracklist Motorcycle - As The Rush Comes (Omar El Gamal Unofficial Remix) Ran Salman - Zephyr Gabriel Nery - Time To Learn Gonno - 1227 To The End Slowly Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"46.5K",fecha:"2015-01-31",link:"https://mcdn.podbean.com/mf/download/aerqmd/195-HernanCattaneo-2015-01-31.mp3"},{episodio:"197",titulo:"Resident / Episode 197 / February 14 2015",descripcion:"Part 1 Tracklist David Sausan - There was a pain (a lot of pain HEisen. rework) Breccia - Bielik Pentatones - Karma Game (Steve Bug Retouch) Aaryon & Ran Salman - Riptide Part 2 Tracklist Sakorka - Love Is Over (Audio Junkies Remix) Oliver Lieb - Covolution Bruno Caro - Dilema Soulwerk - Genesis Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"44.2K",fecha:"2015-02-14",link:"https://mcdn.podbean.com/mf/download/9u8p7e/197-HernanCattaneo-2015-02-14.mp3"},{episodio:"198",titulo:"Resident / Episode 198 / February 21 2015",descripcion:"Part 1 Tracklist Radkovski - One day Joel Mull & Sasha - Pale Reich Damabiah - Atlantique Clarian - Castaway (Henry Saiz Remix) Part 2 Tracklist Ezequiel Anile & Nicolas Petracca - Nothing is What it Seems (Rich Curtis Remix) Ezequiel Anile & Nicolas Petracca - Nothing Is What It Seems (Soulwerk Remix) KU - 7 Hours feat. Natalie Arnold (Dubspeeka Dub Mix) Neil Brown - Clear (Deepfunk Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"40K",fecha:"2015-02-21",link:"https://mcdn.podbean.com/mf/download/hdc2x3/198-HernanCattaneo-2015-02-21.mp3"},{episodio:"199",titulo:"Resident / Episode 199 / February 28 2015",descripcion:"Part 1 Tracklist Marcelo Vasami - Destiny BP - Minisoul Drew Hill - Follow us Facundo Mohrr - 30 Amsterdam Part 2 Tracklist Interaxxis - Natural Fear (Baunder remix) Facundo Mohrr - Lost Ignas Klej - People (Phonic Scoupe Remix) Simos Tagias - Remain Strong Download episode on MP3 (Right click, save link as...)",likes:"5",descargas:"41.3K",fecha:"2015-02-28",link:"https://mcdn.podbean.com/mf/download/npzmwt/199-HernanCattaneo-2015-02-28.mp3"},{episodio:"200",titulo:"Resident / Episode 200 / March 07 2015",descripcion:"Part 1 & 2 Live from Budapest : Feb 2015 Download episode on MP3 (Right click, save link as...)",likes:"23",descargas:"55.2K",fecha:"2015-03-07",link:"https://mcdn.podbean.com/mf/download/gh3z5n/200-HernanCattaneo-2015-03-07.mp3"},{episodio:"201",titulo:"Resident / Episode 201 / March 14 2015",descripcion:"Part 1 Tracklist Tara Brooks - Shaped And Shifted Magnetic Brothers - Should Be Together (Erdi Irmak Remix) Subandrio - Distinct Legacy Manu F - This doesn't kill me Part 2 Tracklist Audiostorm - Mind Prision (Alex Vidal Remix) Some Little Things - Carnaval Antrim - Koto Michael A - Slow (Andrea Cassino Remix) Nick Warren & Guy Mantzur - Sad Robot (Musumeci Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"44K",fecha:"2015-03-14",link:"https://mcdn.podbean.com/mf/download/3g4kdn/201-HernanCattaneo-2015-03-14.mp3"},{episodio:"202",titulo:"Resident / Episode 202 / March 21 2015",descripcion:"Part 1 Tracklist Nicolas Petracca - Love In Sunset (Pete Mccarthey VS ON&ON SubSub Remix) Lonya - Tilll (Jelly For The Babies Remix) James Grow - Raquet Interaxxis - Natural Fear (Sahar Z & Khen) Part 2 Tracklist 16 Bit Lolitas - Not The Only One Alex Villanueva & Kaban - The Warm Moods (qoob Remix) Mario Puccio - Calling to my Heart Federico Monachesi - Selenelion Deepfunk \xA0- Secret Souls (Petar Dundov Remix) Download episode on MP3 (Right click, save link as...)",likes:"4",descargas:"39.7K",fecha:"2015-03-21",link:"https://mcdn.podbean.com/mf/download/w3gf6m/202-HernanCattaneo-2015-03-21.mp3"},{episodio:"203",titulo:"Resident / Episode 203 / March 28 2015",descripcion:"Part 1 Tracklist Roy RosenfelD, Guy Mantzur - Deeyo Magnetic Brothers - Glimpses (Robert R. Hardy Remix) Nick Warren & Guy Mantzur - Sad Robot XXXY - 18 Hours Part 2 Tracklist IanDillon - TheRabbitHole (OPLMix) Omar El Gamal - All Right Good Omar El Gamal - Turning Around In Circles Oliver Lieb - Convergence Darin Epsilon - Denpasar Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"41.3K",fecha:"2015-03-28",link:"https://mcdn.podbean.com/mf/download/4wyaeh/203-HernanCattaneo-2015-03-28.mp3"},{episodio:"204",titulo:"Resident / Episode 204 / April 04 2015",descripcion:"Part 1 Tracklist Franco Tejedor & Martin Gardoqui - Rosetta (Paul Deep Remix) Human Life & Anabel Englund - El Diablo (Chaim Remix) Pedro Aguilar - Land of the lost Groj - Tofferica Part 2 Tracklist Sirenize - Everybody Ruede Hagelstin - Soul Dynamic (Fur Coat Remix) Alex Villanueva - Rayne (Lonya Remix) Love Over Entropy - Tonii (Dixon Retouch) Download episode on MP3 (Right click, save link as...)",likes:"3",descargas:"38.2K",fecha:"2015-04-04",link:"https://mcdn.podbean.com/mf/download/2vqbn4/204-HernanCattaneo-2015-04-04.mp3"},{episodio:"205",titulo:"Resident / Episode 205 / April 11 2015",descripcion:"Part 1 Tracklist Qoob - New York Lonya - Consensus Must (C9 Remix) Chicola - Addicted (Guy Mantzur) Chaim - Can't Wait To C U Part 2 Tracklist Stas Drive - Carnival 69 LOM - Drops (Stas Drive Remix) Beat Syndrome - Magnolia (Lonya & Maydan Remix) Sasha - Vapourspace Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"37.9K",fecha:"2015-04-11",link:"https://mcdn.podbean.com/mf/download/krms6p/205-HernanCattaneo-2015-04-11.mp3"},{episodio:"207",titulo:"Resident / Episode 207 / April 25 2015",descripcion:"Part 1 Tracklist Pedro Aguiar - Cloud Nine Andrew McDonnell - Holywell Lane AudioStorm - Machu Picchu (Nicholas Van Orton Remix) Simos Tagias - Blue Sun Part 2 Tracklist Tash - Days Off (Stas Drive Remix) Tom Middleton - Shinkansen (Jaap Ligthart Edit) Brian Cid - Berlin Wax Phonic Scoupe - Harvest Dance Tim Penner feat Amber Long - Forgive Me (Kassey Voorn & Turner Remix) Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"35.1K",fecha:"2015-04-25",link:"https://mcdn.podbean.com/mf/download/cf9p6j/207-HernanCattaneo-2015-04-25.mp3"},{episodio:"208",titulo:"Resident / Episode 208 / May 02 2015",descripcion:"Part 1 Tracklist Gadi Mitrani - Key of Stillness Jonatan Ramonda - Nave 088 (Diego Azocar Remix) Sebastien Busto - Bad Man in heaven (GMJ heaven on earth mix) Tara Brooks and Ido - Desiderata Part 2 Tracklist Amber Long & Robert Mason - Aquatica Kobana - Fly (Derek Howell Remix) Tripswitch - Unconventional (Nick Brennan Remix) Dmitry Molosh - High Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"35.9K",fecha:"2015-05-02",link:"https://mcdn.podbean.com/mf/download/wk3zyc/208-HernanCattaneo-2015-05-02.mp3"},{episodio:"209",titulo:"Resident / Episode 209 / May 09 2015",descripcion:"Part 1 Tracklist Satoshi Tomiie - New Day Feat. John Schmersal Marcelo Vasami - Why Not Tobias Linden - The Spell Tech D - Corpuscular Guy Gerber, Puff Daddy - Tourist Trap (Visionquest Remix) Part 2 Tracklist Mononoid - Probes Agoria - Alluvion Constan - Open your eyes Stephan Bodzin - Sungam (Rodriguez Jr. Remix) Download episode on MP3 (Right click, save link as...)",likes:"8",descargas:"36.8K",fecha:"2015-05-09",link:"https://mcdn.podbean.com/mf/download/ct9gju/209-HernanCattaneo-2015-05-09.mp3"},{episodio:"210",titulo:"Resident / Episode 210 / May 16 2015",descripcion:"Part 1 Tracklist Deep Mariano & Yoshitaca - Rewind The Fantasies Michael A - Transitions Cani - Psique (Balcazar & Sordo Remix) SeamLess Beat - Freedom Part 2 Tracklist Ezequiel Arias - Sometimes Dale Middleton - Copper Top (Derek Howell Remix) Dale Middleton - Copper Top Stenrnberg - Lost in Reverie Cid inc. and Darin Epsilon - Outliers (Dmitry Molosh Remix) Download episode on MP3 (Right click, save link as...)",likes:"6",descargas:"36.2K",fecha:"2015-05-16",link:"https://mcdn.podbean.com/mf/download/s8pnic/210-HernanCattaneo-2015-05-16.mp3"},{episodio:"211",titulo:"Resident / Episode 211 / May 23 2015",descripcion:"Part 1 Tracklist \xD6ona Dahl & Tini Tun - All Around Us Coyu - Just Nin (Andre Lodemann Remix) Damian Lazarus & The Ancent Moons - Vermillion (Deniz Kurtel Remix) Nahue Juarez - Thunderstorm (Original Mix Re-edit) MUUI - Elsa Part 2 Tracklist Recondite - Think Twice Hunter Game - Genesis (Ripperton) Johannes Brecht - Nuages Wrong Jeremy Feat Flowers And Sea Creatures, Augustine Wrong - Dimly Lit (Deepfunk Remix) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"35.9K",fecha:"2015-05-23",link:"https://mcdn.podbean.com/mf/download/s6t8fw/211-HernanCattaneo-2015-05-23.mp3"},{episodio:"212",titulo:"Resident / Episode 212 / May 30 2015",descripcion:"Part 1 Tracklist Tuxedo - Standing In Rain (Demian Moreno Dub Mix) Flash & The Pan - Walking in the rain (Bramuss Remix) Danny Lloyd - Espejismo GMJ - Distance Pass (Marcelo Paladini Remix) Medicine - Reflect Part 2 Tracklist Eukali & Gonza Rodriguez - Tri-Border (Nicolas Rada Remix) Kaan Koray - Love Dark Soul Project & Mathov - Memories Of All Good Times Cid Inc & Darim Epsilon - Outliers (Christopher FaFa \xA0Remix) Download episode on MP3 (Right click, save link as...)",likes:"13",descargas:"35.9K",fecha:"2015-05-30",link:"https://mcdn.podbean.com/mf/download/7ah4fk/212-HernanCattaneo-2015-05-30.mp3"},{episodio:"213",titulo:"Resident / Episode 213 / Jun 06 2015",descripcion:"Part 1 Tracklist Davi - Ilussion Davi - Metanoia Riverside Drive - Earth to Mars (Peter Makto & Gregory S Remix) Kevin Toro - Easy Smile Uvo & Lautaro Varela - Dreamcacher (Nikko.Z Dub Mix) Part 2 Tracklist Jonas Saalbach & Tschoris - Walking In The Shadows Howling - Stole the Night (Ame Remix) Eran Aviner - Copperfield Guy J - Stolen Memory (Guy Mantzur) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"37.9K",fecha:"2015-06-06",link:"https://mcdn.podbean.com/mf/download/h6dxe9/213-HernanCattaneo-2015-06-06.mp3"},{episodio:"214",titulo:"Resident / Episode 214 / Jun 13 2015",descripcion:"Part 1 Tracklist Trulyors - Expeditions (Grandmoms Hands Remix) Marc Poppcke - Goodbye Mansionair - Hold me down (Maxi Iborquiza Boot) Beacon - Fault Lines (Dauwd Remix) DAVI - Ordinary Nightmares Part 2 Tracklist Bjork - Stonemilker (Maxi Iborquiza Boot) Unknown - Mantra (Henrik Zuberstein) Robert Babicz - Bassporn (Guy Mantzur Remix) Sasha - Ether Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"38.1K",fecha:"2015-06-13",link:"https://mcdn.podbean.com/mf/download/jyetfq/214-HernanCattaneo-2015-06-13.mp3"},{episodio:"216",titulo:"Resident / Episode 216 / Jun 27 2015",descripcion:"Part 1 Tracklist Greg Tomaz - Through the Dark Matter Gorje Hewek, Izhevski - Calinerie Nicolas Jaar - Touristas (Daraspa Unofficial Remix) Gorje Hewek, Izhevski - Heimat Part 2 Tracklist Abity & Velazco - Stout Marco Gayo - L'Instinct Billy Alex - Evidence Alfoa - Schedar (Matteo Monero Remix) GH - Persistence (Andy Arias Remix) Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"35.2K",fecha:"2015-06-27",link:"https://mcdn.podbean.com/mf/download/w3nkh2/216-HernanCattaneo-2015-06-27.mp3"},{episodio:"217",titulo:"Resident / Episode 217 / Jul 04 2015",descripcion:"Part 1 Tracklist Roger Martinez - Downriver Cid Inc - Orbiter Arnas D - Satellite Oosfera - Azul (Dario Arcas interpretation) Michael A - Edge (GMJ mix) Part 2 Tracklist Dj T - The Growing feat. Nick Maurer Raw District -Tell no one Marten Sundberg - Fear of war Casper, Mind Cure, Ewan Rill - I see Download episode on MP3 (Right click, save link as...)",likes:"11",descargas:"37.9K",fecha:"2015-07-04",link:"https://mcdn.podbean.com/mf/download/8uchqd/217-HernanCattaneo-2015-07-04.mp3"},{episodio:"218",titulo:"Resident / Episode 218 / Jul 11 2015",descripcion:"Part 1 Tracklist Thomalla - Pataphysics Art Department - Walls (DJ Tennis Remix) Laurent Garnier - Drifting in midwaters Antrim & Luis Bondio - Hope On The Moon (Andrea Cassino Remix) Mathew Lynch - Theory of everything Part 2 Tracklist Namatjira - Unknown Source Issac - The Monster In Your Head Nicolas Ruiz - Calliope Julien Piacentino, Philip Pioge - Blue Flower (Anton Dhouran Cinematic Remix) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"35.5K",fecha:"2015-07-11",link:"https://mcdn.podbean.com/mf/download/j623xm/218-HernanCattaneo-2015-07-11.mp3"},{episodio:"219",titulo:"Resident / Episode 219 / Jul 18 2015",descripcion:"Part 1 Tracklist Jelly for the babies - Things Unspoken Exoplanet - Refraction (East Cafe Remix) DS & Bedouin - Late Night Early Mornings (Leo Conovaloff Rework) Nahue Juarez & N'Pot - Selcouth Part 2 Tracklist Hermanez & BP - Octa Motus Dustin Nantais - Makes Me Feel (Stas Drive Remix) Stas Drive - Supernature Kites for August - Animal Print - Lecter, Marco Cuba Love Over Entropy - Tucaroya Download episode on MP3 (Right click, save link as...)",likes:"8",descargas:"35.2K",fecha:"2015-07-18",link:"https://mcdn.podbean.com/mf/download/3at7j6/219-HernanCattaneo-2015-07-18.mp3"},{episodio:"220",titulo:"Resident / Episode 220 / Jul 25 2015",descripcion:"Part 1 Tracklist Cid Inc - Gibil Arthur Oskan - Today Simos Tagias - Straight to the sky Ryan Crosson - Cadets in heat Part 2 Tracklist Mariano Mellino & Juan Astudillo - Kanikoom Bob Zopp & Naz - A morte Mariano Mellino & Robots Cry - Tempelhofer Hermanez - Irritates me Diego Azocar - Apocalypse Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"37.5K",fecha:"2015-07-25",link:"https://mcdn.podbean.com/mf/download/s9ywak/220-HernanCattaneo-2015-07-25.mp3"},{episodio:"221",titulo:"Resident / Episode 221 / Aug 01 2015",descripcion:"Part 1 Tracklist Dario Arcas & Nico Bertoni - Morning Numb Rico Casazza - Next Evidence Deep In Calm - Empty inside (Taisuke Chiba Remix) Light To Motion - Express Your Self (Approved Electronic Device Dub) Conures - Western Europe Part 2 Tracklist Kissoff - Outland Borders (Nicholas Van Orton Remix) Mark Lahsen - One Way Only (Luis Del Vecchio Remix) Verche \xA0- Utopia Island Booka Shade presents: Yaruba - Black Cow Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"35.7K",fecha:"2015-08-01",link:"https://mcdn.podbean.com/mf/download/phw927/221-HernanCattaneo-2015-08-01.mp3"},{episodio:"222",titulo:"Resident / Episode 222 / Aug 08 2015",descripcion:"Part 1 Tracklist AEONIX - A Star Was Born feat Kelly Day (Charles Webster Remix) Javier Portilla, Sotela - Your Eyes Ft. Emalaine (Juan Deminicis & Pablo Acenso Remix) Erdi Irmak - This Time (David Calo Remix) Melokolektiv - Djanka Part 2 Tracklist Raw District Feat. Aquarius Heaven - Her Mind (Martin Buttrich Remix) Emma Lock - Pure happiness (Maxi Iborquiza Remix) Eekkoo, Flowers & Sea Creature - 4th Bell (Henry Saiz Remix) Madloch & Antti Rasi - Salty Roads (Cid Inc Remix) Nicolas Agudelo - Solstice (King Unique Remix) Download episode on MP3 (Right click, save link as...)",likes:"15",descargas:"36.3K",fecha:"2015-08-08",link:"https://mcdn.podbean.com/mf/download/ytwnz8/222-HernanCattaneo-2015-08-08.mp3"},{episodio:"223",titulo:"Resident / Episode 223 / Aug 15 2015",descripcion:"Part 1 Tracklist Florence and the Machine - What kind of man (Daneel Remix) Leo Delgado - High Tonight Ian Dillon - Cotu Interaxxis - Kicking Problems Part 2 Tracklist Luke Santos & Marc de Koning - Numinous Quivver - Lose Your Way Li-Polymer - Silence Between Us Blusoul - Modular Memories Sahar Z - Dreamless Sleep (Khen) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"36.3K",fecha:"2015-08-15",link:"https://mcdn.podbean.com/mf/download/h8y5ku/223-HernanCattaneo-2015-08-15.mp3"},{episodio:"224",titulo:"Resident / Episode 224 / Aug 22 2015",descripcion:"Part 1 Tracklist Ditian - Inner Join Namatijra - Matador Nmatijra - Nerrina John Cosani - Love Song (Erich Von Kollar Remix) Part 2 Tracklist Sirena - Chemicals (Nils Noa Dub) Akase - Rust (Midland Remix) Li - Polymer - Mission Control Dmorse - Solidify Soulwerk - Spiritcatcher (Stas Drive Remix) Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"36.8K",fecha:"2015-08-22",link:"https://mcdn.podbean.com/mf/download/29ib6x/224-HernanCattaneo-2015-08-22.mp3"},{episodio:"226",titulo:"Resident / Episode 226 / Sep 05 2015",descripcion:"Part 1 Tracklist Analong Jungs - Calm (Donatello Remix) Barem & Alexis Cabrera - Turn on the fun Scotty A - Touching the Void Biologik feat. Amber Long - Tell Me Again (Sonic Union Introspection Remix) Sleepy & Boo - See the shadow Part 2 Tracklist Mononoid - Burden Of Proof Ezequiel Arias - Look Inside You Mauro Rodriguez - Digito Tanov - Salicorne (Simon Garcia's Start Up remix) Rodriguez Jr - Chrysalism Download episode on MP3 (Right click, save link as...)",likes:"7",descargas:"42.2K",fecha:"2015-09-05",link:"https://mcdn.podbean.com/mf/download/uxvhdg/226-HernanCattaneo-2015-09-05.mp3"},{episodio:"227",titulo:"Resident / Episode 227 / Sep 12 2015",descripcion:"Part 1 Tracklist Lauren Ritter - Glass hours Howling - Machina (Chris Allen) Jon Charnis Hands Free - Leviathan Alex Niggemann - Nebula Part 2 Tracklist Guy Mantuzur & Sahar Z - Small Heart Attack (Agents Of Time Reinterpretation) Monojoke & Tuxedo - Mindtrip Kaan Koray - Nostalgia Simos Tagias& Jorgio Kioris - Exist Dmitry Molosh - I Feel Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"36.8K",fecha:"2015-09-12",link:"https://mcdn.podbean.com/mf/download/imb543/227-HernanCattaneo-2015-09-12.mp3"},{episodio:"228",titulo:"Resident / Episode 228 / Sep 19 2015",descripcion:"Part 1 Tracklist Vangelis - Rachael's Song (Antrim Unofficial Remix) Aman Anand - \xA0Raikou Brian Cid - Rotations Kabana - ...... \xA0(Navid Mehr Remix) Marc Marzenit - Desert Alchemist (DAVI Remix) Part 2 Tracklist Javier Portilla & Sotela - (Tofts. Remix) Adana Twins - Heroe (Instrumental) Henrik Zuberstein - Elicit Response Qoob - Atlantis Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"37.9K",fecha:"2015-09-19",link:"https://mcdn.podbean.com/mf/download/pjw6f8/228-HernanCattaneo-2015-09-19.mp3"},{episodio:"229",titulo:"Resident / Episode 229 / Sep 26 2015",descripcion:"Part 1 Tracklist Dance Spirit, Jon Charnis - Affirmation Savvas - Lost souls Jaap Ligthart feat. Alice Rose - I Know Change (Nicolas Masseyeff remix) Antrim - Road To The Utopian (Ewan Rill Remix) Part 2 Tracklist Way Out West - Tuesday maybe Omid 16B & Alex George - In Deep Water (Nantais & Hazendonk Remix) Namatijra - Boomerang Luis Junior - Otro Ayer (Microtrauma Remix) Graziano Raffa - Sothpaw Download episode on MP3 (Right click, save link as...)",likes:"9",descargas:"35.9K",fecha:"2015-09-26",link:"https://mcdn.podbean.com/mf/download/d4jus5/229-HernanCattaneo-2015-09-26.mp3"},{episodio:"230",titulo:"Resident / Episode 230 / Oct 03 2015",descripcion:"Part 1 Tracklist Gorje Hewek, Izhevski - Zakkat Tom Demac - Dave Saints Unders & Ravelli - Walk in the Moment (Edu Imbernon & AFFKT remix) Amirali - Fearfull stay Kevin Di Serna - Bemoan Part 2 Tracklist Darin Epsilon - Jungle Experience (Quivver Remix) Da Luka - Windfall (Namatjira Remix) Miraculum - Blue Grass (Andrea Cassino Remix) John O'callaghan - Adelphos (Khen remix) Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"36.1K",fecha:"2015-10-03",link:"https://mcdn.podbean.com/mf/download/978qhw/230-HernanCattaneo-2015-10-03.mp3"},{episodio:"231",titulo:"Resident / Episode 231 / Oct 10 2015",descripcion:"Part 1 Tracklist Moderat - Damage Done (Ditian 'Late Night' Mix) H.O.S.H.- Cilantro Pablo Cetrini - Afreak Dmitry Molosh - Wanderer Dustin Nantais - Bone Coma (Michael A Remix) Part 2 Tracklist Nick Curly - Deep in my soul Ziger - Circles (Mariano Mellino Remix) Locked Groove - Eleven dPen - One Fine Day (Silinder) Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"37K",fecha:"2015-10-10",link:"https://mcdn.podbean.com/mf/download/cqvrsx/231-HernanCattaneo-2015-10-10.mp3"},{episodio:"233",titulo:"Resident / Episode 233 / Oct 24 2015",descripcion:"Part 1 Tracklist Ben Klock, Dixon - 'In a While (Kevin Di Serna Re'vision) Of The Moon Feat. Bartlee - Of The Moon (H.O.S.H. Remix) Darlyn Vlys, Benotmane, Haptic - Quarantine John Debo - I'm coming down Part 2 Tracklist Alexi Delano - Close to three Soulkeys - Overblow (Nicolas Petracca Remix) Ness & Nitti - A False Form (Ezequiel Arias \xA0Deconstruct Mix) Solaire - Circles Download episode on MP3 (Right click, save link as...)",likes:"14",descargas:"36.3K",fecha:"2015-10-24",link:"https://mcdn.podbean.com/mf/download/a63iw5/233-HernanCattaneo-2015-10-24.mp3"},{episodio:"237",titulo:"Resident / Episode 237 / Nov 21 2015",descripcion:"Part 1 Tracklist Ambrela - Floral Smell Of Dust (Groj Remix) Johannes Brecht - Breathe! (Solomun Edit) Partenaire - A Place For Us (Luis del Vecchio Remix) John Johnson - Impact (East Cafe Remix) Part 2 Tracklist Arturo Heiva - Bohemian Groove (Stefan Z Remix) DRKND - Cairo (Audioglider We Are All Transient Remix) Kamilo Sanclemente - The Art Of Voice (Antrim Remix) Nick Curly - Reverie Download episode on MP3 (Right click, save link as...)",likes:"11",descargas:"33.4K",fecha:"2015-11-21",link:"https://mcdn.podbean.com/mf/download/z9dikg/237-HernanCattaneo-2015-11-21.mp3"},{episodio:"238",titulo:"Resident / Episode 238 / Nov 28 2015",descripcion:"Part 1 Tracklist Philip Chedid - Yaaburni Che Armstrong, Chris Johnson - Elephant In The Room (Erich Von Kollar Empty Zoo Remix) Goraieb - Tainah (Original Mix) Beat Maniacs - Triton (K Nass Remix) Part 2 Tracklist Peter Gabriel - Passion (Verche live edit) Darin Epsilon - Jungle Experience (Quivver Remix) Lonya - Wastelands (Olivier Weiter Remix) Tale Of Us & Mind Against - Astral Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"33.8K",fecha:"2015-11-28",link:"https://mcdn.podbean.com/mf/download/cdk6f4/238-HernanCattaneo-2015-11-28.mp3"},{episodio:"239",titulo:"Resident / Episode 239 / Dec 05 2015",descripcion:"Part 1 Tracklist NCorp Sanctis Yelmo de Hierro (Juan Cruz Mariano Rework) Jose Tabarez - Maremma (Erich Von Kollar Remix) Guy Gerber - The Golden Sun And The Silver Moon (Mariano Montori Boot) Bedrock - Emerald (BOg remix) Part 2 Tracklist Exek - Several Condition Simon Tagias - Wasted Dreams (Kasall & Cristian R Remix) Luis Kiverling - Golden Passport Kool Aid (Alejo Gonzalez Bootleg) Eelke Kleijn, Olivier Weiter, Arjuna Schiks & Miss Melera - Before Now After Download episode on MP3 (Right click, save link as...)",likes:"13",descargas:"34.7K",fecha:"2015-12-05",link:"https://mcdn.podbean.com/mf/download/ig65dj/239-HernanCattaneo-2015-12-05.mp3"},{episodio:"240",titulo:"Resident / Episode 240 / Dec 12 2015",descripcion:"Part 1 Tracklist Memory - Spoon Of Baby Mario Puccio - Calling to My Heart (Nicolas Petracca Remix) Dmitry Molosh - The Path BOg - Re-Wired Part 2 Tracklist Jay fm - My world (mou remix) Leftfield - Space Shanty (Cabellero's Late Night Unofficial Remix) Artful - Flores pt2 Guy J - Candyland (Luca Bacchetti Endless Remix) Download episode on MP3 (Right click, save link as...)",likes:"25",descargas:"33.8K",fecha:"2015-12-12",link:"https://mcdn.podbean.com/mf/download/9u7b35/240-HernanCattaneo-2015-12-12.mp3"},{episodio:"241",titulo:"Resident / Episode 241 / Dec 19 2015",descripcion:"Part 1 Tracklist Pupkulies & Rebecca - Pink Pillow (DJ Tennis Remix) Tuneon - Clouds Mosaic - Raban Sam Halvag - Maddalena Story (Peter Pardeike Remix) Part 2 Tracklist Brian Cid - Habitat Diyo - Onix Fernando Ferreyra - Particles (Fernando Ferreyra 2015 Remix) Digweed & Muir - Track For Life (Cosmic Cowboys Remix) Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"33.8K",fecha:"2015-12-19",link:"https://mcdn.podbean.com/mf/download/cga6yk/241-HernanCattaneo-2015-12-19.mp3"},{episodio:"242",titulo:"Resident / Episode 242 / Dec 26 2015",descripcion:"Part 1 Tracklist L U M - Urpillay Antrim & Luis Bondio - Brain Damage (Namatjira's Sunday Afternoon Remix) Audiojack - Nefelibata (Whitesquare Remix) Audiojack - Nefelibata Part 2 Tracklist Brian Cid - Oasis Cid Inc - lmatar (Cristian R \xA0Reinterp) Kaan Koray - Nostalgia (Andrea Shu Remix) Simon Tagias - Straight to the Sky Download episode on MP3 (Right click, save link as...)",likes:"14",descargas:"34.3K",fecha:"2015-12-26",link:"https://mcdn.podbean.com/mf/download/q4gs8j/242-HernanCattaneo-2015-12-26.mp3"},{episodio:"243",titulo:"Resident / Episode 243 / Jan 02 2016",descripcion:"Part 1 Tracklist Robert R. Hardy - Life under Rick Pier O'Neil - To Declare (Robert R. Hardy Remix) Brian Cid - In the vortex Bedrock - Santiago (Joeski remix) Part 2 Tracklist Shlomi Aber Feat Guy Mantzur - Dont Be A Fool (Cristian R) Miraculum - Qantumswarm (GMJ Mix) Tuxedo - Float Through Anxiety (Kobana Remix) Soulwerk - Stuck In My Mind (Jamie Stevens Remix) Lopezhouse - Crosses and Angels Download episode on MP3 (Right click, save link as...)",likes:"29",descargas:"39.1K",fecha:"2016-01-02",link:"https://mcdn.podbean.com/mf/download/xizh7t/243-HernanCattaneo-2016-01-02.mp3"},{episodio:"244",titulo:"Resident / Episode 244 / Jan 09 2016",descripcion:"Part 1 Tracklist Daraspa - The Beauty Of Silence (Mononoid Remix) Federico Santorsola - Una Nueva Historia Napalm & d-phrag - Tumble Of The Dice (Mauro Rodriguez Interpretation) Rory Gallagher & James Trystan - Sleeping Giants Part 2 Tracklist Lopezhouse - Crosses and Angels (Guy j remix) Tvardovsky - Black Ocean (Soulfinder Remix) Nicolas Petracca - Atem (4 AM mix) Tash & Uvo - Enosis (Danny Lloyd Rmx) Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"35.7K",fecha:"2016-01-09",link:"https://mcdn.podbean.com/mf/download/9d3z4n/244-HernanCattaneo-2016-01-09.mp3"},{episodio:"246",titulo:"Resident / Episode 246 / Jan 23 2016",descripcion:"Part 1 Tracklist Steve Ness & Anthony Nitti - Hydnora Antrim - Disappear (Nicolas Petracca Remix) Madloch & Matias Vila - Haze Over Night Frangellico - Sugar Free Part 2 Tracklist Dumont & Wagener - Wich (intro mix) MUUI - Lore Tim Penner - Shadow Light Hunter / Game - Declino Download episode on MP3 (Right click, save link as...)",likes:"19",descargas:"37.6K",fecha:"2016-01-23",link:"https://mcdn.podbean.com/mf/download/2cbik5/246-HernanCattaneo-2016-01-23.mp3"},{episodio:"247",titulo:"Resident / Episode 247 / Jan 30 2016",descripcion:"Part 1 Tracklist Morgan, YokoO - Spiraling Guy J - Argeman (Robert R. Hardy Bootleg) Nicolas D`Orsi - Attempt (Sebastian Busto Remix) Rick Pier O'Neil - To Declare (Tim Penner Remix) Part 2 Tracklist Hunter/Game - Origins Namatijra - Azha Ryan Davis, Microtrauma - Calendula Gabriel Nery - A sphere Clarian - Space Noir Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"37.3K",fecha:"2016-01-30",link:"https://mcdn.podbean.com/mf/download/h6gdwr/247-HernanCattaneo-2016-01-30.mp3"},{episodio:"248",titulo:"Resident / Episode 248 / Feb 06 2016",descripcion:"Part 1 Tracklist Luca Bacchetti, The Box (trio) - Fireflies and Crickets Lamb - We Fall In Love (Innate Remix) Nick Varon - Way Far From Salvation Dmitry Molosh - Blizzard (Silinder Remix) Part 2 Tracklist Henry Saiz, Eloy - Inner circle Hawaii - Pure (Diego Berrondo Unofficial Remix) Derek Howell - Laughing it up (Kasall & Cristian R Remix) Dmitry Molosh - Glow Download episode on MP3 (Right click, save link as...)",likes:"29",descargas:"37K",fecha:"2016-02-06",link:"https://mcdn.podbean.com/mf/download/ekr4ti/248-HernanCattaneo-2016-02-06.mp3"},{episodio:"249",titulo:"Resident / Episode 249 / Feb 13 / 2016",descripcion:"Part 1 Tracklist Cubicolor - Falling (feat. Tim Digby-Bell) Giddyhead - Baba \xD3lafur Arnalds Feat. Arn\xF3r Dan - So Far (Guy Mantzur Sleepless Mix) Lee Burridge & Last desert - No Wicked for the rest Part 2 Tracklist Dance spirit - In Between Spaces Flaunt - Rave On (King Unique Remix) Luca Bacchetti - Genesis Audio Junkies - Urbanica Download episode on MP3 (Right click, save link as...)",likes:"22",descargas:"38.1K",fecha:null,link:"https://mcdn.podbean.com/mf/download/p6na3c/249-HernanCattaneo-2016-02-13.mp3"},{episodio:"250",titulo:"Resident / Episode 250 / Feb 20 / 2016",descripcion:"Part 1 Tracklist Eli Nissan - Hope Tadir - Memory man Kay D - volcano (GMJ fragile planet mix) Mathew Lynch - Firewood Alejo Gonzalez & Max Blade - Secret room Part 2 Tracklist Li-Polymer - Red Magic Light Julian Sanza & Max Donato - Requeim Andre Sobota - Look Around (Vincenzo Remix) Lee Van Dowski - ELLE Download episode on MP3 (Right click, save link as...)",likes:"22",descargas:"39K",fecha:null,link:"https://mcdn.podbean.com/mf/download/aix2hu/250-HernanCattaneo-2016-02-20.mp3"},{episodio:"251",titulo:"Resident / Episode 251 / Feb 27 / 2016",descripcion:"Part 1 Tracklist Peggy Gou - Troop Manuel Sofia - Naiads (Pedro Aguiar\xB4s Its All Good Remix) Wareika, Miajica - Keen to rebel Flaunt - Rave On (Brian Cid Remix) Part 2 Tracklist Navar - Toc\xF3 Tu Boca Omar El Gamal - Why Did You Chaty & Tamez - No Saint (John Debo Remix) Subandrio - Sigiriya Download episode on MP3 (Right click, save link as...)",likes:"13",descargas:"36.2K",fecha:null,link:"https://mcdn.podbean.com/mf/download/kytzkh/251-HernanCattaneo-2016-02-27.mp3"},{episodio:"252",titulo:"Resident / Episode 252 / Mar 05 / 2016",descripcion:"Part 1 Tracklist Robert R. Hardy - Before creation John Cosani - Pulsematic Cid Inc - Shake Before Use (Ezequiel Arias Space Mix) Musumeci - Pneuma Part 2 Tracklist Tembar - Circles (Matias Chilano Remix) Philip Chedid - Break the Tension Interaxxis - My Regrets (Eli Amsalevski Remix) Michael A - Sence Bruno Caro - Auxiliar Download episode on MP3 (Right click, save link as...)",likes:"22",descargas:"36.7K",fecha:null,link:"https://mcdn.podbean.com/mf/download/ueyyi5/252-HernanCattaneo-2016-03-05.mp3"},{episodio:"253",titulo:"Resident / Episode 253 / Mar 13 / 2016",descripcion:"Part 1 Tracklist Rodriguez Jr - Mistral (Stephan Bodzin Remix) Diego Mystick - Invicto Dousk & Jorgio Kioris - Oneman (Khen remix) Anja Schneider - Soul treaveller Part 2 Tracklist Mz Sunday Luv & Nu & Christopher Schwarzwalder - Choose (Natural Flow Re- Interpretation) George Yammine - Galactica Sleepy & Boo - Skyway Matador - Remember Download episode on MP3 (Right click, save link as...)",likes:"19",descargas:"35.1K",fecha:null,link:"https://mcdn.podbean.com/mf/download/d7qkke/253-HernanCattaneo-2016-03-12.mp3"},{episodio:"254",titulo:"Resident / Episode 254 / Mar 19 / 2016",descripcion:"Part 1 Tracklist The Doors - The Crystal Ship (Maxi Degrassi Edit) Chaim - Zodiac Chymera - Carnaval Calling Rafael Cerato, Moonwalk - Phenomena Part 2 Tracklist Sahar Z & Navar - A Prelude To Nick Varon - Golden Cave \xA0(Navid Mehr Remix) Matador - Dinkys Dmitry Molosh - Vapour Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"38.6K",fecha:null,link:"https://mcdn.podbean.com/mf/download/r8vuks/254-HernanCattaneo-2016-03-19.mp3"},{episodio:"256",titulo:"Resident / Episode 256 / Apr 02 / 2016",descripcion:"Part 1 Tracklist Kevin Toro & Vanguardist - Old Fashioned Dario Arcas & Nico Bertoni - Morning numb (fefo remix) Brian Cid - Eternal Sunrise Mariano Mellino - Mars From Eden Part 2 Tracklist Braunbeck - Metis Dmitry Molosh - Black Dust Rebel One - One Way Or Another (THe WHite SHadow ) Seth Schwarz & Be Svendsen - The bar tender Download episode on MP3 (Right click, save link as...)",likes:"27",descargas:"35K",fecha:null,link:"https://mcdn.podbean.com/mf/download/8e9cxm/256-HernanCattaneo-2016-04-02.mp3"},{episodio:"257",titulo:"Resident / Episode 257 / Apr 09 / 2016",descripcion:"Part 1 Tracklist Guillermo De Caminos - Untitled 01 (Deep Mariano Remix) Mike Griego - What Lies Beyond Huminal - Knocking on the Sky (Marcelo Paladini Remix) X Green - In Place Solo (Marcelo Paladini EDIT) Part 2 Tracklist Rodrigo Kesovija - Deep Romance OMB \u2014 DJ Ogawa- \xA020160224 Kerrier District - Techno Disco (KiNK Remix) Karma Fields - Skyline (Julian Rodriguez and German Angeleri) Download episode on MP3 (Right click, save link as...)",likes:"29",descargas:"34.6K",fecha:null,link:"https://mcdn.podbean.com/mf/download/ak7e5h/257-HernanCattaneo-2016-04-09.mp3"},{episodio:"258",titulo:"Resident / Episode 258 / Apr 16 / 2016",descripcion:"Part 1 Tracklist Slacker - See The World (Ryan Luciano's Unofficial Remix) Oliver Lieb - Canis Majoris (Jelly For The Babies Remix) [Balkan Connection] Nicholas Van Orton - Fya Kurt Baggaley - Winterland {Petar Dundov Edition) Part 2 Tracklist Sven Weisemann - Love In Vein (Lucas Rossi Without Intro Re-Work) Kamilo Sanclemente - Rite of Passage (Jonnas B Remix) Doomwork - Nihl Jimi Jules - Hundeblick Download episode on MP3 (Right click, save link as...)",likes:"28",descargas:"32.4K",fecha:null,link:"https://mcdn.podbean.com/mf/download/4fkp8q/258-HernanCattaneo-2016-04-16.mp3"},{episodio:"259",titulo:"Resident / Episode 259 / Apr 23 2016",descripcion:"Part 1 Tracklist Arturo Hevia - Atacama Dream Tim Engelhardt - Nothing To Hide (Jay Tripwire Remix) Anton Make & Shamil Om - Body Thetans Clameres - Purple Silhouette Part 2 Tracklist Tim Engelhardt - Sole Brother Audiofly & Maher Daniel - Cluster of Stars Luis Junior - Dont die Victor Ruiz - Soul Seek Download episode on MP3 (Right click, save link as...)",likes:"24",descargas:"31.1K",fecha:"2016-04-23",link:"https://mcdn.podbean.com/mf/download/ww4bze/259-HernanCattaneo-2016-04-23.mp3"},{episodio:"260",titulo:"Resident / Episode 260 / Apr 30 2016",descripcion:"Part 1 Tracklist Ost & Kjex - Down River feat. Hanne Kolst\xF8 (Christian L\xF6ffler Remix) ILona Maras - Asrar Victor Stancov - Vals Eve Pelagic - (Andy Arias Deep in Touch Mix) Federico Monachesi - Sephar (Danny Lloyd Rmx) Part 2 Tracklist Kevin Di Serna - Shambhala Lonya & Mariano Mellino - Morning After Fernando Ferreyra - Learning To (Julian Rodriguez & White Resonance Remix) Dj Tennis - Divisions (Roman Flugel Remix) Download episode on MP3 (Right click, save link as...)",likes:"31",descargas:"32.8K",fecha:"2016-04-30",link:"https://mcdn.podbean.com/mf/download/3zgz6n/260-HernanCattaneo-2016-04-30.mp3"},{episodio:"261",titulo:"Resident / Episode 261 / May 07 2016",descripcion:"Part 1 Tracklist Ryan Davis - Brun (Luca Bacchetti Endless Remix) Whitesquare - Waiting for you Rodriguez jr - Capitelle Tomin Tomovic - Respect Our Mother Earth (Original Mix) Part 2 Tracklist Fernando Olaya - Macedonia Brian Cid - Division Sebastian Busto - Anesthesia Mathew Lynch - Infinite Marc Romboy - Elgur (Dosem Remix) Download episode on MP3 (Right click, save link as...)",likes:"26",descargas:"31.7K",fecha:"2016-05-07",link:"https://mcdn.podbean.com/mf/download/35q79w/261-HernanCattaneo-2016-05-07.mp3"},{episodio:"262",titulo:"Resident / Episode 262 / May 14 2016",descripcion:"Part 1 Tracklist Nico Stojan feat. Jaw - Blue Hour (Thugfucker Remix) DAVI - Change your life Kay-D - Pandora (Diego Azocar Remix) Sasha feat. John Graham - Rooms (Federico Monachesi Bootleg) BP - A Minor Turbulence !!!!!!!!!!! Part 2 Tracklist Solee - Ten (Luca Bacchetti Endless Remix) Solee - Ten (Habischman Remix) Prince - The future (Daneel's Tribute Remix Edit) Victor Simonelli & Z.A.M. - Africa Freedom (Argy Remix) Download episode on MP3 (Right click, save link as...)",likes:"19",descargas:"32.9K",fecha:"2016-05-14",link:"https://mcdn.podbean.com/mf/download/96ycsi/262-HernanCattaneo-2016-05-14.mp3"},{episodio:"263",titulo:"Resident / Episode 263 / May 21 2016",descripcion:"Part 1 Tracklist Axelara - Love Beat (AxeLara & Gerardo Moro remix) Groj - Love You Do (Gab Rhome Remix) Flight Facilities - Stand Still (Basanov Mix KEVIN Dub Edit) Groven & Naz - Black Mamba (Robert R. Hardy Remix) Tuxedomoon - in a manner (Rally Chopper Edit) Part 2 Tracklist Juan Astudillo - Ndia Sasha - Bring on the NIght-Time (Chris Fortier Vocal Re-edit) SEQU3L - Timelapse Danny Lloyd - Arapaima (Navid Mehr Starshot Remix) Download episode on MP3 (Right click, save link as...)",likes:"23",descargas:"32.4K",fecha:"2016-05-21",link:"https://mcdn.podbean.com/mf/download/h98guw/263-HernanCattaneo-2016-05-21.mp3"},{episodio:"264",titulo:"Resident / Episode 264 / May 28 2016",descripcion:"Part 1 Tracklist Radiohead - Day dreaming (Stereo Underground Remake) Tuxedo - Prisma (Kosmas Remix) Gaundelach - Fjernsynet (Fur Coat Remix) Mano Le Tough - Energy Flow (Nicolas Rada Unofficial Remix) Part 2 Tracklist Fernando Olaya - In Between Worlds (Li-Polymer 'Heaven' Mix) Early Tepshi - Cratos Pole Folder - Gare centrale Alex - Niggemann - Siyawa Download episode on MP3 (Right click, save link as...)",likes:"25",descargas:"34.2K",fecha:"2016-05-28",link:"https://mcdn.podbean.com/mf/download/p4zxbh/264-HernanCattaneo-2016-05-28.mp3"},{episodio:"266",titulo:"Resident / Episode 266 / Jun 11 2016",descripcion:"Part 1 Tracklist Ioakim Sayz - Taboo Jonas Rathsman - Complex Ft. Josef Salvat (Serge Devant Remix) Nutons - Storyteller Bluesoul - Depth Of Emotion (Aman Anand Remix) Marc Romboy & Stephan Bodzin - Atlas (Adriatique) Part 2 Tracklist LessNoise - Shedding Light (Pole Folder) Tomas Crow - Cuervo Blanco Ruede Hagelstein - Leonidas Sasha - Warewolf (Jaap Ligthart Edit) Download episode on MP3 (Right click, save link as...)",likes:"27",descargas:"35K",fecha:"2016-06-11",link:"https://mcdn.podbean.com/mf/download/2y7t6r/266-HernanCattaneo-2016-06-11.mp3"},{episodio:"267",titulo:"Resident / Episode 267 / Jun 18 2016",descripcion:"Part 1 Tracklist Steppenwolf - Guerilla James Holden - Gone Feral (qoob rework) Mariano Favre - Anagram Kiz Pattison - Machines Building Machines Trippin - Goldtrix Pres. Andrea Brown (Beat2 Spaced-out Bootleg) Part 2 Tracklist Aiden ft. Hermione Green - Rain (Jelle Kuipers Feestmix) Tomas Crow - Birdplace Billy Alex - Reminds Me (Federico Monachesi Remix) Monkey Safari - Plexus (John Digweed & Nick Muir Remix) Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"29.5K",fecha:"2016-06-18",link:"https://mcdn.podbean.com/mf/download/87ctk4/267-HernanCattaneo-2016-06-18.mp3"},{episodio:"268",titulo:"Resident / Episode 268 / Jun 25 2016",descripcion:"Part 1 Tracklist Luis Bondio & Pedro D'Alessandro- Numb Feeling (Tuxedo Remix) Nicolas Jaar - Too Many Kids Finding Rain In The Dust (Gabriel Sordo & Rodriguez Bootleg) Zoo Brazil - Peak (Chaim Remix) SQL - Take it as it comes (Vince Watson Remix) Part 2 Tracklist Navar & Mononoid - Ad Litem iO (Mulen) - Stick Out LoQuai - Artifacts Rally Chopper - Fetish Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"30.5K",fecha:"2016-06-25",link:"https://mcdn.podbean.com/mf/download/spie99/268-HernanCattaneo-2016-06-25.mp3"},{episodio:"269",titulo:"Resident / Episode 269 / Jul 02 2016",descripcion:"Part 1 Tracklist Seamless Beat - Runaway Eli Nissan - White shadow Eagles & Butterflies - Mojave Lucas Rossi - Sonora Part 2 Tracklist Hunter Game - Silver (Reshape) Sebastian Busto - Nature Circle of life - Rainy days Money Safari - Bernstein (UNER Remix) Download episode on MP3 (Right click, save link as...)",likes:"20",descargas:"27.3K",fecha:"2016-07-02",link:"https://mcdn.podbean.com/mf/download/7gq7xs/269-HernanCattaneo-2016-07-02.mp3"},{episodio:"270",titulo:"Resident / Episode 270 / Jul 09 2016",descripcion:"Part 1 Tracklist Robert R. Hardy & Amber Long - Fade In My Dreams Ubbah - In The Desert (Nicolas Rada Remix) XYZ - Solution [Nicolas Petracca Unofficial Remix) Isaac Differding - The Forest Voices Part 2 Tracklist Miguel Puente - Enki sYnus - Walk in the Rain (SLT Remix) Sasse - Ani (Lehar rmx) Stephen Jr - Jungle Download episode on MP3 (Right click, save link as...)",likes:"23",descargas:"27.5K",fecha:"2016-07-09",link:"https://mcdn.podbean.com/mf/download/epad7a/270-HernanCattaneo-2016-07-09.mp3"},{episodio:"271",titulo:"Resident / Episode 271 / Jul 16 2016",descripcion:"Part 1 Tracklist Miguel Puente - Anu Anton Make - Flocculus & Nodulus East Cafe - Indian Summer (GMJ seasonal shift mix) Paul Deep & Martin Gardoqui - Mental Trip Part 2 Tracklist Funk DVoid - Good Times Tommi Oskari - Mind Tingle (JimiJ Remix) Navar & Mononoid - Versoene Medicine - Folding Adham Shaikh - Ohm (Subconscious Tales Bootleg) Download episode on MP3 (Right click, save link as...)",likes:"18",descargas:"25.9K",fecha:"2016-07-16",link:"https://mcdn.podbean.com/mf/download/ne3cxf/271-HernanCattaneo-2016-07-16.mp3"},{episodio:"272",titulo:"Resident / Episode 272 / Jul 23 2016",descripcion:"Part 1 Tracklist Michael A - Astro Dominik Eulberg - Mimese Oxia & Nicolas Masseyeff - Connivence Alex Niggemann - Meterium (Paul Deep & Martin Gardoqui Remix 2) Part 2 Tracklist Edu Imbernon - Bitter Fate (Fur Coat Remix) Nick Stoynoff - Run Things (Navid Mehr Remix) Chamber - Forerunner Pablo Cetrini - Intentions Download episode on MP3 (Right click, save link as...)",likes:"23",descargas:"26.5K",fecha:"2016-07-23",link:"https://mcdn.podbean.com/mf/download/vian8d/272-HernanCattaneo-2016-07-23.mp3"},{episodio:"273",titulo:"Resident / Episode 273 / Jul 30 2016",descripcion:"Part 1 Tracklist Gab Rhome - Raphael Norah Cue - The Year Of The Exhausted Ox (4x4 Retreatment) Hacker & Miethig - Sambal (Jonas Saalbach remix) Isaac Differding - From The Bowels Part 2 Tracklist Nick Stoynoff - Lakeside (Paul Deep & Martin Gardoqui Remix) Lehan - Magical Realism Yotto - The owls Todd Terje - Snooze For Love (Dixon remix) Download episode on MP3 (Right click, save link as...)",likes:"15",descargas:"27K",fecha:"2016-07-30",link:"https://mcdn.podbean.com/mf/download/d899cs/273-HernanCattaneo-2016-07-30.mp3"},{episodio:"274",titulo:"Resident / Episode 274 / Aug 06 2016",descripcion:"Part 1 Tracklist Kevin Di Serna - Dallah Symmetry Obs - The Red Knot (Nicolas Petracca Remix) LOM - Transmissions Artfaq - Medusa Part 2 Tracklist Bob Moses - Tearing Me Up (Tale Of Us Remix) Shai T - Eastern Wind (Graziano Raffa Remix) Da Luka & Jorgio Kioris - Mirror Mode (Danny Lloyd rmx) Books Shade - In White Rooms (Hunter Game Remix) Download episode on MP3 (Right click, save link as...)",likes:"27",descargas:"26.9K",fecha:"2016-08-06",link:"https://mcdn.podbean.com/mf/download/ipgbnq/274-HernanCattaneo-2016-08-06.mp3"},{episodio:"276",titulo:"Resident / Episode 276 / Aug 20 2016",descripcion:"Part 1 Tracklist 16B - Time Nick Varon - Arlekin Luke Santos & Arturo Hevia - Nymphlight Playground Subandrio - Heroized Mortals (Nikko.Z Remix) Part 2 Tracklist iO (Mulen) - Stick Out - True Detective edit Habischman - Endless Tunnel Monkey Safari - Dodge (Victor Ruiz Remix) Oniris - Amazonia Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"28.6K",fecha:"2016-08-20",link:"https://mcdn.podbean.com/mf/download/yw5c66/276-HernanCattaneo-2016-08-20.mp3"},{episodio:"277",titulo:"Resident / Episode 277 / Aug 27 2016",descripcion:"Part 1 Tracklist Matteo Monero - Three (Robert R. Hardy Remix) Robert R Hardy - Balance (qoob remix) Sasha - Healer (Criss Deeper 'Healing' Remix) Desaturate - Frostbite (Michael A Remix) Part 2 Tracklist Ape Sapiens - Heaven is in that place you call home Sailor and I - Letters (Jeremy Olander) Robert Babicz - Kinect Ilija Djokovic - Above The Clouds Download episode on MP3 (Right click, save link as...)",likes:"25",descargas:"29.1K",fecha:"2016-08-27",link:"https://mcdn.podbean.com/mf/download/qk6s5i/277-HernanCattaneo-2016-08-27.mp3"},{episodio:"278",titulo:"Resident / Episode 278 / Sep 03 2016",descripcion:"Part 1 Tracklist Following Light - Oracle (Demian Moreno) Julio Largente - Morphing Words Erich Von Kollar - Stardust & Bubbles (George Yammine Far Away Remix) Theo Kottis - If I Ever Feel Better Part 2 Tracklist Nandu - Long ft Katy Blue Platunoff - This Is All Yours (Matias Chilano Remix) Petar Dundov, Gregor Tresher - Differentiator Jeremy Olander - Taiga (Jamie Stevens) Esensides - Drift Away Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"28.9K",fecha:"2016-09-03",link:"https://mcdn.podbean.com/mf/download/pnwa4e/278-HernanCattaneo-2016-09-03.mp3"},{episodio:"279",titulo:"Resident / Episode 279 / Sep 10 2016",descripcion:"Part 1 Tracklist Michael A - Moments (Robert R. Hardy \xA0Remix) Namatjira - Surya Tech D - Flora Federico Monachesi - Ikhet Part 2 Tracklist Some Little Things - Vlad Draculea (Matias Chilano Remix) Massive Attack - The Spoils ft. Hope Sandoval - (Uccelli RMX)(unofficial) Lehar - Lodestar Memories Yotto - Cooper's Cup Download episode on MP3 (Right click, save link as...)",likes:"21",descargas:"29.8K",fecha:"2016-09-10",link:"https://mcdn.podbean.com/mf/download/vtezxj/279-HernanCattaneo-2016-09-10.mp3"},{episodio:"280",titulo:"Resident / Episode 280 / Sep 17 2016",descripcion:"Part 1 Tracklist Forerunners - See You Last Year (Sunday Dub) East Cafe - The Inverted Pyramid (Andrea Cassino Remix) Joris Voorn - A House (Damian Mazzeo Unofficial Remix) Sound Solutions, Alexander Scott - It's All About (Of Norway Version) Part 2 Tracklist Tim Green- \xA0For a memory Kevin Toro & Vanguardist - Getaway Diego Berrondo - Destiny Thankyou City - Three Pyramids (Circle of Life Remix) Download episode on MP3 (Right click, save link as...)",likes:"28",descargas:"33.5K",fecha:"2016-09-17",link:"https://mcdn.podbean.com/mf/download/xb28cf/280-HernanCattaneo-2016-09-17.mp3"},{episodio:"281",titulo:"Resident / Episode 281 / Sep 24 2016",descripcion:"Part 1 Tracklist Shannon Davin - Eradicate (George Yammine Remix) Audiotox & Watson - Pigan Santiago Garcia - You In The Sky Li-Polymer - Broken Machine Part 2 Tracklist Lonya & DJ Zombi feat Mz Sunday Luv \xA0- Treason (Marten Sundberg Remix) Nicholas Rada - Unbalanced Monojoke & Tuxedo - Neon Angel Joey Fehrenbach - Wolves (Nick Warren & Tripswitch Remix) Download episode on MP3 (Right click, save link as...)",likes:"17",descargas:"29.9K",fecha:"2016-09-24",link:"https://mcdn.podbean.com/mf/download/gd6cec/281-HernanCattaneo-2016-09-24.mp3"},{episodio:"282",titulo:"Resident / Episode 282 / Oct 01 2016",descripcion:"Part 1 Tracklist Ape Sapiens - Every flower blossoms once Tim Engelhardt - Trust Tech D - Moonwalk Habischman - Soul Part 2 Tracklist K Nass - Lemuria Karmon - Outline Tech D- Changes The Orb - Alpine (Prins Thomas Simpler Tool For DJ Fools) Download episode on MP3 (Right click, save link as...)",likes:"16",descargas:"29.9K",fecha:"2016-10-01",link:"https://mcdn.podbean.com/mf/download/qyyi8i/282-HernanCattaneo-2016-10-01.mp3"},{episodio:"283",titulo:"Resident / Episode 283 / Oct 08 2016",descripcion:"Part 1 Tracklist Julian Sanza - Cabeza Dura LUM - Respira (Dance Spirit Remix) Atelier Francesco - Dead End ft. Astrid (Frankey & Sandrino Remix) Sordo, Rodriguez - Camino Largo Part 2 Tracklist Rodrigo Kesovija - Deep Romance (Nicolas Rada Remix) Nick Varon - Montalto (Gebio & Guido Elordi Remix) Danito & Athina - Hydra Khen & Guy j - Prism Download episode on MP3 (Right click, save link as...)",likes:"12",descargas:"29.4K",fecha:"2016-10-08",link:"https://mcdn.podbean.com/mf/download/33q4t7/283-HernanCattaneo-2016-10-08.mp3"},{episodio:"284",titulo:"Resident / Episode 284 / Oct 15 2016",descripcion:"Part 1 Tracklist Upercent - El Viatge Davis - Blind feat. Cameo Culture Mario Puccio - Utop\xEDa Bachir Salloum - Caterpillar Jose M., TacoMan - Prazer Part 2 Tracklist Joe Bellingham - Eunoia (Tara Brooks Remix) Marymoon & Martin Roth - Phoenix Roland Klinkenberg feat. Dj Remy - Mexico Can Wait (Robert R. Hardy Remix) Satoshi Fumi - Toriton (S\xE9bastien L\xE9ger Remix) Download episode on MP3 (Right click, save link as...)",likes:"24",descargas:"30.9K",fecha:"2016-10-15",link:"https://mcdn.podbean.com/mf/download/zgtf32/284-HernanCattaneo-2016-10-15.mp3"},{episodio:"286",titulo:"Resident / Episode 286 / Oct 29 2016",descripcion:"Part 1 Tracklist Man Power - Tachyon (DJ Tennis Remix) Dino Lenny - A Certain Distance (Dixon Retouch) Circle of Life - Jupiter Ludovico Einaudi - Night (Julian Rodriguez and German Angeleri Unofficial Remix) Part 2 Tracklist Pete Tong, John Monkman - Aurora (Chaim) Filter Bear & KayLove - Chemist Friend Ran Salman - Nights of Tel Aviv Seven Doors - Bowhead Petar Dundov- A Falling In Download episode on MP3 (Right click, save link as...)",likes:"16",descargas:"32K",fecha:"2016-10-29",link:"https://mcdn.podbean.com/mf/download/qq6i83/286-HernanCattaneo-2016-10-29.mp3"},{episodio:"287",titulo:"Resident / Episode 287 / Nov 05 2016",descripcion:"Part 1 Tracklist Cubenx - Mercurial (Neil Quigley re-think) Leo Conovaloff - Conqueror Abstraction - Spazieren (Ripperton Remix 2) Serge Devant - This Moment Robert Mason - Soul Child Part 2 Tracklist Tara Brooks & Ido - Desiderata Orelse - Nothing Zakir - Brain Jumble (Dmitry Molosh Remix) Bernstein - Babel Download episode on MP3 (Right click, save link as...)",likes:"14",descargas:"29.6K",fecha:"2016-11-05",link:"https://mcdn.podbean.com/mf/download/3nn6zc/287-HernanCattaneo-2016-11-05.mp3"},{episodio:"288",titulo:"Resident / Episode 288 / Nov 12 2016",descripcion:`Part 1 Tracklist Nick Galemore - She does
Sfire - 3 (John Talabot's Warehouse Dub)
Li-Polymer - Mysticism
Michael A - Shaman Voices Part 2 Tracklist Artfaq - Hope
Tom Peters - Two Of Us (Soul Button Remix)
Arturo Hevia - Raices
Martin Eyerer - Hey Hey feat. Ruede Hagelstein (AFFKT) Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"31.5K",fecha:"2016-11-12",link:"https://mcdn.podbean.com/mf/download/ciwckz/288-HernanCattaneo-2016-11-12.mp3",tracklist:`Part 1 Nick Galemore - She does
Sfire - 3 (John Talabot's Warehouse Dub)
Li-Polymer - Mysticism
Michael A - Shaman Voices Part 2 Artfaq - Hope
Tom Peters - Two Of Us (Soul Button Remix)
Arturo Hevia - Raices`},{episodio:"289",titulo:"Resident / Episode 289 / Nov 19 2016",descripcion:`Part 1 Tracklist Sasha - Vapour Trails (Kiasmos Remix)
Mateo Coiset, DHNO - Shared Notes
The Journey - Principium (Jamie Stevens Golden Return)
John Cosani - Century
Bonaca - Our Story (Petar Dundov Remix) Part 2 Tracklist Volkan Erman - Abstract Code
Peter Strung - Paarung (David Calo Remix)
Eagles & Butterflies - X
3lias & Ali Ajami - Bring It Back (OC & Verde) Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"28.8K",fecha:"2016-11-19",link:"https://mcdn.podbean.com/mf/download/7ma8xg/289-HernanCattaneo-2016-11-19.mp3",tracklist:`Part 1 Sasha - Vapour Trails (Kiasmos Remix)
Mateo Coiset, DHNO - Shared Notes
The Journey - Principium (Jamie Stevens Golden Return)
John Cosani - Century
Bonaca - Our Story (Petar Dundov Remix) Part 2 Volkan Erman - Abstract Code
Peter Strung - Paarung (David Calo Remix)
Eagles & Butterflies - X`},{episodio:"290",titulo:"Resident / Episode 290 / Nov 26 2016",descripcion:`Part 1 Tracklist Facundo Mohrr - Shimmering
Nicolas Petracca - Nalah
DanceSpirit--One For The Heads
Maydan - Loud Silence Part 2 Tracklist Stil & Bense - Perikles
Kamilo Sanclemente - Guidance Of Constellations
Satoshi Tomiie Vs Little Green Men - Autorock (Robert R. Hardy Legendary Moments Bootleg)
Luke Sambe - Endorphima (Cid Inc. Remix) Download episode on MP3 (Right click, save link as...)`,likes:"15",descargas:"28.5K",fecha:"2016-11-26",link:"https://mcdn.podbean.com/mf/download/67buw2/290-HernanCattaneo-2016-11-26.mp3",tracklist:`Part 1 Facundo Mohrr - Shimmering
Nicolas Petracca - Nalah
DanceSpirit--One For The Heads
Maydan - Loud Silence Part 2 Stil & Bense - Perikles
Kamilo Sanclemente - Guidance Of Constellations
Satoshi Tomiie Vs Little Green Men - Autorock (Robert R. Hardy Legendary Moments Bootleg)`},{episodio:"291",titulo:"Resident / Episode 291 / Dec 03 2016",descripcion:`Part 1 Tracklist Christopher Hermann - Shorty Melodie
D-Nox & Beckers, Santiago Franch - Summer Lights (Ruede Hagelsteins Late Summer Mix)
Rufus - Innerbloom (Sasha Remix)
Patrick Kunkel & Lonya - song 202 Part 2 Tracklist Paul Kalkbrenner - The palisades (Jaap ligthart edit)
G-Mohris - Dreams (East Cafe Remix)
Subconscious Tales - Dopa Mine
Matter - Paranoia Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"28.7K",fecha:"2016-12-03",link:"https://mcdn.podbean.com/mf/download/p2texv/291-HernanCattaneo-2016-12-03.mp3",tracklist:`Part 1 Christopher Hermann - Shorty Melodie
D-Nox & Beckers, Santiago Franch - Summer Lights (Ruede Hagelsteins Late Summer Mix)
Rufus - Innerbloom (Sasha Remix)
Patrick Kunkel & Lonya - song 202 Part 2 Paul Kalkbrenner - The palisades (Jaap ligthart edit)
G-Mohris - Dreams (East Cafe Remix)
Subconscious Tales - Dopa Mine`},{episodio:"292",titulo:"Resident / Episode 292 / Dec 10 2016",descripcion:`Part 1 Tracklist Trentemoller - Miss You (Ditian 'Roses' Mix)
Kiasmos - Lit (Kevin Di Serna Club Mix)
Daneel - Light Blue
Daraspa - Benevolence (Nicholas Van Orton remix) Part 2 Tracklist Pappa Sierra - An Endless Vicious Cycle (Li-Polymer Remix)
Kay-D - Scope Of Mind (Juan Pablo Torrez Remix)
Mariano Mellino & Interaxxis - A Rush Morning
Mathew Lynch - bird of prey Download episode on MP3 (Right click, save link as...)`,likes:"13",descargas:"28.1K",fecha:"2016-12-10",link:"https://mcdn.podbean.com/mf/download/6jf3e3/292-HernanCattaneo-2016-12-10.mp3",tracklist:`Part 1 Trentemoller - Miss You (Ditian 'Roses' Mix)
Kiasmos - Lit (Kevin Di Serna Club Mix)
Daneel - Light Blue
Daraspa - Benevolence (Nicholas Van Orton remix) Part 2 Pappa Sierra - An Endless Vicious Cycle (Li-Polymer Remix)
Kay-D - Scope Of Mind (Juan Pablo Torrez Remix)
Mariano Mellino & Interaxxis - A Rush Morning`},{episodio:"293",titulo:"Resident / Episode 293 / Dec 17 2016",descripcion:`Part 1 Tracklist Pezzner - Evelym (Redux)
Tommi Oskari - Euphrates
Kamilo Sanclemete - Aurora
Fernando Olaya - Centaur
Julian Rodriguez & White Resonance - Mujer Del Desierto (Berni Turletti Remix) Part 2 Tracklist Recondite - Corvus
Baunder & Interaxxis - Nebula
Cid Inc - Unstoppable Strain
Human Machine - Africa Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"28.3K",fecha:"2016-12-17",link:"https://mcdn.podbean.com/mf/download/y2sf9n/293-HernanCattaneo-2016-12-17.mp3",tracklist:`Part 1 Pezzner - Evelym (Redux)
Tommi Oskari - Euphrates
Kamilo Sanclemete - Aurora
Fernando Olaya - Centaur
Julian Rodriguez & White Resonance - Mujer Del Desierto (Berni Turletti Remix) Part 2 Recondite - Corvus
Baunder & Interaxxis - Nebula
Cid Inc - Unstoppable Strain`},{episodio:"294",titulo:"Resident / Episode 294 / Dec 24 2016 - Christmas special",descripcion:"Resident Christmas Special with a full live set recorded at Woodstock Bloemendaal , Netherlands last july. From 2017 The Resident show will be available exclusively at: podcast.hernancattaneo.com iTunes www.mixcloud.com/hernancattaneo/ Download episode on MP3 - 808Mb (Right click, save link as...)",likes:"82",descargas:"72.6K",fecha:"2016-12-24",link:"https://mcdn.podbean.com/mf/download/7vyuu3/294-HernanCattaneo-2016-12-24.mp3"},{episodio:"296",titulo:"Resident / Episode 296 / Jan 07 2017",descripcion:`Part 1 Tracklist Dance Spirit - Mind of Man
Sam Jaspersohn - Islands
AFFKT & Piek - Esclafit (Paul Ursin remix)
Namajitra & Steven - Dizzly summer Part 2 Tracklist Echomen - Substance (Matias Chilano Retouch)
Following Light - Defoliation (Federico Monachesi remix)
Paul Deep - Seven Chakras
Circle of Life - friday night (D-Nox & Beckers Remix) Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"34.5K",fecha:"2017-01-07",link:"https://mcdn.podbean.com/mf/download/5cdz4r/296-HernanCattaneo-2017-01-07.mp3",tracklist:`Part 1 Dance Spirit - Mind of Man
Sam Jaspersohn - Islands
AFFKT & Piek - Esclafit (Paul Ursin remix)
Namajitra & Steven - Dizzly summer Part 2 Echomen - Substance (Matias Chilano Retouch)
Following Light - Defoliation (Federico Monachesi remix)
Paul Deep - Seven Chakras`},{episodio:"297",titulo:"Resident / Episode 297 / Jan 14 2017",descripcion:`Part 1 Tracklist Tantsui - Do the best
Earnest (Melb) - Ambient Fall (Volkan Erman Remix)
Robin Thurston - Cura Brochero ( Anton Make & Shamil OM remix)
Gabriel Nery - Vor\xE1gine Part 2 Tracklist Mariano Montori - That Moment Of Sadness
Nicolas Rada - Rooftop Sixtynine (Nocturna Mix)
Marcelo Paladini - Blows of Life (Lucas Rossi Remix)
Ale Russo - Hold (Andrea Cassino Remix) Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"34.1K",fecha:"2017-01-14",link:"https://mcdn.podbean.com/mf/download/4d6enx/297-HernanCattaneo-2017-01-14.mp3",tracklist:`Part 1 Tantsui - Do the best
Earnest (Melb) - Ambient Fall (Volkan Erman Remix)
Robin Thurston - Cura Brochero ( Anton Make & Shamil OM remix)
Gabriel Nery - Vor\xE1gine Part 2 Mariano Montori - That Moment Of Sadness
Nicolas Rada - Rooftop Sixtynine (Nocturna Mix)
Marcelo Paladini - Blows of Life (Lucas Rossi Remix)`},{episodio:"298",titulo:"Resident / Episode 298 / Jan 21 2017",descripcion:`Part 1 Tracklist
Clara Hill - Silent Roar (NQ remix)
Mario Puccio - Faustina
Nicolas Petracca - Beautiful Ending
Hot TuneiK - Ancient Voices Part 2 Tracklist
Butch & C.Vogt - Bliss
Nick Varon- Satao
Gandini - ig Mouth feat. Rollers For Pandas (Valdovinos Remix)
Ezequiel Arias - Split infinite Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"35.4K",fecha:"2017-01-21",link:"https://mcdn.podbean.com/mf/download/r7urp3/298-HernanCattaneo-2017-01-21.mp3",tracklist:`Part 1
Clara Hill - Silent Roar (NQ remix)
Mario Puccio - Faustina
Nicolas Petracca - Beautiful Ending
Hot TuneiK - Ancient Voices Part 2
Butch & C.Vogt - Bliss
Nick Varon- Satao
Gandini - ig Mouth feat. Rollers For Pandas (Valdovinos Remix)`},{episodio:"299",titulo:"Resident / Episode 299 / Jan 28 2017",descripcion:`Tracklist Altocamet - Te invito (Cheman Remix Carlos Alfonsin)
Leo Grunbaum - Bloom feat. Aerial East Ezequiel Anile & Nicolas Petracca - Gardens of Hope
Fille V Feat Mathi - Ancient Methods (Underground Ticket Remix)
Kastis Torrau & Donatello - Ida (Rick Pier O'Neil & Desaturate Remix)
Tech D - Pixels (Original Mix)
Daneel - B01
Hot TuneiK - Astral Renaissance 
Oovation feat Amber Long - Falter (Juan Deminicis Remix) Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"35.3K",fecha:"2017-01-28",link:"https://mcdn.podbean.com/mf/download/q5cv4d/299-HernanCattaneo-2017-01-28.mp3",tracklist:`Tracklist Altocamet - Te invito (Cheman Remix Carlos Alfonsin)
Leo Grunbaum - Bloom feat. Aerial East Ezequiel Anile & Nicolas Petracca - Gardens of Hope
Fille V Feat Mathi - Ancient Methods (Underground Ticket Remix)
Kastis Torrau & Donatello - Ida (Rick Pier O'Neil & Desaturate Remix)
Tech D - Pixels (Original Mix)
Daneel - B01
Hot TuneiK - Astral Renaissance`},{episodio:"300",titulo:"Resident / Episode 300 / Feb 04 2017 / Balance / Sudbeat Exclusive Minimix",descripcion:"Download episode on MP3 (Right click, save as...)",likes:"41",descargas:"43.2K",fecha:"2017-02-04",link:"https://mcdn.podbean.com/mf/download/7dgcuz/300-HernanCattaneo-2017-02-04.mp3"},{episodio:"301",titulo:"Resident / Episode 301 / Feb 11 2017",descripcion:`Tracklist
Bengal - Fractal dust
Berni Turletti - Natural Balance
Nicholas Van Orton - Return on Fm
Van Meeteren & Hyde - Buddhi (Terry Lee Brown Jr Remix)
Ronan & Leo Portela - Zero one
Dousk - Sometimes Shugga
Julian Rodriguez - Ulinpit Disconnection (Nicolas Rada Remix)
VONDA7 - Away
Sebastian Busto - Revenge (Kamilo Sanclemente remix) Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"33.5K",fecha:"2017-02-11",link:"https://mcdn.podbean.com/mf/download/6qi482/301-HernanCattaneo-2017-02-11.mp3",tracklist:`Tracklist
Bengal - Fractal dust
Berni Turletti - Natural Balance
Nicholas Van Orton - Return on Fm
Van Meeteren & Hyde - Buddhi (Terry Lee Brown Jr Remix)
Ronan & Leo Portela - Zero one
Dousk - Sometimes Shugga
Julian Rodriguez - Ulinpit Disconnection (Nicolas Rada Remix)
VONDA7 - Away`},{episodio:"302",titulo:"Resident / Episode 302 / Feb 18 2017",descripcion:`Tracklist Victor Magro, Leo Grunbaum - Amarone
Nicolas Masseyeff - Oblecto
Robert R. Hardy - Last Indos (Nicolas Rada Remix)
Simos Tagias - Disco Freak
Squire - Philantropy
Stelios Vassiloudis - La Quarantaine
Oliver Lieb - Caldera (Michael A Remix) 
Stereo Underground - Northern lights
Aural.Node - From Clouds and Spaces (East Cafe Remix) Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"30.5K",fecha:"2017-02-18",link:"https://mcdn.podbean.com/mf/download/ii6si6/302-HernanCattaneo-2017-02-18.mp3",tracklist:`Tracklist Victor Magro, Leo Grunbaum - Amarone
Nicolas Masseyeff - Oblecto
Robert R. Hardy - Last Indos (Nicolas Rada Remix)
Simos Tagias - Disco Freak
Squire - Philantropy
Stelios Vassiloudis - La Quarantaine
Oliver Lieb - Caldera (Michael A Remix)
Stereo Underground - Northern lights`},{episodio:"303",titulo:"Resident / Episode 303 / Feb 25 2017",descripcion:`Audio Junkies - Three Of Us Feat. Haptic
Bengal - Masada (Dachshund Remix)
Niceshot & Armando Guerrero - Air Changes
Simos Tagias - Airlock
Stereo Underground - Glacier Meadows
Robert R Hardy - Exclusa (Nicolas Rada Remix)
Fashion Victimz - Sand storm
Mariano Mellino - Tage In Moabit
Jan Blomqvist - Dark Noise (ME & her Extended Remix) Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"31K",fecha:"2017-02-25",link:"https://mcdn.podbean.com/mf/download/ewm9eh/303-HernanCattaneo-2017-02-25.mp3",tracklist:`Audio Junkies - Three Of Us Feat. Haptic
Bengal - Masada (Dachshund Remix)
Niceshot & Armando Guerrero - Air Changes
Simos Tagias - Airlock
Stereo Underground - Glacier Meadows
Robert R Hardy - Exclusa (Nicolas Rada Remix)
Fashion Victimz - Sand storm
Mariano Mellino - Tage In Moabit`},{episodio:"304",titulo:"Resident / Episode 304 / Mar 04 2017",descripcion:`Tracklist
Nhar - Sentience
Modd - Magic footsteps
Dream Oscillator (\xD6ona Dahl's Lucid mix)
Chaim - Safe world
Ray Okpara - Satin Curtain (Kevin Yost Remix)
Pacco & Rudy B - Spacetacular (Sebastian Busto Remix)
Marc Marzenit - Theme For The End (Rafael Cerato & THe WHite SHadow )
R.I.P Bestia - We Were In MDI 
Donna Summer - I Feel Love (Hot TuneiK) Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.7K",fecha:"2017-03-04",link:"https://mcdn.podbean.com/mf/download/z2fgtc/304-HernanCattaneo-2017-03-04.mp3",tracklist:`Tracklist
Nhar - Sentience
Modd - Magic footsteps
Dream Oscillator (\xD6ona Dahl's Lucid mix)
Chaim - Safe world
Ray Okpara - Satin Curtain (Kevin Yost Remix)
Pacco & Rudy B - Spacetacular (Sebastian Busto Remix)
Marc Marzenit - Theme For The End (Rafael Cerato & THe WHite SHadow )
R.I.P Bestia - We Were In MDI`},{episodio:"306",titulo:"Resident / Episode 306 / Mar 18 2017",descripcion:`Tracklist Depeche Mode - Policy Of Truth (Dj Paul & Nicolas Rada Remix)
Santiago Celasso - Eterno Lberinto 
The Song Of Butterfly - Jonatan Ramonda (Interpretations mix) 
Isaac Differding - From The Bowels (Tech D Remix)
Michael A - Another Way 
Berni Turletti - Phauana 
Anchorsong - Gyotens Kalimba (Sebastian Mullaert Intensification)
Hot Tuneik - Ancient Voices 
Gandini - Dax (Mohrr Remix)
Ryan Davis & Microtrauma - Traces (Gabriel Ananda Remix) Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"35.3K",fecha:"2017-03-18",link:"https://mcdn.podbean.com/mf/download/bfd293/306-HernanCattaneo-2017-03-18.mp3",tracklist:`Tracklist Depeche Mode - Policy Of Truth (Dj Paul & Nicolas Rada Remix)
Santiago Celasso - Eterno Lberinto
The Song Of Butterfly - Jonatan Ramonda (Interpretations mix)
Isaac Differding - From The Bowels (Tech D Remix)
Michael A - Another Way
Berni Turletti - Phauana
Anchorsong - Gyotens Kalimba (Sebastian Mullaert Intensification)
Hot Tuneik - Ancient Voices
Gandini - Dax (Mohrr Remix)`},{episodio:"307",titulo:"Resident / Episode 307 / Mar 25 2017",descripcion:`Sergio Salomone - Luxid Dream
Kora, Nic Falardeau - Om Namah
Julio Largente - Morphing Words
Luke Santos & Marcelo Vasami Feat. George Yammine - Cedar Sunrise
Maher Daniel - A Call From Within (Martin Buttrich Dub Mix)
Pion - Radost (Pacco & Rudy B Remix)
Exe Bunge - Acceptable Mistakes
Gonza Rodriguez & Ivan Miatto - Small Things (Golan Zocher Remix)
Nick Varon - Always Forward (Marcelo Paladini Remix)
Will Konitzer - Brio (St. Savor Remix) Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.7K",fecha:"2017-03-25",link:"https://mcdn.podbean.com/mf/download/mfzqnm/307-HernanCattaneo-2017-03-25.mp3",tracklist:`Sergio Salomone - Luxid Dream
Kora, Nic Falardeau - Om Namah
Julio Largente - Morphing Words
Luke Santos & Marcelo Vasami Feat. George Yammine - Cedar Sunrise
Maher Daniel - A Call From Within (Martin Buttrich Dub Mix)
Pion - Radost (Pacco & Rudy B Remix)
Exe Bunge - Acceptable Mistakes
Gonza Rodriguez & Ivan Miatto - Small Things (Golan Zocher Remix)
Nick Varon - Always Forward (Marcelo Paladini Remix)`},{episodio:"308",titulo:"Resident / Episode 308 / Apr 01 2017",descripcion:`Tracklist
Simon Vuarambon - Ethiopian /
Traumprinz - I Gave My Life (Ditian Retouch) /
Stavroz - Designer Eggs Im Garten (Dance Spirit Remix) /
Modd - Vtown /
Paul Hazendonk - Observer /
Bruno Caro - Yugen /
Yotto - Oscillations /
Diamond Dealer - Township Soul /
Roger Martinez - Pan-O-Rama (Cid Inc Remix) /
C Vogt & Patrick Jeremic - Vil\xE1 Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"33.1K",fecha:"2017-04-01",link:"https://mcdn.podbean.com/mf/download/eaqh2e/308-HernanCattaneo-2017-04-01.mp3",tracklist:`Tracklist
Simon Vuarambon - Ethiopian /
Traumprinz - I Gave My Life (Ditian Retouch) /
Stavroz - Designer Eggs Im Garten (Dance Spirit Remix) /
Modd - Vtown /
Paul Hazendonk - Observer /
Bruno Caro - Yugen /
Yotto - Oscillations /
Diamond Dealer - Township Soul /
Roger Martinez - Pan-O-Rama (Cid Inc Remix) /`},{episodio:"309",titulo:"Resident / Episode 309 / Apr 08 2017",descripcion:`Simon Vuarambon - Siberian /
Ejeca - Tajmahal (Budakid Remix) /
MAM - Nice Morning - Zan Preve\xE9 Remix /
D-Formation & Steve Slight - The Lure Of Rising /
Ryan Sullivan- Ceylon /
Michael A - Sapphire /
Dj Beat 2 -Moments That Last /
Parallax - Inerchia (Ran Salman Remix) /
Marc Marzenit-Death Espiral (Dave Seaman Remix) /
Alex Lario - Forever ( Chicola Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"31.7K",fecha:"2017-04-08",link:"https://mcdn.podbean.com/mf/download/qwm3n9/309-HernanCattaneo-2017-04-08.mp3",tracklist:`Simon Vuarambon - Siberian /
Ejeca - Tajmahal (Budakid Remix) /
MAM - Nice Morning - Zan Preve\xE9 Remix /
D-Formation & Steve Slight - The Lure Of Rising /
Ryan Sullivan- Ceylon /
Michael A - Sapphire /
Dj Beat 2 -Moments That Last /
Parallax - Inerchia (Ran Salman Remix) /
Marc Marzenit-Death Espiral (Dave Seaman Remix) /`},{episodio:"310",titulo:"Resident / Episode 310 / Apr 15 2017",descripcion:`Kevin Toro - Falling / 
Shaun Reeves, Tuccillo - One two five / 
Joan Retamero - She Dreamed Through The Sky / 
Joan Retamero - Pianism / 
Olderic - Pyramid / 
Subconscious Tales - Focused / 
Rick Pier O\xB4Neil - Durban Poison (RPO Part 3) / 
Nishan Lee - Bushuacka / 
Dale Middleton - Neleh / 
Sasha feat Polica - Out of time / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"33.1K",fecha:"2017-04-15",link:"https://mcdn.podbean.com/mf/download/54nvit/310-HernanCattaneo-2017-04-15.mp3",tracklist:`Kevin Toro - Falling /
Shaun Reeves, Tuccillo - One two five /
Joan Retamero - She Dreamed Through The Sky /
Joan Retamero - Pianism /
Olderic - Pyramid /
Subconscious Tales - Focused /
Rick Pier O\xB4Neil - Durban Poison (RPO Part 3) /
Nishan Lee - Bushuacka /
Dale Middleton - Neleh /`},{episodio:"311",titulo:"Resident / Episode 311 / Apr 22 2017",descripcion:`Sahar Z & Navar - Lost in draws / 
Brian Cid - Dimensions / 
Inkfish - Before The War (Barry Jameison Remix) / 
Klangstof - Hostage (Sasha Remix) / 
Diamond Dealer - Elevate / 
Jeremy Olander - Billinghurst / 
Lorenzo Dada - Your Love Featuring Holed Coin / 
Mrtnz - Clearance (Luciano Scheffer Remix) / 
Simos Tagias - Tefra / 
Christian Smith - Air Castle (Laurent Garnier Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"24",descargas:"33.5K",fecha:"2017-04-22",link:"https://mcdn.podbean.com/mf/download/4xnhqn/311-HernanCattaneo-2017-04-22.mp3",tracklist:`Sahar Z & Navar - Lost in draws /
Brian Cid - Dimensions /
Inkfish - Before The War (Barry Jameison Remix) /
Klangstof - Hostage (Sasha Remix) /
Diamond Dealer - Elevate /
Jeremy Olander - Billinghurst /
Lorenzo Dada - Your Love Featuring Holed Coin /
Mrtnz - Clearance (Luciano Scheffer Remix) /
Simos Tagias - Tefra /`},{episodio:"312",titulo:"Resident / Episode 312 / Apr 29 2017",descripcion:`Lee Burridge and Lost desert feat Junior - Absent without thoughts / 
In Colour - How's the head? / 
Matter- - Pronoia (Mononoid Rework) / 
Chloe - The Dawn (Dixon Remix) / 
Berni Turletti and Julian Rodriguez - Connected By Music / 
Bachir Salloum - Whirlwind Angels / 
Cosmonauts - Codeine Eyelids (Gheist Remix) / 
Calzedon Guy feat. Dora Foldvary - Solaris (Golan Zocher Remix) / 
Alex Niggeman - Solaris / 
Laurent Garnier - 1-4 Doctor C'est Chouette / Download episode on MP3 (Right click, save link as...)`,likes:"24",descargas:"32.7K",fecha:"2017-04-29",link:"https://mcdn.podbean.com/mf/download/sry7qn/312-HernanCattaneo-2017-04-29.mp3",tracklist:`Lee Burridge and Lost desert feat Junior - Absent without thoughts /
In Colour - How's the head? /
Matter- - Pronoia (Mononoid Rework) /
Chloe - The Dawn (Dixon Remix) /
Berni Turletti and Julian Rodriguez - Connected By Music /
Bachir Salloum - Whirlwind Angels /
Cosmonauts - Codeine Eyelids (Gheist Remix) /
Calzedon Guy feat. Dora Foldvary - Solaris (Golan Zocher Remix) /
Alex Niggeman - Solaris /`},{episodio:"313",titulo:"Resident / Episode 313 / May 06 2017",descripcion:`EFG-Syuyshe /
George Ledakis & Xiasou - Ocho (Pablo German Remix) / 
Andrea Cassino - Divine / 
Michael A - Centaur / 
Hatrixx - Pressure (Madloch Remix) / 
G-Mohris - Dunya (Marcelo Vasami Remix) / 
Switchdance - O Amolador / 
Dmitry Molosh - Feel It (GMJ Rmx) / 
Mooravyov - Bad / 
Stelios Vassiloudis - Sierra Alpha Victor / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"32.2K",fecha:"2017-05-06",link:"https://mcdn.podbean.com/mf/download/63f4na/313-HernanCattaneo-2017-05-06.mp3",tracklist:`EFG-Syuyshe /
George Ledakis & Xiasou - Ocho (Pablo German Remix) /
Andrea Cassino - Divine /
Michael A - Centaur /
Hatrixx - Pressure (Madloch Remix) /
G-Mohris - Dunya (Marcelo Vasami Remix) /
Switchdance - O Amolador /
Dmitry Molosh - Feel It (GMJ Rmx) /
Mooravyov - Bad /`},{episodio:"314",titulo:"Resident / Episode 314 / May 13 2017",descripcion:`Berni Turletti - Munacuna (Deep Whitin Remix) / 
Mauro Augugliaro - Lucretia / 
AudioStorm - Analogue Agenda / 
BOg, Tim Engelhardt - No more words / 
CF&M - Gadea / 
Pete K - Andromeda / 
Dmitry Molosh - Feel It (Monojoke Rmx) / 
Jimi Jules - Euphrasia / 
Rise & Fall- Outlook / 
Mauro Rodriguez - Melifluo (Paul Deep Remix) / 
Dmitri Moloshj - Expression (Kamilo Sanclemente, Golan Zocher Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"32K",fecha:"2017-05-13",link:"https://mcdn.podbean.com/mf/download/tc7sn2/314-HernanCattaneo-2017-05-13.mp3",tracklist:`Berni Turletti - Munacuna (Deep Whitin Remix) /
Mauro Augugliaro - Lucretia /
AudioStorm - Analogue Agenda /
BOg, Tim Engelhardt - No more words /
CF&M - Gadea /
Pete K - Andromeda /
Dmitry Molosh - Feel It (Monojoke Rmx) /
Jimi Jules - Euphrasia /
Rise & Fall- Outlook /
Mauro Rodriguez - Melifluo (Paul Deep Remix) /`},{episodio:"316",titulo:"Resident / Episode 316 / May 27 2017",descripcion:`Beddermann & Dahlmann - Steam the rope / 
Marino Canal - Equiniox / 
Giorgia Angiuli - Ice Theory / 
Partenaire - Close Bond (Jose Tabarez Remix) / 
Michael A - Down so long / 
Pacco & Rudy B - Coral Castle (Re-Edit) / 
Lanvary - Manticore (Lucas Rossi Remix) / 
Tripswitch- Sinking / 
Nicolas Rada - Cumulonimbus / 
GMJ - One Thing Feeds The Other (K Nass Remix) / 
Mauro Rodriguez - Melifluo (Nishan Lee Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"17",descargas:"32.2K",fecha:"2017-05-27",link:"https://mcdn.podbean.com/mf/download/4dcddb/316-HernanCattaneo-2017-05-27.mp3",tracklist:`Beddermann & Dahlmann - Steam the rope /
Marino Canal - Equiniox /
Giorgia Angiuli - Ice Theory /
Partenaire - Close Bond (Jose Tabarez Remix) /
Michael A - Down so long /
Pacco & Rudy B - Coral Castle (Re-Edit) /
Lanvary - Manticore (Lucas Rossi Remix) /
Tripswitch- Sinking /
Nicolas Rada - Cumulonimbus /
GMJ - One Thing Feeds The Other (K Nass Remix) /`},{episodio:"317",titulo:"Resident / Episode 317 / Jun 03 2017",descripcion:`Thomas Gandey - Pieces of me / 
Misty - Desouk / 
NTFO - Focusee / 
Atish - Peculiar Colors (Dance Spirit Remix) / 
Ale Miguez - Light of the soul /
Replicanth - Eternity / 
ABAB - Stars Collide / 
James Monro - Mantis / 
Palliate - Regenboog / 
Kaled- the field and the sun / 
Way Out West - The Call / Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"35.4K",fecha:"2017-06-03",link:"https://mcdn.podbean.com/mf/download/kuifix/317-HernanCattaneo-2017-06-03.mp3",tracklist:`Thomas Gandey - Pieces of me /
Misty - Desouk /
NTFO - Focusee /
Atish - Peculiar Colors (Dance Spirit Remix) /
Ale Miguez - Light of the soul /
Replicanth - Eternity /
ABAB - Stars Collide /
James Monro - Mantis /
Palliate - Regenboog /
Kaled- the field and the sun /`},{episodio:"318",titulo:"Resident / Episode 318 / Jun 10 2017",descripcion:`Knowbru, Rodrigo Dp - Flydrop / 
Blondish - Wizard Of Love (Modular Project Remix) / 
anthem - Ebertplatz / 
Rodriguez Jr - Monticello / 
Quivver & Funk D'Void - Dual state / 
Cazap & Boskis - Exhale / 
Similian - Challenger Deep / 
Andromo & Chris Fortier - AfterStroke / 
Nhar - Unkindled / 
Antrim & Luis Bondio - Baby Blue (Nikko.Z Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"33.5K",fecha:"2017-06-10",link:"https://mcdn.podbean.com/mf/download/8vnube/318-HernanCattaneo-2017-06-10.mp3",tracklist:`Knowbru, Rodrigo Dp - Flydrop /
Blondish - Wizard Of Love (Modular Project Remix) /
anthem - Ebertplatz /
Rodriguez Jr - Monticello /
Quivver & Funk D'Void - Dual state /
Cazap & Boskis - Exhale /
Similian - Challenger Deep /
Andromo & Chris Fortier - AfterStroke /
Nhar - Unkindled /`},{episodio:"319",titulo:"Resident / Episode 319 / Jun 17 2017",descripcion:`Nahue Juarez - Simplify / 
Ditian - Till Roses Fall / 
Matias Chilano - Micron / 
Trevor Morris - Erlendur Shown Sword of Kings (Emiliano Manzano Unofficial Remix) / 
Rodriguez Jr. - Radian / 
LOM - Saturno / 
Govinda - Desde el oc\xE9ano / 
Avidus - Nekromant (Sebastian Voigt Remix) / 
Goda Brother - Distance (Luciano Scheffer Mix) / 
Rafael Crato - Vibrance (Quivver Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"33.5K",fecha:"2017-06-17",link:"https://mcdn.podbean.com/mf/download/udpzm9/319-HernanCattaneo-2017-06-17.mp3",tracklist:`Nahue Juarez - Simplify /
Ditian - Till Roses Fall /
Matias Chilano - Micron /
Trevor Morris - Erlendur Shown Sword of Kings (Emiliano Manzano Unofficial Remix) /
Rodriguez Jr. - Radian /
LOM - Saturno /
Govinda - Desde el oc\xE9ano /
Avidus - Nekromant (Sebastian Voigt Remix) /
Goda Brother - Distance (Luciano Scheffer Mix) /`},{episodio:"320",titulo:"Resident / Episode 320 / Jun 24 2017",descripcion:`Deep Within - Confessions (Federico Santorsola Remix) / 
Madloch - Prologue / 
Fort Romeau - Reasons / 
Einmusik - Sakura / 
Jamie XX - Stranger In A Room (Jaap Ligthart Edit) / 
Matias Fernandez Vi\xF1a - Scientific Method (Robert R. Hardy Remix) / 
Diyo - Pollux / 
Mjane & David Garcet - Lumpini (Juan Deminicis Remix) / 
Michael & Levan and Stiven Rivic - Trespassing (Tripswitch Remix) / 
Danny Ocean - Hypnotize / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"36.1K",fecha:"2017-06-24",link:"https://mcdn.podbean.com/mf/download/4bs9yh/320-HernanCattaneo-2017-06-24.mp3",tracklist:`Deep Within - Confessions (Federico Santorsola Remix) /
Madloch - Prologue /
Fort Romeau - Reasons /
Einmusik - Sakura /
Jamie XX - Stranger In A Room (Jaap Ligthart Edit) /
Matias Fernandez Vi\xF1a - Scientific Method (Robert R. Hardy Remix) /
Diyo - Pollux /
Mjane & David Garcet - Lumpini (Juan Deminicis Remix) /
Michael & Levan and Stiven Rivic - Trespassing (Tripswitch Remix) /`},{episodio:"321",titulo:"Resident / Episode 321 / Jul 01 2017",descripcion:`Lycoriscoris - Sur Oiseau / 
Lost Dessert - Seringeti Nightfall / 
Kiani & His Legion - Motion academy / 
Juan Astudillo - Eadha / 
Greenage - Prana / 
Marc DePulse & Rafael Cerato - Wanderlust / 
Gabriel Nery - Sue\xF1os Perdidos / 
Ran Salman - Butterfly / 
Alex Nemec & Forniva - Hunting me / 
Sandro Beninati - Night mode / Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"33.6K",fecha:"2017-07-01",link:"https://mcdn.podbean.com/mf/download/sjn39a/321-HernanCattaneo-2017-07-01.mp3",tracklist:`Lycoriscoris - Sur Oiseau /
Lost Dessert - Seringeti Nightfall /
Kiani & His Legion - Motion academy /
Juan Astudillo - Eadha /
Greenage - Prana /
Marc DePulse & Rafael Cerato - Wanderlust /
Gabriel Nery - Sue\xF1os Perdidos /
Ran Salman - Butterfly /
Alex Nemec & Forniva - Hunting me /`},{episodio:"322",titulo:"Resident / Episode 322 / Jul 08 2017",descripcion:`Mindshield - 7800 kilometers inside me / 
Fernando Aragon - Bergah / 
Bufi - Bird song / 
Digital departmet - Wolfs are near / 
Aliocha - Storm chaser / 
Omar El Gamal - Rise Above / 
Christian Monique-Endless Road (Tim Aaron Remix) / 
Antrim - I Hear The Distance / 
Super flu - Gausa / 
Eli Nissan- Liquid stars / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"34K",fecha:"2017-07-08",link:"https://mcdn.podbean.com/mf/download/hts5ra/322-HernanCattaneo-2017-07-08.mp3",tracklist:`Mindshield - 7800 kilometers inside me /
Fernando Aragon - Bergah /
Bufi - Bird song /
Digital departmet - Wolfs are near /
Aliocha - Storm chaser /
Omar El Gamal - Rise Above /
Christian Monique-Endless Road (Tim Aaron Remix) /
Antrim - I Hear The Distance /
Super flu - Gausa /`},{episodio:"323",titulo:"Resident / Episode 323 / Jul 15 2017",descripcion:`Butch - Shahrzad (Matthias Meyer Remix) / 
Piek & F\xE1bel - Despertar (Henry Saiz remix) / 
Lessons - Tempest (Adam Port Europa Remix) / 
Then & Starkato - Mars / 
Audiojack - Equilibrium / 
Cid Inc - ArcaneThoughts / 
Stelios Vassiloudis & Nils Nuernberg - Smoke Tree / 
Subconscious Tales - Fly high / 
Guhus - After The Rainbow / 
Berni Turletti - Pukavy / 
Third Son - Climb to the Sun ft. Haptic (Guy J Field Trip Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"33.6K",fecha:"2017-07-15",link:"https://mcdn.podbean.com/mf/download/crz7kc/323-HernanCattaneo-2017-07-15.mp3",tracklist:`Butch - Shahrzad (Matthias Meyer Remix) /
Piek & F\xE1bel - Despertar (Henry Saiz remix) /
Lessons - Tempest (Adam Port Europa Remix) /
Then & Starkato - Mars /
Audiojack - Equilibrium /
Cid Inc - ArcaneThoughts /
Stelios Vassiloudis & Nils Nuernberg - Smoke Tree /
Subconscious Tales - Fly high /
Guhus - After The Rainbow /
Berni Turletti - Pukavy /`},{episodio:"324",titulo:"Resident / Episode 324 / Jul 22 2017",descripcion:`Lupine - Indian Summer (Andy Arias Remix) / 
Robert Mason - Soul Child (Lucas Rossi Remix) / 
One-H - Never Lose Yourself (Andrea Cassino Remix) / 
Jelly For The Babies - Grey Matter (Re-Edit) / 
Michael A - Hypnotic / 
Michael A - Seven (Andrea Cassino Remix) / 
Randico - Levels (Sahar Z Scuba Remix) / 
Reset Robot - Back orders / 
Ian Dillon - Solivia / 
Rise & Fall - Traffic lights / Download episode on MP3 (Right click, save link as...)`,likes:"13",descargas:"32.8K",fecha:"2017-07-22",link:"https://mcdn.podbean.com/mf/download/fmukk8/324-HernanCattaneo-2017-07-22.mp3",tracklist:`Lupine - Indian Summer (Andy Arias Remix) /
Robert Mason - Soul Child (Lucas Rossi Remix) /
One-H - Never Lose Yourself (Andrea Cassino Remix) /
Jelly For The Babies - Grey Matter (Re-Edit) /
Michael A - Hypnotic /
Michael A - Seven (Andrea Cassino Remix) /
Randico - Levels (Sahar Z Scuba Remix) /
Reset Robot - Back orders /
Ian Dillon - Solivia /`},{episodio:"326",titulo:"Resident / Episode 326 / Aug 05 2017",descripcion:`Ultravizion - Prisma / 
Satoshi Fum - An Gel - Fish / 
Blancah feat Diogo de Haro - Revoada / 
Manoo & Raoul K feat. Ahmed Sosso - Toukan (Trikk Dub Mix) / 
Paul Deep - Rejected / 
Monje - Flying Lotus (Tuxedo Remix) / 
Fur Coat - Parallel Dimensions / 
George Yammine - Andromeda (Marcelo Paladini Remix) / 
Nicolas Ruiz - Glass Shatters (Nick Varon Remix) / 
BBE - 7 days & One Week (Adwer off week rework) / Download episode on MP3 (Right click, save link as...)`,likes:"19",descargas:"32.7K",fecha:"2017-08-05",link:"https://mcdn.podbean.com/mf/download/zuhx7q/326-HernanCattaneo-2017-08-05.mp3",tracklist:`Ultravizion - Prisma /
Satoshi Fum - An Gel - Fish /
Blancah feat Diogo de Haro - Revoada /
Manoo & Raoul K feat. Ahmed Sosso - Toukan (Trikk Dub Mix) /
Paul Deep - Rejected /
Monje - Flying Lotus (Tuxedo Remix) /
Fur Coat - Parallel Dimensions /
George Yammine - Andromeda (Marcelo Paladini Remix) /
Nicolas Ruiz - Glass Shatters (Nick Varon Remix) /`},{episodio:"327",titulo:"Resident / Episode 327 / Aug 12 2017",descripcion:`Rui Da Silva presents GPU FORCE - Requiem / 
Kay Nassef - Love (Berni Turletti and Julian Rodriguez Remix) / 
Bedouin - Set The Controls For The Heart Of The Sun (Guy Gerber Remix) / 
Interaxxis - Kicking Problems / 
Phonique - Elitess (Smash TV Remix) / 
Luka Sambe & Filter Bear - Hebe XVI / 
Guy J - Cloud No. 9 (Scanlines Unofficial Remix) / 
Dan Sieg - They Won't Find You (King Unique Remix) / 
Dousk - Whisper Unit (Cid Inc Remix) / 
LSG - Netherworld (Rise And Fall Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"33.8K",fecha:"2017-08-12",link:"https://mcdn.podbean.com/mf/download/xmp2vd/327-HernanCattaneo-2017-08-12.mp3",tracklist:`Rui Da Silva presents GPU FORCE - Requiem /
Kay Nassef - Love (Berni Turletti and Julian Rodriguez Remix) /
Bedouin - Set The Controls For The Heart Of The Sun (Guy Gerber Remix) /
Interaxxis - Kicking Problems /
Phonique - Elitess (Smash TV Remix) /
Luka Sambe & Filter Bear - Hebe XVI /
Guy J - Cloud No. 9 (Scanlines Unofficial Remix) /
Dan Sieg - They Won't Find You (King Unique Remix) /
Dousk - Whisper Unit (Cid Inc Remix) /`},{episodio:"328",titulo:"Resident / Episode 328 / Aug 19 2017",descripcion:`Anton Dhouran - Misty Mountain / 
Kalabrese - Is This (Ripperton) / 
Mauro Augugliaro - Insomnium / 
Shai T - Desert Story / 
M.O.F. feat. Ghiz - This must be the place / 
Nightboy - Smyrna (Alec Araujo Remix) / 
Luke Santos & Arturo Hevia - Nymphlight Playground (Marcelo Vasami Flutes Remix) / 
Maetrik - Ninex 7-C / 
Sasch BBC & Caspar - Eschaton (Kamilo Sanclemente Remix) / 
Andre Sobota - Departure / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"32.4K",fecha:"2017-08-19",link:"https://mcdn.podbean.com/mf/download/s2recb/328-HernanCattaneo-2017-08-19.mp3",tracklist:`Anton Dhouran - Misty Mountain /
Kalabrese - Is This (Ripperton) /
Mauro Augugliaro - Insomnium /
Shai T - Desert Story /
M.O.F. feat. Ghiz - This must be the place /
Nightboy - Smyrna (Alec Araujo Remix) /
Luke Santos & Arturo Hevia - Nymphlight Playground (Marcelo Vasami Flutes Remix) /
Maetrik - Ninex 7-C /
Sasch BBC & Caspar - Eschaton (Kamilo Sanclemente Remix) /`},{episodio:"329",titulo:"Resident / Episode 329 / Aug 26 2017",descripcion:`RVNZ - Feijoa / 
Joseph Ashworth - Glimmer / 
Volen Sentir - Vdol Po Rechenke / 
Blue cell - Odyssee / 
Niko Christo & Synas - Melaina (ft. Orson Welles) / 
Ale Russo - Hold (Luis Kiverling & Diego Berrondo Remix) / 
Matter - Pronoia (Tech D Remix) / 
Orsen - Wakey Wakey / 
Amber - Anyway (Jaap Ligthart Edit) / 
Joseph Ashworth - Canary / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"33.4K",fecha:"2017-08-26",link:"https://mcdn.podbean.com/mf/download/66axt3/329-HernanCattaneo-2017-08-26.mp3",tracklist:`RVNZ - Feijoa /
Joseph Ashworth - Glimmer /
Volen Sentir - Vdol Po Rechenke /
Blue cell - Odyssee /
Niko Christo & Synas - Melaina (ft. Orson Welles) /
Ale Russo - Hold (Luis Kiverling & Diego Berrondo Remix) /
Matter - Pronoia (Tech D Remix) /
Orsen - Wakey Wakey /
Amber - Anyway (Jaap Ligthart Edit) /`},{episodio:"330",titulo:"Resident / Episode 330 / Sep 02 2017",descripcion:`Maxi Degrassi - San Telmo / 
Hraach - Hidden Dimension (Tara Brooks Remix) / 
Feemarx - Oneiroi (Andy Arias Remix) / 
Henry Saiz - IN THE DISTANCE / 
Henry Saiz - IN THE DISTANCE (DUB) / 
Antrim - Dizziness / 
Desaturate - Ditracted / 
Tone Depth & Simply City - Polaris / 
Michael A - Endless Time (Blusoul Remix) / 
Tim Engelhardt - Poly Seven / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"33.4K",fecha:"2017-09-02",link:"https://mcdn.podbean.com/mf/download/pv9q9x/330-HernanCattaneo-2017-09-02.mp3",tracklist:`Maxi Degrassi - San Telmo /
Hraach - Hidden Dimension (Tara Brooks Remix) /
Feemarx - Oneiroi (Andy Arias Remix) /
Henry Saiz - IN THE DISTANCE /
Henry Saiz - IN THE DISTANCE (DUB) /
Antrim - Dizziness /
Desaturate - Ditracted /
Tone Depth & Simply City - Polaris /
Michael A - Endless Time (Blusoul Remix) /`},{episodio:"331",titulo:"Resident / Episode 331 / Sep 09 2017",descripcion:`Stevie R, Delfin Music - Jalemba feat. Greg Rawson (Rancido Edition) / 
Henry Saiz - September / 
Robert R. Hardy - Life Thoughts (Dub Mix) / 
Captain E - Escape To Lonely (Erdi Irmak Remix) / 
Flowers And Sea Creatures - Color The Rain (Stereocalypse) / 
Tim Engelhardt - Time Will Save Your Soul / 
Olivier Weiter & Alex Preda - Moods / 
Analog Jungs - Storm (Hot Tuneik Remix) / 
Orsen - Wakey Wakey / 
Tone Depth & Simply City - Glass elevator / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"36.4K",fecha:"2017-09-09",link:"https://mcdn.podbean.com/mf/download/2zpp7r/331-HernanCattaneo-2017-09-09.mp3",tracklist:`Stevie R, Delfin Music - Jalemba feat. Greg Rawson (Rancido Edition) /
Henry Saiz - September /
Robert R. Hardy - Life Thoughts (Dub Mix) /
Captain E - Escape To Lonely (Erdi Irmak Remix) /
Flowers And Sea Creatures - Color The Rain (Stereocalypse) /
Tim Engelhardt - Time Will Save Your Soul /
Olivier Weiter & Alex Preda - Moods /
Analog Jungs - Storm (Hot Tuneik Remix) /
Orsen - Wakey Wakey /`},{episodio:"332",titulo:"Resident / Episode 332 / Sep 16 2017",descripcion:`Brett Longman - If i know what love is / 
Landhouse, Raddantze - Die Einoel Giraffe vom Stadtrand / 
Leif Muller - Holidays Everywhere / 
Dimuth K - Achillea / 
Ale Russo - Hold (Luis Kiverling & Diego Berrondo Remix) / 
Daro - Take me away / 
Marvin & Guy - Superior Conjunction / 
Nicolas Rada - One-One Eleven Thousand / 
Tim Engelhardt - Maks / 
Slam - Eterna Petrichor Remix / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.1K",fecha:"2017-09-16",link:"https://mcdn.podbean.com/mf/download/nvcdw2/332-HernanCattaneo-2017-09-16.mp3",tracklist:`Brett Longman - If i know what love is /
Landhouse, Raddantze - Die Einoel Giraffe vom Stadtrand /
Leif Muller - Holidays Everywhere /
Dimuth K - Achillea /
Ale Russo - Hold (Luis Kiverling & Diego Berrondo Remix) /
Daro - Take me away /
Marvin & Guy - Superior Conjunction /
Nicolas Rada - One-One Eleven Thousand /
Tim Engelhardt - Maks /`},{episodio:"333",titulo:"Resident / Episode 333 / Sep 23 2017",descripcion:`Totem Pole - Wonk I / 
Modd - Tryusolee / 
Roger Martinez - Chinguarime (Andrea Cassino Remix) / 
Forerunners - Watercolor / 
Anthony Georges Patrice - Divine destiny / 
BLANCAh - Talus / 
Federico Monachesi - This is not happening / 
Dale Middleton - One for man / 
Alfa State & Hamed Ansari - Still Around / 
Paul Deep - Sad but True (Nishan Lee Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"33.3K",fecha:"2017-09-23",link:"https://mcdn.podbean.com/mf/download/z32j6p/333-HernanCattaneo-2017-09-23.mp3",tracklist:`Totem Pole - Wonk I /
Modd - Tryusolee /
Roger Martinez - Chinguarime (Andrea Cassino Remix) /
Forerunners - Watercolor /
Anthony Georges Patrice - Divine destiny /
BLANCAh - Talus /
Federico Monachesi - This is not happening /
Dale Middleton - One for man /
Alfa State & Hamed Ansari - Still Around /`},{episodio:"334",titulo:"Resident / Episode 334 / Sep 30 2017",descripcion:`Adriak - My Roots (Andrew McDonnell Remix) / 
Bona Fide - Amirale / 
Totem Pole - Winter Knights / 
Nicolas Petracca - Amilur (Erdi Irmak Remix)\xA0/ 
Integral Bread - Dehesa (Juan Pablo Torrez Remix) / 
Nic Fanciulli - Little L (Feat. Eagles & Butterflies) / 
Anthem - Huso / 
Yuriy from Russia - Lafy in red / 
Kasper Koman - Into Little Pieces / 
East Cafe - The Moth And The Flame Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"31.4K",fecha:"2017-09-30",link:"https://mcdn.podbean.com/mf/download/9jqjbp/334-HernanCattaneo-2017-09-30.mp3",tracklist:`Adriak - My Roots (Andrew McDonnell Remix) /
Bona Fide - Amirale /
Totem Pole - Winter Knights /
Nicolas Petracca - Amilur (Erdi Irmak Remix)\xA0/
Integral Bread - Dehesa (Juan Pablo Torrez Remix) /
Nic Fanciulli - Little L (Feat. Eagles & Butterflies) /
Anthem - Huso /
Yuriy from Russia - Lafy in red /
Kasper Koman - Into Little Pieces /`},{episodio:"336",titulo:"Resident / Episode 336 / Oct 14 2017",descripcion:`Deep Within - Camino (feat. Josefina Barreix) / 
Yow - One Velo / 
Santiago Lezz - Boneco / 
Gabriel Carminatti - Last Minutes / 
Inertia - The System (Mir Omar Bootleg) / 
Matias Fernandez Vi\xF1a - Green Beautiful Eyes (Mariano Favre Remix) / 
Nichols - Ethereality / 
Nichols - Purple Patch / 
Depeche Mode - Cover Me (Dixon Remix) / 
Luis Kiverling - Fabricio / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"33.7K",fecha:"2017-10-14",link:"https://mcdn.podbean.com/mf/download/2845if/336-HernanCattaneo-2017-10-14.mp3",tracklist:`Deep Within - Camino (feat. Josefina Barreix) /
Yow - One Velo /
Santiago Lezz - Boneco /
Gabriel Carminatti - Last Minutes /
Inertia - The System (Mir Omar Bootleg) /
Matias Fernandez Vi\xF1a - Green Beautiful Eyes (Mariano Favre Remix) /
Nichols - Ethereality /
Nichols - Purple Patch /
Depeche Mode - Cover Me (Dixon Remix) /`},{episodio:"337",titulo:"Resident / Episode 337 / Oct 21 2017",descripcion:`LDMT - Innercity playground /
Rick Pier\xA0O\xA0Neil & Chris Gavin - Lost Elements /
Robert R Hardy - Interpolation (Marcelo Vasami Remix) /
Gabriel Sordo - Flight Back (Ethereal Mix) /
Chris Cargo - Watching (Michael A Balance Remix) /
Moshic - She Is A Symposion /
Juan Deminicis, The Blackout - Resurge (Robert R. Hardy Remix) /
Love Over Entropy - Land Before Time /
Donatello - Mandala /
Yotto - Off the Grid / Download episode on MP3 (Right click, save link as...)`,likes:"19",descargas:"31.3K",fecha:"2017-10-21",link:"https://mcdn.podbean.com/mf/download/3y6xqs/337-HernanCattaneo-2017-10-21.mp3",tracklist:`LDMT - Innercity playground /
Rick Pier\xA0O\xA0Neil & Chris Gavin - Lost Elements /
Robert R Hardy - Interpolation (Marcelo Vasami Remix) /
Gabriel Sordo - Flight Back (Ethereal Mix) /
Chris Cargo - Watching (Michael A Balance Remix) /
Moshic - She Is A Symposion /
Juan Deminicis, The Blackout - Resurge (Robert R. Hardy Remix) /
Love Over Entropy - Land Before Time /
Donatello - Mandala /`},{episodio:"338",titulo:"Resident / Episode 338 / Oct 28 2017",descripcion:`Pole Folder - Woodstock Sunset / 
Davis - Watu (Luca Bacchetti Endless Remix) / 
Sacred Heart - Soluna / 
Priya Sen & Aman - Stargaze / 
Criss Deeper - Constellati:on / 
Lanvary - Manticore (Uvo & Lautaro Varela Remix) / 
Sonic Union - Dragged Behind / 
GMJ - Inside a Mystery / 
The Freelancers - We Do it Best / 
Bjork - The Gate (Stereo underground Bootleg) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"32K",fecha:"2017-10-28",link:"https://mcdn.podbean.com/mf/download/9tphcu/338-HernanCattaneo-2017-10-28.mp3",tracklist:`Pole Folder - Woodstock Sunset /
Davis - Watu (Luca Bacchetti Endless Remix) /
Sacred Heart - Soluna /
Priya Sen & Aman - Stargaze /
Criss Deeper - Constellati:on /
Lanvary - Manticore (Uvo & Lautaro Varela Remix) /
Sonic Union - Dragged Behind /
GMJ - Inside a Mystery /
The Freelancers - We Do it Best /`},{episodio:"339",titulo:"Resident / Episode 339 / Nov 04 2017",descripcion:`Mobius Strum - Virus trip / 
Deibys Marquez Fernando Picon - Genesis (Creator Mix) / 
Yana Heinstein - 2049 (nexus6_dub) / 
Gabriel Sordo, Dubphone - Soft Call (Everything ok) / 
East Cafe - Aviophobia (Robert R. Hardy Above the Clouds Remix) / 
Kieran Apter & Leon Power - Drifting Spring / 
Shai T - Desert Story (Michael A Remix) / 
Despoin - Out revers (Santo Adriano Influenced) / 
Uccelli - Funk Cave / 
Subandrio & Danidu - Monsoon (Lucas Rossi Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"33.2K",fecha:"2017-11-04",link:"https://mcdn.podbean.com/mf/download/umv8rk/339-HernanCattaneo-2017-11-04.mp3",tracklist:`Mobius Strum - Virus trip /
Deibys Marquez Fernando Picon - Genesis (Creator Mix) /
Yana Heinstein - 2049 (nexus6_dub) /
Gabriel Sordo, Dubphone - Soft Call (Everything ok) /
East Cafe - Aviophobia (Robert R. Hardy Above the Clouds Remix) /
Kieran Apter & Leon Power - Drifting Spring /
Shai T - Desert Story (Michael A Remix) /
Despoin - Out revers (Santo Adriano Influenced) /
Uccelli - Funk Cave /`},{episodio:"340",titulo:"Resident / Episode 340 / Nov 11 2017",descripcion:`Fairchild - The Light In You / 
 Strinner - Breaking Point (Nick Devon Remix) / 
 Matter - Eastern Sunset / 
 Michael A - Look Closer / 
 Dynacom - Utop\xEDa / 
 Made in Paris - Impact / 
 Shosho - Barum's (Summer Brendon Collins & Swyft Remix) / 
 Dance Spirit - Headchange / 
 Re.you - Work It Now (Tiefschwarz Remix) / 
 Sasha - True (feat. Dems)/ Download episode on MP3 (Right click, save link as...)`,likes:"17",descargas:"32.3K",fecha:"2017-11-11",link:"https://mcdn.podbean.com/mf/download/izhuci/340-HernanCattaneo-2017-11-11.mp3",tracklist:`Fairchild - The Light In You /
Strinner - Breaking Point (Nick Devon Remix) /
Matter - Eastern Sunset /
Michael A - Look Closer /
Dynacom - Utop\xEDa /
Made in Paris - Impact /
Shosho - Barum's (Summer Brendon Collins & Swyft Remix) /
Dance Spirit - Headchange /
Re.you - Work It Now (Tiefschwarz Remix) /`},{episodio:"341",titulo:"Resident / Episode 341 / Nov 18 2017",descripcion:`Vangelis - Blade Runner - Ditian mix / 
Matter - Star Rock / 
Hassan Rassmy - We Come In Peace (Erich Von Kollar 'Night Drive' Remix) / 
Conures - Dankazura / 
Yousef feat. The Angel - Vanity (Rowee Remix) / 
George Yammine - Andromeda (Pacco & Rudy B Remix) / 
Jeremy Olander - Galheera / 
Gaston Ponte - Cube / 
Arno & Dirisio - Gizeh (Kaan Koray Remix) / 
Mita Mita - Lovely Cry / Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"33.6K",fecha:"2017-11-18",link:"https://mcdn.podbean.com/mf/download/mfk4ea/341-HernanCattaneo-2017-11-18.mp3",tracklist:`Vangelis - Blade Runner - Ditian mix /
Matter - Star Rock /
Hassan Rassmy - We Come In Peace (Erich Von Kollar 'Night Drive' Remix) /
Conures - Dankazura /
Yousef feat. The Angel - Vanity (Rowee Remix) /
George Yammine - Andromeda (Pacco & Rudy B Remix) /
Jeremy Olander - Galheera /
Gaston Ponte - Cube /
Arno & Dirisio - Gizeh (Kaan Koray Remix) /`},{episodio:"342",titulo:"Resident / Episode 342 / Nov 25 2017",descripcion:`Bachir Salloum - reebA / 
Analog Jungs - Occasio / 
New Order - Crystal (Robert R. Hardy Bootleg) / 
Sacred Heart - Soluna / 
After Burn - La Mandolina (Antrim Remix) / 
Isaac Differding - Katrina / 
Arturo Hevia - Inside 2017 / 
Sebastian Busto - Kairos (Lucas Rossi Dreamers Mix) / 
Alec Araujo & Aurokes - Levitation / 
Nicolas Pittaluga - Lovely Day [In Memoriam of Luis Kiverling] / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"32.7K",fecha:"2017-11-25",link:"https://mcdn.podbean.com/mf/download/wbf26w/342-HernanCattaneo-2017-11-25.mp3",tracklist:`Bachir Salloum - reebA /
Analog Jungs - Occasio /
New Order - Crystal (Robert R. Hardy Bootleg) /
Sacred Heart - Soluna /
After Burn - La Mandolina (Antrim Remix) /
Isaac Differding - Katrina /
Arturo Hevia - Inside 2017 /
Sebastian Busto - Kairos (Lucas Rossi Dreamers Mix) /
Alec Araujo & Aurokes - Levitation /`},{episodio:"343",titulo:"Resident / Episode 343 / Dec 02 2017",descripcion:`Kieran Apter & Leon Power - Drifting spring / 
Davidovitch - Violins of Tomorrow / 
Monje - Horizons Contour / 
Death On The Balcony - Solar lives / 
Cristian R - Beach Rainbows (Artem Kalalb Remix) / 
Marcelo Vasami -\xA0Clyde\xA0Forever / 
Tim Engelhardt - Beyond Time (Fideles Remix) / 
Erdi Irmak - Soul Searching / 
Uccelli - Blooming / 
Matter - We are dust / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"33.6K",fecha:"2017-12-02",link:"https://mcdn.podbean.com/mf/download/7mynv3/343-HernanCattaneo-2017-12-02.mp3",tracklist:`Kieran Apter & Leon Power - Drifting spring /
Davidovitch - Violins of Tomorrow /
Monje - Horizons Contour /
Death On The Balcony - Solar lives /
Cristian R - Beach Rainbows (Artem Kalalb Remix) /
Marcelo Vasami -\xA0Clyde\xA0Forever /
Tim Engelhardt - Beyond Time (Fideles Remix) /
Erdi Irmak - Soul Searching /
Uccelli - Blooming /`},{episodio:"344",titulo:"Resident / Episode 344 / Dec 09 2017",descripcion:`Rocco - Be Quiet! (Klement Bonelli Remix) / 
Rowee feat. KnowKontrol - Amaranto / 
Subandrio - Ceylon Born / 
 Kamilo Sanclemente - Azure / 
Musumeci - Mood organs / 
Stereo Underground - Flashes feat. Sealine (Extended mix) / 
Steve Bug & Langenberg - Chord cluster / 
Unknown - 13500 / 
Hassan Rassmy - We Come In Peace (Erich Von Kollar 'Night Drive' Remix) / 
Sarcasmo - Epoca / Download episode on MP3 (Right click, save link as...)`,likes:"15",descargas:"34.9K",fecha:"2017-12-09",link:"https://mcdn.podbean.com/mf/download/ah7fd9/344-HernanCattaneo-2017-12-09.mp3",tracklist:`Rocco - Be Quiet! (Klement Bonelli Remix) /
Rowee feat. KnowKontrol - Amaranto /
Subandrio - Ceylon Born /
Kamilo Sanclemente - Azure /
Musumeci - Mood organs /
Stereo Underground - Flashes feat. Sealine (Extended mix) /
Steve Bug & Langenberg - Chord cluster /
Unknown - 13500 /
Hassan Rassmy - We Come In Peace (Erich Von Kollar 'Night Drive' Remix) /`},{episodio:"346",titulo:"Resident / Episode 346 - XMas Special / Dec 23 2017",descripcion:"Live@Woodstock69 - July 2017 // Xmas Special Download episode on MP3 (Right click, save link as...)",likes:"59",descargas:"66.1K",fecha:"2017-12-23",link:"https://mcdn.podbean.com/mf/download/hjnn8i/346-HernanCattaneo-live_Woodstock69-July2017-2017-12-23.mp3"},{episodio:"347",titulo:"Resident / Episode 347 / Dec 30 2017",descripcion:`Sabo - Singing Game (Acid Pauli's Singing Sequencer Remix) 
 Bagabond - Restless warrior 
 Domenic Cappello - Rain 
 Esteban Liebig - 10am 
 Sebastian Busto - Budapest 
 JPA - Visions Of You (Jamie Stevens Remix) 
 Subconcius Tales- Fly High - Rick Pier O neil Remix 
 David Calo - Chronomatic (Subconscious Tales Remix) 
 Nicholas Van Orton - Padme (GMJ Remix) 
 D-Rhapsody - Mad spirals Download episode on MP3 (Right click, save link as...)`,likes:"17",descargas:"35.5K",fecha:"2017-12-30",link:"https://mcdn.podbean.com/mf/download/ksaw5b/347-HernanCattaneo-2017-12-30.mp3",tracklist:`Sabo - Singing Game (Acid Pauli's Singing Sequencer Remix)
Bagabond - Restless warrior
Domenic Cappello - Rain
Esteban Liebig - 10am
Sebastian Busto - Budapest
JPA - Visions Of You (Jamie Stevens Remix)
Subconcius Tales- Fly High - Rick Pier O neil Remix
David Calo - Chronomatic (Subconscious Tales Remix)
Nicholas Van Orton - Padme (GMJ Remix)`},{episodio:"348",titulo:"Resident / Episode 348 / Jan 06 2018",descripcion:`Guy Gerber - Humming Bird Blues / 
Guy Gerber - What To Do / 
Joeski & Doc Martin - Vajra feat. Lillia / 
dubspeeka - Enter theme / 
GuyRo feat. Chris Sterio - Zen (Matter Remix) / 
Kevin Toro & Maximiliano Haas - Banzai / 
Matter - Energon / 
Ben B\xF6hmer - After earth / 
Andre Gazolla, ZAC - Ritual / 
Lio Q - A Non Domino (RPO Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"39.5K",fecha:"2018-01-06",link:"https://mcdn.podbean.com/mf/download/rjibbp/348-HernanCattaneo-2018-01-06.mp3",tracklist:`Guy Gerber - Humming Bird Blues /
Guy Gerber - What To Do /
Joeski & Doc Martin - Vajra feat. Lillia /
dubspeeka - Enter theme /
GuyRo feat. Chris Sterio - Zen (Matter Remix) /
Kevin Toro & Maximiliano Haas - Banzai /
Matter - Energon /
Ben B\xF6hmer - After earth /
Andre Gazolla, ZAC - Ritual /`},{episodio:"349",titulo:"Resident / Episode 349 / Jan 13 2018",descripcion:`Filter Bear - Never In (Filter Bear Midnight Swim Reimagination) / 
Filter Bear - Never In / 
Matteo Bruscagin - Avorio / 
Leonardo Roth & Tomas Novelli - Seagate / 
John Cosani - Skull / 
Phoenix - Rise Up 20 (Cool Gold Essential Dub) / 
Andre Absolut - ID (Tash remix) / 
Miraculum - Intimacy (Gaston Ponte Remix) / 
Joy Marquez - Stranger Things (RPO Remix) / 
Andhim - Huso (Armonica Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"16",descargas:"38.3K",fecha:"2018-01-13",link:"https://mcdn.podbean.com/mf/download/xcqw93/349-HernanCattaneo-2018-01-13.mp3",tracklist:`Filter Bear - Never In (Filter Bear Midnight Swim Reimagination) /
Filter Bear - Never In /
Matteo Bruscagin - Avorio /
Leonardo Roth & Tomas Novelli - Seagate /
John Cosani - Skull /
Phoenix - Rise Up 20 (Cool Gold Essential Dub) /
Andre Absolut - ID (Tash remix) /
Miraculum - Intimacy (Gaston Ponte Remix) /
Joy Marquez - Stranger Things (RPO Remix) /`},{episodio:"350",titulo:"Resident / Episode 350 / Jan 20 2018",descripcion:`Adisyn - Digital heart / 
Adisyn - Departure / 
Sam Farsio, Frederick Stone - Twisted Feet (Santiago Garcia Interpretation Mix) / 
Kevin Di Serna - Horizons / 
Marabou - 3Hours / 
Axelara - The Other Side / 
Mulder - Elon / 
Luciano Vaninetti - Kua / 
Jody Wisternoff - For All Time feat. Hendrik Burkhard / 
Henry Saiz - September (Endless Summer Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"24",descargas:"36.1K",fecha:"2018-01-20",link:"https://mcdn.podbean.com/mf/download/5tpjnp/350-HernanCattaneo-2018-01-20.mp3",tracklist:`Adisyn - Digital heart /
Adisyn - Departure /
Sam Farsio, Frederick Stone - Twisted Feet (Santiago Garcia Interpretation Mix) /
Kevin Di Serna - Horizons /
Marabou - 3Hours /
Axelara - The Other Side /
Mulder - Elon /
Luciano Vaninetti - Kua /
Jody Wisternoff - For All Time feat. Hendrik Burkhard /`},{episodio:"351",titulo:"Resident / Episode 351 / Jan 27 2018",descripcion:`Izzet - Shadows & Dust / 
MONAX - String Theory (Sonic Union & Bastards of Funk Remix) / 
Bachir Salloum - OYA / 
Lucas Rossi - Dont Fall in / 
GMJ - Push Through (Andrea Cassino Remix) / 
Nicolas Ruiz - Vision (Lucas Rossi Remix) / 
Dave Seaman - Virgo Ryzin (Joeski Remix) / 
Sebastian Busto - Chronos (Nishan Lee Remix) / 
Tinlicker feat. Thomas Oliver - Nothing Without You (Applescal Remix) / 
Esensides - Teasing Time / Download episode on MP3 (Right click, save link as...)`,likes:"16",descargas:"36.8K",fecha:"2018-01-27",link:"https://mcdn.podbean.com/mf/download/8bf356/351-HernanCattaneo-2018-01-27.mp3",tracklist:`Izzet - Shadows & Dust /
MONAX - String Theory (Sonic Union & Bastards of Funk Remix) /
Bachir Salloum - OYA /
Lucas Rossi - Dont Fall in /
GMJ - Push Through (Andrea Cassino Remix) /
Nicolas Ruiz - Vision (Lucas Rossi Remix) /
Dave Seaman - Virgo Ryzin (Joeski Remix) /
Sebastian Busto - Chronos (Nishan Lee Remix) /
Tinlicker feat. Thomas Oliver - Nothing Without You (Applescal Remix) /`},{episodio:"352",titulo:"Resident / Episode 352 / Feb 03 2018",descripcion:`Sebastian Busto - The Life We Deserve / 
Roy Rosenfeld - When We Were Innocent / 
Matias Chilano - Timeline / 
Paul Kardos-Main Theme (Dimuth K Remix) / 
Slumber - Temple (Chris Fortier Fully Executed Remix) / 
Marcus Worgull - Seen / 
Einmusik Olivier Weiter - Zebra (Einmusik Remix) / 
Moderon, Apora - Sandcastle Empire / 
LOM - The Dream / 
Mike Tohr - Winter Lakes / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"36.9K",fecha:"2018-02-03",link:"https://mcdn.podbean.com/mf/download/b7c75u/352-HernanCattaneo-2018-02-03.mp3",tracklist:`Sebastian Busto - The Life We Deserve /
Roy Rosenfeld - When We Were Innocent /
Matias Chilano - Timeline /
Paul Kardos-Main Theme (Dimuth K Remix) /
Slumber - Temple (Chris Fortier Fully Executed Remix) /
Marcus Worgull - Seen /
Einmusik Olivier Weiter - Zebra (Einmusik Remix) /
Moderon, Apora - Sandcastle Empire /
LOM - The Dream /`},{episodio:"353",titulo:"Resident / Episode 353 / Feb 10 2018",descripcion:`The Antelope - Mikial / 
Domenic Cappello - Rain / 
Doyeq - Damp Thoughts (Love Over Entropy's M is for Moody Remix) / 
Portamentum - In Feras / 
Moshic - Love express / 
Jorgio Kioris - Linda (Kastis Torrau Remix) / 
Eco Driftmoon - Trust In The Wind (Mir Omar Remix) / 
Christ Malvin & Ivan Sandhas - Same Day (Priya Sen & Aman Anand Remix) / 
Juan Sapia - Sea Of Desolation / 
Raxon - Juvia / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"35.8K",fecha:"2018-02-10",link:"https://mcdn.podbean.com/mf/download/nadqbg/353-HernanCattaneo-2018-02-10.mp3",tracklist:`The Antelope - Mikial /
Domenic Cappello - Rain /
Doyeq - Damp Thoughts (Love Over Entropy's M is for Moody Remix) /
Portamentum - In Feras /
Moshic - Love express /
Jorgio Kioris - Linda (Kastis Torrau Remix) /
Eco Driftmoon - Trust In The Wind (Mir Omar Remix) /
Christ Malvin & Ivan Sandhas - Same Day (Priya Sen & Aman Anand Remix) /
Juan Sapia - Sea Of Desolation /`},{episodio:"354",titulo:"Resident / Episode 354 / Feb 17 2018",descripcion:`Xavier Fux - Try ball / 
 Xavier Fux - 19S / 
 GMJ - Push Through (Juan Deminicis Remix) / 
 Facundo Mohrr - Under (Staves Remix) / 
 GuyRo - Evenflow (Robert R. Hardy Remix) / 
 Claudio Cornejo, Bastian Mark - Journey to the Pyramid (Julian Rodriguez Remix) / 
 Jonas Saalbach - April (Simon Doty Remix) / 
 Budakid & Jonas Saalbach - Nautqiue / 
 Nhar - Light Radius / 
 DJ Bird - Arabic Theme (Dimuth K Remix) Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"37.1K",fecha:"2018-02-17",link:"https://mcdn.podbean.com/mf/download/3yy9x3/354-HernanCattaneo-2018-02-17.mp3",tracklist:`Xavier Fux - Try ball /
Xavier Fux - 19S /
GMJ - Push Through (Juan Deminicis Remix) /
Facundo Mohrr - Under (Staves Remix) /
GuyRo - Evenflow (Robert R. Hardy Remix) /
Claudio Cornejo, Bastian Mark - Journey to the Pyramid (Julian Rodriguez Remix) /
Jonas Saalbach - April (Simon Doty Remix) /
Budakid & Jonas Saalbach - Nautqiue /
Nhar - Light Radius /`},{episodio:"356",titulo:"Resident / Episode 356 / Mar 03 2018",descripcion:`Lazaros - Sympan / 
Facundo Mohrr - Blame / 
Paul Hazendonk - Derelicte / 
Monje -Juno / 
Sebastien Leger - Lost miracle / 
Matias Chilano - Nothing To Do / 
Hot TuneiK Presents OneTwo - O'Girondo (Robert R. Hardy Remix) / 
Blue Cell - Depeche Me (Pacco & Rudy B Remix) / 
Pedr\xE4da - Stylactique (Original) / 
Desaturate - Wanderer / Download episode on MP3 (Right click, save link as...)`,likes:"15",descargas:"37.2K",fecha:"2018-03-03",link:"https://mcdn.podbean.com/mf/download/ew5bn3/356-HernanCattaneo-2018-03-03.mp3",tracklist:`Lazaros - Sympan /
Facundo Mohrr - Blame /
Paul Hazendonk - Derelicte /
Monje -Juno /
Sebastien Leger - Lost miracle /
Matias Chilano - Nothing To Do /
Hot TuneiK Presents OneTwo - O'Girondo (Robert R. Hardy Remix) /
Blue Cell - Depeche Me (Pacco & Rudy B Remix) /
Pedr\xE4da - Stylactique (Original) /`},{episodio:"357",titulo:"Resident / Episode 357 / Mar 10 2018",descripcion:`Doyeq - Cathedral (Audiofly Remix) / 
Kostya Outta - Audio mix 2 / 
Tech D - Gravity (Michael A Remix) / 
Esko -Pop Culture / 
Praveen Achary - Sonar / 
Gabriel Sordo - Strangers / 
Portable Sunsets - Straylight (Dave DK Remix) / 
Jonas Saalbach - April / 
Day by day - KoiFish (Rick Pier O'Neil Remix) / 
Tinlicker feat. Thomas Oliver - Nothing Without You (Applescal Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"35.2K",fecha:"2018-03-10",link:"https://mcdn.podbean.com/mf/download/22iihz/357-HernanCattaneo-2018-03-10.mp3",tracklist:`Doyeq - Cathedral (Audiofly Remix) /
Kostya Outta - Audio mix 2 /
Tech D - Gravity (Michael A Remix) /
Esko -Pop Culture /
Praveen Achary - Sonar /
Gabriel Sordo - Strangers /
Portable Sunsets - Straylight (Dave DK Remix) /
Jonas Saalbach - April /
Day by day - KoiFish (Rick Pier O'Neil Remix) /`},{episodio:"358",titulo:"Resident / Episode 358 / Mar 17 2018",descripcion:`Reebot - Caminando (Y\xF6urr edit) / 
Alejo Demian - Midnight Moments / 
Octave - Electrobat / 
Federico Monarchesi - Mondschein / 
Nicolas Navarro & Tuco - Contrast (Niceshot & Armando Guerrero Remix) / 
Dimuth K , Shannon Davin - Horus / 
RPO - Kan Balam (A-Jay (SL) Remix) / 
Zoo Brazil - Moments / 
Paul Kalkbrenner - Peet (Fabri Lopez Unofficial Remix) / 
Kamilo Sanclemente - Hidden Thoughts / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"37.5K",fecha:"2018-03-17",link:"https://mcdn.podbean.com/mf/download/mn4grq/358-HernanCattaneo-2018-03-17.mp3",tracklist:`Reebot - Caminando (Y\xF6urr edit) /
Alejo Demian - Midnight Moments /
Octave - Electrobat /
Federico Monarchesi - Mondschein /
Nicolas Navarro & Tuco - Contrast (Niceshot & Armando Guerrero Remix) /
Dimuth K , Shannon Davin - Horus /
RPO - Kan Balam (A-Jay (SL) Remix) /
Zoo Brazil - Moments /
Paul Kalkbrenner - Peet (Fabri Lopez Unofficial Remix) /`},{episodio:"359",titulo:"Resident / Episode 359 / Mar 24 2018",descripcion:`Apparat feat. Soap & Skin - Goodbye (Isaak Escamilla '33' Rework) /
Lucas Rossi - Never More /
Octave, Lulius - Mind over body /
Mind Against - Days gone /
Rolbac - Loon (Zigan Aldi Remix) /
Augenblick - Haustlegur (Alec Araujo Remix) /
Nicolas Rada - Tempelhof (Dmitry Molosh Remix) /
Renaissance - Dharmalogy /
BRYZ - Solar /
Martin Roth - Guude Lane Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"37.6K",fecha:"2018-03-24",link:"https://mcdn.podbean.com/mf/download/2d9x2b/359-HernanCattaneo-2018-03-24.mp3",tracklist:`Apparat feat. Soap & Skin - Goodbye (Isaak Escamilla '33' Rework) /
Lucas Rossi - Never More /
Octave, Lulius - Mind over body /
Mind Against - Days gone /
Rolbac - Loon (Zigan Aldi Remix) /
Augenblick - Haustlegur (Alec Araujo Remix) /
Nicolas Rada - Tempelhof (Dmitry Molosh Remix) /
Renaissance - Dharmalogy /
BRYZ - Solar /`},{episodio:"360",titulo:"Resident / Episode 360 / Mar 31 2018",descripcion:`Markus Hayner - Thursday / 
Sahar Z & Vic F - Oliie / 
Amadori - I'd Rather Fly / 
Stelios Vassiloudis - Looking California / 
East Cafe - Matektanar / 
Facundo Mohrr - Blame / 
Just her - Desire / 
Dynacom - Demente (Dimuth K Reverie Mix) / 
Alex O Rion - Voices (Ri Za Remix) / 
Kamilo Sanclemente - Gemma / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"37K",fecha:"2018-03-31",link:"https://mcdn.podbean.com/mf/download/qvkhdi/360-HernanCattaneo-2018-03-31.mp3",tracklist:`Markus Hayner - Thursday /
Sahar Z & Vic F - Oliie /
Amadori - I'd Rather Fly /
Stelios Vassiloudis - Looking California /
East Cafe - Matektanar /
Facundo Mohrr - Blame /
Just her - Desire /
Dynacom - Demente (Dimuth K Reverie Mix) /
Alex O Rion - Voices (Ri Za Remix) /`},{episodio:"361",titulo:"Resident / Episode 361 / Apr 07 2018",descripcion:`Weekend World- The Word (Diego Berrondo Edit) / 
Danny Howells - Earthlings / 
Roger Martinez - Open (Mononoid Remix) / 
Tim Penner - Lost Again (Mir Omar Remix) / 
Amonita - Rubicunda / 
Andhim - Stay Close to me feat Hogni / 
Kamilo Sanclemente - Mensae / 
Antrim - Floating Point / 
TD - What If (M\xF8nje Remix) / 
Porra - Casa Cordoba / Download episode on MP3 (Right click, save link as...)`,likes:"46",descargas:"39.5K",fecha:"2018-04-07",link:"https://mcdn.podbean.com/mf/download/bh3vvp/361-HernanCattaneo-2018-04-07.mp3",tracklist:`Weekend World- The Word (Diego Berrondo Edit) /
Danny Howells - Earthlings /
Roger Martinez - Open (Mononoid Remix) /
Tim Penner - Lost Again (Mir Omar Remix) /
Amonita - Rubicunda /
Andhim - Stay Close to me feat Hogni /
Kamilo Sanclemente - Mensae /
Antrim - Floating Point /
TD - What If (M\xF8nje Remix) /`},{episodio:"362",titulo:"Resident / Episode 362 / Apr 14 2018",descripcion:`Lana Del Rey - Shades of Cool (Alfa State & Mystic District Edit) / 
Luke Sambe - Sooti (Eli Nissan Remix) / 
Roger Martinez - Oversoul (Graziano Raffa Rmx) / 
Priya Sen & Aman Anand - targaze (Rick Pier O'Neil Remix) / 
Timid Boy - Gangsta (Oxia Remix) / 
Osaya - Nick Muir remix / 
Magit Cacoon - Aussi (DAVI Remix) / 
Katzen - Perfume (Dynacom Unofficial Remix) / 
Marmion - Sch\xF6neberg (Tim Engelhardt) / 
London Grammar - Rooting For You (Tripswitch Unofficial Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"41K",fecha:"2018-04-14",link:"https://mcdn.podbean.com/mf/download/z9ajs7/362-HernanCattaneo-2018-04-14.mp3",tracklist:`Lana Del Rey - Shades of Cool (Alfa State & Mystic District Edit) /
Luke Sambe - Sooti (Eli Nissan Remix) /
Roger Martinez - Oversoul (Graziano Raffa Rmx) /
Priya Sen & Aman Anand - targaze (Rick Pier O'Neil Remix) /
Timid Boy - Gangsta (Oxia Remix) /
Osaya - Nick Muir remix /
Magit Cacoon - Aussi (DAVI Remix) /
Katzen - Perfume (Dynacom Unofficial Remix) /
Marmion - Sch\xF6neberg (Tim Engelhardt) /`},{episodio:"363",titulo:"Resident / Episode 363 / Apr 21 2018",descripcion:`Active Child - Johnny Belinda (MDK Remix) / 
SpeakOf & Santini - Melodrama (Navar Remix) / 
Cid Inc - Abyss / 
Dynacom - Demente (Dimuth K Reverie ) / 
Memory - Surrender / 
Analog Jungs - Lunar / 
Bog - Space Knights / 
Bog - Starman / 
Kapote - Tonite (Marvin & Guy Obscure Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"44",descargas:"44.3K",fecha:"2018-04-21",link:"https://mcdn.podbean.com/mf/download/2kzp6d/363-HernanCattaneo-2018-04-21.mp3",tracklist:`Active Child - Johnny Belinda (MDK Remix) /
SpeakOf & Santini - Melodrama (Navar Remix) /
Cid Inc - Abyss /
Dynacom - Demente (Dimuth K Reverie ) /
Memory - Surrender /
Analog Jungs - Lunar /
Bog - Space Knights /
Bog - Starman /`},{episodio:"364",titulo:"Resident / Episode 364 / Apr 28 2018",descripcion:`Rey & Kjavik - Saraswati (Armonica Remix) / 
DAVI - Boarding Call / 
Dimuth K, A - Jay (SL) - Yavapai / 
Eze Ramirez - 3 de enero / 
DJ Paul - Everything We Know Its Wrong / 
Kasper Koman - The Construct / 
Memory - Sabba / 
Pro4ound - Ancient Times (golan zocher remix) / 
Paul Kalkbrenner - Peet (Fabri Lopez Unofficial Remix) / 
Nick Warren & Tripswitch - Voight Kampff (Cid Inc. Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"37.8K",fecha:"2018-04-28",link:"https://mcdn.podbean.com/mf/download/cxjzb9/364-HernanCattaneo-2018-04-28.mp3",tracklist:`Rey & Kjavik - Saraswati (Armonica Remix) /
DAVI - Boarding Call /
Dimuth K, A - Jay (SL) - Yavapai /
Eze Ramirez - 3 de enero /
DJ Paul - Everything We Know Its Wrong /
Kasper Koman - The Construct /
Memory - Sabba /
Pro4ound - Ancient Times (golan zocher remix) /
Paul Kalkbrenner - Peet (Fabri Lopez Unofficial Remix) /`},{episodio:"366",titulo:"Resident / Episode 366 / May 12 2018",descripcion:`H\xE6los - Oracle (Erdi Irmak Remix) / 
Volen Sentir - Veluwe / 
Golan Zocher & Kamilo Sanclemente - Getting Closer (feat. Amber Long) / 
Goraieb - Echoes From The Shore / 
Matan Casi & Ziger - Cling Clong / 
Trikk - Devila / 
Charlotte Gainsbourg - Les Oxalis (Alan Braxe Remix) / 
EANP - Togheterness / 
ZAC, Gabriel Carminatti - Rutile / 
Darko De Jan feat. Esphyr - Clairvoyant (Matter remix) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"39.3K",fecha:"2018-05-12",link:"https://mcdn.podbean.com/mf/download/3y3m32/366-HernanCattaneo-2018-05-12.mp3",tracklist:`H\xE6los - Oracle (Erdi Irmak Remix) /
Volen Sentir - Veluwe /
Golan Zocher & Kamilo Sanclemente - Getting Closer (feat. Amber Long) /
Goraieb - Echoes From The Shore /
Matan Casi & Ziger - Cling Clong /
Trikk - Devila /
Charlotte Gainsbourg - Les Oxalis (Alan Braxe Remix) /
EANP - Togheterness /
ZAC, Gabriel Carminatti - Rutile /`},{episodio:"367",titulo:"Resident / Episode 367 / May 19 2018",descripcion:`Squire feat Vette - Wish It Was Easy / 
Verche - Aphelion / 
Volen Sentir - Na Dvore Dozhd' / 
Luis Kiverling - Dia de Mariscal (East Cafe Remix) / 
Joy Marquez - Be free / 
Paul Sawyer - Nemesis (Nick Muir Mix) / 
Memory, Ezequiel Arias - Shen / 
East Cafe - The Way You Left Us (Tripswitch Remix) / 
Chaty & Alerch - Morr / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"39K",fecha:"2018-05-19",link:"https://mcdn.podbean.com/mf/download/7kd8ma/367-HernanCattaneo-2018-05-19.mp3",tracklist:`Squire feat Vette - Wish It Was Easy /
Verche - Aphelion /
Volen Sentir - Na Dvore Dozhd' /
Luis Kiverling - Dia de Mariscal (East Cafe Remix) /
Joy Marquez - Be free /
Paul Sawyer - Nemesis (Nick Muir Mix) /
Memory, Ezequiel Arias - Shen /
East Cafe - The Way You Left Us (Tripswitch Remix) /`},{episodio:"368",titulo:"Resident / Episode 368 / May 26 2018",descripcion:`Thodoris Triantafilou - Scorn / 
EANP - Communication / 
Catz 'n Dogz - Elixir (Jonathan Kaspar Remix) / 
Kamilo Sanclemente - Elixir / 
Banco De Gaia - Heliopolis (Framewerk Rewerk) / 
Peter Makto & Gregory S - Nightcrawler (Mihai Popoviciu Remix) / 
Amari & Nico Morano ft. Jinadu - Desire (Eelke Kleijn Remix) / 
Budakid, Nordfold - She talks / 
Carl Craig - The Melody (Henrik Schwarz Remix) / 
Paul Kalkbrenner - Part eight / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"39.1K",fecha:"2018-05-26",link:"https://mcdn.podbean.com/mf/download/m8svt7/368-HernanCattaneo-2018-05-26.mp3",tracklist:`Thodoris Triantafilou - Scorn /
EANP - Communication /
Catz 'n Dogz - Elixir (Jonathan Kaspar Remix) /
Kamilo Sanclemente - Elixir /
Banco De Gaia - Heliopolis (Framewerk Rewerk) /
Peter Makto & Gregory S - Nightcrawler (Mihai Popoviciu Remix) /
Amari & Nico Morano ft. Jinadu - Desire (Eelke Kleijn Remix) /
Budakid, Nordfold - She talks /
Carl Craig - The Melody (Henrik Schwarz Remix) /`},{episodio:"369",titulo:"Resident / Episode 369 / Jun 02 2018",descripcion:`Blondish - Wizard Of Love (Modular Project Remix) / 
Timo Maas, Basti Grub & Eric Volta - We were riding high / 
&ME, Rampa, Adam Port - Muy\xC3\xA8 (Black Coffee Remix) / 
Graziano Raffa -\xA0The Replicant / 
DJ Paul - Mendoza (Second Part Mix) / 
Geist - Tiny Little Things (Tripswitch Remix) / 
Kasper Koman - March / 
Budakid, Nordfold - She talks / 
Chab - Closer to me (Baunder remix) / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"41.6K",fecha:"2018-06-02",link:"https://mcdn.podbean.com/mf/download/cfsm23/369-HernanCattaneo-2018-06-02.mp3",tracklist:`Blondish - Wizard Of Love (Modular Project Remix) /
Timo Maas, Basti Grub & Eric Volta - We were riding high /
&ME, Rampa, Adam Port - Muy\xC3\xA8 (Black Coffee Remix) /
Graziano Raffa -\xA0The Replicant /
DJ Paul - Mendoza (Second Part Mix) /
Geist - Tiny Little Things (Tripswitch Remix) /
Kasper Koman - March /
Budakid, Nordfold - She talks /`},{episodio:"370",titulo:"Resident / Episode 370 / Jun 09 2018",descripcion:`Radiohead - Weird Fishes (Lucas Rossi \xA8From The Bottom\xA8 Bootleg) / 
Roy Rosenfeld - Helena / 
Darlin Vlys - Learned to hide feat. Northern Lite (Chaim remix) / 
Eelke Kleijn - The Calling / 
Albert R. - Pitchblack (Hot TuneiK Remix) / 
Alejandro Manso - Forest Dreamer (John Cosani Remix) / 
Luis Kiverling - Dia de Mariscal (Andrea Cassino Remix) / 
Tim Green - Echo / 
Adana Twins - Jupiter / 
Pional - Tempest / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"40.8K",fecha:"2018-06-09",link:"https://mcdn.podbean.com/mf/download/zdy9eb/370-HernanCattaneo-2018-06-09.mp3",tracklist:`Radiohead - Weird Fishes (Lucas Rossi \xA8From The Bottom\xA8 Bootleg) /
Roy Rosenfeld - Helena /
Darlin Vlys - Learned to hide feat. Northern Lite (Chaim remix) /
Eelke Kleijn - The Calling /
Albert R. - Pitchblack (Hot TuneiK Remix) /
Alejandro Manso - Forest Dreamer (John Cosani Remix) /
Luis Kiverling - Dia de Mariscal (Andrea Cassino Remix) /
Tim Green - Echo /
Adana Twins - Jupiter /`},{episodio:"371",titulo:"Resident / Episode 371 / Jun 16 2018",descripcion:`Hauy & Jonathan Rosa - The Skeleton Men / 
Nicolas Ruiz - Vision (Matias Chilano Remix) / 
Ost & Kjex - Private dancer / 
Marcelo Vasami - Free play / 
Dynacom - Black Lion (Andrea Cassino Remix) / 
Draso - Strum (Cid Inc. Remix) / 
Midway - Amazon (Mir Omar Remix) / 
Fort Romeau - Pablo / 
Hay - Reverie (Peter Martin remix) / 
Oxia - Sydmel / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"39.1K",fecha:"2018-06-16",link:"https://mcdn.podbean.com/mf/download/vguxuu/371-HernanCattaneo-2018-06-16.mp3",tracklist:`Hauy & Jonathan Rosa - The Skeleton Men /
Nicolas Ruiz - Vision (Matias Chilano Remix) /
Ost & Kjex - Private dancer /
Marcelo Vasami - Free play /
Dynacom - Black Lion (Andrea Cassino Remix) /
Draso - Strum (Cid Inc. Remix) /
Midway - Amazon (Mir Omar Remix) /
Fort Romeau - Pablo /
Hay - Reverie (Peter Martin remix) /`},{episodio:"372",titulo:"Resident / Episode 372 / Jun 23 2018",descripcion:`Sabb, DAVI - Full Moon Tale Feat. DAVI / 
Deeparture (nl) - Trinidad (Silinder Remix) / 
Animal Trainer - Rigpa / 
Perbells - Universo / 
Orsen - Modified / 
Sasha - Cloud Cuckoo (Jaap Ligthart Edit) / 
Tunnelvisions - Ottokar's Sky / 
Kasper Koman - Wonderland / 
Matter - We Are Dust (Subandrio Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"35.5K",fecha:"2018-06-23",link:"https://mcdn.podbean.com/mf/download/c6fkrz/372-HernanCattaneo-2018-06-23.mp3",tracklist:`Sabb, DAVI - Full Moon Tale Feat. DAVI /
Deeparture (nl) - Trinidad (Silinder Remix) /
Animal Trainer - Rigpa /
Perbells - Universo /
Orsen - Modified /
Sasha - Cloud Cuckoo (Jaap Ligthart Edit) /
Tunnelvisions - Ottokar's Sky /
Kasper Koman - Wonderland /`},{episodio:"373",titulo:"Resident / Episode 373 / Jun 30 2018",descripcion:`Ost & Kjex - Nightingale / 
K Nass - Praiano / 
Muhammed Felfel - Concepts of Justice / 
Brian Cid -\xA0ID / 
Orsen - Driftwood / 
Michael A - Nothing Is Useless / 
Dark Soul Project Pres. Anatolian - Touching The Sky / 
Thankyou City - We All Look A Little Weird Naked (Roger Martinez Remix) / 
Cafe Del Mar (Tale Of Us Renaissance Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"36.8K",fecha:"2018-06-30",link:"https://mcdn.podbean.com/mf/download/an4pvj/373-HernanCattaneo-2018-06-30.mp3",tracklist:`Ost & Kjex - Nightingale /
K Nass - Praiano /
Muhammed Felfel - Concepts of Justice /
Brian Cid -\xA0ID /
Orsen - Driftwood /
Michael A - Nothing Is Useless /
Dark Soul Project Pres. Anatolian - Touching The Sky /
Thankyou City - We All Look A Little Weird Naked (Roger Martinez Remix) /`},{episodio:"374",titulo:"Resident / Episode 374 / Jul 07 2018",descripcion:`Anja Schneider - All I See (Butch Dub) / 
Cazap & Boskis, Esteban Abramovich, Joaqui Gentil & Xris Garcia Rios - Before Paris / 
Ricosh\xEBi - Something / 
Formatic- Not Enough Data to Feel / 
Matias Larrosa, Martin Gardoqui, Bramuss, Samuel Dezus - Aurora Borealis / 
Martin Tolosa - Life on Mars / 
Atalaia - Talking Pictures / 
Brigado Crew & Crisstiano - Nebular / 
Eli Nissan - Everlast (Khen remix) / 
Richie Blacker - Mess express / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"37.3K",fecha:"2018-07-07",link:"https://mcdn.podbean.com/mf/download/kpnqm5/374-HernanCattaneo-2018-07-07.mp3",tracklist:`Anja Schneider - All I See (Butch Dub) /
Cazap & Boskis, Esteban Abramovich, Joaqui Gentil & Xris Garcia Rios - Before Paris /
Ricosh\xEBi - Something /
Formatic- Not Enough Data to Feel /
Matias Larrosa, Martin Gardoqui, Bramuss, Samuel Dezus - Aurora Borealis /
Martin Tolosa - Life on Mars /
Atalaia - Talking Pictures /
Brigado Crew & Crisstiano - Nebular /
Eli Nissan - Everlast (Khen remix) /`},{episodio:"376",titulo:"Resident / Episode 376 / Jul 21 2018",descripcion:`Robbie Akbal - Lunar 3 (Superlounge Remix) / 
Rick Pier O'Neil - Abandoned Planet (GMJ Remix) / 
Madloch - Nordic Noir (Petar Dundov Remix) / 
Nishan Lee - Modano / 
The Cinematic Orchestra - Arrival of the Birds (Olivier Weiter edit) / 
Kamilo Sanclemente, Dabeat - Dogma / 
Test Tone - Aurora (Guy Mantzur Remix) / 
Monkey Safari- Boulogne Billancourt (Musumeci Remix) / 
Alex ORion - Rubicon / 
Guy Mantzur & Lonya - Dynasty feat Adam Gorlizki / Download episode on MP3 (Right click, save link as...)`,likes:"19",descargas:"36.5K",fecha:"2018-07-21",link:"https://mcdn.podbean.com/mf/download/spwc25/376-HernanCattaneo-2018-07-21.mp3",tracklist:`Robbie Akbal - Lunar 3 (Superlounge Remix) /
Rick Pier O'Neil - Abandoned Planet (GMJ Remix) /
Madloch - Nordic Noir (Petar Dundov Remix) /
Nishan Lee - Modano /
The Cinematic Orchestra - Arrival of the Birds (Olivier Weiter edit) /
Kamilo Sanclemente, Dabeat - Dogma /
Test Tone - Aurora (Guy Mantzur Remix) /
Monkey Safari- Boulogne Billancourt (Musumeci Remix) /
Alex ORion - Rubicon /`},{episodio:"377",titulo:"Resident / Episode 377 / Jul 28 2018",descripcion:`\xD6ona Dahl & Giddyhead - Baba (Lee Jones Remix) / 
Audioglider - Accidental Alchemy / 
SLP - Forbidden Fruit (Chris Drifter Remix) / 
Dousk - Life Is a Carnival (Matias Chilano Remix) / 
Ewan Rill - Nectar / 
Kanye West - Hold my Liquor (Klement Bonelli remix) / 
Armen Miran - Born In Fire / 
Up All Night - Way Back (Who Else & Anhauser Remix) / 
Luis Kiverling - Dia de Mariscal (Andrea Cassino Remix) / 
BOg - Jahar (Mathias Schober Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"35.9K",fecha:"2018-07-28",link:"https://mcdn.podbean.com/mf/download/u8vu5a/377-HernanCattaneo-2018-07-28.mp3",tracklist:`\xD6ona Dahl & Giddyhead - Baba (Lee Jones Remix) /
Audioglider - Accidental Alchemy /
SLP - Forbidden Fruit (Chris Drifter Remix) /
Dousk - Life Is a Carnival (Matias Chilano Remix) /
Ewan Rill - Nectar /
Kanye West - Hold my Liquor (Klement Bonelli remix) /
Armen Miran - Born In Fire /
Up All Night - Way Back (Who Else & Anhauser Remix) /
Luis Kiverling - Dia de Mariscal (Andrea Cassino Remix) /`},{episodio:"378",titulo:"Resident / Episode 378 / Aug 04 2018",descripcion:`Johnny Messina - Horizon 
 Chicola - Could Heaven Be (Ruede Hagelstein Remix) 
 Jobe, Soul Button - Umar 
 Julian Rodriguez - Romaclo (Dimuth K Remix) 
 Artfaq - Telephone Days 
 Ricardo Piedra - Hybiscus - Gaston Ponte Remix 
 Sonic Union & Bastards Of Funk - The Firefly Dance (Forerunners Remix) 
 John 00 Fleming - Floating (Kamilo Sanclemente & Dabeat Extended Remix) 
 Nick Devon - Eternity 
 Porra - When it begins Download episode on MP3 (Right click, save link as...)`,likes:"31",descargas:"38.5K",fecha:"2018-08-04",link:"https://mcdn.podbean.com/mf/download/53wtwx/378-HernanCattaneo-2018-08-04.mp3",tracklist:`Johnny Messina - Horizon
Chicola - Could Heaven Be (Ruede Hagelstein Remix)
Jobe, Soul Button - Umar
Julian Rodriguez - Romaclo (Dimuth K Remix)
Artfaq - Telephone Days
Ricardo Piedra - Hybiscus - Gaston Ponte Remix
Sonic Union & Bastards Of Funk - The Firefly Dance (Forerunners Remix)
John 00 Fleming - Floating (Kamilo Sanclemente & Dabeat Extended Remix)
Nick Devon - Eternity`},{episodio:"379",titulo:"Resident / Episode 379 / Aug 11 2018",descripcion:`Michael A - Look closer / 
Then - Jicarilla / 
Brigado Crew & Crisstiano - Anwar / 
Hermanez - Bullish Divergence / 
Artfaq - Montana / 
Jorgio Kioris - Osaka (Priya Sen & Aman Anand Remix) / 
Alexander Alar - London / 
Michael A - Paradox / 
Analog Kitchen - Utopian tendences / 
Eelke Kleijn - Moments of Clarity / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"37.8K",fecha:"2018-08-11",link:"https://mcdn.podbean.com/mf/download/7mciju/379-HernanCattaneo-2018-08-11.mp3",tracklist:`Michael A - Look closer /
Then - Jicarilla /
Brigado Crew & Crisstiano - Anwar /
Hermanez - Bullish Divergence /
Artfaq - Montana /
Jorgio Kioris - Osaka (Priya Sen & Aman Anand Remix) /
Alexander Alar - London /
Michael A - Paradox /
Analog Kitchen - Utopian tendences /`},{episodio:"380",titulo:"Resident / Episode 380 / Aug 18 2018",descripcion:`Antrim - Pyramids / 
Tom Pooks, Joy kitikonti - Attico / 
Seff - Needle To The Groove (James Solace Remix) / 
John Cosani - Amaru / 
Seymark - Nove (Dimuth K Remix) / 
Romrez - King Of Morocco (Franco Tejedor & Martin Gardoqui Remix) / 
Oliver Lieb - Gone / 
Memory - Bonderline / 
Joan Retamero- Through Revival / 
Cid Inc - Fear and Square / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"36.3K",fecha:"2018-08-18",link:"https://mcdn.podbean.com/mf/download/r4984v/380-HernanCattaneo-2018-08-18.mp3",tracklist:`Antrim - Pyramids /
Tom Pooks, Joy kitikonti - Attico /
Seff - Needle To The Groove (James Solace Remix) /
John Cosani - Amaru /
Seymark - Nove (Dimuth K Remix) /
Romrez - King Of Morocco (Franco Tejedor & Martin Gardoqui Remix) /
Oliver Lieb - Gone /
Memory - Bonderline /
Joan Retamero- Through Revival /`},{episodio:"381",titulo:"Resident / Episode 381 / Aug 25 2018",descripcion:`Dynacom & Bodai - Hibrida / 
Loreena McKennitt - The Mummers' Dance (Mattes, Klaus Kim Remix Unofficial) / 
Madloch & Subnode - Second Sight / 
Mir Omar - Until November / 
Dave Matthews Band - Two Step (Golan Zocher Remix) / 
Jonathan Kaspar - Panem / 
Federico Monachesi - Unusual Suspects (Dimuth K remix) / 
Donaes - Yellow Dust (Jaap Ligthart Remix) / 
The Cure - At Night (Verlk Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"24",descargas:"35.5K",fecha:"2018-08-25",link:"https://mcdn.podbean.com/mf/download/jk9jnv/381-HernanCattaneo-2018-08-25.mp3",tracklist:`Dynacom & Bodai - Hibrida /
Loreena McKennitt - The Mummers' Dance (Mattes, Klaus Kim Remix Unofficial) /
Madloch & Subnode - Second Sight /
Mir Omar - Until November /
Dave Matthews Band - Two Step (Golan Zocher Remix) /
Jonathan Kaspar - Panem /
Federico Monachesi - Unusual Suspects (Dimuth K remix) /
Donaes - Yellow Dust (Jaap Ligthart Remix) /`},{episodio:"382",titulo:"Resident / Episode 382 / Sep 01 2018",descripcion:`Coma - Lora (Robag's Fandara Qualv NB) / 
DSF - Feeling gaps / 
Dj Rocca - Basic Drink (Marc Pi\xF1ol Remix) / 
Li-Polymer - How They Shine (Navar Remix) / 
Angelo & Argento - Swiftness / 
Ewan Rill - Overflow Experience (Andrea Cassino Remix) / 
Cid Inc - Bidr cherry / 
Khen - Pecas / 
Aly Freeze - Cutrone (RPO remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"36.7K",fecha:"2018-09-01",link:"https://mcdn.podbean.com/mf/download/pxudxe/382-HernanCattaneo-2018-09-01.mp3",tracklist:`Coma - Lora (Robag's Fandara Qualv NB) /
DSF - Feeling gaps /
Dj Rocca - Basic Drink (Marc Pi\xF1ol Remix) /
Li-Polymer - How They Shine (Navar Remix) /
Angelo & Argento - Swiftness /
Ewan Rill - Overflow Experience (Andrea Cassino Remix) /
Cid Inc - Bidr cherry /
Khen - Pecas /`},{episodio:"383",titulo:"Resident / Episode 383 / Sep 09 2018",descripcion:`DJ AroZe & Asi Kojak - Aphrodite Affair / 
Hermanez - Falganda / 
Bachir Salloum - The Space Between us / 
Analog Jungs - Phoenix (Subandrio Remix) / 
Dustin Nantais - Last Legs (Emi Galvan Remix) / 
Simos Tagias - Revolt / 
Cid Inc - Via Karelia / 
Porra - When it ends / 
Paul Kalkbrenner - Part Six (Giddyhead Edit) / Download episode on MP3 (Right click, save link as...)`,likes:"39",descargas:"38.6K",fecha:"2018-09-09",link:"https://mcdn.podbean.com/mf/download/bj37zd/383-HernanCattaneo-2018-08-08.mp3",tracklist:`DJ AroZe & Asi Kojak - Aphrodite Affair /
Hermanez - Falganda /
Bachir Salloum - The Space Between us /
Analog Jungs - Phoenix (Subandrio Remix) /
Dustin Nantais - Last Legs (Emi Galvan Remix) /
Simos Tagias - Revolt /
Cid Inc - Via Karelia /
Porra - When it ends /`},{episodio:"384",titulo:"Resident / Episode 384 / Sep 15 2018",descripcion:"Kamilo Sanclemente, Juan Pablo Torrez - Kavala (Is a Fine Day vocal mix) / Davi & Armen Miran - Corrected / Hosini - Kyla / Damian Lazarus & The Ancient Moons - Feedback Loop (Bedouin Remix) / DJ Marika - 1595 (Framewerk's Burning Man Remix) / Brett Rubin & Beauxtech! - Looking Glass (Priya Sen & Aman Anand Remix) / D.Y.A & Kalyma - Operator (Panthera Krause Remix) / Beat Maniacs - Manchurian Diskosex (Nishan Lee Remix) / Lucas Rossi - I'm Still Here / M.A.N.D.Y - Tomorrow Is Another Night feat. Jimmy Vallance (Stereocalypse Remix) / Download episode on MP3 (Right click, save link as...)",likes:"36",descargas:"37.2K",fecha:"2018-09-15",link:"https://mcdn.podbean.com/mf/download/8y4wzg/384-HernanCattaneo-2018-09-15.mp3"},{episodio:"386",titulo:"Resident / Episode 386 / Sep 29 2018",descripcion:`David Orin - Antemeridian / 
Adisyn - Thaw / 
Uccelli - Road to the sun / 
Kostya Outta - Marathon (Nicholas Van Orton remix) / 
Jeremy Olander vs Kamaliz - Zanzibar (Sthlm Edit) / 
Baunder & Interaxxis - Stable / 
Gadi Mitrani - Cave of Wonders / 
Alec Araujo & Cryptic Realms - Katharsys / 
James Gill - Lost in dreams / 
Sasha - Smoke mon / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"39.4K",fecha:"2018-09-29",link:"https://mcdn.podbean.com/mf/download/wgyb2y/386-HernanCattaneo-2018-09-29.mp3",tracklist:`David Orin - Antemeridian /
Adisyn - Thaw /
Uccelli - Road to the sun /
Kostya Outta - Marathon (Nicholas Van Orton remix) /
Jeremy Olander vs Kamaliz - Zanzibar (Sthlm Edit) /
Baunder & Interaxxis - Stable /
Gadi Mitrani - Cave of Wonders /
Alec Araujo & Cryptic Realms - Katharsys /
James Gill - Lost in dreams /`},{episodio:"387",titulo:"Resident / Episode 387 / Oct 06 2018",descripcion:`Henry Saiz & Band - Me llama una voz (Brian Cid remix) / 
Claudio Ricci - Yano (Brigado Crew Remix) / 
Rich Curtis - The Far Bridge (Antrim & Analog Jungs Remix) / 
Dave Seaman - Rodales / 
SIS - Danzan / 
Dmitry Molosh - Charisma / 
Omar El Gamal - Nothing Only / 
Hans Zimmer & Benjamin Wallfisch - 2049 (Joan Retamero Bootleg) / 
Rich Curtis & Javier Misa - Radar cry / 
Artfaq - Somebody Else (Antrim Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"42",descargas:"39.9K",fecha:"2018-10-06",link:"https://mcdn.podbean.com/mf/download/3strcy/387-HernanCattaneo-2018-10-06.mp3",tracklist:`Henry Saiz & Band - Me llama una voz (Brian Cid remix) /
Claudio Ricci - Yano (Brigado Crew Remix) /
Rich Curtis - The Far Bridge (Antrim & Analog Jungs Remix) /
Dave Seaman - Rodales /
SIS - Danzan /
Dmitry Molosh - Charisma /
Omar El Gamal - Nothing Only /
Hans Zimmer & Benjamin Wallfisch - 2049 (Joan Retamero Bootleg) /
Rich Curtis & Javier Misa - Radar cry /`},{episodio:"388",titulo:"Resident / Episode 388 / Oct 13 2018",descripcion:"Live at Tomorrowland Part 1 / Download episode on MP3 (Right click, save link as...)",likes:"32",descargas:"37.2K",fecha:"2018-10-13",link:"https://mcdn.podbean.com/mf/download/cj2qbm/388-HernanCattaneo-2018-10-13.mp3"},{episodio:"389",titulo:"Resident / Episode 389 / Oct 20 2018",descripcion:"Live at Tomorrowland Part 2 / Download episode on MP3 (Right click, save link as...)",likes:"29",descargas:"36K",fecha:"2018-10-20",link:"https://mcdn.podbean.com/mf/download/uu85k8/389-HernanCattaneo-2018-10-20.mp3"},{episodio:"390",titulo:"Resident / Episode 390 / Oct 27 2018",descripcion:`Li - Polymer - How They Shine (Navar Remix) / 
Verlk - Alias / 
Erdi Irmak - The Midnight Zone (Tatsama's Sunrise Remix) / 
EANP - Live the time / 
Omar El Gamal - Nothing Only / 
Isaac Differding - City Of Children
Maxi Degrassi - Bells In The City (Armen Miran Remix) / 
Billka - Return To The Source / 
Lonya & Subandrio - Waterdrop / 
Luke Chable pres The Quest - The Shepherd (Dark Soul Project 2018 Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"36.8K",fecha:"2018-10-27",link:"https://mcdn.podbean.com/mf/download/8kcjv7/390-HernanCattaneo-2018-10-27.mp3",tracklist:`Li - Polymer - How They Shine (Navar Remix) /
Verlk - Alias /
Erdi Irmak - The Midnight Zone (Tatsama's Sunrise Remix) /
EANP - Live the time /
Omar El Gamal - Nothing Only /
Isaac Differding - City Of Children
Maxi Degrassi - Bells In The City (Armen Miran Remix) /
Billka - Return To The Source /
Lonya & Subandrio - Waterdrop /`},{episodio:"391",titulo:"Resident / Episode 391 / Nov 03 2018",descripcion:`Martin Gardoqui Matias Larrosa Samuel Dezus - Orion / 
Ivan Sandhas & Kike Roldan - When I'm Gone / 
Mlinar - Farewell to the Moon (Luke Hunter Remix) / 
Francisco Villasuso - Something Nice (Original Mix) / 
DSF - Acacia / 
Christopher FaFa - Fourty (Age Is Only Numbers ) / 
Dave Gahan - Tomorrow (\xF8ostil edit) / 
Funkstate - Plexo / 
Sobek - Modest Is Hottest / 
Hannes Bieger - Stars / Download episode on MP3 (Right click, save link as...)`,likes:"21",descargas:"36.2K",fecha:"2018-11-03",link:"https://mcdn.podbean.com/mf/download/vt7jeu/391-HernanCattaneo-2018-11-03.mp3",tracklist:`Martin Gardoqui Matias Larrosa Samuel Dezus - Orion /
Ivan Sandhas & Kike Roldan - When I'm Gone /
Mlinar - Farewell to the Moon (Luke Hunter Remix) /
Francisco Villasuso - Something Nice (Original Mix) /
DSF - Acacia /
Christopher FaFa - Fourty (Age Is Only Numbers ) /
Dave Gahan - Tomorrow (\xF8ostil edit) /
Funkstate - Plexo /
Sobek - Modest Is Hottest /`},{episodio:"392",titulo:"Resident / Episode 392 / Nov 10 2018",descripcion:`Nacho Varela & Cruz Vittor Feat. Geri Terella - Have A Name / 
Santo Adriano - Interview with the Vampire / 
Fat sushi - Timeless / 
Nick Varon - Over & Out (Nicolas Rada Remix) / 
Pysh - Ballada (Matias Chilano Remix) / 
Nishan Lee - Ritual / 
Amber Run - Found (Y\xF6urr Dark Room Remix) / 
Paul Kardos - On the Ether / 
Subandrio - Moas Gone / 
Sasha & La Fleur - F\xF6rbindelse / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"35.9K",fecha:"2018-11-10",link:"https://mcdn.podbean.com/mf/download/5gx64y/392-HernanCattaneo-2018-11-10.mp3",tracklist:`Nacho Varela & Cruz Vittor Feat. Geri Terella - Have A Name /
Santo Adriano - Interview with the Vampire /
Fat sushi - Timeless /
Nick Varon - Over & Out (Nicolas Rada Remix) /
Pysh - Ballada (Matias Chilano Remix) /
Nishan Lee - Ritual /
Amber Run - Found (Y\xF6urr Dark Room Remix) /
Paul Kardos - On the Ether /
Subandrio - Moas Gone /`},{episodio:"393",titulo:"Resident / Episode 393 / Nov 17 2018",descripcion:`Hasith - Silk Road (Reformed) / 
Paul Kardos - Ameba / 
Khen - Evergreen / 
Nicolas Rada - Ionosphere / 
C-Jay & LOM - Gilgul / 
Analog Jungs - Universe / 
Neil Quigley - Firethorn / 
Colle - Elysian / 
Kintar, BOg - Tribelune / 
Ewan Rill - Beta / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"36.7K",fecha:"2018-11-17",link:"https://mcdn.podbean.com/mf/download/r2y4jf/393-HernanCattaneo-2018-11-17.mp3",tracklist:`Hasith - Silk Road (Reformed) /
Paul Kardos - Ameba /
Khen - Evergreen /
Nicolas Rada - Ionosphere /
C-Jay & LOM - Gilgul /
Analog Jungs - Universe /
Neil Quigley - Firethorn /
Colle - Elysian /
Kintar, BOg - Tribelune /`},{episodio:"394",titulo:"Resident / Episode 394 / Nov 24 2018",descripcion:`Sobek - Emotional Chastity / 
Manu F - \xD1andubay / 
Lonya, Marcelo Vasami - Breakfast at the Canales / 
Cazap & Boskis, Niko Rizzo - Personal Space / 
Nicola Saladino - Mafra - Missus Remix / 
Nikko.Z & Chris Mozio - 7.5 L\xF6ffel Sugar (Nicolas Ruiz Remix) / 
Andre Sobbota - Robots (Subandrio Remix) / 
Psychowsky - Murderica (Subandrio Remix) / 
Antrim - Experiments (Black 8 Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"36.8K",fecha:"2018-11-24",link:"https://mcdn.podbean.com/mf/download/cvt4gr/394-HernanCattaneo-2018-11-24.mp3",tracklist:`Sobek - Emotional Chastity /
Manu F - \xD1andubay /
Lonya, Marcelo Vasami - Breakfast at the Canales /
Cazap & Boskis, Niko Rizzo - Personal Space /
Nicola Saladino - Mafra - Missus Remix /
Nikko.Z & Chris Mozio - 7.5 L\xF6ffel Sugar (Nicolas Ruiz Remix) /
Andre Sobbota - Robots (Subandrio Remix) /
Psychowsky - Murderica (Subandrio Remix) /`},{episodio:"396",titulo:"Resident / Episode 396 / Dec 08 2018",descripcion:`Hemstock & Jennings - Mirage (Dark Soul Project Pres. Anatolian Remix) / 
Michael A - Soul Digger / 
Dario Arcas- In paradise / 
Ziger - Razor (Dimuth K Remix) / 
Simon Doty & Zein - Dawn (Ezequiel Arias Remix) / 
Christian Monique - Rebirth (Andrea Cassino Remix) / 
Michael A - Aviate / 
EANP - Live the time / 
La Fleur - Rooned / 
Samuel L Session - Velvet (Funk D'Void Mix-Djivo ReEdit) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"38.1K",fecha:"2018-12-08",link:"https://mcdn.podbean.com/mf/download/2fx2se/396-HernanCattaneo-2018-12-08.mp3",tracklist:`Hemstock & Jennings - Mirage (Dark Soul Project Pres. Anatolian Remix) /
Michael A - Soul Digger /
Dario Arcas- In paradise /
Ziger - Razor (Dimuth K Remix) /
Simon Doty & Zein - Dawn (Ezequiel Arias Remix) /
Christian Monique - Rebirth (Andrea Cassino Remix) /
Michael A - Aviate /
EANP - Live the time /
La Fleur - Rooned /`},{episodio:"397",titulo:"Resident / Episode 397 / Dec 15 2018",descripcion:`Kevin Di Serna - Momerant / 
Budakid - Senlin / 
Love Over Entropy - 9576 / 
All Is Well - Is It (Version_1) / 
D-Nox, Lonya, DJ Zombi - Fuze / 
Rick Pier O'Neil - Pall (RPO Part 1) / 
After Burn - Weeding day / 
Dynacom & Bodai - Symbiosis / 
Julio Largente - A Place In Space (Paul Deep Remix) / 
Audio Junkies ft Cari Golden What is real / Download episode on MP3 (Right click, save link as...)`,likes:"44",descargas:"37.9K",fecha:"2018-12-15",link:"https://mcdn.podbean.com/mf/download/ueki2r/397-HernanCattaneo-2018-12-15.mp3",tracklist:`Kevin Di Serna - Momerant /
Budakid - Senlin /
Love Over Entropy - 9576 /
All Is Well - Is It (Version_1) /
D-Nox, Lonya, DJ Zombi - Fuze /
Rick Pier O'Neil - Pall (RPO Part 1) /
After Burn - Weeding day /
Dynacom & Bodai - Symbiosis /
Julio Largente - A Place In Space (Paul Deep Remix) /`},{episodio:"398",titulo:"Resident / Episode 398 / Dec 22 2018",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 1 / Download episode on MP3 (Right click, save link as...)",likes:"44",descargas:"40.6K",fecha:"2018-12-22",link:"https://mcdn.podbean.com/mf/download/ewzme6/398-HernanCattaneo-2018-12-22.mp3"},{episodio:"399",titulo:"Resident / Episode 399 / Dec 29 2018",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 2 Download episode on MP3 (Right click, save link as...)",likes:"40",descargas:"39.9K",fecha:"2018-12-29",link:"https://mcdn.podbean.com/mf/download/pizbch/399-HernanCattaneo-2018-12-29.mp3"},{episodio:"400",titulo:"Resident / Episode 400 / Jan 05 2019",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 3 Download episode on MP3 (Right click, save link as...)",likes:"33",descargas:"43K",fecha:"2019-01-05",link:"https://mcdn.podbean.com/mf/download/tcvpau/400-HernanCattaneo-2019-01-05.mp3"},{episodio:"401",titulo:"Resident / Episode 401 / Jan 12 2019",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 4 Download episode on MP3 (Right click, save link as...)",likes:"41",descargas:"39.4K",fecha:"2019-01-12",link:"https://mcdn.podbean.com/mf/download/syar8i/401-HernanCattaneo-2019-01-12.mp3"},{episodio:"402",titulo:"Resident / Episode 402 / Jan 19 2019",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 5 Download episode on MP3 (Right click, save link as...)",likes:"30",descargas:"38.7K",fecha:"2019-01-19",link:"https://mcdn.podbean.com/mf/download/kvt3gq/402-HernanCattaneo-2019-01-19.mp3"},{episodio:"403",titulo:"Resident / Episode 403 / Jan 26 2019",descripcion:"Hernan Cattaneo live at Woodstock 69, Bloenmendaal , Netherlands - July 2018 - Part 6 Download episode on MP3 (Right click, save link as...)",likes:"38",descargas:"38.1K",fecha:"2019-01-26",link:"https://mcdn.podbean.com/mf/download/xpxr6b/403-HernanCattaneo-2019-01-26.mp3"},{episodio:"404",titulo:"Resident / Episode 404 / Feb 02 2019",descripcion:`1 - Armen Miran & Hraach - Menq / 
2 - Roewee - Udara (Original) / 
3 - Shai T - Exodus (Elfenberg Remix) / 
4 - Gai Barone - When The Swallows Come Back Home / 
5 - Teiko - Deeper (OG Master) / 
6 - Pedro Capelossi, Noiyse Proyect - Myth in Manaus / 
7 - Fideles - Harmed / 
8 - Antrim - Laner (Original Mix) / 
9 - AFFKT - True_Power / 
10 - Buraki - Silk / Download episode on MP3 (Right click, save link as...)`,likes:"42",descargas:"39.9K",fecha:"2019-02-02",link:"https://mcdn.podbean.com/mf/download/s4hguy/404-HernanCattaneo-2019-02-02.mp3",tracklist:`Armen Miran & Hraach - Menq /
Roewee - Udara (Original) /
Shai T - Exodus (Elfenberg Remix) /
Gai Barone - When The Swallows Come Back Home /
Teiko - Deeper (OG Master) /
Pedro Capelossi, Noiyse Proyect - Myth in Manaus /
Fideles - Harmed /
Antrim - Laner (Original Mix) /
AFFKT - True_Power /`},{episodio:"407",titulo:"Resident / Episode 407 / Feb 23 2019",descripcion:`1 - Budakid - Quixotic (Esteble Remix) / 
2 - Pablo German - Rainbow / 
3 - Chris Cargo - Moonface remix / 
4 - D.R.N.D.Y - Tyrant (Chris Cargo Remix) / 
5 - Facundo Caldiero - Happiness / 
6 - Newcorp - Limitles / 
7 - Mike Griego - Paranoid / 
8 - Mike Griego - Kismet / 
9 - Musumeci - Kong / 
10 - Lehar - Blue Wolf / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"40.3K",fecha:"2019-02-23",link:"https://mcdn.podbean.com/mf/download/sv4u4f/407-HernanCattaneo-2019-02-23.mp3",tracklist:`Budakid - Quixotic (Esteble Remix) /
Pablo German - Rainbow /
Chris Cargo - Moonface remix /
D.R.N.D.Y - Tyrant (Chris Cargo Remix) /
Facundo Caldiero - Happiness /
Newcorp - Limitles /
Mike Griego - Paranoid /
Mike Griego - Kismet /
Musumeci - Kong /`},{episodio:"408",titulo:"Resident / Episode 408 / Mar 02 2019",descripcion:`1 - Lee Burridge Lost Desert (Dark light) / 
2 - Ultravizion - Planet Stories / 
3 - To Belong - Daughter (J.P.Velardi Rework) / 
4 - Dynacom - Microlattice / 
5 - George Bloom - Phoebe / 
6 - Golan Zocher & Kai Vice - Solstice / 
7 - Anton Borin (RU) - Andromeda (Noiyse Project Remix) / 
9 - Qoob - Zoe / 
10 - Dj Paul- Visionary / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"40.2K",fecha:"2019-03-02",link:"https://mcdn.podbean.com/mf/download/e6urpt/408-HernanCattaneo-2019-03-02.mp3",tracklist:`Lee Burridge Lost Desert (Dark light) /
Ultravizion - Planet Stories /
To Belong - Daughter (J.P.Velardi Rework) /
Dynacom - Microlattice /
George Bloom - Phoebe /
Golan Zocher & Kai Vice - Solstice /
Anton Borin (RU) - Andromeda (Noiyse Project Remix) /
Qoob - Zoe /`},{episodio:"409",titulo:"Resident / Episode 409 / Mar 09 2019",descripcion:`1 - Mercurio - Darkness / 
2 - Juan Hansen - Sleep all day / 
3 - Niko Christo & Synas - Sunstone (Diego Berrondo & Alex Efe Remix) / 
4 - Ge Bruny, Pedro Capelossi - Black Peony / 
5 - Danny Bonnici & Thankyou City - The Golden Key (Luke Chable Remix) / 
6 - Yello - Call it -love (Carlos Gatto remix) / 
7 - Dousk - Life Is a Carnival (Matias Chilano Remix) / 
8 - Yashar - Petition (Fabri Lopez Remix) / 
9 - Lonya - Quicksand / 
10 - ARTBAT - Upperground (no vocal) / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"40.6K",fecha:"2019-03-09",link:"https://mcdn.podbean.com/mf/download/zi8vk2/409-HernanCattaneo-2019-03-09.mp3",tracklist:`Mercurio - Darkness /
Juan Hansen - Sleep all day /
Niko Christo & Synas - Sunstone (Diego Berrondo & Alex Efe Remix) /
Ge Bruny, Pedro Capelossi - Black Peony /
Danny Bonnici & Thankyou City - The Golden Key (Luke Chable Remix) /
Yello - Call it -love (Carlos Gatto remix) /
Dousk - Life Is a Carnival (Matias Chilano Remix) /
Yashar - Petition (Fabri Lopez Remix) /
Lonya - Quicksand /`},{episodio:"410",titulo:"Resident / Episode 410 / Mar 16 2019",descripcion:`1 - Nacho Varela & Cruz Vittor - Luna Roja / 
2 - Audioglider - Caging the Sun (Priya Sen & Aman Anand Remix) / 
3 - Verlk - When I saw his name / 
4 - CAZAP&BOSKIS - Guru of Brahman / 
5 - Michael A - Ciklus One (Ezequiel Arias Private) / 
6 - East Cafe - The Filter Witch (Antrim Remix) / 
7 - Analog Jungs - Magic Arp / 
8 - Tash vs Apparat / 
9 - Traverse - Ivanshee (Remix) / 
10 - Caribou & Four Tet - Melody Day (Lunar Plane Edit) / Download episode on MP3 (Right click, save link as...)`,likes:"44",descargas:"39.3K",fecha:"2019-03-16",link:"https://mcdn.podbean.com/mf/download/wr6dsr/410-HernanCattaneo-2019-03-16.mp3",tracklist:`Nacho Varela & Cruz Vittor - Luna Roja /
Audioglider - Caging the Sun (Priya Sen & Aman Anand Remix) /
Verlk - When I saw his name /
CAZAP&BOSKIS - Guru of Brahman /
Michael A - Ciklus One (Ezequiel Arias Private) /
East Cafe - The Filter Witch (Antrim Remix) /
Analog Jungs - Magic Arp /
Tash vs Apparat /
Traverse - Ivanshee (Remix) /`},{episodio:"411",titulo:"Resident / Episode 411 / Mar 23 2019",descripcion:`1 - Modd - Flying Buddha / 
2 - Madloch & Subnode - Lion's Mane (Navar Remix) / 
3 - Kymatik - What Makes You Wonder (Tripswitch Underground Remix) / 
4 - Gux Jimenez - Remanente (Dabeat Remix) / 
5 - Izakaya Deployment - Speed (Michael A remix) / 
6 - Stil Corners - The Trip (Bruno Andrada Unofficial Remix) / 
7 - Karlos Molina - Keep your thoughts / 
8 - The Organism - Gypsy (Tim Engelhardt Remix) / 
9 - EANP - Purple / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"38.8K",fecha:"2019-03-23",link:"https://mcdn.podbean.com/mf/download/pnk272/411-HernanCattaneo-2019-03-23.mp3",tracklist:`Modd - Flying Buddha /
Madloch & Subnode - Lion's Mane (Navar Remix) /
Kymatik - What Makes You Wonder (Tripswitch Underground Remix) /
Gux Jimenez - Remanente (Dabeat Remix) /
Izakaya Deployment - Speed (Michael A remix) /
Stil Corners - The Trip (Bruno Andrada Unofficial Remix) /
Karlos Molina - Keep your thoughts /
The Organism - Gypsy (Tim Engelhardt Remix) /`},{episodio:"412",titulo:"Resident / Episode 412 / Mar 30 2019",descripcion:`1 - Carlos Palacio - Fragments of Time / 
2 - Roy Rosenfeld - Trip to Heaven / 
3 - Nhar - Sibylle / 
4 - Ivan Sandhas - Slipping Away (EANP Remix) / 
5 - NEW JACKSON - By Its Own Light (Mano Le Tough Remix) / 
6 - Andre Gazolla, ZAC - Ritual / 
7 - BLANCAh - Instantes / 
8 - Murat Uncuoglu - Rouge / 
9 - Dynacom & Bodai - Sinergy / 
10 - Jeremy Olander - Shogun / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.7K",fecha:"2019-03-30",link:"https://mcdn.podbean.com/mf/download/4aci58/412-HernanCattaneo-2019-03-30.mp3",tracklist:`Carlos Palacio - Fragments of Time /
Roy Rosenfeld - Trip to Heaven /
Nhar - Sibylle /
Ivan Sandhas - Slipping Away (EANP Remix) /
NEW JACKSON - By Its Own Light (Mano Le Tough Remix) /
Andre Gazolla, ZAC - Ritual /
BLANCAh - Instantes /
Murat Uncuoglu - Rouge /
Dynacom & Bodai - Sinergy /`},{episodio:"413",titulo:"Resident / Episode 413 / Apr 06 2019",descripcion:`1 - Dirk Sid Eno - Hitachi & Feelharmonia (Smash TV Facundo Mohrr edit) / 
2 - Aether - Stardancer / 
3 - Michael A - Ellipsis (Fabri Lopez Remix) / 
4 - Danito & Athina - Listen / 
5 - Depeche Mode - Dream On (German Angeleri Unofficial Remix) / 
6 - Analog Jungs - Particle (Tripswitch Remix) / 
7 - Orsen -Sentinent / 
8 - Fort Romeau - Eye Of Re / 
9 - Jamie Stevens - The Beneficiary / 
10 - Badin Brothers - Monkey Flute (Ampish Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"39.1K",fecha:"2019-04-06",link:"https://mcdn.podbean.com/mf/download/nydjuh/413-HernanCattaneo-2019-04-06.mp3",tracklist:`Dirk Sid Eno - Hitachi & Feelharmonia (Smash TV Facundo Mohrr edit) /
Aether - Stardancer /
Michael A - Ellipsis (Fabri Lopez Remix) /
Danito & Athina - Listen /
Depeche Mode - Dream On (German Angeleri Unofficial Remix) /
Analog Jungs - Particle (Tripswitch Remix) /
Orsen -Sentinent /
Fort Romeau - Eye Of Re /
Jamie Stevens - The Beneficiary /`},{episodio:"414",titulo:"Resident / Episode 414 / Apr 13 2019",descripcion:`1 - RY X - Body Sun (Deomid Remix) / 
2 - Verlk feat. Steve Smith - Sisters / 
3 - Julian Rodriguez - Japila / 
4 - LKF Project - Tongue Tied (BOg Remix) / 
5 - Florian Kruse_'Zog\u2019 / 
6 - Juan Deminicis - Bugs & Blossoms / 
7 - Murat Uncuoglu - None sleep / 
8 - Miguel Ante & Pablo Asturizaga - Reverie / 
9 - Mark Hollis - Inside Looking Out (Baunder Outro mix) / 
10 - Lucas Rossi - Parabels / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"38.2K",fecha:"2019-04-13",link:"https://mcdn.podbean.com/mf/download/kfw9ht/414-HernanCattaneo-2019-04-13.mp3",tracklist:`RY X - Body Sun (Deomid Remix) /
Verlk feat. Steve Smith - Sisters /
Julian Rodriguez - Japila /
LKF Project - Tongue Tied (BOg Remix) /
Florian Kruse_'Zog\u2019 /
Juan Deminicis - Bugs & Blossoms /
Murat Uncuoglu - None sleep /
Miguel Ante & Pablo Asturizaga - Reverie /
Mark Hollis - Inside Looking Out (Baunder Outro mix) /`},{episodio:"416",titulo:"Resident / Episode 416 / Apr 27 2019",descripcion:`1 - Savvas - Flying Heart (VANDER & Joe Finch Remix) / 
2 - Henry Saiz - DMT / 
3 - Chimera - In Deep (DNYO 2002 Remake) / 
4 - Jimi Jules - We Out Here / 
5 - Matias Larrosa & Martin Gardoqui - Metamorphosis / 
6 - Ron Flatter - Sahara / 
7 - Stereo Underground - Wanderlust / 
8 - Ewan Rill & K Loveski - Elau (Subandrio Remix) / 
9 - Groj - Sith / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"36.6K",fecha:"2019-04-27",link:"https://mcdn.podbean.com/mf/download/dww8f4/416-HernanCattaneo-2019-04-27.mp3",tracklist:`Savvas - Flying Heart (VANDER & Joe Finch Remix) /
Henry Saiz - DMT /
Chimera - In Deep (DNYO 2002 Remake) /
Jimi Jules - We Out Here /
Matias Larrosa & Martin Gardoqui - Metamorphosis /
Ron Flatter - Sahara /
Stereo Underground - Wanderlust /
Ewan Rill & K Loveski - Elau (Subandrio Remix) /`},{episodio:"417",titulo:"Resident / Episode 417 / May 04 2019",descripcion:`1 - Henry Saiz - Suite Nocturne / 
2 - Matias Larrosa & Martin Gardoqui - Namibia / 
3 - Denis Horvat - Noise feat Lelah / 
4 - Chaim - Gnawa (Sabo Remix) / 
5 - Florian Kruse - Zog (Julian Wassermann Remix) / 
6 - Golan Zocher - The Element (Nick Muir Remix) / 
7 - Dark Soul Project & Mathov - Spirit Of Life / 
8 - Nichols - Vindicate / 
9 - Through Noise - Alive / 
10 - Diego Berrondo - Generations / Download episode on MP3 (Right click, save link as...)`,likes:"41",descargas:"39.9K",fecha:"2019-05-04",link:"https://mcdn.podbean.com/mf/download/9ywdj2/417-HernanCattaneo-2019-05-04.mp3",tracklist:`Henry Saiz - Suite Nocturne /
Matias Larrosa & Martin Gardoqui - Namibia /
Denis Horvat - Noise feat Lelah /
Chaim - Gnawa (Sabo Remix) /
Florian Kruse - Zog (Julian Wassermann Remix) /
Golan Zocher - The Element (Nick Muir Remix) /
Dark Soul Project & Mathov - Spirit Of Life /
Nichols - Vindicate /
Through Noise - Alive /`},{episodio:"418",titulo:"Resident / Episode 418 / May 11 2019",descripcion:`1 - Ercos Blanka - 36h (Agatha Pher Remix) / 
2 - Freefall - Skydive Ft. Jan Johnston (Marcelo Vasami Remix) / 
3 - Volen Sentir - Kai / 
4 - Mathias Treinen - Polygone (Graziano Raffa Remix) / 
5 - AfterU - Wabi Sabi / 
6 - Fran Von Vie - Wake Me Up When Everything Has Changed (Diego Berrondo Edit) / 
7 - The Organism - Gypsy (Tim Engelhardt Remix) / 
8 - Finnebassen - Wide Open (Jos & Eli Remix) / 
9 - Interaxxis - Square / 
10 - Kalil, D-Nox - Black Table / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"38K",fecha:"2019-05-11",link:"https://mcdn.podbean.com/mf/download/rwszgx/418-HernanCattaneo-2019-05-11.mp3",tracklist:`Ercos Blanka - 36h (Agatha Pher Remix) /
Freefall - Skydive Ft. Jan Johnston (Marcelo Vasami Remix) /
Volen Sentir - Kai /
Mathias Treinen - Polygone (Graziano Raffa Remix) /
AfterU - Wabi Sabi /
Fran Von Vie - Wake Me Up When Everything Has Changed (Diego Berrondo Edit) /
The Organism - Gypsy (Tim Engelhardt Remix) /
Finnebassen - Wide Open (Jos & Eli Remix) /
Interaxxis - Square /`},{episodio:"419",titulo:"Resident / Episode 419 / May 18 2019",descripcion:`1 - Saulo Pisa & Carlos Mendes - Another time (Instrumental) / 
2 - kARMON - 6am Funk / 
3 - Rick Pier O'Neil - Another Side (Danidu & Hasith Remix) / 
4 - Umka - Holler If Ya Hear Me / 
5 - UNDERHER - Around it (Colle remix) / 
6 - Tibi Dabo - It's All Behind / 
7 - Frankey & Sandrino - Sirius / 
8 - Frankey & Sandrino - Lambda / 
9 - Digital Mess - Infless / 
10 - HVOB - Panama (Nico Sparvieri Unofficial Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"36.5K",fecha:"2019-05-18",link:"https://mcdn.podbean.com/mf/download/qfcnuv/419-HernanCattaneo-2019-05-18.mp3",tracklist:`Saulo Pisa & Carlos Mendes - Another time (Instrumental) /
kARMON - 6am Funk /
Rick Pier O'Neil - Another Side (Danidu & Hasith Remix) /
Umka - Holler If Ya Hear Me /
UNDERHER - Around it (Colle remix) /
Tibi Dabo - It's All Behind /
Frankey & Sandrino - Sirius /
Frankey & Sandrino - Lambda /
Digital Mess - Infless /`},{episodio:"420",titulo:"Resident / Episode 420 / May 25 2019",descripcion:`1 - Nick Stoynoff - Deserve / 
2 - Erdi Irmak - Days Like This / 
3 - Mo' Funk - Solar Scriptura (Juan Sapia Remix) / 
4 - Edvard Hunger - For The Future Summer (Alex Efe Remix) / 
5 - Joan Retamero- Amithaba / 
6 - Julio Largente & Mariano Rial - The Twilight Zone / 
7 - Sanjay Dutta & Dharmalogy - Invoking Spirits (Simos Tagias Tantric Ritual Remix) / 
8 - Digital Mess - Dark Bursts / 
9 - Yotto - Turn It Around (Monkey Safari Remix) / 
10 - Radiohead - Weird Fishes (Lucas Rossi From The Bottom Bootleg) / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"38.9K",fecha:"2019-05-25",link:"https://mcdn.podbean.com/mf/download/qvr3up/420-HernanCattaneo-2019-05-25.mp3",tracklist:`Nick Stoynoff - Deserve /
Erdi Irmak - Days Like This /
Mo' Funk - Solar Scriptura (Juan Sapia Remix) /
Edvard Hunger - For The Future Summer (Alex Efe Remix) /
Joan Retamero- Amithaba /
Julio Largente & Mariano Rial - The Twilight Zone /
Sanjay Dutta & Dharmalogy - Invoking Spirits (Simos Tagias Tantric Ritual Remix) /
Digital Mess - Dark Bursts /
Yotto - Turn It Around (Monkey Safari Remix) /`},{episodio:"421",titulo:"Resident / Episode 421 / Jun 01 2019",descripcion:`1 - Nishan Lee - Circle Of Life / 
2 - Eli Nissan - Naked / 
3 - RYAN e Pedro Capelossi - Cats and Dreams / 
4 - Kymatik - What Makes You Wonder / 
5 - Joan Retamero - Amithaba / 
6 - Valeria Petz - Shooting Star / 
7 - Moby - The Last Day (Nishan Lee Unofficial Remix) / 
8 - Sebastian Haas - Pandora (Juan Sapia Remix) / 
9 - Sebastian Sellares - Cordoba / 
10 - Jean-Michel Jarre - If the wind could speak (Tale Of Us Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"37.9K",fecha:"2019-06-01",link:"https://mcdn.podbean.com/mf/download/5wxgbw/421-HernanCattaneo-2019-06-01.mp3",tracklist:`Nishan Lee - Circle Of Life /
Eli Nissan - Naked /
RYAN e Pedro Capelossi - Cats and Dreams /
Kymatik - What Makes You Wonder /
Joan Retamero - Amithaba /
Valeria Petz - Shooting Star /
Moby - The Last Day (Nishan Lee Unofficial Remix) /
Sebastian Haas - Pandora (Juan Sapia Remix) /
Sebastian Sellares - Cordoba /`},{episodio:"422",titulo:"Resident / Episode 422 / Jun 08 2019",descripcion:`1 - Nuage - Distance / 
2 - Randall Jones - Little Helpers / 
3 - Mo' Funk - The Gospel Of Heaven (Juan Sapia Remix) / 
4 - VOYAGER - Miyagi (Tara Brooks Remix) / 
5 - Joan Retamero - Dharma / 
6 - Paul Lennar - Jungle on Fire (Priya Sen & Aman Anand Remix) / 
7 - Fur Coat - Babel (Hunter Game Remix) [Last Night On Earth] / 
8 - Jaap Lighart - Adventures in Aberdeen (Lonya Remix) / 
9 - Replicanth - Complex Heaven (Michael A Remix) / 
10 - Fluente - Nascent (Extended) / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"36K",fecha:"2019-06-08",link:"https://mcdn.podbean.com/mf/download/5gvnnr/422-HernanCattaneo-2019-06-08.mp3",tracklist:`Nuage - Distance /
Randall Jones - Little Helpers /
Mo' Funk - The Gospel Of Heaven (Juan Sapia Remix) /
VOYAGER - Miyagi (Tara Brooks Remix) /
Joan Retamero - Dharma /
Paul Lennar - Jungle on Fire (Priya Sen & Aman Anand Remix) /
Fur Coat - Babel (Hunter Game Remix) [Last Night On Earth] /
Jaap Lighart - Adventures in Aberdeen (Lonya Remix) /
Replicanth - Complex Heaven (Michael A Remix) /`},{episodio:"423",titulo:"Resident / Episode 423 / Jun 15 2019",descripcion:`1 - Calimba & Caldi - Epoch / 
2 - Juan Deminicis - Disorder (Andrea Cassino Remix) / 
3 - Lucas Rossi - Distance (Michael A Remix) / 
4 - Gabriel Amato - Starship / 
5 - Nishan Lee - Dusty Bees (Anton Make remix) / 
6 - Adyisyn - Morph / 
7 - Commander Tom - Are Am Eye_ (Pablo Bolivar Deep Vision) / 
8 - Urban Flex - Shivalingam (Umka Remix) / 
9 - Huminal - Macropsia (Matias Chilano Remix) / 
10 - Alejo Gonzalez & Max Blade feat Chuck & Black - Metroplex (Lucas Rossi Remix) Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.6K",fecha:"2019-06-15",link:"https://mcdn.podbean.com/mf/download/5rxnzr/423-HernanCattaneo-2019-06-15.mp3",tracklist:`Calimba & Caldi - Epoch /
Juan Deminicis - Disorder (Andrea Cassino Remix) /
Lucas Rossi - Distance (Michael A Remix) /
Gabriel Amato - Starship /
Nishan Lee - Dusty Bees (Anton Make remix) /
Adyisyn - Morph /
Commander Tom - Are Am Eye_ (Pablo Bolivar Deep Vision) /
Urban Flex - Shivalingam (Umka Remix) /
Huminal - Macropsia (Matias Chilano Remix) /`},{episodio:"424",titulo:"Resident / Episode 424 / Jun 22 2019",descripcion:`1 - Randall Jones Little Helpers 345-3 / 
2 - Colle - Owami (Gorje Hewek & Izhevski Remix) / 
3 - Dj Paul, Dj Bia - 'Crazy Mind' (Nico Sparvieri Jump In Time Mix) / 
4 - Madloch - Grindstone / 
5 - Francisco Garc\xEDa & Ramiro Drisdale - City Of Dreams / 
6 - Frangellico - Chapter II / 
7 - NOIYSE PROJECT & Dylan Deck - Path to Moksha / 
8 - Mir Omar - Forgotten Youth / 
9 - Andy Arias - Chordify / 
10 - Subandrio & Nishan Lee - Moment of Truth Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"38.2K",fecha:"2019-06-22",link:"https://mcdn.podbean.com/mf/download/zi6r97/424-HernanCattaneo-2019-06-22.mp3",tracklist:`Randall Jones Little Helpers 345-3 /
Colle - Owami (Gorje Hewek & Izhevski Remix) /
Dj Paul, Dj Bia - 'Crazy Mind' (Nico Sparvieri Jump In Time Mix) /
Madloch - Grindstone /
Francisco Garc\xEDa & Ramiro Drisdale - City Of Dreams /
Frangellico - Chapter II /
NOIYSE PROJECT & Dylan Deck - Path to Moksha /
Mir Omar - Forgotten Youth /
Andy Arias - Chordify /`},{episodio:"426",titulo:"Resident / Episode 426 / Jul 06 2019",descripcion:`1 - Gabriel Sordo - U Cant Stop Me Now / 
2 - Booka Shade - Curve / 
3 - Berni Turletti & Agustin Lupidi - Suyai / 
4 - Bigz - Lifeforms (Analog Jungs Remix) / 
5 - Roi Ferrari - Maqam (RIGOONI Remix) / 
6 - Nick Varon - Blind Quest / 
7 - Anhauser - Hoppin / 
8 - Juan Deminicis - Tao the King (Pysh Remix) / 
9 - Urban Flex - Shivalingam (Umka Remix) / 
10 - Huminal - Macropsia (Matias Chilano Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"40.1K",fecha:"2019-07-06",link:"https://mcdn.podbean.com/mf/download/6guzt2/426-HernanCattaneo-2019-07-06.mp3",tracklist:`Gabriel Sordo - U Cant Stop Me Now /
Booka Shade - Curve /
Berni Turletti & Agustin Lupidi - Suyai /
Bigz - Lifeforms (Analog Jungs Remix) /
Roi Ferrari - Maqam (RIGOONI Remix) /
Nick Varon - Blind Quest /
Anhauser - Hoppin /
Juan Deminicis - Tao the King (Pysh Remix) /
Urban Flex - Shivalingam (Umka Remix) /`},{episodio:"427",titulo:"Resident / Episode 427 / Jul 13 2019",descripcion:`1 - Bona Fide, M.O.S. - Volga / 
2 - Gab Rhome, Mark Alow - Bob Fossil Armen Miran Remix) / 
3 - Valdovinos - Heartbeat / 
4 - Bontan feat. Bengle - 10 Days (Osunlade 'Yoruba Soul' Mix) / 
5 - Alex Schaufel - The Day Of Rebirth (WhoMadeWho Remix) / 
6 - Clarian - Mixed Feelings / 
7 - Moti Brothers - Desert Mirage (Julian Rodriguez Remix) / 
8 - Fabra - Natura (Coeus Remix) / 
9 - Umka - Lem Sai (Matan Caspi Remix) / 
10 - Brian Cid - Species of the other kind / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"45.2K",fecha:"2019-07-13",link:"https://mcdn.podbean.com/mf/download/wjuths/427-HernanCattaneo-2019-07-13.mp3",tracklist:`Bona Fide, M.O.S. - Volga /
Gab Rhome, Mark Alow - Bob Fossil Armen Miran Remix) /
Valdovinos - Heartbeat /
Bontan feat. Bengle - 10 Days (Osunlade 'Yoruba Soul' Mix) /
Alex Schaufel - The Day Of Rebirth (WhoMadeWho Remix) /
Clarian - Mixed Feelings /
Moti Brothers - Desert Mirage (Julian Rodriguez Remix) /
Fabra - Natura (Coeus Remix) /
Umka - Lem Sai (Matan Caspi Remix) /`},{episodio:"428",titulo:"Resident / Episode 428 / Jul 20 2019",descripcion:`1 - Around Us & Teiko Yume - Sleeping Blue /\xA0
2 - Geronimo Eguiguren - Athair / 
3 - Johnny Messina - Blue Marble / 
4 - Tim Engelhardt - Silhouettes / 
5 - Antrim - Pyramids (Navar Ancient C Remix) / 
6 - Gambitt - Clouded (Analog Jungs Remix) / 
7 - Noiyse Project - Time Files (Analog Jungs Remix) / 
8 - Quivver - One Darker / 
9 - German Angeleri - Yellow Fever (Rework 2019) / 
10 - GROJ - Transmission / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"37.2K",fecha:"2019-07-20",link:"https://mcdn.podbean.com/mf/download/f3ye4z/428-HernanCattaneo-2019-07-20.mp3",tracklist:`Around Us & Teiko Yume - Sleeping Blue /
Geronimo Eguiguren - Athair /
Johnny Messina - Blue Marble /
Tim Engelhardt - Silhouettes /
Antrim - Pyramids (Navar Ancient C Remix) /
Gambitt - Clouded (Analog Jungs Remix) /
Noiyse Project - Time Files (Analog Jungs Remix) /
Quivver - One Darker /
German Angeleri - Yellow Fever (Rework 2019) /`},{episodio:"429",titulo:"Resident / Episode 429 / Jul 27 2019",descripcion:`1 - Schiller - I feel you (Horatio goes deep) / 
2 - Noom (UK) - Parallax (Lucas Rossi's Club Mix) / 
3 - Tim Engelhardt - When The Sun Illuminated Her Eyes / 
4 - Oliver Schories - Kato (Tim Engelhardt Remix) / 
5 - Martin Andrioli - Ghosts / 
6 - Rafael Osmo pres. Carmi - Deep Forest / 
7 - German Angeleri - Kate / 
8 - TD - Taciturn / 
9 - ALURIA - Life Loop (Michael A Remix) / 
10 - Joris Voorn - Ryo / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"35.3K",fecha:"2019-07-27",link:"https://mcdn.podbean.com/mf/download/25t45s/429-HernanCattaneo-2019-07-27.mp3",tracklist:`Schiller - I feel you (Horatio goes deep) /
Noom (UK) - Parallax (Lucas Rossi's Club Mix) /
Tim Engelhardt - When The Sun Illuminated Her Eyes /
Oliver Schories - Kato (Tim Engelhardt Remix) /
Martin Andrioli - Ghosts /
Rafael Osmo pres. Carmi - Deep Forest /
German Angeleri - Kate /
TD - Taciturn /
ALURIA - Life Loop (Michael A Remix) /`},{episodio:"430",titulo:"Resident / Episode 430 / Aug 03 2019",descripcion:`1 - Danny Howells - Retreat / 
2 - Matias Larrosa & Martin Gardoqui - Amanecer Del Sol Rojo / 
3 - Gab Rhome, Kora (CA) - Toboggan / 
4 - Sebastian Busto - Awakening / 
5 - Nahuel Lucena - Safari Sunset - Paul Kardos Remix / 
6 - Jelly For The Babies - New Life (Gaston Ponte Remix) / 
7 - London Grammar - Help Me Lose My Mind (MV Mimi's interpretation Bootleg) / 
8 - Morttagua - Imentet (Kamilo Sanclemente & Dabeat Remix) / 
9 - Damian Cruga - Into the wild (MartyOn & Jo rgk Remix) / 
10 - Jam & Spoon - Stella-Kolsch / Download episode on MP3 (Right click, save link as...)`,likes:"18",descargas:"38.9K",fecha:"2019-08-03",link:"https://mcdn.podbean.com/mf/download/dxrdkk/430-HernanCattaneo-2019-08-03.mp3",tracklist:`Danny Howells - Retreat /
Matias Larrosa & Martin Gardoqui - Amanecer Del Sol Rojo /
Gab Rhome, Kora (CA) - Toboggan /
Sebastian Busto - Awakening /
Nahuel Lucena - Safari Sunset - Paul Kardos Remix /
Jelly For The Babies - New Life (Gaston Ponte Remix) /
London Grammar - Help Me Lose My Mind (MV Mimi's interpretation Bootleg) /
Morttagua - Imentet (Kamilo Sanclemente & Dabeat Remix) /
Damian Cruga - Into the wild (MartyOn & Jo rgk Remix) /`},{episodio:"431",titulo:"Resident / Episode 431 / Aug 10 2019",descripcion:`1 - Squire - Common Sense / 
2 - Frankie M & Valentina Chaves - La prima / 
3 - G\u039BR\u039BK - Water Puppet / 
4 - Alberto Blanco - Stratosphere / 
5 - Da Luka - Secret City (Aman Anand Remix) / 
6 - Pedro Capelossi - Name Is Refraction / 
7 - Sonic Union - Nox / 
8 - Christian Nielsen - Access (AFFKT remix) / 
9 - Rick Pier O'Neil - Cancun (Dimuth K Remix) / 
10 - Rodriguez Jr. - Malec\xF3n Azul / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"36.8K",fecha:"2019-08-10",link:"https://mcdn.podbean.com/mf/download/29dhdd/431-HernanCattaneo-2019-08-10.mp3",tracklist:`Squire - Common Sense /
Frankie M & Valentina Chaves - La prima /
G\u039BR\u039BK - Water Puppet /
Alberto Blanco - Stratosphere /
Da Luka - Secret City (Aman Anand Remix) /
Pedro Capelossi - Name Is Refraction /
Sonic Union - Nox /
Christian Nielsen - Access (AFFKT remix) /
Rick Pier O'Neil - Cancun (Dimuth K Remix) /`},{episodio:"432",titulo:"Resident / Episode 432 / Aug 17 2019",descripcion:`1 - Coeus - Eden / 
2 - Verlk - Priestess / 
3 - Ivory - Taikun / 
4 - Maximo Boskis - Phoenix / 
5 - Rylan Taggart - Distant Reality / 
6 - 8kays - Rainbow / 
7 - Pig&Dan - Promised (Raxon Remix) / 
8 - Golan Zocher & Choopie - Inception / 
9 - Partenaire - The Warmth / 
10 - Yotto - Shifter / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"36.6K",fecha:"2019-08-17",link:"https://mcdn.podbean.com/mf/download/8ujsbt/432-HernanCattaneo-2019-08-17.mp3",tracklist:`Coeus - Eden /
Verlk - Priestess /
Ivory - Taikun /
Maximo Boskis - Phoenix /
Rylan Taggart - Distant Reality /
8kays - Rainbow /
Pig&Dan - Promised (Raxon Remix) /
Golan Zocher & Choopie - Inception /
Partenaire - The Warmth /`},{episodio:"433",titulo:"Resident / Episode 433 / Aug 24 2019",descripcion:`1 - Hraach - Aurores / 
2 - Scippo - Unity Suspects / 
3 - Mike Griego - Saturno / 
4 - Uone - Sands of Time feat Sleepimg Genie / 
5 - D-Rhapsody - Hidden Wave (East Cafe Remix) / 
6 - BOg, LKF Project - Discret Class / 
7 - Danny Howells - Mayfeels / 
8 - Frankey & Sandrino - Kuma / 
9 - Noyse Project - Kandala (Mauro Augugliaro Remix) / 
10 - Parallel Universe - Galaxy / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"38.3K",fecha:"2019-08-24",link:"https://mcdn.podbean.com/mf/download/tkzfff/433-HernanCattaneo-2019-08-24.mp3",tracklist:`Hraach - Aurores /
Scippo - Unity Suspects /
Mike Griego - Saturno /
Uone - Sands of Time feat Sleepimg Genie /
D-Rhapsody - Hidden Wave (East Cafe Remix) /
BOg, LKF Project - Discret Class /
Danny Howells - Mayfeels /
Frankey & Sandrino - Kuma /
Noyse Project - Kandala (Mauro Augugliaro Remix) /`},{episodio:"434",titulo:"Resident / Episode 434 / Aug 31 2019",descripcion:`1 - Gab Rhome - Salmo Salar / 
2 - Arturo Hevia - Walking On Her Back / 
3 - Verboten Berlin - Real Or Nature (Booka Shade Remix) / 
4 - Alex O'Rion - Marathon / 
5 - Carla Cimino - Artemis (Luciano Scheffer ) / 
6 - Michael A - Kaleido Skope / 
7 - Tomas Tejeda - Reborn (Gorkiz Remix) / 
8 - Lehar - The Morning / 
9 - Amber Long, Norman H, and 116 db - Take Me (Priya Sen & Aman Anand Remix) / 
10 - Modeplex - Soul In Pieces / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"38.3K",fecha:"2019-08-31",link:"https://mcdn.podbean.com/mf/download/8syv2b/434-HernanCattaneo-2019-08-31.mp3",tracklist:`Gab Rhome - Salmo Salar /
Arturo Hevia - Walking On Her Back /
Verboten Berlin - Real Or Nature (Booka Shade Remix) /
Alex O'Rion - Marathon /
Carla Cimino - Artemis (Luciano Scheffer ) /
Michael A - Kaleido Skope /
Tomas Tejeda - Reborn (Gorkiz Remix) /
Lehar - The Morning /
Amber Long, Norman H, and 116 db - Take Me (Priya Sen & Aman Anand Remix) /`},{episodio:"436",titulo:"Resident / Episode 436 / Sep 14 2019",descripcion:`1 - Dense - Forest / 
2 - Hunzed - Morka Staves Remix / 
3 - Hunter Game - The Island (Through Noise Edit) / 
4 - Case & Barlow - Dorse (Memory Remix) / 
5 - Leo Perez, Dhany G - Jade (D-Rhapsody Remix) / 
6 - Steve Parry - Don't You Ever Stop ( John Digweed & Nick Muir Remix) / 
7 - Sebastian Busto - Journey to Ixtlan / 
8 - Dyzen - Talisman / 
9 - Mononoid - Tantrum / 
10 - Hernan Cattaneo & Marcelo Vasami - Scope / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"42.1K",fecha:"2019-09-14",link:"https://mcdn.podbean.com/mf/download/6itn2g/436-HernanCattaneo-2019-09-14.mp3",tracklist:`Dense - Forest /
Hunzed - Morka Staves Remix /
Hunter Game - The Island (Through Noise Edit) /
Case & Barlow - Dorse (Memory Remix) /
Leo Perez, Dhany G - Jade (D-Rhapsody Remix) /
Steve Parry - Don't You Ever Stop ( John Digweed & Nick Muir Remix) /
Sebastian Busto - Journey to Ixtlan /
Dyzen - Talisman /
Mononoid - Tantrum /`},{episodio:"437",titulo:"Resident / Episode 437 / Sep 21 2019",descripcion:`1 - Nick Newman - The Tea Garden / 
2 - HOKI - Some Kind Of Beautiful (Facundo Mohrr Remix) / 
3 - Gux Jimenez, Jab Vix, Javier Duque - Element 911 (Fresen, Mental Order, Tim Othy Remix) / 
4 - Andre Sobota - Left Behind (Lanvary Remix) / 
5 - Kamilo Sanclemente - Dabeat - Tars / 
6 - Tone Depth - Past Hours / 
7 - Christopher FaFa - Fourty (Lucas Rossi Remix) / 
8 - Michael & Levan And Stiven Rivic - Stardust (Jerome Isma-Ae Remix) / 
9 - Wilian Kraupp, Ariel Merisio - Reach Out / 
10 - Dorian Craft & LVTECE - Yume / Download episode on MP3 (Right click, save link as...)`,likes:"41",descargas:"44.4K",fecha:"2019-09-21",link:"https://mcdn.podbean.com/mf/download/fxef28/437-HernanCattaneo-2019-09-21.mp3",tracklist:`Nick Newman - The Tea Garden /
HOKI - Some Kind Of Beautiful (Facundo Mohrr Remix) /
Gux Jimenez, Jab Vix, Javier Duque - Element 911 (Fresen, Mental Order, Tim Othy Remix) /
Andre Sobota - Left Behind (Lanvary Remix) /
Kamilo Sanclemente - Dabeat - Tars /
Tone Depth - Past Hours /
Christopher FaFa - Fourty (Lucas Rossi Remix) /
Michael & Levan And Stiven Rivic - Stardust (Jerome Isma-Ae Remix) /
Wilian Kraupp, Ariel Merisio - Reach Out /`},{episodio:"438",titulo:"Resident / Episode 438 / Sep 28 2019",descripcion:`1 - Ana Brun - Balloon Ranger (Clavis Remix & Dub) / 
2 - Frankey - Rotary / 
3 - Nick Varon - Fertile Soil (Tripswitch Remix) / 
4 - Dowden feat Amber Long - Ripple (Santo Adriano) / 
5 - Roland Klinkenberg - Mexico Can Wait (Baunder remix) / 
6 - Ugur Pato & Volkan Erman - Memories / 
7 - G\u039BR\u039BK - Glass / 
8 - Holland - Solaris (Hasith Remix) / 
9 - Golan Zocher & Choopie - Kadishman / 
10 - Stan Kolev, Matan Caspi - Empire / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"44.3K",fecha:"2019-09-28",link:"https://mcdn.podbean.com/mf/download/ymkaa8/438-HernanCattaneo-2019-09-28.mp3",tracklist:`Ana Brun - Balloon Ranger (Clavis Remix & Dub) /
Frankey - Rotary /
Nick Varon - Fertile Soil (Tripswitch Remix) /
Dowden feat Amber Long - Ripple (Santo Adriano) /
Roland Klinkenberg - Mexico Can Wait (Baunder remix) /
Ugur Pato & Volkan Erman - Memories /
G\u039BR\u039BK - Glass /
Holland - Solaris (Hasith Remix) /
Golan Zocher & Choopie - Kadishman /`},{episodio:"439",titulo:"Resident / Episode 439 / Oct 05 2019",descripcion:`1 - Blindsmyth - Frozen / 
2 - Lucas Romero - Puro (ALRM Remix) / 
3 - Onur Ozman - It hurts ft Lazarusman (Audio Junkies remix) / 
4 - Frankey & Sandrino - Mira / 
5 - Tripswitch - Stigma [Colorize] / 
6 - Alex O'Rion - Navagio (Tripswitch Remix) / 
7 - Guy J - Fallstar (Subandrio Secret Rising Rework) / 
8 - CannaKid - Dirigible Dreams / 
9 - CannaKid - Technological Cocoon / 
10 - Cid Inc & Orsen - Ten / Download episode on MP3 (Right click, save link as...)`,likes:"42",descargas:"47.7K",fecha:"2019-10-05",link:"https://mcdn.podbean.com/mf/download/sbk75d/439-HernanCattaneo-2019-10-05.mp3",tracklist:`Blindsmyth - Frozen /
Lucas Romero - Puro (ALRM Remix) /
Onur Ozman - It hurts ft Lazarusman (Audio Junkies remix) /
Frankey & Sandrino - Mira /
Tripswitch - Stigma [Colorize] /
Alex O'Rion - Navagio (Tripswitch Remix) /
Guy J - Fallstar (Subandrio Secret Rising Rework) /
CannaKid - Dirigible Dreams /
CannaKid - Technological Cocoon /`},{episodio:"440",titulo:"Resident / Episode 440 / Oct 12 2019",descripcion:`1 - Adult Karate ft. John Tejada - Your Ghost (Speaking In Tongues RMX) / 
2 - Nicolas Barbieri - Hipnominate (Diego Berrondo Remix) / 
3 - DJ Paul - Healing-Sounds / 
4 - Santo Adriano - Black Rock City / 
5 - Gorkiz - Tolaria West (Diego Berrondo & Alex Efe Remix) / 
6 - Julian Nates - Exchanging Souls / 
7 - Boys be kko - Oreinspotting / 
8 - Catharsis -Kamilo Sanclemente - Mauro Aguirre Remix / 
9 - Storytellers (Original Mix) - Mariano Mellino & John Cosani / 
10 - Andre Moret - Recover / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"45.6K",fecha:"2019-10-12",link:"https://mcdn.podbean.com/mf/download/hgiiu7/440-HernanCattaneo-2019-10-12.mp3",tracklist:`Adult Karate ft. John Tejada - Your Ghost (Speaking In Tongues RMX) /
Nicolas Barbieri - Hipnominate (Diego Berrondo Remix) /
DJ Paul - Healing-Sounds /
Santo Adriano - Black Rock City /
Gorkiz - Tolaria West (Diego Berrondo & Alex Efe Remix) /
Julian Nates - Exchanging Souls /
Boys be kko - Oreinspotting /
Catharsis -Kamilo Sanclemente - Mauro Aguirre Remix /
Storytellers (Original Mix) - Mariano Mellino & John Cosani /`},{episodio:"441",titulo:"Resident / Episode 441 / Oct 19 2019",descripcion:`1 - \xC2me - Transmoderna / 
2 - Enzo Monza - Goliat / 
3 - Nattz - Y Porque Te Quiero / 
4 - Oliver & Tom - Platurno / 
5 - MMM - Enter The Club (Diego Berrondo & Alex Efe Bootleg Mix) / 
6 - David Mayer - Snake Dance / 
7 - Reflective - Soul / 
8 - Alejo Gonzalez & Max Blade - ID / 
9 - Pablo German - Reborn / 
10 - Bob Moses - Listen To Me (Cassian Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"25",descargas:"46.1K",fecha:"2019-10-19",link:"https://mcdn.podbean.com/mf/download/nj227d/441-HernanCattaneo-2019-10-19.mp3",tracklist:`\xC2me - Transmoderna /
Enzo Monza - Goliat /
Nattz - Y Porque Te Quiero /
Oliver & Tom - Platurno /
MMM - Enter The Club (Diego Berrondo & Alex Efe Bootleg Mix) /
David Mayer - Snake Dance /
Reflective - Soul /
Alejo Gonzalez & Max Blade - ID /
Pablo German - Reborn /`},{episodio:"442",titulo:"Resident / Episode 442 / Oct 26 2019",descripcion:`1 - Goraieb & Luciano Scheffer Feat. Sarah Chilanti - Believe / 
2 - Analog Jungs - Vancouver (Kandar Remix) / 
3 - ONYVA - Deep Emanation / 
4 - RIGOONI - Sunk Coast Fallacy / 
5 - Luka Sambe, Filter Bear - Ekhi XIX / 
6 - Who Made Who - Surfing On A Stone (Santi Mossman Remix) / 
7 - Marino Canal - Vangelis Dreams / 
8 - Depeche Mode - Precious (Gonzalo Sacc, Rodrigo Lapena Interpretation) / 
9 - Sebastian Busto - The Miracle / 
10 - Musumeci & Sisio - Where Are You / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"51.9K",fecha:"2019-10-26",link:"https://mcdn.podbean.com/mf/download/67w6q4/442-HernanCattaneo-2019-10-26.mp3",tracklist:`Goraieb & Luciano Scheffer Feat. Sarah Chilanti - Believe /
Analog Jungs - Vancouver (Kandar Remix) /
ONYVA - Deep Emanation /
RIGOONI - Sunk Coast Fallacy /
Luka Sambe, Filter Bear - Ekhi XIX /
Who Made Who - Surfing On A Stone (Santi Mossman Remix) /
Marino Canal - Vangelis Dreams /
Depeche Mode - Precious (Gonzalo Sacc, Rodrigo Lapena Interpretation) /
Sebastian Busto - The Miracle /`},{episodio:"443",titulo:"Resident / Episode 443 / Nov 02 2019",descripcion:`1 - Massive Attack - Teardrop (Santo Adriano Reinterpretation) / 
2 - Konektiv - Lift / 
3 - Miracle in the savannah / 
4 - Kostya Outta - Sunday Sunrise / 
5 - Kenan Savrun - Shivaya (Ziger Remix) / 
6 - Santi Mossman - Insight / 
7 - Hermanez - Back in Nefenro (Navar Remix) / 
8 - Oblong Forerunners remix / 
9 - John Creamer & Stephane K feat Nkemdi - I Wish You Were Here (Khaaron Remix) / 
10 - Berni Turletti - Physical Balance / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"49.9K",fecha:"2019-11-02",link:"https://mcdn.podbean.com/mf/download/7rvq85/443-HernanCattaneo-2019-11-02.mp3",tracklist:`Massive Attack - Teardrop (Santo Adriano Reinterpretation) /
Konektiv - Lift /
Miracle in the savannah /
Kostya Outta - Sunday Sunrise /
Kenan Savrun - Shivaya (Ziger Remix) /
Santi Mossman - Insight /
Hermanez - Back in Nefenro (Navar Remix) /
Oblong Forerunners remix /
John Creamer & Stephane K feat Nkemdi - I Wish You Were Here (Khaaron Remix) /`},{episodio:"444",titulo:"Resident / Episode 444 / Nov 09 2019",descripcion:`1 - Julian Morbelli - ID / 
2 - Floral - Need to Feel Loved (Bruno Andrada Remix) / 
3 - Savvas - Mindfulness (Imran Khan Remix) / 
4 - Thom Yorke - Not the news (Nick Stoynoff bootleg) / 
5 - Tomi H - Galactic ft Awen (Dub Mix) / 
6 - Bootes Gray - Voice Of The Universe (Priya Sen & Aman Anand Remix) / 
7 - Mariano Montori - Reflection / 
8 - Sia - Drink To Get Drunk (Li-Polymer Unofficial Remix) / 
9 - Michael A - Subside / 
10 - Alfa State - Symphony Of Courage (Alejo Gonzalez Rework) / Download episode on MP3 (Right click, save link as...)`,likes:"48",descargas:"52.6K",fecha:"2019-11-09",link:"https://mcdn.podbean.com/mf/download/k2vyhn/444-HernanCattaneo-2019-11-09.mp3",tracklist:`Julian Morbelli - ID /
Floral - Need to Feel Loved (Bruno Andrada Remix) /
Savvas - Mindfulness (Imran Khan Remix) /
Thom Yorke - Not the news (Nick Stoynoff bootleg) /
Tomi H - Galactic ft Awen (Dub Mix) /
Bootes Gray - Voice Of The Universe (Priya Sen & Aman Anand Remix) /
Mariano Montori - Reflection /
Sia - Drink To Get Drunk (Li-Polymer Unofficial Remix) /
Michael A - Subside /`},{episodio:"446",titulo:"Resident / Episode 446 / Nov 23 2019",descripcion:`1 - Apparat - Outlier ( Solomun) / 
2 - Analog Jungs - Marbella (Golan Zocher Remix) / 
3 - R\xF6yksopp - What Else Is There (John Cosani Unofficial Remix) / 
4 - Li-Polymer - Magn\xF3lia / 
5 - Pablo German - Rainbow (Julian Rodriguez & No-No Remix) / 
6 - All The Things I've Done (Gaston Ponte Remix) / 
7 - Sebastian Sellares - Temperament / 
8 - Golan Zocher & Choopie - Inception / 
9 - Kamilo Sanclemente, Giovanny Aparicio - Brotherhood / 
10 - Gullen - Lydia's Cove / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"52.1K",fecha:"2019-11-23",link:"https://mcdn.podbean.com/mf/download/kp96fx/446-HernanCattaneo-2019-11-23.mp3",tracklist:`Apparat - Outlier ( Solomun) /
Analog Jungs - Marbella (Golan Zocher Remix) /
R\xF6yksopp - What Else Is There (John Cosani Unofficial Remix) /
Li-Polymer - Magn\xF3lia /
Pablo German - Rainbow (Julian Rodriguez & No-No Remix) /
All The Things I've Done (Gaston Ponte Remix) /
Sebastian Sellares - Temperament /
Golan Zocher & Choopie - Inception /
Kamilo Sanclemente, Giovanny Aparicio - Brotherhood /`},{episodio:"447",titulo:"Resident / Episode 447 / Nov 30 2019",descripcion:`1 - Nicolas Rada - Narita / 
2 - Arnold T and Alain Pauwels - Ginger Mercury / 
3 - DSF & Shai T - Take A Ride / 
4 - TEELCO - Happy Moments (Greenage Remix) / 
5 - Dynacom & Bodai - Diligent / 
6 - Dhany G - The Past Behind Your Back / 
7 - GMJ - Adena / 
8 - Luke Costa - Reminiscencia / 
9 - Niceshot - Ritual of Love / Download episode on MP3 (Right click, save link as...)`,likes:"38",descargas:"52K",fecha:"2019-11-30",link:"https://mcdn.podbean.com/mf/download/krpyum/447-HernanCattaneo-2019-11-30.mp3",tracklist:`Nicolas Rada - Narita /
Arnold T and Alain Pauwels - Ginger Mercury /
DSF & Shai T - Take A Ride /
TEELCO - Happy Moments (Greenage Remix) /
Dynacom & Bodai - Diligent /
Dhany G - The Past Behind Your Back /
GMJ - Adena /
Luke Costa - Reminiscencia /`},{episodio:"448",titulo:"Resident / Episode 448 / Dec 07 2019",descripcion:`1 - Nopi - Hosu (Erdi Irmak Remix) / 
2 - Evans - Futurism / 
3 - Sebastian Sellares - Stranded Mind / 
4 - Sebastian Sellares - Memories of a Past Life / 
5 - East Cafe - A Landscape in Blue / 
6 - Jeremy Olander - First Sights / 
7 - Henry Saiz - Alegria rara / 
8 - Isaac Differding - Just Breathe / 
9 - Pablo German - Reborn (Golan Zocher Remix) / 
10 - The Cure - Just Like Heaven (Antrim Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"31",descargas:"51.5K",fecha:"2019-12-07",link:"https://mcdn.podbean.com/mf/download/59qdjw/448-HernanCattaneo-2019-12-07.mp3",tracklist:`Nopi - Hosu (Erdi Irmak Remix) /
Evans - Futurism /
Sebastian Sellares - Stranded Mind /
Sebastian Sellares - Memories of a Past Life /
East Cafe - A Landscape in Blue /
Jeremy Olander - First Sights /
Henry Saiz - Alegria rara /
Isaac Differding - Just Breathe /
Pablo German - Reborn (Golan Zocher Remix) /`},{episodio:"449",titulo:"Resident / Episode 449 / Dec 14 2019",descripcion:`1 - Henry Saiz - Ensuen\xE2o (Original Mix) / 
2 - Nick Varon - Fertile Soil (Tripswitch Remix) [Serendeep] / 
3 - Funkform, GMJ & Matter - Emerge / 
4 - Pablo German - Rainbow (Julian Rodriguez & No-No Remix) / 
5 - Dynacom - Coracle (Original Mix) / 
6 - Sean McClellan Feat. Mike Snyder - Believe (Nila Remix) / 
7 - Imagine Souls - Myself (Agustin Giri Remix) / 
8 - Matias Larrosa & Martin Gardoqui - Wide Spaces [ENDANGERED] / 
9 - Deeparture feat. Rubenson - Rewrite [DAYS like NIGHTS] / 
10 - Rennie Foster - Devil's Water (Edu Imbernon) / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"54.6K",fecha:"2019-12-14",link:"https://mcdn.podbean.com/mf/download/uk4tbj/449-HernanCattaneo-2019-12-14.mp3",tracklist:`Henry Saiz - Ensuen\xE2o (Original Mix) /
Nick Varon - Fertile Soil (Tripswitch Remix) [Serendeep] /
Funkform, GMJ & Matter - Emerge /
Pablo German - Rainbow (Julian Rodriguez & No-No Remix) /
Dynacom - Coracle (Original Mix) /
Sean McClellan Feat. Mike Snyder - Believe (Nila Remix) /
Imagine Souls - Myself (Agustin Giri Remix) /
Matias Larrosa & Martin Gardoqui - Wide Spaces [ENDANGERED] /
Deeparture feat. Rubenson - Rewrite [DAYS like NIGHTS] /`},{episodio:"450",titulo:"Resident / Episode 450 / Dec 21 2019",descripcion:`1 - Imran Khan - Sunsweat / 
 2 - Brian Cid - Cometas y cometas II / 
 3 - Enzo Elia & Aldebaran - 2 x 1 / 
 4 - Juan Sapia - Magic Moon / 
 5 - Andre Sobota & Felipe Novaes - Prescience (Alex O'Rion Remix) / 
 6 - Nick Varon & Antrim - Lobo Loco / 
 7 - Paul Deep (AR) - Mk50 / 
 8 - Coeus - The Mirror Game / 
 9 - Hunter/Game - 'Lost' / 
 10 - 1979 - Where Are You Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"76.6K",fecha:"2019-12-21",link:"https://mcdn.podbean.com/mf/download/2cwm4m/450-HernanCattaneo-2019-12-21.mp3",tracklist:`Imran Khan - Sunsweat /
2 - Brian Cid - Cometas y cometas II /
3 - Enzo Elia & Aldebaran - 2 x 1 /
4 - Juan Sapia - Magic Moon /
5 - Andre Sobota & Felipe Novaes - Prescience (Alex O'Rion Remix) /
6 - Nick Varon & Antrim - Lobo Loco /
7 - Paul Deep (AR) - Mk50 /
8 - Coeus - The Mirror Game /
9 - Hunter/Game - 'Lost' /`},{episodio:"451",titulo:"Resident / Episode 451 / Dec 28 2019",descripcion:"Live at Woodstock 69 part 1 Download episode on MP3 (Right click, save link as...)",likes:"51",descargas:"66.8K",fecha:"2019-12-28",link:"https://mcdn.podbean.com/mf/download/vq6aer/451-HernanCattaneo-2019-12-28.mp3"},{episodio:"452",titulo:"Resident / Episode 452 / Jan 04 2020",descripcion:"Live at Woodstock 69 part 2 Download episode on MP3 (Right click, save link as...)",likes:"50",descargas:"64.3K",fecha:"2020-01-04",link:"https://mcdn.podbean.com/mf/download/fzj7sy/452-HernanCattaneo-2020-01-04.mp3"},{episodio:"453",titulo:"Resident / Episode 453 / Jan 11 2020",descripcion:"Live from Woodstock69 part 3 Download episode on MP3 (Right click, save link as...)",likes:"35",descargas:"59.8K",fecha:"2020-01-11",link:"https://mcdn.podbean.com/mf/download/qt9ga9/453-HernanCattaneo-2020-01-11.mp3"},{episodio:"454",titulo:"Resident / Episode 454 / Jan 18 2020",descripcion:"Live at Woodstock 69 part 4 Download episode on MP3 (Right click, save link as...)",likes:"37",descargas:"57.5K",fecha:"2020-01-18",link:"https://mcdn.podbean.com/mf/download/pczdk3/454-HernanCattaneo-2020-01-18.mp3"},{episodio:"456",titulo:"Resident / Episode 456 / Feb 01 2020",descripcion:`1 - Budakid - Sky Mirage / 
2 - Hrag Mikkel & Pambouk / 
3 - Julio Largente - Voyager / 
4 - Oliver & Tom Brian Muszkat - Forgotten (Oliver & Tom Remix) / 
5 - Michael A - Lost Miracle / 
6 - Subconscious Tales - Ramya / 
7 - Coloray - Gazing Eyes / 
8 - Kamilo Sanclemente, Zalvador - Xhena / 
9 - Dmitry Molosh - Cascade / 
10 - Soul Button - Utopia feat. Terry Grant (Armen Miran RMX) / Download episode on MP3 (Right click, save link as...)`,likes:"39",descargas:"60.8K",fecha:"2020-02-01",link:"https://mcdn.podbean.com/mf/download/5p947d/456-HernanCattaneo-2020-02-01.mp3",tracklist:`Budakid - Sky Mirage /
Hrag Mikkel & Pambouk /
Julio Largente - Voyager /
Oliver & Tom Brian Muszkat - Forgotten (Oliver & Tom Remix) /
Michael A - Lost Miracle /
Subconscious Tales - Ramya /
Coloray - Gazing Eyes /
Kamilo Sanclemente, Zalvador - Xhena /
Dmitry Molosh - Cascade /`},{episodio:"457",titulo:"Resident / Episode 457 / Feb 08 2020",descripcion:`1 - Volen Sentir - Kailas / 
2 - Nopi - Mayaya / 
3 - Losless - Over Me / 
4 - Manu F - Heaven 7 / 
5 - Juan Sapia - Enough To Believe / 
6 - Yudi Watanabe - Voices / 
7 - Namito & Chris Zippel - Focus / 
8 - Ewan Rill - The Mandalorian / 
9 - Rick Pier O'Neil - Fair Trade / 
10 - Luciano Scheffer & Julian Nates - Febo / Download episode on MP3 (Right click, save link as...)`,likes:"44",descargas:"59.3K",fecha:"2020-02-08",link:"https://mcdn.podbean.com/mf/download/6fjbrz/457-HernanCattaneo-2020-02-08.mp3",tracklist:`Volen Sentir - Kailas /
Nopi - Mayaya /
Losless - Over Me /
Manu F - Heaven 7 /
Juan Sapia - Enough To Believe /
Yudi Watanabe - Voices /
Namito & Chris Zippel - Focus /
Ewan Rill - The Mandalorian /
Rick Pier O'Neil - Fair Trade /`},{episodio:"458",titulo:"Resident / Episode 458 / Feb 15 2020",descripcion:`1 - Tom Peters (BER) - Novum / 
2 - Roy Rosenfeld - No Drama ft. Nadav Dagon / 
3 - Stuart + King- Going+Places / 
4 - Cid Inc. - Turning Pages (Alex O'Rion Marathon Edit) / 
5 - Kabi (AR) feat. Agustina Fern\xE1ndez - F\xE9nix / 
6 - Rick Pier ONeil - Ty0s / 
7 - Futur-E - Nautilus / 
8 - DJ Zombi - Octopus / 
9 - Erdi Irmak - Echoes in Time (Matias Chilano Remix) / 
10 - Sumo - La Rubia Tarada (Nick Kaniak Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"57.9K",fecha:"2020-02-15",link:"https://mcdn.podbean.com/mf/download/jtmqp3/458-HernanCattaneo-2020-02-15.mp3",tracklist:`Tom Peters (BER) - Novum /
Roy Rosenfeld - No Drama ft. Nadav Dagon /
Stuart + King- Going+Places /
Cid Inc. - Turning Pages (Alex O'Rion Marathon Edit) /
Kabi (AR) feat. Agustina Fern\xE1ndez - F\xE9nix /
Rick Pier ONeil - Ty0s /
Futur-E - Nautilus /
DJ Zombi - Octopus /
Erdi Irmak - Echoes in Time (Matias Chilano Remix) /`},{episodio:"459",titulo:"Resident / Episode 459 / Feb 22 2020",descripcion:`1 - Hrag Mikkel & Pambouk - Renaissance / 
2 - Fabri Lopez - There For The Winter / 
3 - Kamilo Sanclemente - Crystal Cave / 
4 - Anton Make & Hatewax - The First History Of Man / 
5 - Tame Impala - Let It Happen (DJ Paul remix) / 
6 - Tara Brooks - Wake Me / 
7 - Zoo Brazil - Nash / 
8 - Dmitry Molosh - Step by Step / 
9 - Loverboy - Catz n Dogz (Remix) / 
10 - EANP - Stamp (Rework 2020) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"59.3K",fecha:"2020-02-22",link:"https://mcdn.podbean.com/mf/download/nieiiw/459-HernanCattaneo-2020-02-22.mp3",tracklist:`Hrag Mikkel & Pambouk - Renaissance /
Fabri Lopez - There For The Winter /
Kamilo Sanclemente - Crystal Cave /
Anton Make & Hatewax - The First History Of Man /
Tame Impala - Let It Happen (DJ Paul remix) /
Tara Brooks - Wake Me /
Zoo Brazil - Nash /
Dmitry Molosh - Step by Step /
Loverboy - Catz n Dogz (Remix) /`},{episodio:"460",titulo:"Resident / Episode 460 / Feb 29 2020",descripcion:`1 - Luka Sambe - Magical Realism / 
2 - Maxi Degrassi - Syrah / 
3 - Eric Lune, Juan Sapia - Evolution / 
4 - SLP - Chase the monster / 
5 - Artificial Minds - Mind Control / 
6 - Fur Coat - Lonely Nights / 
7 - Marino Canal - Provenance / 
8 - Sascha Braemer - All I know / 
9 - Apparat - Brandemburg (Gardoqu , Larrosa + Nobilis) / 
10 - Budakid - Walkman / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"53.4K",fecha:"2020-02-29",link:"https://mcdn.podbean.com/mf/download/67kqdw/460-HernanCattaneo-2020-02-29.mp3",tracklist:`Luka Sambe - Magical Realism /
Maxi Degrassi - Syrah /
Eric Lune, Juan Sapia - Evolution /
SLP - Chase the monster /
Artificial Minds - Mind Control /
Fur Coat - Lonely Nights /
Marino Canal - Provenance /
Sascha Braemer - All I know /
Apparat - Brandemburg (Gardoqu , Larrosa + Nobilis) /`},{episodio:"461",titulo:"Resident / Episode 461 / Mar 07 2020",descripcion:`1 - DSF - Fraoula / 
2 - SLP - Lake Bled / 
3 - Marcus Worgull - Flying High / 
4 - Mauro Mas, Julian Liander - Purity / 
5 - Mauro Masi - Xsendra / 
6 - Analog Jungs, Oliver & Tom - Landscape / 
7 - Weekend Heroes & Or Kopel - Wild East / 
8 - Soma Soul - No Gravity (Endangered) / 
9 - Nandu - Gates To The Galaxy / 
10 - Angelov - Catocca / Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"41.6K",fecha:"2020-03-07",link:"https://mcdn.podbean.com/mf/download/h25bsb/461-HernanCattaneo-2020-03-07.mp3",tracklist:`DSF - Fraoula /
SLP - Lake Bled /
Marcus Worgull - Flying High /
Mauro Mas, Julian Liander - Purity /
Mauro Masi - Xsendra /
Analog Jungs, Oliver & Tom - Landscape /
Weekend Heroes & Or Kopel - Wild East /
Soma Soul - No Gravity (Endangered) /
Nandu - Gates To The Galaxy /`},{episodio:"462",titulo:"Resident / Episode 462 / Mar 14 2020",descripcion:`1 - London Grammar - Strong (Juan Sapia's Private Bootleg) / 
2 - Shadows - Dee Montero, Newman (I Love) / 
3 - Thom Yorke - Dawn Chorus (Nicolas Ruiz Remix) / 
4 - Clarian - Fools rush in / 
5 - Andy King - Hemisphere (Eric Lune Remix) / 
6 - D-Nox & Beckers - Bitter Rain (Cid Inc. Remix) / 
7 - Antrim & Ezequiel Arias - White Moon (Alex O'Rion Remix) / 
8 - Cid Inc - Citadel / 
9 - Re.You & Kadosh - Friendly Fire (Lehar Remix) / 
10 - Cannakid - Synth Train (Subandrio Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"37.5K",fecha:"2020-03-14",link:"https://mcdn.podbean.com/mf/download/usqs9c/462-HernanCattaneo-2020-03-14.mp3",tracklist:`London Grammar - Strong (Juan Sapia's Private Bootleg) /
Shadows - Dee Montero, Newman (I Love) /
Thom Yorke - Dawn Chorus (Nicolas Ruiz Remix) /
Clarian - Fools rush in /
Andy King - Hemisphere (Eric Lune Remix) /
D-Nox & Beckers - Bitter Rain (Cid Inc. Remix) /
Antrim & Ezequiel Arias - White Moon (Alex O'Rion Remix) /
Cid Inc - Citadel /
Re.You & Kadosh - Friendly Fire (Lehar Remix) /`},{episodio:"463",titulo:"Resident / Episode 463 / Mar 21 2020",descripcion:`1 - Kidnap - The Unfriendly World (Budakid Remix) / 
2 - Ivory - Sense (Kadosh Remix) / 
3 - Tash & Paul Angelo & Don Argento - Exapsis (Alex O'Rion Remix) / 
4 - Eze Ramirez - Dagba / 
5 - Vangelis - Ask The Mountains (Marcelo Vasami Remix) / 
6 - D-Nox, K.A.L.I.L. - Mayahl / 
7 - David Barragan, Kamilo Sanclemente - Relive / 
8 - Porra- Social adapted / 
9 - Nine One - Black Seed / 
10 - Cypherpunx + Luke Brancaccio - Tears + Lies / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"35.6K",fecha:"2020-03-21",link:"https://mcdn.podbean.com/mf/download/j72igv/463-HernanCattaneo-2020-03-21.mp3",tracklist:`Kidnap - The Unfriendly World (Budakid Remix) /
Ivory - Sense (Kadosh Remix) /
Tash & Paul Angelo & Don Argento - Exapsis (Alex O'Rion Remix) /
Eze Ramirez - Dagba /
Vangelis - Ask The Mountains (Marcelo Vasami Remix) /
D-Nox, K.A.L.I.L. - Mayahl /
David Barragan, Kamilo Sanclemente - Relive /
Porra- Social adapted /
Nine One - Black Seed /`},{episodio:"465",titulo:"Resident / Episode 465 / Apr 04 2020",descripcion:`1 - Agatha Pher - Unmute Your Heart / 
2 - Depeche Mode - Precious (Nicolas Rada Remix) / 
3 - Corren Cavini - When I Knew (Lucas Rossi Remix) / 
4 - Low Orbit Satellite - Singing - (Crystal dub) / 
5 - Ewan Rill & K Loveski - Broh Canville / 
6 - NekliFF & Rafael Cerato - Marrakesh (Kasper Koman Remix) / 
7 - Michael A - Shade Of Purple / 
8 - Anhauser, Nicolas Leonelli & Lio Q - Sands Of Time / 
9 - Subandrio - Neptune Lights / 
10 - Matan Caspi, Stan Kolev - Barakah Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"35.2K",fecha:"2020-04-04",link:"https://mcdn.podbean.com/mf/download/fymjch/465-HernanCattaneo-2020-04-04.mp3",tracklist:`Agatha Pher - Unmute Your Heart /
Depeche Mode - Precious (Nicolas Rada Remix) /
Corren Cavini - When I Knew (Lucas Rossi Remix) /
Low Orbit Satellite - Singing - (Crystal dub) /
Ewan Rill & K Loveski - Broh Canville /
NekliFF & Rafael Cerato - Marrakesh (Kasper Koman Remix) /
Michael A - Shade Of Purple /
Anhauser, Nicolas Leonelli & Lio Q - Sands Of Time /
Subandrio - Neptune Lights /`},{episodio:"466",titulo:"Resident / Episode 466 / Apr 11 2020",descripcion:`1 - \xD3lafur Arnalds feat. Nanna Bryndis - Particles (Lucas Rossi Edit) / 
2 - Golan Zocher & Kai Vice - Solstice / 
3 - Steve Slight - Saga / 
4 - NuKreative - Make Up Your Mind / 
5 - Gab Rhome - Bites per Minute / 
6 - Steve Bug & Langenberg - Emphasizer / 
7 - Tale Of Us - Together / 
8 - Bootes Gray - Healing Trip (NOIYSE PROJECT Remix) / 
9 - Nacho Varela & Cruz Vittor - Kush / 
10 - Hernan Cattaneo & Soundexile - Sonification (Diego Berrondo Unofficial Remix) Download episode on MP3 (Right click, save link as...)`,likes:"42",descargas:"36.6K",fecha:"2020-04-11",link:"https://mcdn.podbean.com/mf/download/i6px5i/466-HernanCattaneo-2020-04-11.mp3",tracklist:`\xD3lafur Arnalds feat. Nanna Bryndis - Particles (Lucas Rossi Edit) /
Golan Zocher & Kai Vice - Solstice /
Steve Slight - Saga /
NuKreative - Make Up Your Mind /
Gab Rhome - Bites per Minute /
Steve Bug & Langenberg - Emphasizer /
Tale Of Us - Together /
Bootes Gray - Healing Trip (NOIYSE PROJECT Remix) /
Nacho Varela & Cruz Vittor - Kush /`},{episodio:"467",titulo:"Resident / Episode 467 / Apr 18 2020",descripcion:`1 - Gadi Mitrani - Fewer / 
2 - Dynacom & Bodai - N\xF3mades / 
3 - Deeparture & UOAK feat. Rubenson - Parachute / 
4 - Frankie M, Gonzalo Sacc, Rodrigo Lapena - Home / 
5 - NAHS - Nami / 
6 - Budakid -Lolita Express / 
7 - Nico Cerban - Altered Senses / 
8 - Emi Galvan - Crabo / 
9 - Dowden - Wood / 
10 - Muse-Into The Ether / Download episode on MP3 (Right click, save link as...)`,likes:"49",descargas:"36.3K",fecha:"2020-04-18",link:"https://mcdn.podbean.com/mf/download/3cmsxf/467-HernanCattaneo-2020-04-19.mp3",tracklist:`Gadi Mitrani - Fewer /
Dynacom & Bodai - N\xF3mades /
Deeparture & UOAK feat. Rubenson - Parachute /
Frankie M, Gonzalo Sacc, Rodrigo Lapena - Home /
NAHS - Nami /
Budakid -Lolita Express /
Nico Cerban - Altered Senses /
Emi Galvan - Crabo /
Dowden - Wood /`},{episodio:"468",titulo:"Resident / Episode 468 / Apr 25 2020",descripcion:`1 - Aether - We're All Together (Francesco Mami Remix) / 
2 - Bernie Turletti - Physical Balance (Baunder remix) / 
3 - Jim Rivers - I Go Deep (Matias Chilano Retouch) / 
4 - Petar Dundov - Synesthetic Flow / 
5 - Francesco Pico & Paul Hazendonk - Nifty Fifty / 
6 - Portishead - Roads (G\xF8vinda unofficial remix) / 
7 - Coll\xE9 - World To Come / 
8 - Dmitry Molosh & Michael A - Twelve Days / 
9 - DJ Paul - Sensitive (Part II) / 
10 - Dave Seaman - Stealing Amber / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"42.2K",fecha:"2020-04-25",link:"https://mcdn.podbean.com/mf/download/7278z9/468-HernanCattaneo-2020-04-25.mp3",tracklist:`Aether - We're All Together (Francesco Mami Remix) /
Bernie Turletti - Physical Balance (Baunder remix) /
Jim Rivers - I Go Deep (Matias Chilano Retouch) /
Petar Dundov - Synesthetic Flow /
Francesco Pico & Paul Hazendonk - Nifty Fifty /
Portishead - Roads (G\xF8vinda unofficial remix) /
Coll\xE9 - World To Come /
Dmitry Molosh & Michael A - Twelve Days /
DJ Paul - Sensitive (Part II) /`},{episodio:"469",titulo:"Resident / Episode 469 / May 02 2020",descripcion:`1 - Jamie Stevens - Blush / 
2 - Pablo Bolivar - Infinite Rainbows (Death on the Balcony) / 
3 - Jonathan Rosa - Visions Of You (Urmet K Remix) / 
4 - Nopi (UA) - Memory (Mike Spirit Remix) / 
5 - Gonza Rodriguez & Ivan Miatto - October Rain / 
6 - Alex Bessofen - Crescendo (Kamilo Sanclemente Remix) / 
7 - Ivan Coronel - Shaman (Robert Mason Remix) / 
8 - Sha-ullo - Breakthrough / 
9 - Gonza Rodriguez & Ivan Miatto - Time of change / 
10 - Bjork - Mutual Core (Gardoqui & Larrosa Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"36.8K",fecha:"2020-05-02",link:"https://mcdn.podbean.com/mf/download/fh7rx8/469-HernanCattaneo-2020-05-02.mp3",tracklist:`Jamie Stevens - Blush /
Pablo Bolivar - Infinite Rainbows (Death on the Balcony) /
Jonathan Rosa - Visions Of You (Urmet K Remix) /
Nopi (UA) - Memory (Mike Spirit Remix) /
Gonza Rodriguez & Ivan Miatto - October Rain /
Alex Bessofen - Crescendo (Kamilo Sanclemente Remix) /
Ivan Coronel - Shaman (Robert Mason Remix) /
Sha-ullo - Breakthrough /
Gonza Rodriguez & Ivan Miatto - Time of change /`},{episodio:"470",titulo:"Resident / Episode 470 / May 09 2020",descripcion:`1 - Alex O'Rion - Envy / 
2 - Dance Spirit - Deep Intentions (Griffin Paisley Remix) / 
3 - Manu F - Heaven 7 / 
4 - Rikken - Frozen World / 
5 - Santo Adriano - Conspiracy Theory / 
6 - Fractal Architect - Carrara (Robert Mason Remix) / 
7 - Dj Paul- Nature Calls / 
8 - Sha-ullo - Between The Lines / 
9 - NAHS - Nami (JFR & Julian Rodriguez Remix) / 
10 - SpeakOf - Venom (Kamilo Sanclemente Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.8K",fecha:"2020-05-09",link:"https://mcdn.podbean.com/mf/download/xxeeco/470-HernanCattaneo-2020-05-09.mp3",tracklist:`Alex O'Rion - Envy /
Dance Spirit - Deep Intentions (Griffin Paisley Remix) /
Manu F - Heaven 7 /
Rikken - Frozen World /
Santo Adriano - Conspiracy Theory /
Fractal Architect - Carrara (Robert Mason Remix) /
Dj Paul- Nature Calls /
Sha-ullo - Between The Lines /
NAHS - Nami (JFR & Julian Rodriguez Remix) /`},{episodio:"471",titulo:"Resident / Episode 471 / May 16 2020",descripcion:`1 - Ben B\xF6hmer feat. Malou - Lost In Mind (Volen Sentir Extended Vision) / 
2 - Yeah But No - Run Run Run (Adam Port Remix) / 
3 - Rusich - Space Talk / 
4 - Eric Lune - Embers (GMJ remix) / 
5 - kaspar tasane - hidden mantra (Mark Craven remix) / 
6 - Michael A - Slow Down / 
7 - Berni Turletti -To Flourish / 
8 - Creative Culture - Remember The Future (Sahar Z & Interaxxis Remix) / 
9 - Golan Zocher & Choopie - Reflejo / 
10 - Halaros, Leila Scheiwe - Drawer Full Of Memories / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"40.1K",fecha:"2020-05-16",link:"https://mcdn.podbean.com/mf/download/yuh8ro/471-HernanCattaneo-2020-05-16.mp3",tracklist:`Ben B\xF6hmer feat. Malou - Lost In Mind (Volen Sentir Extended Vision) /
Yeah But No - Run Run Run (Adam Port Remix) /
Rusich - Space Talk /
Eric Lune - Embers (GMJ remix) /
kaspar tasane - hidden mantra (Mark Craven remix) /
Michael A - Slow Down /
Berni Turletti -To Flourish /
Creative Culture - Remember The Future (Sahar Z & Interaxxis Remix) /
Golan Zocher & Choopie - Reflejo /`},{episodio:"472",titulo:"Resident / Episode 472 / May 23 2020",descripcion:`1 - Hernan G - BlackEyes / 
2 - Juan Pablo Torrez - Rome (Rauschhaus Remix) / 
3 - Losless - Modern Aura / 
4 - Solayre - The Sea / 
5 - Etherwave - Pathfinder (DJ Fronter Remix) / 
6 - Isaac Differding - Empathy / 
7 - Yeah But No - Run Run Run (Adam Port Remix) / 
8 - Dominik Eulberg - Goldene Acht (Mind Against Remix) / 
9 - Audiojack - Are We Here / 
10 - Darko De Jan - La Beaut\xE9 De La Vie / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"37.6K",fecha:"2020-05-23",link:"https://mcdn.podbean.com/mf/download/11n1me/472-HernanCattaneo-2020-05-23.mp3",tracklist:`Hernan G - BlackEyes /
Juan Pablo Torrez - Rome (Rauschhaus Remix) /
Losless - Modern Aura /
Solayre - The Sea /
Etherwave - Pathfinder (DJ Fronter Remix) /
Isaac Differding - Empathy /
Yeah But No - Run Run Run (Adam Port Remix) /
Dominik Eulberg - Goldene Acht (Mind Against Remix) /
Audiojack - Are We Here /`},{episodio:"474",titulo:"Resident / Episode 474 / Jun 06 2020",descripcion:`1 - Fingerprint - Babydoll White (Mem Aleph Remix) / 
2 - Fingerprint - Rye & Eggs (Mem Aleph Dark Mix) / 
3 - Koraal - Vuurduin / 
4 - Nicolas Ruiz - Agartha / 
5 - Grave - Where Is the Victory (Gaston Ponte remix) / 
6 - Benjamin Damage & Doc Daneeka Feat. Abigail Wyles - Battleships (ALMA (ARG)) / 
7 - Mauro Augugliaro - Gravitation / 
8 - Dylan deck - Sahodaraya (Noiyse Project Remix) / 
9 - Facundo Sosa - Eternity / 
10 - Cubicolor - Wake Me Up (Tale Of Us Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"41",descargas:"38K",fecha:"2020-06-06",link:"https://mcdn.podbean.com/mf/download/h95rel/474-HernanCattaneo-2020-06-06.mp3",tracklist:`Fingerprint - Babydoll White (Mem Aleph Remix) /
Fingerprint - Rye & Eggs (Mem Aleph Dark Mix) /
Koraal - Vuurduin /
Nicolas Ruiz - Agartha /
Grave - Where Is the Victory (Gaston Ponte remix) /
Benjamin Damage & Doc Daneeka Feat. Abigail Wyles - Battleships (ALMA (ARG)) /
Mauro Augugliaro - Gravitation /
Dylan deck - Sahodaraya (Noiyse Project Remix) /
Facundo Sosa - Eternity /`},{episodio:"475",titulo:"Resident / Episode 475 / Jun 13 2020",descripcion:`1 - Harry Choo Choo Romero - Tania (Alex Efe Remix) / 
2 - Raw District - Warok / 
3 - Eli Nissan - Narkotik / 
4 - Seiji (AR) - Tinky / 
5 - Khetouin - Robot Meditation (Nico Szabo remix) / 
6 - Ditian - Solid Snake / 
7 - Nico Serjanovich - It Turns Out that / 
8 - Andre Moret - Caring / 
9 - Fernando Olaya - Caravan / 
10 - Eelke Kleijn - The Hierophant / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"38.4K",fecha:"2020-06-13",link:"https://mcdn.podbean.com/mf/download/0ck9cv/475-HernanCattaneo-2020-06-13.mp3",tracklist:`Harry Choo Choo Romero - Tania (Alex Efe Remix) /
Raw District - Warok /
Eli Nissan - Narkotik /
Seiji (AR) - Tinky /
Khetouin - Robot Meditation (Nico Szabo remix) /
Ditian - Solid Snake /
Nico Serjanovich - It Turns Out that /
Andre Moret - Caring /
Fernando Olaya - Caravan /`},{episodio:"476",titulo:"Resident / Episode 476 / Jun 20 2020",descripcion:`1 - Jose Tabarez - Fluffy Clouds (Dj Bird Remix) / 
2 - Rod V - Meridiano (Nacres remix) / 
3 - Uone & Western - The Lone Wrangler (Out Of Sorts Gunslinger Mix) / 
4 - Pako & Frederik - Hold On / 
5 - Joris Voorn - Ryo (Mees Salom\xE9 Remix) / 
6 - Juan Deminicis - Sounds of Freedom / 
7 - Juan Ibanez & Dylan Deck - Touching The Sky (Andre Moret Remix) / 
8 - Sebastian Busto - The Night Wanderer (Katzen Remix) / 
9 - Dougal Fox - Ataraxia (Oliver & Tom Remix) / 
10 - Nico Cerban - Altered Senses (Luciano Scheffer Mix) - Balkan Connection Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"37.3K",fecha:"2020-06-20",link:"https://mcdn.podbean.com/mf/download/6039zu/476-HernanCattaneo-2020-06-20.mp3",tracklist:`Jose Tabarez - Fluffy Clouds (Dj Bird Remix) /
Rod V - Meridiano (Nacres remix) /
Uone & Western - The Lone Wrangler (Out Of Sorts Gunslinger Mix) /
Pako & Frederik - Hold On /
Joris Voorn - Ryo (Mees Salom\xE9 Remix) /
Juan Deminicis - Sounds of Freedom /
Juan Ibanez & Dylan Deck - Touching The Sky (Andre Moret Remix) /
Sebastian Busto - The Night Wanderer (Katzen Remix) /
Dougal Fox - Ataraxia (Oliver & Tom Remix) /`},{episodio:"477",titulo:"Resident / Episode 477 / Jun 27 2020",descripcion:`1 - Matt Rowan & Robbie Lowe - Luminary / 
2 - Albuquerque & Lostin - Arquivo X / 
3 - Kamilo Sanclemente, David Barragan - Relive / 
4 - Frankie M, Gonzalo Sacc, Rodrigo Lapena - Let me go / 
5 - Alex O'Rion - Blue / 
6 - GMJ - Mystic Sea (Imran Khan Remix) / 
7 - Niceshot - Mystery Dancer / 
8 - Kenan Savrun - Orion / 
9 - Magit Cacoon, Jos & Eli - Tropical_Heart / 
10 - Innerphonic - Garden Rivage (Extented mix) / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"37.5K",fecha:"2020-06-27",link:"https://mcdn.podbean.com/mf/download/vndlgn/477-HernanCattaneo-2020-06-27.mp3",tracklist:`Matt Rowan & Robbie Lowe - Luminary /
Albuquerque & Lostin - Arquivo X /
Kamilo Sanclemente, David Barragan - Relive /
Frankie M, Gonzalo Sacc, Rodrigo Lapena - Let me go /
Alex O'Rion - Blue /
GMJ - Mystic Sea (Imran Khan Remix) /
Niceshot - Mystery Dancer /
Kenan Savrun - Orion /
Magit Cacoon, Jos & Eli - Tropical_Heart /`},{episodio:"478",titulo:"Resident / Episode 478 / Jul 04 2020",descripcion:`1 - Alejo Gonzalez & Barklas - Ten Days (Sunrise Mix) / 
2 - Ciardi - Psy Clone / 
3 - Draso - Therme / 
4 - Danidu & Hasith - Amulet (Tripswitch Remix) / 
5 - Rodriguez Jr. - Monolith Garden (Steve Bug Remix) / 
6 - Tale Of Us - Be As One / 
7 - Kamilo Sanclemente & David Barragan - Time Writer / 
8 - NuFects - Elysium / 
9 - Perry Farrel - Let's All Pray for This World (Maceo Plex Glitchy Remix) / 
10 - Mauro Augugliaro - Paradigm / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"36.7K",fecha:"2020-07-04",link:"https://mcdn.podbean.com/mf/download/epp8qa/478-HernanCattaneo-2020-07-04.mp3",tracklist:`Alejo Gonzalez & Barklas - Ten Days (Sunrise Mix) /
Ciardi - Psy Clone /
Draso - Therme /
Danidu & Hasith - Amulet (Tripswitch Remix) /
Rodriguez Jr. - Monolith Garden (Steve Bug Remix) /
Tale Of Us - Be As One /
Kamilo Sanclemente & David Barragan - Time Writer /
NuFects - Elysium /
Perry Farrel - Let's All Pray for This World (Maceo Plex Glitchy Remix) /`},{episodio:"479",titulo:"Resident / Episode 479 / Jul 11 2020",descripcion:`1 - PAT B Incognica - Float some more / 
2 - Weird Sounding Dude - Star Child / 
3 - Luka Sambe - Alive Is The Meaning / 
4 - Vlada D'Shake - Bender Vox (Nico Szabo Remix) / 
5 - Stereo Underground - Zooz / 
6 - Hyenah - Not Enough ft. Lazarusman / 
7 - Dance Spirit - Close To The Sun / 
8 - Kotelett - Lifted / 
9 - Niceshot - Red Cheeks / 
10 - Raphael Mader - Blame / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"38.2K",fecha:"2020-07-11",link:"https://mcdn.podbean.com/mf/download/h0wi44/479-HernanCattaneo-2020-07-11.mp3",tracklist:`PAT B Incognica - Float some more /
Weird Sounding Dude - Star Child /
Luka Sambe - Alive Is The Meaning /
Vlada D'Shake - Bender Vox (Nico Szabo Remix) /
Stereo Underground - Zooz /
Hyenah - Not Enough ft. Lazarusman /
Dance Spirit - Close To The Sun /
Kotelett - Lifted /
Niceshot - Red Cheeks /`},{episodio:"480",titulo:"Resident / Episode 480 / Jul 18 2020",descripcion:`1 - Lautaro Dellacasa - My dub side / 
2 - Gadi Mitrani I - Joyful / 
3 - Fur Coat - Hurricane (Tim Green Remix) / 
4 - Maximo Gambini - De Buenos Aires a Cordoba / 
5 - Alec Araujo- Sacred Cross / 
6 - Tav Bord - In Motion / 
7 - Ricardo Piedra - Pedide (Christopher FaFa Remix) / 
8 - Esteban Ikasovic - Earth Revelations / 
9 - Budakid - Orrery / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.8K",fecha:"2020-07-18",link:"https://mcdn.podbean.com/mf/download/jf0hhk/480-HernanCattaneo-2020-07-18.mp3",tracklist:`Lautaro Dellacasa - My dub side /
Gadi Mitrani I - Joyful /
Fur Coat - Hurricane (Tim Green Remix) /
Maximo Gambini - De Buenos Aires a Cordoba /
Alec Araujo- Sacred Cross /
Tav Bord - In Motion /
Ricardo Piedra - Pedide (Christopher FaFa Remix) /
Esteban Ikasovic - Earth Revelations /`},{episodio:"481",titulo:"Resident / Episode 481 / Jul 25 2020",descripcion:`1 - Draso - Eyes Closed /\xA0
2 - Big Fabio \xA0- RideTheBass (Satoshi Fumi Rmx) /\xA0
3 - Golan Zocher - Enter (GMJ Remix) /\xA0
4 - Sebastian Sellares - Far From Home /\xA0
5 - Ezequiel Arias - Amnesia /\xA0
6 - Fat Cosmoe - Von /\xA0
7 - Chris Drifter - Listen the Sun /\xA0
8 - Goraieb & Luciano Scheffer Feat. Sarah Chilanti - Believe (Andre Moret Remix) /\xA0
9 - Carlos TK - Hope (Weird Sounding Dude Remix) /\xA0
10 - Solarstone & JES - Like A Waterfall (Forerunners Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"29",descargas:"37.7K",fecha:"2020-07-25",link:"https://mcdn.podbean.com/mf/download/k66vp9/481-hernancattaneo-2020-07-25.mp3",tracklist:`Draso - Eyes Closed /
Big Fabio \xA0- RideTheBass (Satoshi Fumi Rmx) /
Golan Zocher - Enter (GMJ Remix) /
Sebastian Sellares - Far From Home /
Ezequiel Arias - Amnesia /
Fat Cosmoe - Von /
Chris Drifter - Listen the Sun /
Goraieb & Luciano Scheffer Feat. Sarah Chilanti - Believe (Andre Moret Remix) /
Carlos TK - Hope (Weird Sounding Dude Remix) /`},{episodio:"482",titulo:"Resident / Episode 482 / Aug 01 2020",descripcion:`1 - Ashal S - Kashmir Sunrise /\xA0
2 - Graumann - Simfinity (Mehmet Akar Remix) /\xA0
3 - Geronimo Eguiguren - Land Of The Lost (Juan Sapia Remix) /\xA0
4 - Coccolino Deep - Lost /\xA0
5 - Segg - Like a man /\xA0
6 - Esteban Ikasovic - Earth Revelations /\xA0
7 - GMJ & Matter - Eldarin /\xA0
8 - Gntn - Solstice /\xA0
9 - Mono Electric Orchestra - Antarctica (Cid Inc. Remix) /\xA0
10 - Dynacom - Set Out / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"39.3K",fecha:"2020-08-01",link:"https://mcdn.podbean.com/mf/download/k5sz8e/482-hernancattaneo-2020-08-01.mp3",tracklist:`Ashal S - Kashmir Sunrise /
Graumann - Simfinity (Mehmet Akar Remix) /
Geronimo Eguiguren - Land Of The Lost (Juan Sapia Remix) /
Coccolino Deep - Lost /
Segg - Like a man /
Esteban Ikasovic - Earth Revelations /
GMJ & Matter - Eldarin /
Gntn - Solstice /
Mono Electric Orchestra - Antarctica (Cid Inc. Remix) /`},{episodio:"484",titulo:"Resident / Episode 484 / Aug 15 2020",descripcion:`1 - D.J. MacIntyre & Dr. B - Grey Gardens (Diego Berrondo & Alex Efe \xA8Out Of Time\xA8 Remix) /\xA0
2 - Fran Bianco - Pattern Of Behaviour (Gonzalo Sacc, Rodrigo Lapena Remix) /\xA0
3 - Interaxxis - Bowery /\xA0
4 - Berni Turletti - Physical Balance (Matias Chilano Remix) /\xA0
5 - Adrian Schneider - Kerbholz /\xA0
6 - Larson - Parana (Bruno Andrada Remix) /\xA0
7 - Remcord - Flight into the void /\xA0
8 - Robert Babicz - Galactic Tardigrade /\xA0
9 - Weird Sounding Dude - Twenty One /\xA0
10 - Joseph Ashworth - Kira / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.1K",fecha:"2020-08-15",link:"https://mcdn.podbean.com/mf/download/wwynvr/484-HernanCattaneo-2020-08-15.mp3",tracklist:`D.J. MacIntyre & Dr. B - Grey Gardens (Diego Berrondo & Alex Efe \xA8Out Of Time\xA8 Remix) /
Fran Bianco - Pattern Of Behaviour (Gonzalo Sacc, Rodrigo Lapena Remix) /
Interaxxis - Bowery /
Berni Turletti - Physical Balance (Matias Chilano Remix) /
Adrian Schneider - Kerbholz /
Larson - Parana (Bruno Andrada Remix) /
Remcord - Flight into the void /
Robert Babicz - Galactic Tardigrade /
Weird Sounding Dude - Twenty One /`},{episodio:"485",titulo:"Resident / Episode 485 / Aug 22 2020",descripcion:`1 - Luka Sambe - Alive Is The Meaning (Tripswitch remix) /\xA0
2 - Kandar - My Life Rules (GMJ remix) /\xA0
3 - Jonas Rathsman - No Surprise /\xA0
4 - Ivory - Lumiere /\xA0
5 - NAHS & Polo (AR) - Look for a Reason (Gaston Ponte Remix) /\xA0
6 - Analog Jungs - Pyramid /\xA0
7 - Kaldera - Eissturmvogel (Analog Jungs mix) /\xA0
8 - Alec Araujo - Quantum Living /\xA0
9 - Artche - Split Open /\xA0
10 - Kevin Di Serna & Interaxxis - Spanner Interactions / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"38.1K",fecha:"2020-08-22",link:"https://mcdn.podbean.com/mf/download/88kapw/485-HernanCattaneo-2020-08-22.mp3",tracklist:`Luka Sambe - Alive Is The Meaning (Tripswitch remix) /
Kandar - My Life Rules (GMJ remix) /
Jonas Rathsman - No Surprise /
Ivory - Lumiere /
NAHS & Polo (AR) - Look for a Reason (Gaston Ponte Remix) /
Analog Jungs - Pyramid /
Kaldera - Eissturmvogel (Analog Jungs mix) /
Alec Araujo - Quantum Living /
Artche - Split Open /`},{episodio:"486",titulo:"Resident / Episode 486 / Aug 29 2020",descripcion:`1 - Alejo Gonzalez & Barklas - Estrellas Ocultas (Instrumental Mix) /\xA0
2 - Khetouin, Orange & Indigo - Robot Meditation (Nico Szabo Remix) /\xA0
3 - Zankee Gulati - Fika /\xA0
4 - Kenan Savrun - Lights Out (John Cosani Remix) /\xA0
5 - Rise And Fall - Small Talk /\xA0
6 - Alex Dolby - Hazy Way (Marcelo Vasami Rework) /\xA0
7 - Paul Lennar - Asymmetrical Reflections /\xA0
8 - Around us - 8 steps /\xA0
9 - Budakid feat. Esther Veen - Surga (Joseph Ashworth Extended Remix) /\xA0
10 - Betical - Icon / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"37.2K",fecha:"2020-08-29",link:"https://mcdn.podbean.com/mf/download/9me9xb/486-HernanCattaneo-2020-08-29.mp3",tracklist:`Alejo Gonzalez & Barklas - Estrellas Ocultas (Instrumental Mix) /
Khetouin, Orange & Indigo - Robot Meditation (Nico Szabo Remix) /
Zankee Gulati - Fika /
Kenan Savrun - Lights Out (John Cosani Remix) /
Rise And Fall - Small Talk /
Alex Dolby - Hazy Way (Marcelo Vasami Rework) /
Paul Lennar - Asymmetrical Reflections /
Around us - 8 steps /
Budakid feat. Esther Veen - Surga (Joseph Ashworth Extended Remix) /`},{episodio:"487",titulo:"Resident / Episode 487 / Sep 05 2020",descripcion:`1 - Gadi Mitrani - Back to Folly /\xA0
2 - Luis del Vecchio - 7 Lyon /\xA0
3 - Fran Bianco - Pattern Of Behaviour (Gonzalo Sacc, Rodrigo Lapena Remix) /\xA0
4 - Ricardo Piedra & Deepness - Ozark /\xA0
5 - Around Us - Bamboo /\xA0
6 - Arnold T and Alain Pauwels - ElectroNemo /\xA0
7 - Nat Monday - Waiting (Lost Arcade Remix) /\xA0
8 - Rhode & Brown - Not My Mind, Not My Planet /\xA0
9 - Oona Dahl - Godtripper /\xA0
10 - Sebastian Sellares - Zen State (Matias Chilano Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"34",descargas:"37.1K",fecha:"2020-09-05",link:"https://mcdn.podbean.com/mf/download/cd37rk/487-HernanCattaneo-2020-09-05.mp3",tracklist:`Gadi Mitrani - Back to Folly /
Luis del Vecchio - 7 Lyon /
Fran Bianco - Pattern Of Behaviour (Gonzalo Sacc, Rodrigo Lapena Remix) /
Ricardo Piedra & Deepness - Ozark /
Around Us - Bamboo /
Arnold T and Alain Pauwels - ElectroNemo /
Nat Monday - Waiting (Lost Arcade Remix) /
Rhode & Brown - Not My Mind, Not My Planet /
Oona Dahl - Godtripper /`},{episodio:"488",titulo:"Resident / Episode 488 / Sep 12 2020",descripcion:`1 - Timo Maas - Religion of Love (Kotelett Unconditional Love Version) /\xA0
2 - Andrea Cassino, Greenage - Losing Part of Me (Dmitry Molosh Remix) /\xA0
3 - Hernan Cerbello - Triptico (Jelly for the Babies Remix) /\xA0
4 - The Advocate - Deep Inside /\xA0
5 - Dee Montero 'Sapphire' ft. Shahin Badar /\xA0
6 - Yulia Niko - Passion /\xA0
7 - Nebs Jack - Orbis /\xA0
8 - Simos Tagias - Running Over Me /\xA0
9 - Longhair - Rhythm_Activity /\xA0
10 - Mitch Oliver, Maaruo - Same Light ft. Beyries (Hernan Cattaneo & Martin Garcia rmx) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"38K",fecha:"2020-09-12",link:"https://mcdn.podbean.com/mf/download/krt5c4/488-HernanCattaneo-2020-09-12.mp3",tracklist:`Timo Maas - Religion of Love (Kotelett Unconditional Love Version) /
Andrea Cassino, Greenage - Losing Part of Me (Dmitry Molosh Remix) /
Hernan Cerbello - Triptico (Jelly for the Babies Remix) /
The Advocate - Deep Inside /
Dee Montero 'Sapphire' ft. Shahin Badar /
Yulia Niko - Passion /
Nebs Jack - Orbis /
Simos Tagias - Running Over Me /
Longhair - Rhythm_Activity /`},{episodio:"489",titulo:"Resident / Episode 489 / Sep 19 2020",descripcion:`1 - Glenn Molloy - Expresso (Alex Efe & Diego Berrondo Remix) /\xA0
2 - Bootes Gray - Fuego y Dolor (Luciano Scheffer remix) /\xA0
3 - Battera - Atlas (Of Norway Version) /\xA0
4 - Four Candles & Ross Geldart - Fixation (Dj Bird Remix) /\xA0
5 - Bob Moses - The Blame /\xA0
6 - Govinda (ARG) - Les Fleurs /\xA0
7 - Haddadi Von Engst - I Was Blind feat. Phonic Youth (Rodriguez Jr. Remix) /\xA0
8 - LowaddictsSoundsystem - Hide & Seek (Paul Hazendonk Remix) /\xA0
9 - GMJ - Mood Medicine /\xA0
10 - Dave Seaman & Dj Paul - Loco Hermoso (Hernan Cattaneo & Mariano Mellino Remix) \xA0/ Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"39.3K",fecha:"2020-09-19",link:"https://mcdn.podbean.com/mf/download/5gqu9x/489-HernanCattaneo-2020-09-19.mp3",tracklist:`Glenn Molloy - Expresso (Alex Efe & Diego Berrondo Remix) /
Bootes Gray - Fuego y Dolor (Luciano Scheffer remix) /
Battera - Atlas (Of Norway Version) /
Four Candles & Ross Geldart - Fixation (Dj Bird Remix) /
Bob Moses - The Blame /
Govinda (ARG) - Les Fleurs /
Haddadi Von Engst - I Was Blind feat. Phonic Youth (Rodriguez Jr. Remix) /
LowaddictsSoundsystem - Hide & Seek (Paul Hazendonk Remix) /
GMJ - Mood Medicine /`},{episodio:"490",titulo:"Resident / Episode 490 / Sep 26 2020",descripcion:`1 - Rosemary & Garlic - The Dancers (Vandelor Unofficial Remix) /\xA0
2 - Eli Nissan - Karnaval (Guy Mantzur Remix) /\xA0
3 - No\u0304pi - Liquid Week /\xA0
4 - John Cosani - Elohim /\xA0
5 - Sebastian Busto - December (Zankee Gulati Remix) /\xA0
6 - Joris Voorn - Nea Skioni /\xA0
7 - Nico Cerban - Xumoh /\xA0
8 - Monojoke - Autumn Grey /\xA0
9 - Gypsy - I Trance You (Richie Blacker Rave Spirit Remix) /\xA0
10 - Poncho feat Karina Vismara - Sola por la ciudad (Hernan Cattaneo & Soundexile Extended mix) / Download episode on MP3 (Right click, save link as...)`,likes:"45",descargas:"40.9K",fecha:"2020-09-26",link:"https://mcdn.podbean.com/mf/download/8cz3wv/490-HernanCattaneo-2020-09-26.mp3",tracklist:`Rosemary & Garlic - The Dancers (Vandelor Unofficial Remix) /
Eli Nissan - Karnaval (Guy Mantzur Remix) /
No\u0304pi - Liquid Week /
John Cosani - Elohim /
Sebastian Busto - December (Zankee Gulati Remix) /
Joris Voorn - Nea Skioni /
Nico Cerban - Xumoh /
Monojoke - Autumn Grey /
Gypsy - I Trance You (Richie Blacker Rave Spirit Remix) /`},{episodio:"491",titulo:"Resident / Episode 491 / Oct 03 2020",descripcion:`1 - Hernan Cerbello - Triptico (Jelly for the Babies Remix) /\xA0
2 - Colyn - Merging Realities /\xA0
3 - Sascha Braemer - Capella /\xA0
4 - Ajaw - Un Brujo /\xA0
5 - Rafa'EL - Neon Dreams (Andre Moret Remix) /\xA0
6 - LOM (AR) - When I Met You /\xA0
7 - Sasha & Polymod - Full Circle /\xA0
8 - Qubica - Tune Signal /\xA0
9 - Sobek - Mr. Vibe /\xA0
10 - K.E.E.N.E. Jackie Plummer - Why Do You Worry (Bebetta Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"39.5K",fecha:"2020-10-03",link:"https://mcdn.podbean.com/mf/download/6wibuj/491-HernanCattaneo-2020-10-03.mp3",tracklist:`Hernan Cerbello - Triptico (Jelly for the Babies Remix) /
Colyn - Merging Realities /
Sascha Braemer - Capella /
Ajaw - Un Brujo /
Rafa'EL - Neon Dreams (Andre Moret Remix) /
LOM (AR) - When I Met You /
Sasha & Polymod - Full Circle /
Qubica - Tune Signal /
Sobek - Mr. Vibe /`},{episodio:"492",titulo:"Resident / Episode 492 / Oct 10 2020",descripcion:`1 - Cem Tuncer - Taze Bahar (Vandelor edit) /\xA0
2 - Alex O'Rion - Mirari (Night Mix) /\xA0
3 - John Cosani - Venusian /\xA0
4 - Michael A - Orbis /\xA0
5 - Miguel Ante - Lunar /\xA0
6 - Golan Zocher - Wonder Way (Kamilo Sanclemente Remix) /\xA0
7 - Tim Engelhardt- Sun (Fur Coat Remix) /\xA0
8 - Juliana Ucar - Base (Martin Dubiansky Remix) /\xA0
9 - Ricardo Piedra & Deepness - Ozark /\xA0
10 - Mark H\xF6ffen - Faith ft. Ed Begley / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"40.2K",fecha:"2020-10-10",link:"https://mcdn.podbean.com/mf/download/y7p99s/492-HernanCattaneo-2020-10-10.mp3",tracklist:`Cem Tuncer - Taze Bahar (Vandelor edit) /
Alex O'Rion - Mirari (Night Mix) /
John Cosani - Venusian /
Michael A - Orbis /
Miguel Ante - Lunar /
Golan Zocher - Wonder Way (Kamilo Sanclemente Remix) /
Tim Engelhardt- Sun (Fur Coat Remix) /
Juliana Ucar - Base (Martin Dubiansky Remix) /
Ricardo Piedra & Deepness - Ozark /`},{episodio:"494",titulo:"Resident / Episode 494 / Oct 24 2020",descripcion:`1 - Nicco N.D - Moog Driver (Andromo Remix) /\xA0
2 - Luke Garcia, Th3 Oth3r, Will Champlin - My Own World /\xA0
3 - Nico Morano - Believe (Nandu Early Morning Remix) /\xA0
4 - Hil Oliver - Slid Of Light /\xA0
5 - C'est Moi - Le Figaro /\xA0
6 - Tim Engelhardt - What Drives Us /\xA0
7 - Frankie M - Light At The End Of The Tunnel /\xA0
8 - Yoram - On Cue /\xA0
9 - Fort Romeau - A Far Reaching Light /\xA0
10 - Haddadi Von Engst - I Was Blind feat. Phonic Youth (Rodriguez Jr. Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"38K",fecha:"2020-10-24",link:"https://mcdn.podbean.com/mf/download/gfya37/494-HernanCattaneo-2020-10-24.mp3",tracklist:`Nicco N.D - Moog Driver (Andromo Remix) /
Luke Garcia, Th3 Oth3r, Will Champlin - My Own World /
Nico Morano - Believe (Nandu Early Morning Remix) /
Hil Oliver - Slid Of Light /
C'est Moi - Le Figaro /
Tim Engelhardt - What Drives Us /
Frankie M - Light At The End Of The Tunnel /
Yoram - On Cue /
Fort Romeau - A Far Reaching Light /`},{episodio:"495",titulo:"Resident / Episode 495 / Oct 31 2020",descripcion:`1 - Nick Warren - Electro Shock /
2 - Minnado - Thunder /
3 - Sebastian Sellares - Garden of Eden /
4 - Nishan Lee - Forest Dream /
5 - EN\xD8S - The Healer /
6 - Danny Howells - Shortwave (Mihai Popoviciu Remix) /
7 - Andy Bros - Romantico /
8 - Brian Muszkat - Balder /
9 - Monolink - Otherside /
10 - Satoshi Fumi - Heavenly Sky Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"39.4K",fecha:"2020-10-31",link:"https://mcdn.podbean.com/mf/download/pzj6tb/495-HernanCattaneo-2020-10-31.mp3",tracklist:`Nick Warren - Electro Shock /
Minnado - Thunder /
Sebastian Sellares - Garden of Eden /
Nishan Lee - Forest Dream /
EN\xD8S - The Healer /
Danny Howells - Shortwave (Mihai Popoviciu Remix) /
Andy Bros - Romantico /
Brian Muszkat - Balder /
Monolink - Otherside /`},{episodio:"496",titulo:"Resident / Episode 496 / Nov 07 2020",descripcion:`1 - Valeria Petz - ScandGrace /
2 - Abril Ferrari - beach vibes /
3 - Diego Poblets - Faith /
4 - Egemen Kurbetli & Furkan Cinar - Abyssos (Nacres Remix) /
5 - Juan Lagisquet - Trip to Highlands /
6 - Gaston Sosa - A Place in My House /
7 - Juan Pablo Torrez - Nia /
8 - \xD8ostil & He\xEEk - The Great Spiral /
9 - Jody Barr - Arp for the Innocents /
10 - KYOTTO - Would You Be There When the World Fails Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"38.3K",fecha:"2020-11-07",link:"https://mcdn.podbean.com/mf/download/g554d7/496-HernanCattaneo-2020-11-07.mp3",tracklist:`Valeria Petz - ScandGrace /
Abril Ferrari - beach vibes /
Diego Poblets - Faith /
Egemen Kurbetli & Furkan Cinar - Abyssos (Nacres Remix) /
Juan Lagisquet - Trip to Highlands /
Gaston Sosa - A Place in My House /
Juan Pablo Torrez - Nia /
\xD8ostil & He\xEEk - The Great Spiral /
Jody Barr - Arp for the Innocents /`},{episodio:"497",titulo:"Resident / Episode 497 / Nov 14 2020",descripcion:`1 - DSF & Shai T - Take a Ride /
2 - Starkato - I Hope You Care (Sonic Union Remix) /
3 - Kay-D - Space Donuts (Oliver & Tom Remix) /
4 - Kamilo Sanclemente & Giovanny Aparicio - Innocense /
5 - Dmitry Molosh & No\u0304pi - Consciousness Switch /
6 - Rauschhaus - Leucosia - Luna Club Records /
7 - Martin Gardoqui & Matias Larrosa - For The Time Being /
8 - Sander & Salerno ft Oneiroi - Rel\xE8ve Toi /
9 - Jesuan M, Andr\xE9s Moris - Victory /
10 - Westbam feat. Richard Butler - You Need The Drugs - &ME Remix Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"39.4K",fecha:"2020-11-14",link:"https://mcdn.podbean.com/mf/download/sgkbct/497-HernanCattaneo-2020-11-14.mp3",tracklist:`DSF & Shai T - Take a Ride /
Starkato - I Hope You Care (Sonic Union Remix) /
Kay-D - Space Donuts (Oliver & Tom Remix) /
Kamilo Sanclemente & Giovanny Aparicio - Innocense /
Dmitry Molosh & No\u0304pi - Consciousness Switch /
Rauschhaus - Leucosia - Luna Club Records /
Martin Gardoqui & Matias Larrosa - For The Time Being /
Sander & Salerno ft Oneiroi - Rel\xE8ve Toi /
Jesuan M, Andr\xE9s Moris - Victory /`},{episodio:"498",titulo:"Resident / Episode 498 / Nov 21 2020",descripcion:`1 - Mass Digital - Mawu /\xA0
2 - Jose Tabarez - Argo (rAin MU Remix) /\xA0
3 - Nico Szabo - Flos /\xA0
4 - Mensh- Silver sun /\xA0
5 - Erich Von Kollar - The Pine & the Moon (Hasith Remix) /\xA0
6 - L\xE8rr - In Time (Sunset Mix) /\xA0
7 - D-Nox & Spuri - FRBS /\xA0
8 - Marsh feat. Leo wood - My Stripes /\xA0
9 - Saint is - Space Invaders /\xA0
10 - Clarian - A Place For Us / Download episode on MP3 (Right click, save link as...)`,likes:"33",descargas:"38K",fecha:"2020-11-21",link:"https://mcdn.podbean.com/mf/download/mewany/498-HernanCattaneo-2020-11-21.mp3",tracklist:`Mass Digital - Mawu /
Jose Tabarez - Argo (rAin MU Remix) /
Nico Szabo - Flos /
Mensh- Silver sun /
Erich Von Kollar - The Pine & the Moon (Hasith Remix) /
L\xE8rr - In Time (Sunset Mix) /
D-Nox & Spuri - FRBS /
Marsh feat. Leo wood - My Stripes /
Saint is - Space Invaders /`},{episodio:"499",titulo:"Resident / Episode 499 / Nov 28 2020",descripcion:`1 - Ultravizion, Jelly For The Babies, Eleonora - Amber Lake (OHMZ Deep Vision) /\xA0
2 - EANP - When you leave home /\xA0
3 - Shai T - Storyteller /\xA0
4 - Joep Mencke - Satare (Nick Warren & Nicolas Rada Remix) /\xA0
5 - Weird Sounding Dude - Embarkment /\xA0
6 - Nathan Dane \xA0- Bretten /\xA0
7 - Love Drone - Godspeed /\xA0
8 - All Is Well - LaSalle /\xA0
9 - Eric Lune - Human Nature /\xA0
10 - Mercurio - The Underdog / Download episode on MP3 (Right click, save link as...)`,likes:"38",descargas:"38.7K",fecha:"2020-11-28",link:"https://mcdn.podbean.com/mf/download/iidpny/499-HernanCattaneo-2020-11-28.mp3",tracklist:`Ultravizion, Jelly For The Babies, Eleonora - Amber Lake (OHMZ Deep Vision) /
EANP - When you leave home /
Shai T - Storyteller /
Joep Mencke - Satare (Nick Warren & Nicolas Rada Remix) /
Weird Sounding Dude - Embarkment /
Nathan Dane \xA0- Bretten /
Love Drone - Godspeed /
All Is Well - LaSalle /
Eric Lune - Human Nature /`},{episodio:"500",titulo:"Resident / Episode 500 / Dec 05 2020",descripcion:`1 - DSF - Burning Lies /\xA0
2 - DJ Zombi & Madraas - Today Will Never Be Again /\xA0
3 - Marsh & Wassu - Amor /\xA0
4 - Nick Varon - Volantis /\xA0
5 - Ultraverse - Felicita /\xA0
6 - Vanita - Ailurus /\xA0
7 - Mariano Mellino & Interaxxis - Flashback /\xA0
8 - Andhim - Firefly /\xA0
9 - Andre Moret - Waltz of the Dew /\xA0
10 - Hernan Cattaneo & John Tonks - Warsaw (Subandrio's Private 'Global Mission' Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"39",descargas:"43.8K",fecha:"2020-12-05",link:"https://mcdn.podbean.com/mf/download/fmt6qn/500-HernanCattaneo-2020-12-05.mp3",tracklist:`DSF - Burning Lies /
DJ Zombi & Madraas - Today Will Never Be Again /
Marsh & Wassu - Amor /
Nick Varon - Volantis /
Ultraverse - Felicita /
Vanita - Ailurus /
Mariano Mellino & Interaxxis - Flashback /
Andhim - Firefly /
Andre Moret - Waltz of the Dew /`},{episodio:"501",titulo:"Resident / Episode 501 / Dec 12 2020",descripcion:`1 - Antidote - Eclipse (Eclipse Remix) /
2 - Isaac Differding - Renaissance /
3 - Kutiman - Inner Galactic Lovers (Eli Nissan Bootleg Rework) /
4 - Nicco (N.D) - Get Back /
5 - Hobin Rude, Antela - Deep Within (Christian Monique Remix) /
6 - Martin Gardoqui - Fidel /
7 - Underher, Just Emma, Hamsom Eli - Voyageur (Fur Coat Remix) /
8 - Juan Deminicis - Intelecto /
9 - Carsten Halm - Fuchsbau /
10 - Space Manoeuvres - Stage One (Shan Remix) Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"38.5K",fecha:"2020-12-12",link:"https://mcdn.podbean.com/mf/download/ra6ype/501-HernanCattaneo-2020-12-12.mp3",tracklist:`Antidote - Eclipse (Eclipse Remix) /
Isaac Differding - Renaissance /
Kutiman - Inner Galactic Lovers (Eli Nissan Bootleg Rework) /
Nicco (N.D) - Get Back /
Hobin Rude, Antela - Deep Within (Christian Monique Remix) /
Martin Gardoqui - Fidel /
Underher, Just Emma, Hamsom Eli - Voyageur (Fur Coat Remix) /
Juan Deminicis - Intelecto /
Carsten Halm - Fuchsbau /`},{episodio:"502",titulo:"Resident / Episode 502 / SunsetStream Eclipse Edition / Dec 19 2020",descripcion:"SunsetStream Eclipse Edition Download episode on MP3 (Right click, save link as...)",likes:"44",descargas:"58.7K",fecha:"2020-12-19",link:"https://mcdn.podbean.com/mf/download/nt2tux/502-HernanCattaneo-SunsetStream-Eclipse-Edition-2020-12-19.mp3"},{episodio:"504",titulo:"Resident / Episode 504 / Jan 02 2021",descripcion:`1 - Marino Canal - White Atlas /\xA0
2 - Lucefora - Elements /\xA0
3 - Bautista Toniolo \xA0- Dracena /\xA0
4 - Sol Seppy - Enter One (Rocio Portillo Bootleg) /\xA0
5 - Lupe Republic - \xA0ID /\xA0
6 - Francesco Pico & Paul Hazendonk - Nifty Fifty (Analog Jungs Remix) /\xA0
7 - Berni Turletti & Matias Chilano - Sarayu /\xA0
8 - Dee Montero - Meridian (Patrice B\xE4umel Remix) /\xA0
9 - BLANCAh - Signs Of Bliss /\xA0
10 - Monkey Safari - Safe (Eric Lune's 'We Are The People' Edit) / Download episode on MP3 (Right click, save link as...)`,likes:"35",descargas:"42.7K",fecha:"2021-01-02",link:"https://mcdn.podbean.com/mf/download/q7kgzm/504-HernanCattaneo-2021-01-02.mp3",tracklist:`Marino Canal - White Atlas /
Lucefora - Elements /
Bautista Toniolo \xA0- Dracena /
Sol Seppy - Enter One (Rocio Portillo Bootleg) /
Lupe Republic - \xA0ID /
Francesco Pico & Paul Hazendonk - Nifty Fifty (Analog Jungs Remix) /
Berni Turletti & Matias Chilano - Sarayu /
Dee Montero - Meridian (Patrice B\xE4umel Remix) /
BLANCAh - Signs Of Bliss /`},{episodio:"505",titulo:"Resident / Episode 505 / Jan 07 2021",descripcion:`1 - Nursultan Kun & Lost Desert - Tebraha /\xA0
2 - Monojoke - Take Me Home /\xA0
3 - Matias Fittipaldi - Alas /\xA0
4 - Tayga - Bayeat /\xA0
5 - Milio - Never Say Never /\xA0
6 - Scian - Ravus /\xA0
7 - Illusory & Enai - Epica /\xA0
8 - Hollt - Revere /\xA0
9 - Claudio Cornejo - Amasis /\xA0
10 - Dark Pulse - Run (Lemon8 & Zoyzi Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"39.4K",fecha:"2021-01-07",link:"https://mcdn.podbean.com/mf/download/fecnsg/505-HernanCattaneo-2021-01-09.mp3",tracklist:`Nursultan Kun & Lost Desert - Tebraha /
Monojoke - Take Me Home /
Matias Fittipaldi - Alas /
Tayga - Bayeat /
Milio - Never Say Never /
Scian - Ravus /
Illusory & Enai - Epica /
Hollt - Revere /
Claudio Cornejo - Amasis /`},{episodio:"506",titulo:"Resident / Episode 506 / Jan 16 2021",descripcion:`1 - Trentem\xF8ller - Moan (Tim Engelhardt Remix) /\xA0
2 - CAIN - Irrational Accumulation /\xA0
3 - EANP - Delights Sky /\xA0
4 - Orlando Voorn - Internal Destination /\xA0
5 - Mauro Augugliaro, Noiyse Project - Requiem /\xA0
6 - Julieta K\xFChnle - Out of Mind /\xA0
7 - Francesco Pico - I Hear The Wind /\xA0
8 - Skatman - Desert Beam /\xA0
9 - Raphael Mader - Fractured /\xA0
10 - Perry Farrell - Vast Visitation ft. Jim Morrison (Guy Gerber & Moscoman Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"40.9K",fecha:"2021-01-16",link:"https://mcdn.podbean.com/mf/download/82du47/506-HernanCattaneo-2021-01-16.mp3",tracklist:`Trentem\xF8ller - Moan (Tim Engelhardt Remix) /
CAIN - Irrational Accumulation /
EANP - Delights Sky /
Orlando Voorn - Internal Destination /
Mauro Augugliaro, Noiyse Project - Requiem /
Julieta K\xFChnle - Out of Mind /
Francesco Pico - I Hear The Wind /
Skatman - Desert Beam /
Raphael Mader - Fractured /`},{episodio:"507",titulo:"Resident / Episode 507 / Jan 23 2021",descripcion:`1 - Bob Moses ZHU - Desire (Solomun Remix) /\xA0
2 - Fortunato & Montresor - Imagine (FM Edit) /\xA0
3 - Robert Babicz - Utopia (BOg Remix) /\xA0
4 - NEW ORDER - Vanishing Point (Abel Meyer Holiday remix) /\xA0
5 - ID-ID /\xA0
6 - Antrim - Blue Sensations /\xA0
7 - Dmitry Molosh - Orchard (Kasper Koman Remix) /\xA0
8 - Cid Inc. & Orsen - A Blessing in Disguise /\xA0
9 - Kamilo Sanclemente - Conspiracy /\xA0
10 - Fabrication - Hot Foot (Jamie Stevens & Anthony Pappa Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"43",descargas:"41.5K",fecha:"2021-01-23",link:"https://mcdn.podbean.com/mf/download/jecxu2/507-HernanCattaneo-2021-01-23.mp3",tracklist:`Bob Moses ZHU - Desire (Solomun Remix) /
Fortunato & Montresor - Imagine (FM Edit) /
Robert Babicz - Utopia (BOg Remix) /
NEW ORDER - Vanishing Point (Abel Meyer Holiday remix) /
ID-ID /
Antrim - Blue Sensations /
Dmitry Molosh - Orchard (Kasper Koman Remix) /
Cid Inc. & Orsen - A Blessing in Disguise /
Kamilo Sanclemente - Conspiracy /`},{episodio:"508",titulo:"Resident / Episode 508 / Jan 30 2021",descripcion:`1 - Safar (FR) - Eternal Roots (Paax Tulum Remix) /\xA0
2 - Wassu - Marianu /\xA0
3 - Bell Towers - Want You (Need You) (Adam Port Remix) /\xA0
4 - CAIN - Refined Rebellion /\xA0
5 - Jonathan Fratamico - Unpredictable /\xA0
6 - Franco Helguera - Chivilcoy (Diego Berrondo Remix) /\xA0
7 - Fat Cosmoe Feat MA\xCB - Goner /\xA0
8 - ARTBAT & Dino Lenny - Fading /\xA0
9 - Hobin Rude, Antela - Deep Within (Christian Monique Remix) /\xA0
10 - Budakid - Ringo Bingo / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"42K",fecha:"2021-01-30",link:"https://mcdn.podbean.com/mf/download/4ynh7g/508-HernanCattaneo-2021-01-30.mp3",tracklist:`Safar (FR) - Eternal Roots (Paax Tulum Remix) /
Wassu - Marianu /
Bell Towers - Want You (Need You) (Adam Port Remix) /
CAIN - Refined Rebellion /
Jonathan Fratamico - Unpredictable /
Franco Helguera - Chivilcoy (Diego Berrondo Remix) /
Fat Cosmoe Feat MA\xCB - Goner /
ARTBAT & Dino Lenny - Fading /
Hobin Rude, Antela - Deep Within (Christian Monique Remix) /`},{episodio:"509",titulo:"Resident / Episode 509 / Feb 06 2021",descripcion:`1 - Bodaishin & Phoesy - Sur Le Feu /\xA0
2 - Justrice - No Strings Attached /\xA0
3 - Frank Sonic - Gravitational Arch Of 20 /\xA0
4 - Lee Burridge - Satellite Girl (Tim Green Remix) /\xA0
5 - Tom Misch & Yussef Dayes - Festival [Dimuth K & SAJAY Edit) /\xA0
6 - He\xEEk - Eunoia /\xA0
7 - Paul Angelo, Don Argento - Dioptra /\xA0
8 - Fefo & Dario Arcas - Take Me Away (Erich Von Kollar Unofficial Club Edit) /\xA0
9 - Nick Varon - Forbidden Land (OMB & Ogawa Remix) /\xA0
10 - Bob Moses - The Blame (Helsloot Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"43.3K",fecha:"2021-02-06",link:"https://mcdn.podbean.com/mf/download/jz6yyx/509-HernanCattaneo-2021-02-06.mp3",tracklist:`Bodaishin & Phoesy - Sur Le Feu /
Justrice - No Strings Attached /
Frank Sonic - Gravitational Arch Of 20 /
Lee Burridge - Satellite Girl (Tim Green Remix) /
Tom Misch & Yussef Dayes - Festival [Dimuth K & SAJAY Edit) /
He\xEEk - Eunoia /
Paul Angelo, Don Argento - Dioptra /
Fefo & Dario Arcas - Take Me Away (Erich Von Kollar Unofficial Club Edit) /
Nick Varon - Forbidden Land (OMB & Ogawa Remix) /`},{episodio:"510",titulo:"Resident / Episode 510 / Feb 13 2021",descripcion:`1 - Apparat - In Gravitas (John Cosani Edit) /\xA0
2 - Mooncat ft Ferank - Hear What Was Said (Marcelo Vasami Remix) /\xA0
3 - Rebeat - Butterfly Mind /\xA0
4 - Aera - Jack Leather /\xA0
5 - Lupe Republic - ID /\xA0
6 - In Anima - XXY /\xA0
7 - Rob Hes - Undivided /\xA0
8 - Eze Ramirez - Restructure /\xA0
9 - Frankie M - Plan de escape /\xA0
10 - Fur Coat feat. Delhia de France - Eye of the Storm (MODEM Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"43.2K",fecha:"2021-02-13",link:"https://mcdn.podbean.com/mf/download/pimb8e/510-HernanCattaneo-2021-02-13.mp3",tracklist:`Apparat - In Gravitas (John Cosani Edit) /
Mooncat ft Ferank - Hear What Was Said (Marcelo Vasami Remix) /
Rebeat - Butterfly Mind /
Aera - Jack Leather /
Lupe Republic - ID /
In Anima - XXY /
Rob Hes - Undivided /
Eze Ramirez - Restructure /
Frankie M - Plan de escape /`},{episodio:"511",titulo:"Resident / Episode 511 / Feb 20 2021",descripcion:`1 - Rodrigo Lapema- Voet (Nicolas Soria Remix) /\xA0
2 - Natascha Polk\xE9 - Neverland (Aparde Remix) /\xA0
3 - Baardman - A Moment In The Sun (Sonic Union Remix) /\xA0
4 - Mauro Augugliaro, Noiyse Project - Requiem /\xA0
5 - Hasith and Juan Sapia - Our Heart of Ruin (Noiyse Project Remix) /\xA0
6 - Hicky & Kalo, Seth Schwarz - Un R\xEAve \xC9trange (Rodriguez Jr. Remix) /\xA0
7 - Oliverio Sofia - Agua (Sebastian Busto Remix) /\xA0
8 - Bob Moses - The Blame (DJ Seinfeld Remix) /\xA0
9 - TNTS - Caelum (Domenico Imperato Remix) /\xA0
10 - TNTS - Caelum (Zoo Brazil Remix) /\xA0
11 - Chromatics - Shadow (Maceo Plex Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"39",descargas:"44.3K",fecha:"2021-02-20",link:"https://mcdn.podbean.com/mf/download/vcp2vq/511-HernanCattaneo-2021-02-20.mp3",tracklist:`Rodrigo Lapema- Voet (Nicolas Soria Remix) /
Natascha Polk\xE9 - Neverland (Aparde Remix) /
Baardman - A Moment In The Sun (Sonic Union Remix) /
Mauro Augugliaro, Noiyse Project - Requiem /
Hasith and Juan Sapia - Our Heart of Ruin (Noiyse Project Remix) /
Hicky & Kalo, Seth Schwarz - Un R\xEAve \xC9trange (Rodriguez Jr. Remix) /
Oliverio Sofia - Agua (Sebastian Busto Remix) /
Bob Moses - The Blame (DJ Seinfeld Remix) /
TNTS - Caelum (Domenico Imperato Remix) /
TNTS - Caelum (Zoo Brazil Remix) /`},{episodio:"512",titulo:"Resident / Episode 512 / Feb 27 2021",descripcion:`1 - Tom Day & Monsoonsiren - From Afar (Makebo Extended Mix) /\xA0
2 - Sapienta - Unlock (Jose Tabarez Remix) /\xA0
3 - Marsh - Florence (Wassu Remix) /\xA0
4 - Partenaire - Modern Mantra /\xA0
5 - Morttagua - Imentet (Hernan Cattaneo & Marcelo Vasami Remix) /\xA0
6 - Urmet K- Secrets Of Your Heart feat. Shawni) /\xA0
7 - Alex O'Rion - Castle In The Sky /\xA0
8 - Garden Of Peace (Yotto Renaissance Remix) /\xA0
9 - Hicky & Kalo - Eyes of Truth /\xA0
10 - Fernando Picon - Brillante Oscuridad / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"45.6K",fecha:"2021-02-27",link:"https://mcdn.podbean.com/mf/download/hpeb7c/512-HernanCattaneo-2021-02-27.mp3",tracklist:`Tom Day & Monsoonsiren - From Afar (Makebo Extended Mix) /
Sapienta - Unlock (Jose Tabarez Remix) /
Marsh - Florence (Wassu Remix) /
Partenaire - Modern Mantra /
Morttagua - Imentet (Hernan Cattaneo & Marcelo Vasami Remix) /
Urmet K- Secrets Of Your Heart feat. Shawni) /
Alex O'Rion - Castle In The Sky /
Garden Of Peace (Yotto Renaissance Remix) /
Hicky & Kalo - Eyes of Truth /`},{episodio:"514",titulo:"Resident / Episode 514 / Mar 13 2021",descripcion:`1 - Nandu, Emily Simbi - Interference Inside /\xA0
2 - Jepe - Boardwalk (Joal Remix) /\xA0
3 - Strinner - Coalescence (Browncoat Remix) /\xA0
4 - Jonathan Fratamico - ID /\xA0
5 - Brian Cid - Ordeal /\xA0
6 - Horatio - Chareya /\xA0
7 - NAHS & Ivan Aliaga - Astrona (Simply City Remix) /\xA0
8 - dubspeeka - Khepri (Sasha Rework) /\xA0
9 - Betical - New Age /\xA0
10 - Monolink - The Prey (Mind Against Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"40",descargas:"45.6K",fecha:"2021-03-13",link:"https://mcdn.podbean.com/mf/download/nbdedg/514-HernanCattaneo-2021-03-13.mp3",tracklist:`Nandu, Emily Simbi - Interference Inside /
Jepe - Boardwalk (Joal Remix) /
Strinner - Coalescence (Browncoat Remix) /
Jonathan Fratamico - ID /
Brian Cid - Ordeal /
Horatio - Chareya /
NAHS & Ivan Aliaga - Astrona (Simply City Remix) /
dubspeeka - Khepri (Sasha Rework) /
Betical - New Age /`},{episodio:"515",titulo:"Resident / Episode 515 / Mar 13 2021",descripcion:`1 - Keinemusik - Discoteca feat. Sofie /\xA0
2 - Julian Rodriguez - Satelevon /\xA0
3 - JFR - I Lost Myself /\xA0
4 - D-Nox & Beckers - Deep in the Dark feat. LENN V (Fur Coat Remix) /\xA0
5 - dubspeeka - Geb (Spencer Brown Rework) /\xA0
6 - Forgotten Notes - Radiance /\xA0
7 - Hraach - Night Broke /\xA0
8 - Solid Sessions - El Naya /\xA0
9 - John Johnson - London (Hernan Cattaneo & Marcelo Vasami Remix) /\xA0
10 - Depeche \xA0Mode \xA0- A Pain That Im Used To (DJ PAUL brittle crystals remix) / Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"45.5K",fecha:"2021-03-13",link:"https://mcdn.podbean.com/mf/download/h5dqyx/515-HernanCattaneo-2021-03-20.mp3",tracklist:`Keinemusik - Discoteca feat. Sofie /
Julian Rodriguez - Satelevon /
JFR - I Lost Myself /
D-Nox & Beckers - Deep in the Dark feat. LENN V (Fur Coat Remix) /
dubspeeka - Geb (Spencer Brown Rework) /
Forgotten Notes - Radiance /
Hraach - Night Broke /
Solid Sessions - El Naya /
John Johnson - London (Hernan Cattaneo & Marcelo Vasami Remix) /`},{episodio:"516",titulo:"Resident / Episode 516 / Mar 27 2021",descripcion:`1 - Moby - Almost Home (Vandelor Remix) /\xA0
2 - Slow Hearts - Menari /\xA0
3 - Erdi Irmak - The World Is Yours /\xA0
4 - Mike Rish - Interlinked /\xA0
5 - Arnold T, Alain Pauwels - Havana (Andr\xE9 Moret Remix) /\xA0
6 - Dee Montero - Perpetua /\xA0
7 - Seven Wells - Thirst (Julieta K\xFChnle Remix) /\xA0
8 - Reyul Mather, Around Us - United /\xA0
9 - Marcelo Vasami - Winter Comes (Nicolas Rada Remix) /\xA0
10 - K\xF6lsch & Lunar June - Closer / Download episode on MP3 (Right click, save link as...)`,likes:"27",descargas:"49.6K",fecha:"2021-03-27",link:"https://mcdn.podbean.com/mf/download/na6yaw/516-HernanCattaneo-2021-03-27.mp3",tracklist:`Moby - Almost Home (Vandelor Remix) /
Slow Hearts - Menari /
Erdi Irmak - The World Is Yours /
Mike Rish - Interlinked /
Arnold T, Alain Pauwels - Havana (Andr\xE9 Moret Remix) /
Dee Montero - Perpetua /
Seven Wells - Thirst (Julieta K\xFChnle Remix) /
Reyul Mather, Around Us - United /
Marcelo Vasami - Winter Comes (Nicolas Rada Remix) /`},{episodio:"517",titulo:"Resident / Episode 517 / Apr 03 2021",descripcion:`1 - Ameli Paul - Beyond Reason (Aera Remix) /\xA0
2 - Arash Shadram Feat Eleonora - Embraced by Reality (Habischman Remix) /\xA0
3 - Hakan Ozurun - Purple Void /\xA0
4 - Rikken - Substance /\xA0
5 - Mauro Augugliaro, Luca Cocciufo - The only way /\xA0
6 - Emma Vazquez - Bootcamp /\xA0
7 - Leonel Camp, Kamilo Sanclemente \xA0- The End Comes After Me Feat. Luli Diaz /\xA0
8 - Ric Niels - Desire /\xA0
9 - Mike Rish - Kong /\xA0
10 - Sasha - HNDI / Download episode on MP3 (Right click, save link as...)`,likes:"30",descargas:"46.6K",fecha:"2021-04-03",link:"https://mcdn.podbean.com/mf/download/caduje/517-HernanCattaneo-2021-04-03.mp3",tracklist:`Ameli Paul - Beyond Reason (Aera Remix) /
Arash Shadram Feat Eleonora - Embraced by Reality (Habischman Remix) /
Hakan Ozurun - Purple Void /
Rikken - Substance /
Mauro Augugliaro, Luca Cocciufo - The only way /
Emma Vazquez - Bootcamp /
Leonel Camp, Kamilo Sanclemente \xA0- The End Comes After Me Feat. Luli Diaz /
Ric Niels - Desire /
Mike Rish - Kong /`},{episodio:"518",titulo:"Resident / Episode 518 / Apr 10 2021",descripcion:`1 - Alan Schultz - Madriguera /\xA0
2 - Sebastian Sellares - Dunes at Dawn /\xA0
3 - Nicolas Ruiz - Agartha (Baunder remix) /\xA0
4 - Amount - Kreuzberg /\xA0
5 - MOSHIC - It's Alright (Matter_remix) /\xA0
6 - Alex Kennon - Blinding Lights /\xA0
7 - Seba GS - After Love /\xA0
8 - Fabri Lopez - Marcdacu /\xA0
9 - The Cure - Lovesong (Abel Meyer Dub mix) /\xA0
10 - Llewellyn - The Final Essence / Download episode on MP3 (Right click, save link as...)`,likes:"36",descargas:"48.7K",fecha:"2021-04-10",link:"https://mcdn.podbean.com/mf/download/wcx4ek/518-HernanCattaneo-2021-04-10.mp3",tracklist:`Alan Schultz - Madriguera /
Sebastian Sellares - Dunes at Dawn /
Nicolas Ruiz - Agartha (Baunder remix) /
Amount - Kreuzberg /
MOSHIC - It's Alright (Matter_remix) /
Alex Kennon - Blinding Lights /
Seba GS - After Love /
Fabri Lopez - Marcdacu /
The Cure - Lovesong (Abel Meyer Dub mix) /`},{episodio:"519",titulo:"Resident / Episode 519 / Apr 17 2021",descripcion:`1 - Greenage - A Walk in the Clouds /\xA0
2 - Monojoke - Chapter XIII /\xA0
3 - Double Touch - Von Paradiso /\xA0
4 - Gab Rhome - Asylum Twist (Joseph Ashworth Remix) /\xA0
5 - Greg Ochman - Mistlove /\xA0
6 - Quivver - Nothing New To Feel (Nacho Quaglini Bootleg) /\xA0
7 - Katzen - Andes (Maximo Gambini & Q.A.T Remix) /\xA0
8 - Yotto, Stephan Jolk - Only One /\xA0
9 - Juan Lagisquet - Vimana /\xA0
10 - Apollo 440 - Liquid Cool (Framewerk Ice Cold Breaks Mix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"48.3K",fecha:"2021-04-17",link:"https://mcdn.podbean.com/mf/download/a5s4x4/519-HernanCattaneo-2021-04-17.mp3",tracklist:`Greenage - A Walk in the Clouds /
Monojoke - Chapter XIII /
Double Touch - Von Paradiso /
Gab Rhome - Asylum Twist (Joseph Ashworth Remix) /
Greg Ochman - Mistlove /
Quivver - Nothing New To Feel (Nacho Quaglini Bootleg) /
Katzen - Andes (Maximo Gambini & Q.A.T Remix) /
Yotto, Stephan Jolk - Only One /
Juan Lagisquet - Vimana /`},{episodio:"520",titulo:"Resident / Episode 520 / Apr 24 2021",descripcion:`1- Fulltone - Love in space /\xA0
2- Khen - Some little Secrets /\xA0
3- Pole Folder - Jaipur (Jamie Stevens Remix) /\xA0
4- Max Blade, Ignacio Berardi - Rhamnous /\xA0
5- Hawke - Bells of San Anselmo (Nick Warren & Nicolas Rada Remix) /\xA0
6- Dee Montero - Perpetua (Blaktone Remix) /\xA0
7- Chumbita - Outburst /\xA0
8- Moshic - Definition of feeling (Duel Remix) /\xA0
9- VNTM - Disrupting Machines /\xA0
10- Who Made Who - Abu Simbel / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"48.7K",fecha:"2021-04-24",link:"https://mcdn.podbean.com/mf/download/qi6ytf/520-HernanCattaneo-2021-04-24.mp3",tracklist:`Fulltone - Love in space /
Khen - Some little Secrets /
Pole Folder - Jaipur (Jamie Stevens Remix) /
Max Blade, Ignacio Berardi - Rhamnous /
Hawke - Bells of San Anselmo (Nick Warren & Nicolas Rada Remix) /
Dee Montero - Perpetua (Blaktone Remix) /
Chumbita - Outburst /
Moshic - Definition of feeling (Duel Remix) /
VNTM - Disrupting Machines /`},{episodio:"521",titulo:"Resident / Episode 521 / May 01 2021",descripcion:`1 - Rusich - Sun Life /\xA0
2 - Shai T - Hypnotic /\xA0
3 - Uccelli- Baroque /\xA0
4 - Uccelli - Overfly /\xA0
5 - No\u0304pi - Gray Cloud /\xA0
6 - Fernando Picon - El Mar /\xA0
7 - Zankee Gulati - Who Are You (GMJ & Matter Remix) /\xA0
8 - Pole Folder - Blue Station /\xA0
9 - 8Kays - Incrust /\xA0
10 - James Zabiela - The Healing (Ezequiel Arias Edit) / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"49.9K",fecha:"2021-05-01",link:"https://mcdn.podbean.com/mf/download/j825zu/521-HernanCattaneo-2021-05-01.mp3",tracklist:`Rusich - Sun Life /
Shai T - Hypnotic /
Uccelli- Baroque /
Uccelli - Overfly /
No\u0304pi - Gray Cloud /
Fernando Picon - El Mar /
Zankee Gulati - Who Are You (GMJ & Matter Remix) /
Pole Folder - Blue Station /
8Kays - Incrust /`},{episodio:"522",titulo:"Resident / Episode 522 / May 08 2021",descripcion:`1 - AWKA- Stimm (Chiari Remix) /\xA0
2 - Dmitry Molosh - The First Ray Of Sun /\xA0
3 - NOPI - Libido (Dj Paul rmx) /\xA0
4 - Foletto, LOSTIN - Distant Waves /\xA0
5 - Audiojack - Psychoactive /\xA0
6 - Pongo - Granular /\xA0
7 - Foletto, LOSTIN - California Dream (Liam Sieker Remix) /\xA0
8 - Tim Engelhardt - Ionized feat. Hannah Noelle /\xA0
9 - TAHO - Solaris /\xA0
10 - Audiojack x Jem Cooke - Feels Good (Patrice Baumel Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"26",descargas:"49.8K",fecha:"2021-05-08",link:"https://mcdn.podbean.com/mf/download/dmrwfg/522-HernanCattaneo-2021-05-08.mp3",tracklist:`AWKA- Stimm (Chiari Remix) /
Dmitry Molosh - The First Ray Of Sun /
NOPI - Libido (Dj Paul rmx) /
Foletto, LOSTIN - Distant Waves /
Audiojack - Psychoactive /
Pongo - Granular /
Foletto, LOSTIN - California Dream (Liam Sieker Remix) /
Tim Engelhardt - Ionized feat. Hannah Noelle /
TAHO - Solaris /`},{episodio:"524",titulo:"Resident / Episode 524 / May 22 2021",descripcion:`1 - Air - Alone In Kyoto (Vandelor 'Secret Whisper' Mix) /\xA0
2 - Enigmatic - Within Two Worlds /\xA0
3 - Doma - Lucero /\xA0
4 - Joan Retamero- Shadowslight /\xA0
5 - Peer Kusiv feat. Johanson - Bring You Back (Einmusik Remix) /\xA0
6 - 1926 - Sleep Disorder /\xA0
7 - Mercurio- Stereo /\xA0
8 - Gorge, Marc Lenz - Ansia /\xA0
9 - Lopezhouse - Redstone /\xA0
10 - Kamilo Sanclemente - Love is Within feat Velveta (Sonic Union Remix) / Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!! Download episode on MP3 (Right click, save link as...)`,likes:"32",descargas:"51.6K",fecha:"2021-05-22",link:"https://mcdn.podbean.com/mf/download/5p32j3/524-HernanCattaneo-2021-05-22.mp3",tracklist:`Air - Alone In Kyoto (Vandelor 'Secret Whisper' Mix) /
Enigmatic - Within Two Worlds /
Doma - Lucero /
Joan Retamero- Shadowslight /
Peer Kusiv feat. Johanson - Bring You Back (Einmusik Remix) /
1926 - Sleep Disorder /
Mercurio- Stereo /
Gorge, Marc Lenz - Ansia /
Lopezhouse - Redstone /`},{episodio:"525",titulo:"Resident / Episode 525 / May 29 2021",descripcion:`1 - Kai - Tree of peace /\xA0
2 - Mario Neha - Lights On Mars (Maximo Gambini & Q.A.T Remix) /\xA0
3 - Alex O'Rion - Stranded /\xA0
4 - Ameli Paul - Beyond Reason (Aera Remix) /\xA0
5 - Solar Plexus - Solar Plexus (Framewerk Rework) /\xA0
6 - Sparvieri & Romano - Encounters /\xA0
7 - CannaKid - Magic Fungi /\xA0
8 - Masella - Etna (Black 8 Remix) /\xA0
9 - Jonathan Fratamico - Differential / Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!! Download episode on MP3 (Right click, save link as...)`,likes:"22",descargas:"50.2K",fecha:"2021-05-29",link:"https://mcdn.podbean.com/mf/download/a5nwrk/525-HernanCattaneo-2021-05-29.mp3",tracklist:`Kai - Tree of peace /
Mario Neha - Lights On Mars (Maximo Gambini & Q.A.T Remix) /
Alex O'Rion - Stranded /
Ameli Paul - Beyond Reason (Aera Remix) /
Solar Plexus - Solar Plexus (Framewerk Rework) /
Sparvieri & Romano - Encounters /
CannaKid - Magic Fungi /
Masella - Etna (Black 8 Remix) /`},{episodio:"526",titulo:"Resident / Episode 526 / Jun 05 2021",descripcion:`1 - Pedro Sanmartin- Gaudir /\xA0
2 - Tim Green- Coriolis /\xA0
3 - Antrim - Drake (Kaspar Tasane Remix) /\xA0
4 - CannaKid - Hermes /\xA0
5 - Esteban Ikasovic - Rock Rouse (Golan Zocher Remix) /\xA0
6 - Doma - Kolibri /\xA0
7 - Parra for Cuva - Her Entrance (Innellea's Interstellar Interpretation) /\xA0
8 - NOIYSE PROJECT - Time Traveler /\xA0
9 - Joseph Ashworth - Sheen /\xA0
10 - Moscoman - Escape (Dubfire Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"55K",fecha:"2021-06-05",link:"https://mcdn.podbean.com/mf/download/aud4xk/526-HernanCattaneo-2021-06-05.mp3",tracklist:`Pedro Sanmartin- Gaudir /
Tim Green- Coriolis /
Antrim - Drake (Kaspar Tasane Remix) /
CannaKid - Hermes /
Esteban Ikasovic - Rock Rouse (Golan Zocher Remix) /
Doma - Kolibri /
Parra for Cuva - Her Entrance (Innellea's Interstellar Interpretation) /
NOIYSE PROJECT - Time Traveler /
Joseph Ashworth - Sheen /`},{episodio:"527",titulo:"Resident / Episode 527 / Jun 12 2021",descripcion:`1 - Kasey Taylor & Karl Pilbrow - Biocosmic Symphony feat. Amega /\xA0
2 - Hraach - Night Broke /\xA0
3 - Nicolas Rada - Hummingbird /\xA0
4 - Golan Zocher - Neshama /\xA0
5 - Amir Hussain - Prophecy of Fear (Subandrio Remix) /\xA0
6 - Aldebaran, Nate_Brown - In Puerto /\xA0
7 - Shimza - Kimberley (Luciano Remix) /\xA0
8 - Nahue Sintes - U Don't Know (Alex O'Rion Deep Dub Mix) /\xA0
9 - Alan Cerra - Zambala (Dynacom Sunset Remix) /\xA0
10 - Deichkind \u2013 Autonom (Dixon Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"52K",fecha:"2021-06-12",link:"https://mcdn.podbean.com/mf/download/chhuqn/527-HernanCattaneo-2021-06-12.mp3",tracklist:`Kasey Taylor & Karl Pilbrow - Biocosmic Symphony feat. Amega /
Hraach - Night Broke /
Nicolas Rada - Hummingbird /
Golan Zocher - Neshama /
Amir Hussain - Prophecy of Fear (Subandrio Remix) /
Aldebaran, Nate_Brown - In Puerto /
Shimza - Kimberley (Luciano Remix) /
Nahue Sintes - U Don't Know (Alex O'Rion Deep Dub Mix) /
Alan Cerra - Zambala (Dynacom Sunset Remix) /`},{episodio:"528",titulo:"Resident / Episode 528 / Jun 19 2021",descripcion:`1 - Rampa - The Church /\xA0
2 - Eelke Kleijn feat. Diana Miro - You (Patrice B\xE4umel Remix) /\xA0
3 - M.O.S. - Mermaid Dance (Newman (I Love) Remix) /\xA0
4 - Eli Nissan - Lyla /\xA0
5 - Shai T - Gates of The\u0304bai \xA0[Shai T Final Master] /\xA0
6 - Weird Sounding Dude - Summer Dive /\xA0
7 - Dee Montero - Echoes (Vocal Mix) - Futurescope /\xA0
8 - Stereo Underground - Thoughts On A Time Of Waiting /\xA0
9 - Raphael Mader - X-ray /\xA0
10 - Orbital - Chime Re-Record (Special Remix \xA0Extended) / Download episode on MP3 (Right click, save link as...)`,likes:"37",descargas:"53.8K",fecha:"2021-06-19",link:"https://mcdn.podbean.com/mf/download/yev567/528-HernanCattaneo-2021-06-19.mp3",tracklist:`Rampa - The Church /
Eelke Kleijn feat. Diana Miro - You (Patrice B\xE4umel Remix) /
M.O.S. - Mermaid Dance (Newman (I Love) Remix) /
Eli Nissan - Lyla /
Shai T - Gates of The\u0304bai \xA0[Shai T Final Master] /
Weird Sounding Dude - Summer Dive /
Dee Montero - Echoes (Vocal Mix) - Futurescope /
Stereo Underground - Thoughts On A Time Of Waiting /
Raphael Mader - X-ray /`},{episodio:"529",titulo:"Resident / Episode 529 / Jun 26 2021",descripcion:`1 - Pole Folder - Mara (GMJ & Matter Intro Mix) /\xA0
2 - Dee Montero - Opia (Madraas Remix) /\xA0
3 - Nahue Sintes - U Don't Know (Alex O'Rion Deep Dub Mix) /\xA0
4 - Panayiotis Tassis - Sunshine (Kassey Voorn Remix) /\xA0
5 - Kamilo Sanclemente - The Distance (NOIYSE PROJECT & Bynomic Remix) /\xA0
6 - Salazar (COL), Hobin Rude - Maeror /\xA0
7 - Lerr - In Time /\xA0
8 - Paul Hazendonk - Weakness Pays /\xA0
9 - Abity feat. Luli Diaz - Long Road /\xA0
10 - DJ Tennis - Atlanta / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"55.6K",fecha:"2021-06-26",link:"https://mcdn.podbean.com/mf/download/drb2un/529-HernanCattaneo-2021-06-26.mp3",tracklist:`Pole Folder - Mara (GMJ & Matter Intro Mix) /
Dee Montero - Opia (Madraas Remix) /
Nahue Sintes - U Don't Know (Alex O'Rion Deep Dub Mix) /
Panayiotis Tassis - Sunshine (Kassey Voorn Remix) /
Kamilo Sanclemente - The Distance (NOIYSE PROJECT & Bynomic Remix) /
Salazar (COL), Hobin Rude - Maeror /
Lerr - In Time /
Paul Hazendonk - Weakness Pays /
Abity feat. Luli Diaz - Long Road /`},{episodio:"530",titulo:"Resident / Episode 530 / Jul 03 2021",descripcion:`1 - Lost Desert Junior - Bo Singi Yo /\xA0
2 - Shai T - Superstition /\xA0
3 - Depeche Mode - Only When I Lose Myself (Nick Varon Isolation Remix) /\xA0
4 - Lerr - In Time (Barbour Remix) /\xA0
5 - Fat Cosmoe feat. MAE - Places /\xA0
6 - Sergey Muzarks - Mirage (Weird Sounding Dude Remix) /\xA0
7 - Bachir Salloum - Lost in Time /\xA0
8 - Dubspeeka - Seth (Criss Deeper Remix) /\xA0
9 - Vince Watson - Make A Wish /\xA0
10 - Cabaret Nocturne - Afterlife ft Eleonora / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"55.7K",fecha:"2021-07-03",link:"https://mcdn.podbean.com/mf/download/akex7u/530-HernanCattaneo-2021-07-03.mp3",tracklist:`Lost Desert Junior - Bo Singi Yo /
Shai T - Superstition /
Depeche Mode - Only When I Lose Myself (Nick Varon Isolation Remix) /
Lerr - In Time (Barbour Remix) /
Fat Cosmoe feat. MAE - Places /
Sergey Muzarks - Mirage (Weird Sounding Dude Remix) /
Bachir Salloum - Lost in Time /
Dubspeeka - Seth (Criss Deeper Remix) /
Vince Watson - Make A Wish /`},{episodio:"531",titulo:"Resident / Episode 531 / Jul 10 2021",descripcion:`1 - Luciano Scheffer - Boreal (intro) /\xA0
2 - Golan Zocher feat. Velveta - Summer Sun (Menkee Remix) /\xA0
3 - Ismaehl, Replicanth - Perception /\xA0
4 - John Cosani - Saints /\xA0
5 - Indigo Man & Jorge Viana - Single Conception /\xA0
6 - Dmitry Molosh - Narodnaya (Original Dub Mix) /\xA0
7 - End Of Twins - Prophet (Nopi Remix) /\xA0
8 - Garbage - Milk (Framewerk Rewerk) /\xA0
9 - Randall Jones - She\u2019s Vibing /\xA0
10 - Dark Soul Project Pres Anatolian - Lemuria / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"53.3K",fecha:"2021-07-10",link:"https://mcdn.podbean.com/mf/download/9u6rvy/531-HernanCattaneo-2021-07-10.mp3",tracklist:`Luciano Scheffer - Boreal (intro) /
Golan Zocher feat. Velveta - Summer Sun (Menkee Remix) /
Ismaehl, Replicanth - Perception /
John Cosani - Saints /
Indigo Man & Jorge Viana - Single Conception /
Dmitry Molosh - Narodnaya (Original Dub Mix) /
End Of Twins - Prophet (Nopi Remix) /
Garbage - Milk (Framewerk Rewerk) /
Randall Jones - She\u2019s Vibing /`},{episodio:"532",titulo:"Resident / Episode 532 / Jul 17 2021",descripcion:`1 - Gorge, Danjo(ita) - Verenacio /\xA0
2 - Simos Tagias - Black Swan (Mike Rish Remix) /\xA0
3 - Robert Mason - Return to Danger Bay /\xA0
4 - Rockka, Tapasya - Conscious Awakening (TEELCO remix) /\xA0
5 - Sha-ullo - Game Changer /\xA0
6 - Joaco Salerno - Kairos (Halaros, Leila Scheiwe Remix) /\xA0
7 - Federico Monachesi - Fiords /\xA0
8 - Tru Funk - 4 AM [The Lucid Phase} (Oliver & Tom Remix) /\xA0
9 - UNDERHER - You Can't Give Me What I Want (Tim Engelhardt Remix) /\xA0
10 - Mind Against - Closer / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"57.3K",fecha:"2021-07-17",link:"https://mcdn.podbean.com/mf/download/2dfw2a/532-HernanCattaneo-2021-07-17.mp3",tracklist:`Gorge, Danjo(ita) - Verenacio /
Simos Tagias - Black Swan (Mike Rish Remix) /
Robert Mason - Return to Danger Bay /
Rockka, Tapasya - Conscious Awakening (TEELCO remix) /
Sha-ullo - Game Changer /
Joaco Salerno - Kairos (Halaros, Leila Scheiwe Remix) /
Federico Monachesi - Fiords /
Tru Funk - 4 AM [The Lucid Phase} (Oliver & Tom Remix) /
UNDERHER - You Can't Give Me What I Want (Tim Engelhardt Remix) /`},{episodio:"534",titulo:"Resident / Episode 534 / Jul 31 2021",descripcion:`1 - Ori and the Will of the Wisps - Windswept Wastes (Kai Castro Remix) /\xA0
2 - Sebastien Leger - Son of Sun /\xA0
3 - LADS - Vorfreude (Alex O'Rion Remix) /\xA0
4 - Alan Fitzpatrick & Lawrence Hart - Warning Signs (Mind Against) /\xA0
5 - Tobak - Kevo (EdOne Remix) /\xA0
6 - The Future Sound Of London - Papua New Guinea (Blusoul Edit) /\xA0
7 - Laurent Chanal - Laurent Chanal - Carbon (Vince Watson Reshape Part 1) /\xA0
8 - Matiramic - Startrail /\xA0
9 - Millero - Too Far Gone (Musumeci Dodi Palese Remix) /\xA0
10 - PYURA - Acuario / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"55.2K",fecha:"2021-07-31",link:"https://mcdn.podbean.com/mf/download/57dupf/534-HernanCattaneo-2021-07-31.mp3",tracklist:`Ori and the Will of the Wisps - Windswept Wastes (Kai Castro Remix) /
Sebastien Leger - Son of Sun /
LADS - Vorfreude (Alex O'Rion Remix) /
Alan Fitzpatrick & Lawrence Hart - Warning Signs (Mind Against) /
Tobak - Kevo (EdOne Remix) /
The Future Sound Of London - Papua New Guinea (Blusoul Edit) /
Laurent Chanal - Laurent Chanal - Carbon (Vince Watson Reshape Part 1) /
Matiramic - Startrail /
Millero - Too Far Gone (Musumeci Dodi Palese Remix) /`},{episodio:"535",titulo:"Resident / Episode 535 / Ago 07 2021",descripcion:`1 - Gui Milani - End of Line /\xA0
2 - Hicky & Kalo - For Better Days /\xA0
3 - East Cafe - Without Legacy /\xA0
4 - Salazar - Kenkyo /\xA0
5 - Fatih Ulusoy - Afternoon (Valeria Petz Remix) /\xA0
6 - Giorgia Angiuli - All The Little Things /\xA0
7 - Anton Borin, Bondarev - Samadhi /\xA0
8 - Roberto Caceres & Jose Tabarez - SyMaLiMi (RIGOONI) /\xA0
9 - Sebastian Busto Presents Moonlight Project Feat Bodai - Music (Oliver & Tom Remix) /\xA0
10 - Sebastien Leger - Feel / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"57.8K",fecha:null,link:"https://mcdn.podbean.com/mf/download/zyusam/535-HernanCattaneo-2021-08-07.mp3",tracklist:`Gui Milani - End of Line /
Hicky & Kalo - For Better Days /
East Cafe - Without Legacy /
Salazar - Kenkyo /
Fatih Ulusoy - Afternoon (Valeria Petz Remix) /
Giorgia Angiuli - All The Little Things /
Anton Borin, Bondarev - Samadhi /
Roberto Caceres & Jose Tabarez - SyMaLiMi (RIGOONI) /
Sebastian Busto Presents Moonlight Project Feat Bodai - Music (Oliver & Tom Remix) /`},{episodio:"536",titulo:"Resident / Episode 536 / Ago 14 2021",descripcion:`1 - Hicky & Kalo - Borealis /\xA0
2 - Alan Cerra - Eudamonia (Tash remix) /\xA0
3 - Mental Order, Tim Othy - Energy (Mauro Aguirre Remix) /\xA0
4 - Mark Hoffen - Comet /\xA0
5 - Enzo Elia - Giugno Today The Sun (Aldebaran_Remix) /\xA0
6 - B\xD8R\xC5 - Rounds /\xA0
7 - Olivier Weiter - Avio /\xA0
8 - Fabri Lopez - Dubbel (Forerunners Remix) /\xA0
9 - Ezequiel Arias - Far Above The World /\xA0
10 - Anyma - Forevermore / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"57.6K",fecha:null,link:"https://mcdn.podbean.com/mf/download/jtmvr7/536-HernanCattaneo-2021-08-14.mp3",tracklist:`Hicky & Kalo - Borealis /
Alan Cerra - Eudamonia (Tash remix) /
Mental Order, Tim Othy - Energy (Mauro Aguirre Remix) /
Mark Hoffen - Comet /
Enzo Elia - Giugno Today The Sun (Aldebaran_Remix) /
B\xD8R\xC5 - Rounds /
Olivier Weiter - Avio /
Fabri Lopez - Dubbel (Forerunners Remix) /
Ezequiel Arias - Far Above The World /`},{episodio:"537",titulo:"Resident / Episode 537 / Ago 21 2021",descripcion:`1 - Kazko - All Voices (Jose Tabarez Remix) /\xA0
2 - Nursultan Kun - Luvway (Erich Von Kollar Remix) /\xA0
3 - Matiramic - Turtle Sense /\xA0
4 - Stuart King - Bangaba /\xA0
5 - Mia Mendi, Thomas Gandey - Nightliner /\xA0
6 - Mia Mendi, Thomas Gandey - Ubi /\xA0
7 - Billie Eilish - Oxytocine (Joan Retamero) /\xA0
8 - Patrice Baumel - Beacon /\xA0
9 - Maximo Gambini & Q.A.T - ID /\xA0
10 - Cream - Cadence / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"60.7K",fecha:null,link:"https://mcdn.podbean.com/mf/download/ys2v74/537-HernanCattaneo-2021-08-21.mp3",tracklist:`Kazko - All Voices (Jose Tabarez Remix) /
Nursultan Kun - Luvway (Erich Von Kollar Remix) /
Matiramic - Turtle Sense /
Stuart King - Bangaba /
Mia Mendi, Thomas Gandey - Nightliner /
Mia Mendi, Thomas Gandey - Ubi /
Billie Eilish - Oxytocine (Joan Retamero) /
Patrice Baumel - Beacon /
Maximo Gambini & Q.A.T - ID /`},{episodio:"538",titulo:"Resident / Episode 538 / Ago 28 2021",descripcion:`1 - Jonnas B - When You Left /\xA0
2 - Sebastian Busto Presents Moonlight Project - The Key of Dreams (Matias Chilano Remix) /\xA0
3 - Parallel Voices - Ocean Of Thoughts /\xA0
4 - Jaanh - Natural Fools /\xA0
5 - Paralel - Rose Of Jericho (Remcord Remix) /\xA0
6 - Frankie M & Luke Hunter - Distant Ocean /\xA0
7 - Elkins & Jaqobson - Alba ( Hot Since 82 Remix) /\xA0
8 - Blanka Barbara & Mango - Starwalk (Fabri Lopez Remix) /\xA0
9 - Golan Zocher feat. Velveta - Summer Sun (Emi Galvan Remix) /\xA0
10 - Subandrio & Nishan Lee - Borax / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"58.7K",fecha:null,link:"https://mcdn.podbean.com/mf/download/eh4qjt/538-HernanCattaneo-2021-08-28.mp3",tracklist:`Jonnas B - When You Left /
Sebastian Busto Presents Moonlight Project - The Key of Dreams (Matias Chilano Remix) /
Parallel Voices - Ocean Of Thoughts /
Jaanh - Natural Fools /
Paralel - Rose Of Jericho (Remcord Remix) /
Frankie M & Luke Hunter - Distant Ocean /
Elkins & Jaqobson - Alba ( Hot Since 82 Remix) /
Blanka Barbara & Mango - Starwalk (Fabri Lopez Remix) /
Golan Zocher feat. Velveta - Summer Sun (Emi Galvan Remix) /`},{episodio:"539",titulo:"Resident / Episode 539 / Sep 04 2021",descripcion:`1 - Hernan Martinez (AR) - Constellation /\xA0
2 - Corei, Neurat - Theorema Zero /\xA0
3 - Sergey Muzarks - Mirage /\xA0
4 - Greg Ochman - Untold Myth (Dabeat Remix) /\xA0
5 - Madloch, Subnode - A Short Moment (Petar Dundov Remix) /\xA0
6 - DJ Paul (AR) - Substances (Issac Remix) /\xA0
7 - Ccismo - Mystra (Aldebaran Remix) /\xA0
8 - Stephan Bodzin - Boavista /\xA0
9 - 19.26 - Lockdown in Milan /\xA0
10 - Matthias Meyer & Budakid - Sweet Ease Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"50K",fecha:"2021-09-04",link:"https://mcdn.podbean.com/mf/download/t9ptnn/539-HernanCattaneo-2021-09-04.mp3",tracklist:`Hernan Martinez (AR) - Constellation /
Corei, Neurat - Theorema Zero /
Sergey Muzarks - Mirage /
Greg Ochman - Untold Myth (Dabeat Remix) /
Madloch, Subnode - A Short Moment (Petar Dundov Remix) /
DJ Paul (AR) - Substances (Issac Remix) /
Ccismo - Mystra (Aldebaran Remix) /
Stephan Bodzin - Boavista /
19.26 - Lockdown in Milan /`},{episodio:"540",titulo:"Resident / Episode 540 / Sep 11 2021",descripcion:`1 - Juan Deminicis - All you don't see /\xA0
2 - Monojoke - Awakenings (Marcelo Paladini Remix) /\xA0
3 - East Cafe - When Chaos Ends /\xA0
4 - Subnode - Levels /\xA0
5 - 19.26 - Distance /\xA0
6 - Aldebaran - Olmo /\xA0
7 - Fur Coat, Julian Wassermann- Mysterious Valley /\xA0
8 - Fur Coat, Julian Wassermann - Desert Ground /\xA0
9 - Larrosa & Gardoqui \xA0 Nceshot - She /\xA0
10 - Antrim - Loose Soul (Antrim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"54.7K",fecha:"2021-09-11",link:"https://mcdn.podbean.com/mf/download/x9qc6f/540-HernanCattaneo-2021-09-11.mp3",tracklist:`Juan Deminicis - All you don't see /
Monojoke - Awakenings (Marcelo Paladini Remix) /
East Cafe - When Chaos Ends /
Subnode - Levels /
19.26 - Distance /
Aldebaran - Olmo /
Fur Coat, Julian Wassermann- Mysterious Valley /
Fur Coat, Julian Wassermann - Desert Ground /
Larrosa & Gardoqui \xA0 Nceshot - She /`},{episodio:"541",titulo:"Resident / Episode 541 / Sep 18 2021",descripcion:`1 - Gilad Benamram - Impossible Love (Guy Mantzur, Tamir Regev Remix) /\xA0
2 - Matthias Meyer & Budakid - Hybrid Society /\xA0
3 - John Cosani - Slow /\xA0
4 - Antrim - Stax /\xA0
5 - Dark Soul Project - Tulum /\xA0
6 - Jonathan Kaspar - Von Draussen /\xA0
7 - Paul Thomas & Fuenka - Noir /\xA0
8 - Powel - Chapek 9 /\xA0
9 - Nick Varon - Foggy Dawn /\xA0
10 - Sven Vath - Feiern / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"54.6K",fecha:"2021-09-18",link:"https://mcdn.podbean.com/mf/download/nec2b4/541-HernanCattaneo-2021-09-18.mp3",tracklist:`Gilad Benamram - Impossible Love (Guy Mantzur, Tamir Regev Remix) /
Matthias Meyer & Budakid - Hybrid Society /
John Cosani - Slow /
Antrim - Stax /
Dark Soul Project - Tulum /
Jonathan Kaspar - Von Draussen /
Paul Thomas & Fuenka - Noir /
Powel - Chapek 9 /
Nick Varon - Foggy Dawn /`},{episodio:"542",titulo:"Resident / Episode 542 / Sep 25 2021",descripcion:`1 - Pole Folder - The Great Beyond (Fur Coat Remix) /\xA0
2 - Yannek Maunz feat. Johanson - The Fall (Fur Coat Remix) /\xA0
3 - Chumbita - Ray of Sunlight /\xA0
4 - Sasha Carassi - Shiver ft. Davide Famularo /\xA0
5 - Sonic Dust feat. KnowKontrol - Blood /\xA0
6 - Nufects - Overflow /\xA0
7 - Mike Rish \xA0- Enter /\xA0
8 - Dj Paul - Twilight /\xA0
9 - 19.26 - Rainy Melody /\xA0
10 - Anthony Georges Patrice - Poor Pitch Discrimination / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"53.6K",fecha:"2021-09-25",link:"https://mcdn.podbean.com/mf/download/6dkpc8/542-HernanCattaneo-2021-09-25.mp3",tracklist:`Pole Folder - The Great Beyond (Fur Coat Remix) /
Yannek Maunz feat. Johanson - The Fall (Fur Coat Remix) /
Chumbita - Ray of Sunlight /
Sasha Carassi - Shiver ft. Davide Famularo /
Sonic Dust feat. KnowKontrol - Blood /
Nufects - Overflow /
Mike Rish \xA0- Enter /
Dj Paul - Twilight /
19.26 - Rainy Melody /`},{episodio:"545",titulo:"Resident / Episode 545 / Oct 16 2021",descripcion:`1 - Luccio - Mutual Feeling /\xA0
2 - Marcelo Vasami - Miche Line /\xA0
3 - Hicky & Halo \xA0- For Better Days (Hernan Cattaneo & Soundexile remix) /\xA0
4 - Dabeat & Zalvador - Lia /\xA0
5 - GMJ, Zankee Gulati - Eraya /\xA0
6 - Kasper Koman - Wilder (Alex O'Rion Remix) /\xA0
7 - Gonzalo Sclarovsky - ID /\xA0
8 - Francisco Castro - Rename It (Sebastian Busto Remix) /\xA0
9 - Moderat - Eating Hooks (John Cosani Edit) /\xA0
10 - &ME, Rampa, Adam Port feat. Cubicolor - Before The Flood (Diego Moreira Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"49.6K",fecha:"2021-10-16",link:"https://mcdn.podbean.com/mf/download/p2i4zm/545-HernanCattaneo-2021-10-16.mp3",tracklist:`Luccio - Mutual Feeling /
Marcelo Vasami - Miche Line /
Hicky & Halo \xA0- For Better Days (Hernan Cattaneo & Soundexile remix) /
Dabeat & Zalvador - Lia /
GMJ, Zankee Gulati - Eraya /
Kasper Koman - Wilder (Alex O'Rion Remix) /
Gonzalo Sclarovsky - ID /
Francisco Castro - Rename It (Sebastian Busto Remix) /
Moderat - Eating Hooks (John Cosani Edit) /`},{episodio:"546",titulo:"Resident / Episode 546 / Oct 23 2021",descripcion:`1 - Giovanny Aparicio - You Near Me /\xA0
2 - Brann - Stratosphere /\xA0
3 - Subandrio - Calm Within a Storm /\xA0
4 - DNOX & Stereo Underground - Salt & peper /\xA0
5 - Oovation - Serenity /\xA0
6 - Subconscious Tales - Adrsta /\xA0
7 - Martin Cozar & Rod Notario - Night Before (Fabri Lopez Remix) /\xA0
8 - Zalvador & Mauro Aguirre - Zatura /\xA0
9 - ZAC - H\xFChnerhaus (AMPISH Remix) /\xA0
10 - 3STRANGE - Waves (Unbroken's Unofficial Version) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"55.4K",fecha:"2021-10-23",link:"https://mcdn.podbean.com/mf/download/2hczp9/546-HernanCattaneo-2021-10-23.mp3",tracklist:`Giovanny Aparicio - You Near Me /
Brann - Stratosphere /
Subandrio - Calm Within a Storm /
DNOX & Stereo Underground - Salt & peper /
Oovation - Serenity /
Subconscious Tales - Adrsta /
Martin Cozar & Rod Notario - Night Before (Fabri Lopez Remix) /
Zalvador & Mauro Aguirre - Zatura /
ZAC - H\xFChnerhaus (AMPISH Remix) /`},{episodio:"547",titulo:"Resident / Episode 547 / Oct 30 2021",descripcion:`1 - 8KAYS, Diana Miro - Easy (Fur Coat Remix) /\xA0
2 - Uccelli - ID /\xA0
3 - Sebastian Busto - Dancing Flower (Simply City Stereo Marathon Remix) /\xA0
4 - Martin Cozar - Dribbling In The Sky (Poli Siufi remix) /\xA0
5 - Fabri Lopez - Weizen /\xA0
6 - Marsh feat. Sun Ra - Another Planet /\xA0
7 - KAS ST - Who's To Say What's Real (Mind Against & Colyn Remix) /\xA0
8 - Hermann & Kleine - Leaving You Behind (Sebastian Schetter Edit) /\xA0
9 - Subandrio - Plucked In Paradise /\xA0
10 - Kamilo Sanclemente - See the sun / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"37",descargas:"59K",fecha:"2021-10-30",link:"https://mcdn.podbean.com/mf/download/euvgbh/547-HernanCattaneo-2021-10-30.mp3",tracklist:`8KAYS, Diana Miro - Easy (Fur Coat Remix) /
Uccelli - ID /
Sebastian Busto - Dancing Flower (Simply City Stereo Marathon Remix) /
Martin Cozar - Dribbling In The Sky (Poli Siufi remix) /
Fabri Lopez - Weizen /
Marsh feat. Sun Ra - Another Planet /
KAS ST - Who's To Say What's Real (Mind Against & Colyn Remix) /
Hermann & Kleine - Leaving You Behind (Sebastian Schetter Edit) /
Subandrio - Plucked In Paradise /`},{episodio:"548",titulo:"Resident / Episode 548 / Nov 06 2021",descripcion:`1 - Greg Nairo - After the Rain /\xA0
2 - Valent\xEDn Huedo - Tonight /\xA0
3 - Alex O'Rion - Avalanche /\xA0
4 - Stephan Bodzin - Breathe Dub /\xA0
5 - ID - ID /\xA0
6 - D-Nox Ft LENN V - Paradise (Shai T Remix) /\xA0
7 - Rinzen, Enamour - Photon (ANII remix) /\xA0
8 - Will Dekeizer - Sapphire /\xA0
9 - Deeparture - Propellor (GMJ Remix) /\xA0
10 - Fabri Lopez - Hite / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"32",descargas:"55.8K",fecha:"2021-11-06",link:"https://mcdn.podbean.com/mf/download/8vprur/548-HernanCattaneo-2021-11-06.mp3",tracklist:`Greg Nairo - After the Rain /
Valent\xEDn Huedo - Tonight /
Alex O'Rion - Avalanche /
Stephan Bodzin - Breathe Dub /
ID - ID /
D-Nox Ft LENN V - Paradise (Shai T Remix) /
Rinzen, Enamour - Photon (ANII remix) /
Will Dekeizer - Sapphire /
Deeparture - Propellor (GMJ Remix) /`},{episodio:"549",titulo:"Resident / Episode 549 / Nov 13 2021",descripcion:`1 - Adisyn - Departure (Hrag Mikkel Remix) /\xA0
2 - James Harcourt - Open 1.4.3 /\xA0
3 - Colle - On The Run /\xA0
4 - Imran Khan - Horizonz (Simos Tagias Remix) /\xA0
5 - Forty Cats - Freyja /\xA0
6 - \xD8ostil & VNTM ft Caro Imhoff - Hibernation /\xA0
7 - Teleport - X & Hobin Rude - Time Crisis /\xA0
8 - Eric Lune - Adore /\xA0
9 - Eric Lune - Desire /\xA0
10 - Umami - Ghostnote (DAVI Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"54.8K",fecha:"2021-11-13",link:"https://mcdn.podbean.com/mf/download/xscebc/549-HernanCattaneo-2021-11-13.mp3",tracklist:`Adisyn - Departure (Hrag Mikkel Remix) /
James Harcourt - Open 1.4.3 /
Colle - On The Run /
Imran Khan - Horizonz (Simos Tagias Remix) /
Forty Cats - Freyja /
\xD8ostil & VNTM ft Caro Imhoff - Hibernation /
Teleport - X & Hobin Rude - Time Crisis /
Eric Lune - Adore /
Eric Lune - Desire /`},{episodio:"550",titulo:"Resident / Episode 550 / Nov 20 2021",descripcion:`1 - Jozef K - Dance Until The End Of Time /\xA0
2 - Subandrio - Innocent Heart /\xA0
3 - Forty Cats, Meeting Molly - Lagom /\xA0
4 - Rikk Earth - Lost and Confused (East Cafe Breaks Dub) /\xA0
5 - Anthony Pappa & Jamie Stevens - Where We've Gone /\xA0
6 - UNDERWORLD - Crocodile (DJ Paul) /\xA0
7 - Forty Cats - Utopia /\xA0
8 - Matter - Pacha Mama /\xA0
9 - Yudi Watanabe, Andre Moret, L Georges - Crossing Galaxies /\xA0
10 - Callecat - Retrogg / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"57.7K",fecha:"2021-11-20",link:"https://mcdn.podbean.com/mf/download/ymdshm/550-HernanCattaneo-2021-11-20.mp3",tracklist:`Jozef K - Dance Until The End Of Time /
Subandrio - Innocent Heart /
Forty Cats, Meeting Molly - Lagom /
Rikk Earth - Lost and Confused (East Cafe Breaks Dub) /
Anthony Pappa & Jamie Stevens - Where We've Gone /
UNDERWORLD - Crocodile (DJ Paul) /
Forty Cats - Utopia /
Matter - Pacha Mama /
Yudi Watanabe, Andre Moret, L Georges - Crossing Galaxies /`},{episodio:"551",titulo:"Resident / Episode 551 / Nov 27 2021",descripcion:`1 - M.O.S. - Kara /\xA0
2 - Gres A - Your Eyes /\xA0
3 - rAin (MU) - Damaged (Alex Efe Remix) /\xA0
4 - Matter - The Search /\xA0
5 - Lucio Gastaldo - Panorama (Diego Berrondo Remix) /\xA0
6 - Sebastian Schetter - Nirvana /\xA0
7 - John Cosani - Hericium /\xA0
8 - NAHS - The Time Now (Sebastian Haas Remix) /\xA0
9 - 1926, BOg - 22 Police /\xA0
10 - Definition, Natascha Polke - Trojan Love (Tim Engelhardt Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"55.7K",fecha:"2021-11-27",link:"https://mcdn.podbean.com/mf/download/yvkirx/551-HernanCattaneo-2021-11-27.mp3",tracklist:`M.O.S. - Kara /
Gres A - Your Eyes /
rAin (MU) - Damaged (Alex Efe Remix) /
Matter - The Search /
Lucio Gastaldo - Panorama (Diego Berrondo Remix) /
Sebastian Schetter - Nirvana /
John Cosani - Hericium /
NAHS - The Time Now (Sebastian Haas Remix) /
1926, BOg - 22 Police /`},{episodio:"552",titulo:"Resident / Episode 552 / Dec 04 2021",descripcion:`1 - Greg Nairo - After The Rain (Pablo Carrera's JKR Edit) /\xA0
2 - The Cobb - Voda (Dmitry Molosh Remix) /\xA0
3 - Matter - So it Goes /\xA0
4 - Mail Lawson- Dear dad /\xA0
5 - Marcelo Vasami - JG Melon /\xA0
6 - NOIYSE PROJECT -In a Cloudland /\xA0
7 - Chaum - Bime /\xA0
8 - Lolu Menayed - After no on /\xA0
9 - Kassey Voorn - Skyline /\xA0
10 - Dunadry, Francisco Basso - Lost in Dagobah (Mauro Augugliaro Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"51.1K",fecha:"2021-12-04",link:"https://mcdn.podbean.com/mf/download/pmd2qs/552-HernanCattaneo-2021-12-04.mp3",tracklist:`Greg Nairo - After The Rain (Pablo Carrera's JKR Edit) /
The Cobb - Voda (Dmitry Molosh Remix) /
Matter - So it Goes /
Mail Lawson- Dear dad /
Marcelo Vasami - JG Melon /
NOIYSE PROJECT -In a Cloudland /
Chaum - Bime /
Lolu Menayed - After no on /
Kassey Voorn - Skyline /`},{episodio:"554",titulo:"Resident / Episode 554 / Dec 18 2021",descripcion:`1 - Sigur Ros - Saeglopur (Apocrypha Private Mix) /\xA0
2 - Jano Gil - Beyond The Earthly /\xA0
3 - Billie Eilish - Not My Responsibility (Antrim Remix) /\xA0
4 - Jim Rivers - Orchidaceae /\xA0
5 - Makebo & Amonita - Matangi /\xA0
6 - Emmanuel Vazquez -Shadowlands /\xA0
7 - Marc (AR) - Space Between Us (SALAZAR (COL) Remix) /\xA0
8 - Sparks,Gorog Moroder,Trisco,Russell Mael - Musak (Dj Bird Unofficial Remix) /\xA0
9 - Jimi Jules - My City's On Fire (Club Edit) /\xA0
10 - GHEIST - Home Again Radau / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"56K",fecha:"2021-12-18",link:"https://mcdn.podbean.com/mf/download/cvjd5q/554-HernanCattaneo-2021-12-18.mp3",tracklist:`Sigur Ros - Saeglopur (Apocrypha Private Mix) /
Jano Gil - Beyond The Earthly /
Billie Eilish - Not My Responsibility (Antrim Remix) /
Jim Rivers - Orchidaceae /
Makebo & Amonita - Matangi /
Emmanuel Vazquez -Shadowlands /
Marc (AR) - Space Between Us (SALAZAR (COL) Remix) /
Sparks,Gorog Moroder,Trisco,Russell Mael - Musak (Dj Bird Unofficial Remix) /
Jimi Jules - My City's On Fire (Club Edit) /`},{episodio:"555",titulo:"Resident / Episode 555 / Dec 25 2021",descripcion:`1 - Mass Digital - Someone Like You /\xA0
2 - Isaac Differding - Spirit /\xA0
3 - Nicolas Rada - Alter Ego /\xA0
4 - Arodes - The Beginning /\xA0
5 - Kamilo Sanclemente & Carol Brown - Spirals Inflections (Simply City Remix) /\xA0
6 - Lee Hazlewod - Your Sweet Love (Luciano Scheffer Bootleg mix) /\xA0
7 - Moscoman & Komilev Feat. Eleonora - Lost In The Sun /\xA0
8 - Elfenberg - Lilla Lila Liv /\xA0
9 - Clarity (Baunder remix) /\xA0
10 - Anderholm - Let Me In feat Richard Walters (EANP Unofficial Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"35",descargas:"56.7K",fecha:"2021-12-25",link:"https://mcdn.podbean.com/mf/download/e7u6xp/555-HernanCattaneo-2021-12-25.mp3",tracklist:`Mass Digital - Someone Like You /
Isaac Differding - Spirit /
Nicolas Rada - Alter Ego /
Arodes - The Beginning /
Kamilo Sanclemente & Carol Brown - Spirals Inflections (Simply City Remix) /
Lee Hazlewod - Your Sweet Love (Luciano Scheffer Bootleg mix) /
Moscoman & Komilev Feat. Eleonora - Lost In The Sun /
Elfenberg - Lilla Lila Liv /
Clarity (Baunder remix) /`},{episodio:"556",titulo:"Resident / Episode 556 / Jan 01 2022",descripcion:`1 - Gonzalo Sacc Franco Leonardini - Lonely /\xA0
2 - Wassu Djimboh - Saru /\xA0
3 - Colou Befu, Ignacio Berardi - Sayonara (Alex Efe & Diego Berrondo Remix) /\xA0
4 - Paul Deep (AR) - Genbu /\xA0
5 - Kutiman - Inner galactic (Kutiman Mixes Fiverr) Eli Nissan Remix /\xA0
6 - Hector Cortes - Diatoms /\xA0
7 - Subandrio - Innocent Heart /\xA0
8 - Marsh - Free /\xA0
9 - Kamilo Sanclemente - Colonies /\xA0
10 - Vince Watson - Holographic (Carl Craig's Ride Or Die Anthem) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"54.9K",fecha:"2022-01-01",link:"https://mcdn.podbean.com/mf/download/9hymm8/556-HernanCattaneo-2022-01-01.mp3",tracklist:`Gonzalo Sacc Franco Leonardini - Lonely /
Wassu Djimboh - Saru /
Colou Befu, Ignacio Berardi - Sayonara (Alex Efe & Diego Berrondo Remix) /
Paul Deep (AR) - Genbu /
Kutiman - Inner galactic (Kutiman Mixes Fiverr) Eli Nissan Remix /
Hector Cortes - Diatoms /
Subandrio - Innocent Heart /
Marsh - Free /
Kamilo Sanclemente - Colonies /`},{episodio:"557",titulo:"Resident / Episode 557 / Jan 08 2022",descripcion:`1 - Kabi (AR) - Down To Earth /\xA0
2 - Somelee - The Sign /\xA0
3 - Kevin Di Serna - Faro /\xA0
4 - Dimitri Nakov Limara- Day by Day /\xA0
5 - PALMFooD - Hiddel /\xA0
6 - Budakid - Tadacuma /\xA0
7 - Eze Colombo - Ascension (Menkee Remix) /\xA0
8 - Rina, Switchdance - Reak /\xA0
9 - Ivan Aliaga - Last Breath /\xA0
10 - HVOB - Bruise (Antrim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"54.8K",fecha:"2022-01-08",link:"https://mcdn.podbean.com/mf/download/rgbk2u/557-HernanCattaneo-2022-01-08.mp3",tracklist:`Kabi (AR) - Down To Earth /
Somelee - The Sign /
Kevin Di Serna - Faro /
Dimitri Nakov Limara- Day by Day /
PALMFooD - Hiddel /
Budakid - Tadacuma /
Eze Colombo - Ascension (Menkee Remix) /
Rina, Switchdance - Reak /
Ivan Aliaga - Last Breath /`},{episodio:"558",titulo:"Resident / Episode 558 / Jan 15 2022",descripcion:`1 - Balcazar, Ismaehl, Replicanth - Samsara /\xA0
2 - Mass Digital - Rain in June /\xA0
3 - Astor Piazzolla - Libertango (Apste Version) /\xA0
4 - Kamilo Sanclemente \xA0- Nowhere To Run feat Velveta /\xA0
5 - Talal - Always /\xA0
6 - Gardenstate, Hvitling & Yenzen - Synchole /\xA0
7 - Eric Lune - Desire (Dave Seaman Remix ) /\xA0
8 - Billie Eilish - No Time To Die (Antrim Remix) /\xA0
9 - BLANCAh - Terracotta /\xA0
10 - Agoria & Ni\xF1o de Elche - What if earth would turn faster (KAS:ST Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"54.3K",fecha:"2022-01-15",link:"https://mcdn.podbean.com/mf/download/u4hjnr/558-HernanCattaneo-2022-01-15.mp3",tracklist:`Balcazar, Ismaehl, Replicanth - Samsara /
Mass Digital - Rain in June /
Astor Piazzolla - Libertango (Apste Version) /
Kamilo Sanclemente \xA0- Nowhere To Run feat Velveta /
Talal - Always /
Gardenstate, Hvitling & Yenzen - Synchole /
Eric Lune - Desire (Dave Seaman Remix ) /
Billie Eilish - No Time To Die (Antrim Remix) /
BLANCAh - Terracotta /`},{episodio:"559",titulo:"Resident / Episode 559 / Jan 22 2022",descripcion:`1 - Larse - Drive /\xA0
2 - Devrient - Shea /\xA0
3 - Wassu - Self Awareness /\xA0
4 - Envotion - Adrift (Sebastian Sellares Remix) /\xA0
5 - Jonas Rathsman - Uno (Antrim Remix) /\xA0
6 - Dmitry Molosh - Proportion (Cid Inc. Remix) /\xA0
7 - Sainte Vie - Phantom /\xA0
8 - Luciano Scheffer - Sinceridade /\xA0
9 - Dmitry Molosh - Surface (Sebastian Sellares Remix) /\xA0
10 - Elderbrook - Inner Light (Barry Can't Swim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"54.1K",fecha:"2022-01-22",link:"https://mcdn.podbean.com/mf/download/y8uf3b/559-HernanCattaneo-2022-01-22.mp3",tracklist:`Larse - Drive /
Devrient - Shea /
Wassu - Self Awareness /
Envotion - Adrift (Sebastian Sellares Remix) /
Jonas Rathsman - Uno (Antrim Remix) /
Dmitry Molosh - Proportion (Cid Inc. Remix) /
Sainte Vie - Phantom /
Luciano Scheffer - Sinceridade /
Dmitry Molosh - Surface (Sebastian Sellares Remix) /`},{episodio:"560",titulo:"Resident / Episode 560 / Jan 29 2022",descripcion:`1 - David August - Ingrid (Alejo Gonzalez Mix) /\xA0
2 - Maximo Boskis, Adrian Font -Enigma /\xA0
3 - Weird Sounding Dude - Crossroads /\xA0
4 - Luciano Scheffer - Serra(Original Mix) /\xA0
5 - Nick Curly & Jansons - Go (Budakid Remix) /\xA0
6 - Temple Gate - Forgiving is Divine /\xA0
7 - Kasey Taylor & Chris Meehan - Simplicity (Gai Barone Remix) /\xA0
8 - Fabri Lopez - Struise /\xA0
9 - Kabi (AR) - Odisea /\xA0
10 - Mossia - Cabala (Kamilo Sanclemente rmx) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"55.1K",fecha:"2022-01-29",link:"https://mcdn.podbean.com/mf/download/vgp9us/560-HernanCattaneo-2022-01-29.mp3",tracklist:`David August - Ingrid (Alejo Gonzalez Mix) /
Maximo Boskis, Adrian Font -Enigma /
Weird Sounding Dude - Crossroads /
Luciano Scheffer - Serra(Original Mix) /
Nick Curly & Jansons - Go (Budakid Remix) /
Temple Gate - Forgiving is Divine /
Kasey Taylor & Chris Meehan - Simplicity (Gai Barone Remix) /
Fabri Lopez - Struise /
Kabi (AR) - Odisea /`},{episodio:"561",titulo:"Resident / Episode 561 / Feb 05 2022",descripcion:`1 - Billie Elish - Your Power (Deepness & Dio S Unofficial Rework) /\xA0
2 - Volen Sentir - Oror /\xA0
3 - Black 8 - Bleeding Heart /\xA0
4 - Nolan & Luke Brancaccio - See The Stars (Extended Mix) /\xA0
5 - Raphael Mader - Catanya /\xA0
6 - Cocho - Immortal /\xA0
7 - SOEL & SANDHAUS - Red Light /\xA0
8 - \xD8ostil & Juan Hansen - Drown /\xA0
9 - Sebastien Leger - Pamparis /\xA0
10 - WestbamML 'Wasteland' ft. Inga Humpe (andhim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"55.8K",fecha:"2022-02-05",link:"https://mcdn.podbean.com/mf/download/7ffhtq/561-HernanCattaneo-2022-01-05.mp3",tracklist:`Billie Elish - Your Power (Deepness & Dio S Unofficial Rework) /
Volen Sentir - Oror /
Black 8 - Bleeding Heart /
Nolan & Luke Brancaccio - See The Stars (Extended Mix) /
Raphael Mader - Catanya /
Cocho - Immortal /
SOEL & SANDHAUS - Red Light /
\xD8ostil & Juan Hansen - Drown /
Sebastien Leger - Pamparis /`},{episodio:"562",titulo:"Resident / Episode 562 / Feb 12 2022",descripcion:`1 - Frankie M, Rodrigo Lapena, Gonzalo Sacc - My Home /\xA0
2 - Budakid - Phantonym /\xA0
3 - Lee Hazlewod - Your Sweet Love (Luciano Scheffer Bootleg mix) /\xA0
4 - Leila Scheiwe, Halaros feat Sarah Chilanti - Clio /\xA0
5 - Dancing for the answer - Nick Mulvey (Squire & Karcelen remix) /\xA0
6 - Franz Matthews - The Question ft. Jonathan Lehmann (Aera Remix) /\xA0
7 - Massive Attack - Girl i love you (Santo Adriano Reinterpretation) /\xA0
8 - Carmelo Prato - Blurry /\xA0
9 - kiosko 33hz - The Magic Garden /\xA0
10 - Nick Stoynoff - Dalbana (Vince Watson Retro Reshape) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"57K",fecha:"2022-02-12",link:"https://mcdn.podbean.com/mf/download/z6cc2b/562-HernanCattaneo-2022-02-12.mp3",tracklist:`Frankie M, Rodrigo Lapena, Gonzalo Sacc - My Home /
Budakid - Phantonym /
Lee Hazlewod - Your Sweet Love (Luciano Scheffer Bootleg mix) /
Leila Scheiwe, Halaros feat Sarah Chilanti - Clio /
Dancing for the answer - Nick Mulvey (Squire & Karcelen remix) /
Franz Matthews - The Question ft. Jonathan Lehmann (Aera Remix) /
Massive Attack - Girl i love you (Santo Adriano Reinterpretation) /
Carmelo Prato - Blurry /
kiosko 33hz - The Magic Garden /`},{episodio:"564",titulo:"Resident / Episode 564 / Feb 26 2022",descripcion:`1 - Chris Cargo - Corrado /\xA0
2 - Oneohtrix Point Never - Nothing's Special (Fabrice Mos Rework) /\xA0
3 - Olivier Weiter - Diversum /\xA0
4 - Applescal - Annie /\xA0
5 - Steve Lee - Love & Happiness (Steve's Balearic Mix) /\xA0
6 - Francesco Pico - Check This Out /\xA0
7 - Matthias Meyer - Touch Of Magic /\xA0
8 - Gorkiz - Intuition /\xA0
9 - Oliver Schories - Tempest (Rodriguez Jr. Remix) /\xA0
10 - Because of Art - Home / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"52.7K",fecha:"2022-02-26",link:"https://mcdn.podbean.com/mf/download/5yg7hp/564-HernanCattaneo-2022-02-26.mp3",tracklist:`Chris Cargo - Corrado /
Oneohtrix Point Never - Nothing's Special (Fabrice Mos Rework) /
Olivier Weiter - Diversum /
Applescal - Annie /
Steve Lee - Love & Happiness (Steve's Balearic Mix) /
Francesco Pico - Check This Out /
Matthias Meyer - Touch Of Magic /
Gorkiz - Intuition /
Oliver Schories - Tempest (Rodriguez Jr. Remix) /`},{episodio:"565",titulo:"Resident / Episode 565 / Mar 05 2022",descripcion:`1 - Maxi Degrassi - Prohibited Steps /\xA0
2 - Bross, Bodaishin Lupe Republic - Barcelona /\xA0
3 - Agustin Pengov - SEIA /\xA0
4 - Lio Q, Nicolas Leonelli - Perfect Love (Dabeat Remix) /\xA0
5 - Franz Matthews - The Question \xA0ft. Jonathan Lehmann (Milio's 7am Dub Mix) /\xA0
6 - Glowal - Even /\xA0
7 - Distant Fragment - Memory Rift Part 2 /\xA0
8 - Yumi Kobayashi - Tokiwa (Yudi Watanabe Remix) /\xA0
9 - K\xF6lsch & Dubfire - ULM /\xA0
10 - Logic1000 -I Won't Forget / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"53.9K",fecha:"2022-03-05",link:"https://mcdn.podbean.com/mf/download/grvcxt/565-HernanCattaneo-2022-03-05.mp3",tracklist:`Maxi Degrassi - Prohibited Steps /
Bross, Bodaishin Lupe Republic - Barcelona /
Agustin Pengov - SEIA /
Lio Q, Nicolas Leonelli - Perfect Love (Dabeat Remix) /
Franz Matthews - The Question \xA0ft. Jonathan Lehmann (Milio's 7am Dub Mix) /
Glowal - Even /
Distant Fragment - Memory Rift Part 2 /
Yumi Kobayashi - Tokiwa (Yudi Watanabe Remix) /
K\xF6lsch & Dubfire - ULM /`},{episodio:"566",titulo:"Resident / Episode 566 / Mar 12 2022",descripcion:`1 - Come Closer - Do You See This /\xA0
2 - Frankie M, Rodrigo Lapena, Gonzalo Sacc - Let Me Go (Juan Deminicis Remix) /\xA0
3 - Niceshot - Early Unlocked (Andrea Cassino Remix) /\xA0
4 - Dmitry Molosh - River Pond (Andrea Cassino Remix) /\xA0
5 - Robert Mason - Future Sins /\xA0
6 - EANP - Mutations (NOIYSE PROJECT Remix) /\xA0
7 - Into The Ether & Lewyn - Never A Sunday /\xA0
8 - Essco - Rabbit Hole (Ivanshee Remix) /\xA0
9 - Vegas - Endometriosis - (NOIYSE PROJECT REMIX) /\xA0
10 - Coll\xE8 - Solid Feat. Domien (Sasha Carassi Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"57.3K",fecha:"2022-03-12",link:"https://mcdn.podbean.com/mf/download/5kx6x7/566-HernanCattaneo-2022-03-12.mp3",tracklist:`Come Closer - Do You See This /
Frankie M, Rodrigo Lapena, Gonzalo Sacc - Let Me Go (Juan Deminicis Remix) /
Niceshot - Early Unlocked (Andrea Cassino Remix) /
Dmitry Molosh - River Pond (Andrea Cassino Remix) /
Robert Mason - Future Sins /
EANP - Mutations (NOIYSE PROJECT Remix) /
Into The Ether & Lewyn - Never A Sunday /
Essco - Rabbit Hole (Ivanshee Remix) /
Vegas - Endometriosis - (NOIYSE PROJECT REMIX) /`},{episodio:"567",titulo:"Resident / Episode 567 / Mar 19 2022",descripcion:`1 - Kevin Di Serna - Sol A Vana /\xA0
2 - Beije - Candescence (Alex Efe Remix) /\xA0
3 - Chris Cargo - Aurora /\xA0
4 - Frannz ft Coco - Turn Around (Govinda Remix) /\xA0
5 - Green Thumb vs. JV \u2013 Grand Theft Vinyl (Diego Berrondo Bootleg) /\xA0
6 - Xero (Marcus Worgull Remix) /\xA0
7 - Juan Iba\xF1ez & Agustin Ficarra - Diggs /\xA0
8 - Gabriel Borgo - L'evit-AR (Maximo Gambini & Q.A.T Remix) /\xA0
9 - Gabriel Rocha, Demian Muller - Capitan Of My Heart /\xA0
10 - Bonobo - Age Of Phase (Antrim Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"48.9K",fecha:"2022-03-19",link:"https://mcdn.podbean.com/mf/download/bqphr7/567-HernanCattaneo-2022-03-19.mp3",tracklist:`Kevin Di Serna - Sol A Vana /
Beije - Candescence (Alex Efe Remix) /
Chris Cargo - Aurora /
Frannz ft Coco - Turn Around (Govinda Remix) /
Green Thumb vs. JV \u2013 Grand Theft Vinyl (Diego Berrondo Bootleg) /
Xero (Marcus Worgull Remix) /
Juan Iba\xF1ez & Agustin Ficarra - Diggs /
Gabriel Borgo - L'evit-AR (Maximo Gambini & Q.A.T Remix) /
Gabriel Rocha, Demian Muller - Capitan Of My Heart /`},{episodio:"568",titulo:"Resident / Episode 568 / Mar 26 2022",descripcion:`1 - Steve Kelley - Paradise /\xA0
2 - Andres Moris - Into The Light (Aman Anand Remix) /\xA0
3 - Gaston Sosa, Poli Siufi - Volemos Alto /\xA0
4 - Alex Efe & Diego Berrondo - Distance /\xA0
5 - LOM - Secret River /\xA0
6 - Dole & Kom - Plenty Of Nothing (Olivier Weiter Remix) /\xA0
7 - Robert Babicz - Space Funk (Timo Maas Remix) /\xA0
8 - Juan Beldarrein - Viaje A Venus (Fabri Lopez Remix) /\xA0
9 - Noiyse Project & Shannon Davin - Running Mavka /\xA0
10 - Jonas Rathsman - Heartbeat / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"53.7K",fecha:"2022-03-26",link:"https://mcdn.podbean.com/mf/download/yzgfxb/568-HernanCattaneo-2022-03-26.mp3",tracklist:`Steve Kelley - Paradise /
Andres Moris - Into The Light (Aman Anand Remix) /
Gaston Sosa, Poli Siufi - Volemos Alto /
Alex Efe & Diego Berrondo - Distance /
LOM - Secret River /
Dole & Kom - Plenty Of Nothing (Olivier Weiter Remix) /
Robert Babicz - Space Funk (Timo Maas Remix) /
Juan Beldarrein - Viaje A Venus (Fabri Lopez Remix) /
Noiyse Project & Shannon Davin - Running Mavka /`},{episodio:"569",titulo:"Resident / Episode 569 / Apr 02 2022",descripcion:`1 - RY X - Thunder (Rocio Portillo Unofficial Remix) /\xA0
2 - Ananda Project - Cascades Of Colour (Balcazar edit) /\xA0
3 - Kora - Tango /\xA0
4 - Gus Gus - Airwaves (Paul Deep, Larrosa & Gardoqui Remix) /\xA0
5 - Jamie Stevens, Garance - Heavy Hearts /\xA0
6 - JFR - Kira /\xA0
7 - Miss Melera - Violet /\xA0
8 - H.Haze - Soledad Feat. Ghost Isle - (Henry Saiz Remix) /\xA0
9 - Sasha v Photek - Aviator 2022 /\xA0
10 - Depeche Mode - Policy Of Truth (Framewer Rewerk) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"57.9K",fecha:"2022-04-02",link:"https://mcdn.podbean.com/mf/download/48qavp/569-HernanCattaneo-2022-04-02.mp3",tracklist:`RY X - Thunder (Rocio Portillo Unofficial Remix) /
Ananda Project - Cascades Of Colour (Balcazar edit) /
Kora - Tango /
Gus Gus - Airwaves (Paul Deep, Larrosa & Gardoqui Remix) /
Jamie Stevens, Garance - Heavy Hearts /
JFR - Kira /
Miss Melera - Violet /
H.Haze - Soledad Feat. Ghost Isle - (Henry Saiz Remix) /
Sasha v Photek - Aviator 2022 /`},{episodio:"570",titulo:"Resident / Episode 570 / Apr 09 2022",descripcion:`1 - Larrosa & Gardoqui - If you love me (Simply City Stereo Interpretation) /
2 - Kandar, Morning Delusions - Mar del Plata (Luciano Scheffer Remix) /\xA0
3 - Cancci - Sereno (Dilby's Floorplay Remix) /\xA0
4 - Dark Soul Project - Indigo (Freedo Mosho Remix)
5 - Sebastian Busto - Rainbow /\xA0
6 - Armandhe, Leo Guerrero - Efimero /\xA0
7 - Nicky Elisabeth - Into Your Arms /\xA0
8 - Reset Robot - Only Light Escapes /\xA0
9 - VONDA7 - Arrivals Cornelius /\xA0
10 - Royksopp, Beki Mari - This Time, This Place... (feat. Beki Mari) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"53.6K",fecha:"2022-04-09",link:"https://mcdn.podbean.com/mf/download/vubw43/570-HernanCattaneo-2022-04-09.mp3",tracklist:`Larrosa & Gardoqui - If you love me (Simply City Stereo Interpretation) /
Kandar, Morning Delusions - Mar del Plata (Luciano Scheffer Remix) /
Cancci - Sereno (Dilby's Floorplay Remix) /
Dark Soul Project - Indigo (Freedo Mosho Remix)
Sebastian Busto - Rainbow /
Armandhe, Leo Guerrero - Efimero /
Nicky Elisabeth - Into Your Arms /
Reset Robot - Only Light Escapes /
VONDA7 - Arrivals Cornelius /`},{episodio:"571",titulo:"Resident / Episode 571 / Apr 16 2022",descripcion:`1 - Sebastian Sellares - Afterglow /\xA0
2 - NTO (FR) - Loving You Like Always feat. Tricky (Rodriguez Jr. Remix) /\xA0
3 - Booka Shade - Soulkeeper /\xA0
4 - Coll\xE9 - Losing Time (Murat Uncuoglu Remix) /\xA0
5 - Satoshi Fumi - The Trail of \xA0Light /\xA0
6 - Arnold T & Alain Pauwels - A Light Exists /\xA0
7 - Golan Zocher & Choopie - Shades Of Love (Hobin Rude Remix) /\xA0
8 - Berni Turletti - Prana Vayu /\xA0
9 - Acid Pauli - No Kick No Cry (DJ Tennis Remix) /\xA0
10 - Avidus - Relief / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"51.8K",fecha:"2022-04-16",link:"https://mcdn.podbean.com/mf/download/3g3t5n/571-HernanCattaneo-2022-04-16.mp3",tracklist:`Sebastian Sellares - Afterglow /
NTO (FR) - Loving You Like Always feat. Tricky (Rodriguez Jr. Remix) /
Booka Shade - Soulkeeper /
Coll\xE9 - Losing Time (Murat Uncuoglu Remix) /
Satoshi Fumi - The Trail of \xA0Light /
Arnold T & Alain Pauwels - A Light Exists /
Golan Zocher & Choopie - Shades Of Love (Hobin Rude Remix) /
Berni Turletti - Prana Vayu /
Acid Pauli - No Kick No Cry (DJ Tennis Remix) /`},{episodio:"572",titulo:"Resident / Episode 572 / Apr 23 2022",descripcion:`1 - Claudia Vargas - Children Say /\xA0
2 - Berni Turletti - Samana /\xA0
3 - Ezequiel Arias - Esperanza /\xA0
4 - Fabio Vanore feat. Jeppe Kjellberg - Caravan (Lake People Remix) /\xA0
5 - Fur Coat, Alfa Romero - Antigone's Dream /\xA0
6 - Anatolian - Fluffy Clouds /\xA0
7 - Astral Projection - People Can Fly (Chaim Rework) /\xA0
8 - Soul Of Zoo - Horizon (Hicky & Kalo Remix) /\xA0
9 - Clyve - Circles in the Sand /\xA0
10 - Subnode - End To Begin (Yudi Watanabe Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"54.2K",fecha:"2022-04-23",link:"https://mcdn.podbean.com/mf/download/rw9hmh/572-HernanCattaneo-2022-04-23.mp3",tracklist:`Claudia Vargas - Children Say /
Berni Turletti - Samana /
Ezequiel Arias - Esperanza /
Fabio Vanore feat. Jeppe Kjellberg - Caravan (Lake People Remix) /
Fur Coat, Alfa Romero - Antigone's Dream /
Anatolian - Fluffy Clouds /
Astral Projection - People Can Fly (Chaim Rework) /
Soul Of Zoo - Horizon (Hicky & Kalo Remix) /
Clyve - Circles in the Sand /`},{episodio:"574",titulo:"Resident / Episode 574 / May 07 2022",descripcion:`1 - Uccelli - No more war /\xA0
2 - Nick Varon - Conclusions /\xA0
3 - Simos Tagias - Euphoria (Paul Deep Remix) /\xA0
4 - Facundo Mart\xEDn - Nashira /\xA0
5 - GMJ & Dimuth K - Convergence /\xA0
6 - Hobin Rude - It Was And It Will Be /\xA0
7 - Anton Stelsi - Close Your Eyes (Dmitry Molosh Remix) /\xA0
8 - Golan Zocher - Zoom Out /\xA0
9 - Hyunji Lee - Exploration /\xA0
10 - Yoni - A Better Place In Heaven (Alex O'Rion Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"53.1K",fecha:"2022-05-07",link:"https://mcdn.podbean.com/mf/download/qacezf/574-HernanCattaneo-2022-05-07.mp3",tracklist:`Uccelli - No more war /
Nick Varon - Conclusions /
Simos Tagias - Euphoria (Paul Deep Remix) /
Facundo Mart\xEDn - Nashira /
GMJ & Dimuth K - Convergence /
Hobin Rude - It Was And It Will Be /
Anton Stelsi - Close Your Eyes (Dmitry Molosh Remix) /
Golan Zocher - Zoom Out /
Hyunji Lee - Exploration /`},{episodio:"575",titulo:"Resident / Episode 575 / May 14 2022",descripcion:`1 - B.P.T. feat.DM Binxter - Moody (PAUL (AR)) /\xA0
2 - Husa & Zeyada - On My Own (Hernan Cattaneo & Marcelo Vasami Remix) /\xA0
3 - Integral Bread - Ready To Born (simos tagias remix) /\xA0
4 - Hayden James Cassian Elderbrook - On Your Own (Fort Romeau Remix) /\xA0
5 - Abity - Lotus /\xA0
6 - Goraieb e Luciano Scheffer - Endless Symphony - Noiyse Project Remix /\xA0
7 - Belms _ VeeQue - Western Clouds (Abel Meyer Mix) /\xA0
8 - VegaZ-SL - Endometriosis (NOIYSE-PROJECT-Remix) /\xA0
9 - Fulltone - Kairo /\xA0
10 - Yotam Avni - Here We Are Again / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"56.8K",fecha:"2022-05-14",link:"https://mcdn.podbean.com/mf/download/g7vbnk/575-HernanCattaneo-2022-05-14.mp3",tracklist:`B.P.T. feat.DM Binxter - Moody (PAUL (AR)) /
Husa & Zeyada - On My Own (Hernan Cattaneo & Marcelo Vasami Remix) /
Integral Bread - Ready To Born (simos tagias remix) /
Hayden James Cassian Elderbrook - On Your Own (Fort Romeau Remix) /
Abity - Lotus /
Goraieb e Luciano Scheffer - Endless Symphony - Noiyse Project Remix /
Belms _ VeeQue - Western Clouds (Abel Meyer Mix) /
VegaZ-SL - Endometriosis (NOIYSE-PROJECT-Remix) /
Fulltone - Kairo /`},{episodio:"576",titulo:"Resident / Episode 576 / May 21 2022",descripcion:`1 - Roman Lieske, Namsela - Isolate (Diego Berrondo Bootleg) /\xA0
2 - Jelly For The Babies, Ignacio Corazza - My Heart Is Heavy (Weird Sounding Dude Remix) /\xA0
3 - Hector Cortes - Bootcamp /\xA0
4 - Rob Hes & Steve Slight \xA0- Dub Track /\xA0
5 - Sleepy & Boo Lucent /\xA0
6 - NOIYSE PROJECT - remember me /\xA0
7 - Miss Melera - Marble /\xA0
8 - Joan Retamero - The Sunstar /\xA0
9 - Nila - Momentum /\xA0
10 - Budakid & Nordfold - United / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"53.9K",fecha:"2022-05-21",link:"https://mcdn.podbean.com/mf/download/ag8fss/576-HernanCattaneo-2022-05-21.mp3",tracklist:`Roman Lieske, Namsela - Isolate (Diego Berrondo Bootleg) /
Jelly For The Babies, Ignacio Corazza - My Heart Is Heavy (Weird Sounding Dude Remix) /
Hector Cortes - Bootcamp /
Rob Hes & Steve Slight \xA0- Dub Track /
Sleepy & Boo Lucent /
NOIYSE PROJECT - remember me /
Miss Melera - Marble /
Joan Retamero - The Sunstar /
Nila - Momentum /`},{episodio:"577",titulo:"Resident / Episode 577 / May 28 2022",descripcion:`1 - Ewan Rill & Casper - Self-Searcher /\xA0
2 - Christopher Erre & Ivan Aliaga - Delusion /\xA0
3 - Lost Desert Lee Burridge - Bloemenvelden /\xA0
4 - Lucas Patyn - Like a Voice (SALAZAR COL Remix) /\xA0
5 - Johannes Brecht - Voicing Something feat. Luke Marzec (Adriatique Remix) /\xA0
6 - Lexer - Niscaya /\xA0
7 - Brett Kelso - Mothership /\xA0
8 - Hobin Rude - Umbra /\xA0
9 - Revival Agents - Divine Inside (Dmitry Molosh Remix) /\xA0
10 - Sasha & Alex Banks - Australia / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"51.8K",fecha:"2022-05-28",link:"https://mcdn.podbean.com/mf/download/bfqtsz/577-HernanCattaneo-2022-05-28.mp3",tracklist:`Ewan Rill & Casper - Self-Searcher /
Christopher Erre & Ivan Aliaga - Delusion /
Lost Desert Lee Burridge - Bloemenvelden /
Lucas Patyn - Like a Voice (SALAZAR COL Remix) /
Johannes Brecht - Voicing Something feat. Luke Marzec (Adriatique Remix) /
Lexer - Niscaya /
Brett Kelso - Mothership /
Hobin Rude - Umbra /
Revival Agents - Divine Inside (Dmitry Molosh Remix) /`},{episodio:"578",titulo:"Resident / Episode 578 / Jun 04 2022",descripcion:`1 - Rich Curtis - Square Root (Alex O'Rion Remix) /\xA0
2 - DJ Koze, Sophia Kennedy - Drone Me Up, Flashy (&ME Remix) /\xA0
3 - Yeah But No & Ivory - Keep Running (Ivory's Euphoria Mix) /\xA0
4 - Andre Moret - Simply Way (Freedo Mosho Remix) /\xA0
5 - Hidden Empire - Comoja /\xA0
6 - Blaush ft. Running Pine - Tauri (Hunter Game Remix) /\xA0
7 - James Harcourt - Signalsv
8 - Catz 'n Dogz - U /\xA0
9 - Sebastian Sellares - The Blitz /\xA0
10 - Sebastien Leger, Tim Green - Duel / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"52.9K",fecha:"2022-06-04",link:"https://mcdn.podbean.com/mf/download/pesn6u/578-HernanCattaneo-2022-06-04.mp3",tracklist:`Rich Curtis - Square Root (Alex O'Rion Remix) /
DJ Koze, Sophia Kennedy - Drone Me Up, Flashy (&ME Remix) /
Yeah But No & Ivory - Keep Running (Ivory's Euphoria Mix) /
Andre Moret - Simply Way (Freedo Mosho Remix) /
Hidden Empire - Comoja /
Blaush ft. Running Pine - Tauri (Hunter Game Remix) /
James Harcourt - Signalsv
Catz 'n Dogz - U /
Sebastian Sellares - The Blitz /`},{episodio:"579",titulo:"Resident / Episode 579 / Jun 11 2022",descripcion:`1 - Paul Lennar Ft Alium - Arisen Earlier /\xA0
2 - Federico Monachesi - Zagros /\xA0
3 - Revival Agents - Cosmic Spirals (Dmitry Molosh Remix) /\xA0
4 - NOIYSE PROJECT - onism /\xA0
5 - Cubicolor - Lose Your Senses /\xA0
6 - Lilla Stov Julie Anne Wolken - ID /\xA0
7 - Ramiro Drisdale - Aluvi\xF3n /\xA0
8 - Nacho Varela & Cruz Vittor - Respawn /\xA0
9 - Hakan Ozurun - Purple Void (Oliver & Tom Remix) /\xA0
10 - Hernan Cattaneo & Mercurio - A380 / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"54.9K",fecha:"2022-06-11",link:"https://mcdn.podbean.com/mf/download/ytxm93/579-HernanCattaneo-2022-06-11.mp3",tracklist:`Paul Lennar Ft Alium - Arisen Earlier /
Federico Monachesi - Zagros /
Revival Agents - Cosmic Spirals (Dmitry Molosh Remix) /
NOIYSE PROJECT - onism /
Cubicolor - Lose Your Senses /
Lilla Stov Julie Anne Wolken - ID /
Ramiro Drisdale - Aluvi\xF3n /
Nacho Varela & Cruz Vittor - Respawn /
Hakan Ozurun - Purple Void (Oliver & Tom Remix) /`},{episodio:"580",titulo:"Resident / Episode 580 / Jun 18 2022",descripcion:`1 - Atish & Vridian - Touch & Go /\xA0
2 - Apste - Mars /\xA0
3 - Sebastian Sellares - Elements of Nature /\xA0
4 - Yotto - The Valley /\xA0
5 - EANP - Armonyzer /\xA0
6 - Oliver & Tom - Nerea /\xA0
7 - Bongani - Cherry Blossom /\xA0
8 - James Organ - Alt Believe /\xA0
9 - Richie Blacker - Unified /\xA0
10 - R\xDCF\xDCS DU SOL - On My Knees (Cassian Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"52K",fecha:"2022-06-18",link:"https://mcdn.podbean.com/mf/download/ek7mmy/580-HernanCattaneo-2022-06-18.mp3",tracklist:`Atish & Vridian - Touch & Go /
Apste - Mars /
Sebastian Sellares - Elements of Nature /
Yotto - The Valley /
EANP - Armonyzer /
Oliver & Tom - Nerea /
Bongani - Cherry Blossom /
James Organ - Alt Believe /
Richie Blacker - Unified /`},{episodio:"581",titulo:"Resident / Episode 581 / Jun 25 2022",descripcion:`1 - Scippo - Whales (Fabri Lopez Remix) /\xA0
2 - Federico Monachesi - Emerald Lake /\xA0
3 - Valeria Petz - Meraki /\xA0
4 - Hicky & Kalo - Luminous Path /\xA0
5 - Nopi - Where to Go (Eric Lune Remix) /\xA0
6 - Steve Parry - 303 V (Framewerk Remix) /\xA0
7 - Nicolas Rada feat. Eleonora - Higher Space /\xA0
8 - Jochem Hamerling - Stretch Mark (Callecat Remix) /\xA0
9 - Antrim - Rescue /\xA0
10 - Burial - Old Tape (Nick Stoynoff's Summer Bootleg / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"55K",fecha:"2022-06-25",link:"https://mcdn.podbean.com/mf/download/ki48jh/581-HernanCattaneo-2022-06-25.mp3",tracklist:`Scippo - Whales (Fabri Lopez Remix) /
Federico Monachesi - Emerald Lake /
Valeria Petz - Meraki /
Hicky & Kalo - Luminous Path /
Nopi - Where to Go (Eric Lune Remix) /
Steve Parry - 303 V (Framewerk Remix) /
Nicolas Rada feat. Eleonora - Higher Space /
Jochem Hamerling - Stretch Mark (Callecat Remix) /
Antrim - Rescue /`},{episodio:"582",titulo:"Resident / Episode 582 / Jul 02 2022",descripcion:`1 - Hidden Empire - Comoja /\xA0
2 - Andy Arias - En un cumple /\xA0
3 - Undercatt - Arcade /\xA0
4 - Will DeKeizer - Sapphire /\xA0
5 - James Harcourt Signals /\xA0
6 - Blaush ft. Running Pine - Tauri (Hunter Game Remix) /\xA0
7 - Danny Bonnici, Dave Norris - Journey to Arion (Ruben Karapetyan Remix) /\xA0
8 - Brigado Crew & Ubbah /\xA0
9 - Andre Moret - Simply Way (Freedo Mosho Remix) /\xA0
10 - Antrim - Dawn In Port / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"51.9K",fecha:"2022-07-02",link:"https://mcdn.podbean.com/mf/download/kkpyjk/582-HernanCattaneo-2022-07-02.mp3",tracklist:`Hidden Empire - Comoja /
Andy Arias - En un cumple /
Undercatt - Arcade /
Will DeKeizer - Sapphire /
James Harcourt Signals /
Blaush ft. Running Pine - Tauri (Hunter Game Remix) /
Danny Bonnici, Dave Norris - Journey to Arion (Ruben Karapetyan Remix) /
Brigado Crew & Ubbah /
Andre Moret - Simply Way (Freedo Mosho Remix) /`},{episodio:"584",titulo:"Resident / Episode 584 / Jul 16 2022",descripcion:`1 - Ric Niels - Ikiga /\xA0
2 - Hassan & Rdo - Cruz Del Sur /\xA0
3 - Audion - Dem Howl (John Cosani & Federico Tschirch Edit) /\xA0
4 - Sebastian Sellares - Melomaniac /\xA0
5 - Amir Telem - Goloka (Ruben Karapetyan Remix) /\xA0
6 - Antrim - Gamble /\xA0
7 - John Cosani - Fun Colorz /\xA0
8 - Artche - Indigo /\xA0
9 - Verlk - No it Ain\u2019t /\xA0
10 - Agents Of Time - Interstellar Cowboy (Gui Boratto Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"59.8K",fecha:"2022-07-16",link:"https://mcdn.podbean.com/mf/download/yy6pve/584-HernanCattaneo-2022-07-16.mp3",tracklist:`Ric Niels - Ikiga /
Hassan & Rdo - Cruz Del Sur /
Audion - Dem Howl (John Cosani & Federico Tschirch Edit) /
Sebastian Sellares - Melomaniac /
Amir Telem - Goloka (Ruben Karapetyan Remix) /
Antrim - Gamble /
John Cosani - Fun Colorz /
Artche - Indigo /
Verlk - No it Ain\u2019t /`},{episodio:"585",titulo:"Resident / Episode 585 / Jul 23 2022",descripcion:`1 - Matiramic - Masai /\xA0
2 - Enamour - Ergot /\xA0
3 - C.Vogt - Made In Macao (Powel Remix) /\xA0
4 - Figueras - Crystal Clear /\xA0
5 - Dmitry Molosh - Resistance /\xA0
6 - Monolink - Otherside (Fideles Extended Mix) /\xA0
7 - Michael Hooker - Skreeching Corruptor (Dabeat , Kamilo Sanclemente remix) /\xA0
8 - Ric Niels & George Alhabel - Mentalism (EANP 'The Future' Remix) /\xA0
9 - Tiefstone & Ric Niels - Abby /\xA0
10 - BOg - Underwater (Hernan Cattaneo & Marcelo Vasami Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"59K",fecha:"2022-07-23",link:"https://mcdn.podbean.com/mf/download/i3tb9f/585-HernanCattaneo-2022-07-23.mp3",tracklist:`Matiramic - Masai /
Enamour - Ergot /
C.Vogt - Made In Macao (Powel Remix) /
Figueras - Crystal Clear /
Dmitry Molosh - Resistance /
Monolink - Otherside (Fideles Extended Mix) /
Michael Hooker - Skreeching Corruptor (Dabeat , Kamilo Sanclemente remix) /
Ric Niels & George Alhabel - Mentalism (EANP 'The Future' Remix) /
Tiefstone & Ric Niels - Abby /`},{episodio:"586",titulo:"Resident / Episode 586 / Jul 30 2022",descripcion:`1 - Royksopp - This Time, This Place (Henry Saiz Darktrip Remix) /\xA0
2 - Forty Cats - Forest Beast (Berni Turletti Remix) /\xA0
3 - Husa & Zeyada - Make it Hot (Miyagi Remix) /\xA0
4 - Joe Lewandowski - Naturale (Kasper Bj\xF8rke Transcendentale Version) /\xA0
5 - Deadset Mess - Hall (Re work wip mix) /\xA0
6 - mOat - Buggin' Out (Rodriguez Jr. Extended Remix) /\xA0
7 - Clyve - Eternal Waves /\xA0
8 - Slacker - When I was a Child(Micah's High Plains Listeners Bottleg /\xA0
9 - Satoshi Fumi - Prayer (Nick Warren & Nicolas Rada Remix) /\xA0
10 - MOL\xD8 - Bennebol (Powel Remix) /\xA0
11 - Humate - Love Stimulation (Framewerk Rewerk) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"58.3K",fecha:"2022-07-30",link:"https://mcdn.podbean.com/mf/download/wgcuty/586-HernanCattaneo-2022-07-30.mp3",tracklist:`Royksopp - This Time, This Place (Henry Saiz Darktrip Remix) /
Forty Cats - Forest Beast (Berni Turletti Remix) /
Husa & Zeyada - Make it Hot (Miyagi Remix) /
Joe Lewandowski - Naturale (Kasper Bj\xF8rke Transcendentale Version) /
Deadset Mess - Hall (Re work wip mix) /
mOat - Buggin' Out (Rodriguez Jr. Extended Remix) /
Clyve - Eternal Waves /
Slacker - When I was a Child(Micah's High Plains Listeners Bottleg /
Satoshi Fumi - Prayer (Nick Warren & Nicolas Rada Remix) /
MOL\xD8 - Bennebol (Powel Remix) /`},{episodio:"587",titulo:"Resident / Episode 587 / Aug 06 2022",descripcion:`1 - Billka - Reflections /\xA0
2 - TheArchitech, Juan Vasquez- CABALLITO /\xA0
3 - Propellar - Come Around (Diamond Dealer's Northern Exposure Remix) /\xA0
4 - Pico Bussoli - Deep Thoughts /\xA0
5 - Flowers And Sea Creatures, David Granha - Better Tomorrow (David Granha Remix) /\xA0
6 - Quivver - Traces /\xA0
7 - Royksopp - How The Flowers Grow ft. Pixx (Rodriguez Jr. Remix) /\xA0
8 - Joe Mattei & Danny Bonnici - Underpass (Jamie Stevens Remix) /\xA0
9 - Kasey Taylor Feat. Amega - Impressions (Doppel remix) /\xA0
10 - R\xDCF\xDCS DU SOL - On My Knees (Adriatique Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"57.7K",fecha:"2022-08-06",link:"https://mcdn.podbean.com/mf/download/6imec5/587-HernanCattaneo-2022-08-06.mp3",tracklist:`Billka - Reflections /
TheArchitech, Juan Vasquez- CABALLITO /
Propellar - Come Around (Diamond Dealer's Northern Exposure Remix) /
Pico Bussoli - Deep Thoughts /
Flowers And Sea Creatures, David Granha - Better Tomorrow (David Granha Remix) /
Quivver - Traces /
Royksopp - How The Flowers Grow ft. Pixx (Rodriguez Jr. Remix) /
Joe Mattei & Danny Bonnici - Underpass (Jamie Stevens Remix) /
Kasey Taylor Feat. Amega - Impressions (Doppel remix) /`},{episodio:"588",titulo:"Resident / Episode 588 / Aug 13 2022",descripcion:`1 - Ruh (SE) - A Bubbles Dream /\xA0
2 - Home - Edith Whiskers (EANP Unofficial Remix) /\xA0
3 - Mike Hiratzka - Falling back to you [Twilo 5AM mix] /\xA0
4 - Aurel den Bossa & Ias Ferndale - Sunday Afternoon (Matias Chilano Remix) /\xA0
5 - Howling - Lover (Jennifer Cardini & Damon Jee Remix) /\xA0
6 - Eric Lune - Embers (Ric Niels Remix) /\xA0
7 - UNDERWORLD - Juanita 2022 (PAUL (AR) unofficial remix) /\xA0
8 - DJ Linus - Treble in Paradise (Marcelo Vasami Remix) /\xA0
9 - Jamie Stevens & GMJ - Becoming /\xA0
10 - Radiohead - Pyramid Song (Fran Bux & Christopher Erre Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"56.9K",fecha:"2022-08-13",link:"https://mcdn.podbean.com/mf/download/qptdf5/588-HernanCattaneo-2022-08-13.mp3",tracklist:`Ruh (SE) - A Bubbles Dream /
Home - Edith Whiskers (EANP Unofficial Remix) /
Mike Hiratzka - Falling back to you [Twilo 5AM mix] /
Aurel den Bossa & Ias Ferndale - Sunday Afternoon (Matias Chilano Remix) /
Howling - Lover (Jennifer Cardini & Damon Jee Remix) /
Eric Lune - Embers (Ric Niels Remix) /
UNDERWORLD - Juanita 2022 (PAUL (AR) unofficial remix) /
DJ Linus - Treble in Paradise (Marcelo Vasami Remix) /
Jamie Stevens & GMJ - Becoming /`},{episodio:"589",titulo:"Resident / Episode 589 / Aug 20 2022",descripcion:`1 - Kabi (AR) - Self Reflection /\xA0
2 - Nahs & Nishan Lee ft. Sarah Chilanti - Two-faced /\xA0
3 - Hakan Ozurun Social Illusion Dimuth K Remix /\xA0
4 - Roc\xEDo Portillo, Valley ft Karim Sar Sar - Rise /\xA0
5 - Kevin Di Serna - Flight to Spoir /\xA0
6 - Sasha x Qrion - Dry and High /\xA0
7 - Avidus - Dawn (Edu Imbernon & Clemente \u2018Imbermind\u2019 Vision Mix) /\xA0
8 - Federico Fioretti (IT) - Hypnos /\xA0
9 - Antenant feat Kel - Cannot Play (Enzo Elia Rmx) /\xA0
10 - Audio Junkies - Librium Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"54.4K",fecha:"2022-08-20",link:"https://mcdn.podbean.com/mf/download/6fsd99/589-HernanCattaneo-2022-08-20.mp3",tracklist:`Kabi (AR) - Self Reflection /
Nahs & Nishan Lee ft. Sarah Chilanti - Two-faced /
Hakan Ozurun Social Illusion Dimuth K Remix /
Roc\xEDo Portillo, Valley ft Karim Sar Sar - Rise /
Kevin Di Serna - Flight to Spoir /
Sasha x Qrion - Dry and High /
Avidus - Dawn (Edu Imbernon & Clemente \u2018Imbermind\u2019 Vision Mix) /
Federico Fioretti (IT) - Hypnos /
Antenant feat Kel - Cannot Play (Enzo Elia Rmx) /`},{episodio:"590",titulo:"Resident / Episode 590 / Aug 27 2022",descripcion:`1 - Andre Moret - Ambit (Sebastian Sellares Remix)\xA0
2 - Nick Devon & Haffenfold - Spectra\xA0
3 - GMJ - Empty to Fill\xA0
4 - Matthias Meyer - Strangley Enough (Urmet K Remix)\xA0
5 - Colyn - KL427 \xA0
6 - Sant\xE9 & Re.You feat. Biishop - Road To Nowhere (Aether Remix)\xA0
7 - LAURENT GARNIER - Eiffel 11 - Fausto Messina\xA0
8 - Antrim Feat Juan Fandez - Hide And Seek\xA0
9 - DJ Linus - Treble In Paradies\xA0
10 - Hicky & Kalo - Outage Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"56.2K",fecha:"2022-08-27",link:"https://mcdn.podbean.com/mf/download/hscftt/590-HernanCattaneo-2022-08-27.mp3",tracklist:`Andre Moret - Ambit (Sebastian Sellares Remix)
Nick Devon & Haffenfold - Spectra
GMJ - Empty to Fill
Matthias Meyer - Strangley Enough (Urmet K Remix)
Colyn - KL427
Sant\xE9 & Re.You feat. Biishop - Road To Nowhere (Aether Remix)
LAURENT GARNIER - Eiffel 11 - Fausto Messina
Antrim Feat Juan Fandez - Hide And Seek
DJ Linus - Treble In Paradies`},{episodio:"591",titulo:"Resident / Episode 591 / Sep 03 2022",descripcion:`1 - Dublew, STEREO MUNK - Behind The Trees\xA0
2 - Dastan, Mustafa Ismaeel - Luft\xA0
3 - Alan Schultz - Marea\xA0
4 - Hector Cortes y Jaime Garza - The Space Between Us\xA0
5 - Fluida - Trailing Jade\xA0
6 - Steve Parry - Michelada (Freedo Mosho Remix)\xA0
7 - MATIRAMIC - Masai\xA0
8 - Innerphonic - Galactic Trip (Alto Astral Remix)\xA0
9 - Marino Canal - Inertia\xA0
10 - Aera feat. Aldebaran & Filippo Nardini - Alarms (Frankey & Sandrino Remix) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"57.5K",fecha:"2022-09-03",link:"https://mcdn.podbean.com/mf/download/gsmwd3/591-HernanCattaneo-2022-09-03.mp3",tracklist:`Dublew, STEREO MUNK - Behind The Trees
Dastan, Mustafa Ismaeel - Luft
Alan Schultz - Marea
Hector Cortes y Jaime Garza - The Space Between Us
Fluida - Trailing Jade
Steve Parry - Michelada (Freedo Mosho Remix)
MATIRAMIC - Masai
Innerphonic - Galactic Trip (Alto Astral Remix)
Marino Canal - Inertia`},{episodio:"592",titulo:"Resident / Episode 592 / Sep 10 2022",descripcion:`1 - Kovi - Affections /\xA0
2 - Armen Miran & Lost Desert - Don't Worry /\xA0
3 - EANP - Karim /\xA0
4 - Marcan Liav - Red Sanctuary (Emi Galvan Remix) /\xA0
5 - Christian Eyer & Joy Kitikonti - Falling For You (Tom Pooks Remix) /\xA0
6 - Perc - Allucination /\xA0
7 - Emok, Banel and Andrea Martini - Enlightment (Gai Barone Remix) /\xA0
8 - Moderat - Neon Rats & Numb Bell (Kevin Di Serna Club Mix) /\xA0
9 - Perfect Motion (Jody Barr Remix) /\xA0
10 - Yannis PK ft. Thom Yorke - No Surprises / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"56.5K",fecha:"2022-09-10",link:"https://mcdn.podbean.com/mf/download/xkbbs6/592-HernanCattaneo-2022-09-10.mp3",tracklist:`Kovi - Affections /
Armen Miran & Lost Desert - Don't Worry /
EANP - Karim /
Marcan Liav - Red Sanctuary (Emi Galvan Remix) /
Christian Eyer & Joy Kitikonti - Falling For You (Tom Pooks Remix) /
Perc - Allucination /
Emok, Banel and Andrea Martini - Enlightment (Gai Barone Remix) /
Moderat - Neon Rats & Numb Bell (Kevin Di Serna Club Mix) /
Perfect Motion (Jody Barr Remix) /`},{episodio:"594",titulo:"Resident / Episode 594 / Sep 24 2022",descripcion:`1 - RY X - Your \xA0Love (Frank Wiedemann Remix) /\xA0
2 - Gadi Mitrani - Awake /\xA0
3 - Jonathan Fratamico - Ecliptic /\xA0
4 - Eze Colombo, Sheism - Intimate Stories (Exe Cruz Remix) /\xA0
5 - Forty Cats - Forest Beast (Weird Sounding Dude Remix) /\xA0
6 - Andr\xE9s Moris - Manantial /\xA0
7 - Matter, Dowden - York /\xA0
8 - Mayro, Aaron Suiss - Ride /\xA0
9 - Noiyse Project - About to fly away /\xA0
10 - Paolo Mojo and Andy Padel - Kangiten 2022 / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"56.3K",fecha:"2022-09-24",link:"https://mcdn.podbean.com/mf/download/xii824/594-HernanCattaneo-2022-09-24.mp3",tracklist:`RY X - Your \xA0Love (Frank Wiedemann Remix) /
Gadi Mitrani - Awake /
Jonathan Fratamico - Ecliptic /
Eze Colombo, Sheism - Intimate Stories (Exe Cruz Remix) /
Forty Cats - Forest Beast (Weird Sounding Dude Remix) /
Andr\xE9s Moris - Manantial /
Matter, Dowden - York /
Mayro, Aaron Suiss - Ride /
Noiyse Project - About to fly away /`},{episodio:"595",titulo:"Resident / Episode 595 / Oct 01 2022",descripcion:`1 - Martin Dubiansky - Sting And Grey /\xA0
2 - Forty Cats - Mutualism /\xA0
3 - Andr\xE9s Moris - Owen's Dream /\xA0
4 - Agustin Ficarra - Reset Life /\xA0
5 - Joaco Salerno - Moonlight (Alex Efe Remix) /\xA0
6 - Nick Muir - Lux Aeterna /\xA0
7 - Kabi (AR) - Dual /\xA0
8 - Surfface - Modernity /\xA0
9 - Audioglider - Depth Perception (RIGOONI Remix) /\xA0
10 - North Atlantic - Lights out (Marcelo Vasami rmx) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"55.5K",fecha:"2022-10-01",link:"https://mcdn.podbean.com/mf/download/x5tx32/595-HernanCattaneo-2022-10-01.mp3",tracklist:`Martin Dubiansky - Sting And Grey /
Forty Cats - Mutualism /
Andr\xE9s Moris - Owen's Dream /
Agustin Ficarra - Reset Life /
Joaco Salerno - Moonlight (Alex Efe Remix) /
Nick Muir - Lux Aeterna /
Kabi (AR) - Dual /
Surfface - Modernity /
Audioglider - Depth Perception (RIGOONI Remix) /`},{episodio:"596",titulo:"Resident / Episode 596 / Oct 08 2022",descripcion:`1 - Dexter Crowe - Secret /\xA0
2 - Govinda - Everything Happens /\xA0
3 - Luciano Scheffer - Minguante /
4 - Federico Monachesi - Eternal Return (Diego Berrondo Remix) /\xA0
5 - Collew - Don't Push /\xA0
6 - Hunter Game - Beyond A-Dream /\xA0
7 - Jiminy Hop - Levera /\xA0
8 - Nikko.Z - Anatole (Sebastian Sellares Remix) /\xA0
9 - Dastan - The Mask (Weird Sounding Dude Remix) /
10 - Flow /Sasha - Xpander - Anthony Pappa Mashup / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"57.8K",fecha:"2022-10-08",link:"https://mcdn.podbean.com/mf/download/ch7iua/596-HernanCattaneo-2022-10-08.mp3",tracklist:`Dexter Crowe - Secret /
Govinda - Everything Happens /
Luciano Scheffer - Minguante /
Federico Monachesi - Eternal Return (Diego Berrondo Remix) /
Collew - Don't Push /
Hunter Game - Beyond A-Dream /
Jiminy Hop - Levera /
Nikko.Z - Anatole (Sebastian Sellares Remix) /
Dastan - The Mask (Weird Sounding Dude Remix) /`},{episodio:"597",titulo:"Resident / Episode 597 / Oct 15 2022",descripcion:`1 - Andre Moret - Ambit (Sebastian Sellares Remix) /\xA0
2 - AxeLara - Aglaia (Alex O'Rion Remix) /\xA0
3 - Santiago Luna - Out Of My Man (Indigo Man Remix) /\xA0
4 - Noiyse Project - Memories of the mountain city /\xA0
5 - Matthias Meyer \xA0-Strangely Enough (Guy Mantzur & Tamir Regev Remix) /\xA0
6 - James Beetham - Silicon (Golan Zocher Remix) /\xA0
7 - Will DeKeizer - Fools Gold /\xA0
8 - Anton Tumas - The Sky was Pink (Danny Bonnici remix) /\xA0
9 - Billka - Clouds /\xA0
10 - HK (Four Tet) - Only Human (Verlk Sunrise Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"59.7K",fecha:"2022-10-15",link:"https://mcdn.podbean.com/mf/download/43p97a/597-HernanCattaneo-2022-10-15.mp3",tracklist:`Andre Moret - Ambit (Sebastian Sellares Remix) /
AxeLara - Aglaia (Alex O'Rion Remix) /
Santiago Luna - Out Of My Man (Indigo Man Remix) /
Noiyse Project - Memories of the mountain city /
Matthias Meyer \xA0-Strangely Enough (Guy Mantzur & Tamir Regev Remix) /
James Beetham - Silicon (Golan Zocher Remix) /
Will DeKeizer - Fools Gold /
Anton Tumas - The Sky was Pink (Danny Bonnici remix) /
Billka - Clouds /`},{episodio:"598",titulo:"Resident / Episode 598 / Oct 22 2022",descripcion:`1 - Zone + - Doesnt matter /\xA0
2 - Subandrio - Thought In A Minute /\xA0
3 - Dublew & STEREO MUNK - Anakim (Sebastian Sellares Remix) /\xA0
4 - Mike Isai - Tunnel /\xA0
5 - TheArchitech & DABARNO - Paradise is the Sound /\xA0
6 - Gadi Mitrani - Robot with a Heart /\xA0
7 - Luis Damora - A Better Way (Forty Cats Remix) /\xA0
8 - Agustin Pietrocola - Sauvage (Fabri Lopez Remix) /\xA0
9 - Santi Cebrero - Requiem for a Dream /\xA0
10 - Sasha - Burnt Letters (Mastered) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"68.1K",fecha:"2022-10-22",link:"https://mcdn.podbean.com/mf/download/df6fix/598-HernanCattaneo-2022-10-22.mp3",tracklist:`Zone + - Doesnt matter /
Subandrio - Thought In A Minute /
Dublew & STEREO MUNK - Anakim (Sebastian Sellares Remix) /
Mike Isai - Tunnel /
TheArchitech & DABARNO - Paradise is the Sound /
Gadi Mitrani - Robot with a Heart /
Luis Damora - A Better Way (Forty Cats Remix) /
Agustin Pietrocola - Sauvage (Fabri Lopez Remix) /
Santi Cebrero - Requiem for a Dream /`},{episodio:"599",titulo:"Resident / Episode 599 / Oct 29 2022",descripcion:`Resident / Episode 599 / Oct 29 2022 1 - NHAR - Nocturne Oc\xE9anique /\xA0
2 - No\u0304pi - Mistake Forest /\xA0
3 - Facundo Mohrr, Maxi Degrassi - Be Mine /\xA0
4 - Julio Largente - Black Knight /\xA0
5 - Hassan Maroofi - Zoran /\xA0
6 - Sam Hopgood - The Fall (Nila Dark Remix) /\xA0
7 - Martin Dubiansky - Where Are You /\xA0
8 - Analog Jungs - Arun /\xA0
9 - Noiyse Project - Kalopsia /\xA0
10 - Sasha - Exploding Sun / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"51.3K",fecha:"2022-10-29",link:"https://mcdn.podbean.com/mf/download/hd2a9b/599-HernanCattaneo-2022-10-29.mp3",tracklist:`Resident / Episode 599 / Oct 29 2022 1 - NHAR - Nocturne Oc\xE9anique /
No\u0304pi - Mistake Forest /
Facundo Mohrr, Maxi Degrassi - Be Mine /
Julio Largente - Black Knight /
Hassan Maroofi - Zoran /
Sam Hopgood - The Fall (Nila Dark Remix) /
Martin Dubiansky - Where Are You /
Analog Jungs - Arun /
Noiyse Project - Kalopsia /`},{episodio:"600",titulo:"Resident / Episode 600 / Nov 05 2022",descripcion:"Recorded Live at Woodstock69 - July 2022 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"47",descargas:"94.3K",fecha:"2022-11-05",link:"https://mcdn.podbean.com/mf/download/x838qq/600-HernanCattaneo-2022-11-05.mp3"},{episodio:"601",titulo:"Resident / Episode 601 / Nov 12 2022",descripcion:`1 - Tim Green - Tears /\xA0
2 - East Cafe - Luna /\xA0
3 - Lio Q - Watanable /\xA0
4 - Hector Cortes \xA0& M - HEYY /\xA0
5 - DJ Zombi - 604 Diary (Hobin Rude Remix) /\xA0
6 - Shimai Valen \xA0- Carlos Gatto /\xA0
7 - David Podhel - In Time /\xA0
8 - Charlie Pec - Paradigm /\xA0
9 - Quivver - Tuliminate /\xA0
10 - WhoMadeWho & Rampa - Everyday (Jennifer Cardini Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"49.8K",fecha:"2022-11-12",link:"https://mcdn.podbean.com/mf/download/n5ajvr/601-HernanCattaneo-2022-11-12.mp3",tracklist:`Tim Green - Tears /
East Cafe - Luna /
Lio Q - Watanable /
Hector Cortes \xA0& M - HEYY /
DJ Zombi - 604 Diary (Hobin Rude Remix) /
Shimai Valen \xA0- Carlos Gatto /
David Podhel - In Time /
Charlie Pec - Paradigm /
Quivver - Tuliminate /`},{episodio:"602",titulo:"Resident / Episode 602 / Nov 19 2022",descripcion:`1 - Sebastian Busto - Sanctuary (Andres Moris Remix) /\xA0
2 - Gabo Martin - Dislocator /\xA0
3 - Francesco Pico - The B BoB /\xA0
4 - Benja Molina - Centaury /\xA0
5 - Dmitry Molosh - Butterfly /\xA0
6 - Aether - Magician /\xA0
7 - Kostya Outta & Bodai - Imagine (Dmitry Molosh Remix) /\xA0
8 - Sam Hopgood - Emergence (HobinRudeRemix) /\xA0
9 - Moss (AR) - Reflect (Freedo Mosho Remix) /\xA0
10 - Final Request - A Journey Through the Heart / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"49.8K",fecha:"2022-11-19",link:"https://mcdn.podbean.com/mf/download/5gtw5z/602-HernanCattaneo-2022-11-19.mp3",tracklist:`Sebastian Busto - Sanctuary (Andres Moris Remix) /
Gabo Martin - Dislocator /
Francesco Pico - The B BoB /
Benja Molina - Centaury /
Dmitry Molosh - Butterfly /
Aether - Magician /
Kostya Outta & Bodai - Imagine (Dmitry Molosh Remix) /
Sam Hopgood - Emergence (HobinRudeRemix) /
Moss (AR) - Reflect (Freedo Mosho Remix) /`},{episodio:"604",titulo:"Resident / Episode 604 / Dec 03 2022",descripcion:`1 - Will DeKeizer - Space Dream /\xA0
2 - Tomek - Sky Castle /\xA0
3 - \xA0Bynomic - Little Girl (Berni Turletti Remix) /\xA0
4 - Sinova - Something Worth Finding /\xA0
5 - AxeLara - Aglaia (Alex O'Rion Remix) /\xA0
6 - Mike Griego - Ala Delta /\xA0
7 - Rokazer - Hope (Tim Penner Remix) /\xA0
8 - Kebin van Reeken - Eternity (Aman Anand 'Deep Space' Remix) /\xA0
9 - Cream (PL) - Horizons /\xA0
10 - James Holden - I've put out the Light (East Cafe Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"52K",fecha:"2022-12-03",link:"https://mcdn.podbean.com/mf/download/sjrird/604-HernanCattaneo-2022-12-03.mp3",tracklist:`Will DeKeizer - Space Dream /
Tomek - Sky Castle /
Bynomic - Little Girl (Berni Turletti Remix) /
Sinova - Something Worth Finding /
AxeLara - Aglaia (Alex O'Rion Remix) /
Mike Griego - Ala Delta /
Rokazer - Hope (Tim Penner Remix) /
Kebin van Reeken - Eternity (Aman Anand 'Deep Space' Remix) /
Cream (PL) - Horizons /`},{episodio:"605",titulo:"Resident / Episode 605 / Dec 10 2022",descripcion:`1 - Darren Bray - When You Go /\xA0
2 - Erdi Irmak Feat. Amega - I Can Find Maty Owl /\xA0
3 - Antrim - Suru /\xA0
4 - Ichasan - Luisa (Nick Warren & Nicolas Rada Remix) /\xA0
5 - Kostya Outta & Bodai - Imagine /\xA0
6 - Dabeat - Expansion /\xA0
7 - Paul Angelo & Don Argento - Harpe /\xA0
8 - Benja Molina - Legacy for Alan /\xA0
9 - Felipe Novaes - Layers Of Meaning /\xA0
10 - Amber - Anyway (Framewerk Breaks Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"48.7K",fecha:"2022-12-10",link:"https://mcdn.podbean.com/mf/download/f76i3g/605-HernanCattaneo-2022-12-10.mp3",tracklist:`Darren Bray - When You Go /
Erdi Irmak Feat. Amega - I Can Find Maty Owl /
Antrim - Suru /
Ichasan - Luisa (Nick Warren & Nicolas Rada Remix) /
Kostya Outta & Bodai - Imagine /
Dabeat - Expansion /
Paul Angelo & Don Argento - Harpe /
Benja Molina - Legacy for Alan /
Felipe Novaes - Layers Of Meaning /`},{episodio:"606",titulo:"Resident / Episode 606 / Dec 17 2022",descripcion:`1 - Feist - The Water (Bruno Andrada Unofficial Remix) /\xA0
2 - Awka, Baya, LENN V - White Sand (Extended Mix) /\xA0
3 - Billie Eilish - Bury A Friend (Rodrigo Lapena Edit) /\xA0
4 - Sebastian Busto - Sanctuary (Andres Moris Remix) /\xA0
5 - Franco Camiolo - Over the Time /\xA0
6 - Jonathan Fratamico - Thriving /\xA0
7 - Tonaco - Holosteric /\xA0
8 - M83 - Solitude (DOMA Unofficial Remix) /\xA0
9 - PAUL (AR) & EANP - Insane /\xA0
10 - Perry Farrell's Satellite Party 'Milky Avenue' (Sasha Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"52.5K",fecha:"2022-12-17",link:"https://mcdn.podbean.com/mf/download/juew9u/606-HernanCattaneo-2022-12-17.mp3",tracklist:`Feist - The Water (Bruno Andrada Unofficial Remix) /
Awka, Baya, LENN V - White Sand (Extended Mix) /
Billie Eilish - Bury A Friend (Rodrigo Lapena Edit) /
Sebastian Busto - Sanctuary (Andres Moris Remix) /
Franco Camiolo - Over the Time /
Jonathan Fratamico - Thriving /
Tonaco - Holosteric /
M83 - Solitude (DOMA Unofficial Remix) /
PAUL (AR) & EANP - Insane /`},{episodio:"607",titulo:"Resident / Episode 607 / Dec 24 2022",descripcion:"Recorded Live at Mendoza - December 2022 - Part 1 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"24",descargas:"51.2K",fecha:"2022-12-24",link:"https://mcdn.podbean.com/mf/download/zefsww/607-HernanCattaneo-2022-12-24.mp3"},{episodio:"608",titulo:"Resident / Episode 608 / Dec 31 2022",descripcion:"Recorded Live at Mendoza - December 2022 - Part 2 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"20",descargas:"50.7K",fecha:"2022-12-31",link:"https://mcdn.podbean.com/mf/download/jscr3n/608-HernanCattaneo-2022-12-31.mp3"},{episodio:"609",titulo:"Resident / Episode 609 / Jan 07 2023",descripcion:"Recorded Live at Mendoza - December 2022 - Part 3 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"26",descargas:"51.2K",fecha:"2023-01-07",link:"https://mcdn.podbean.com/mf/download/m6zngh/609-HernanCattaneo-2023-01-07.mp3"},{episodio:"610",titulo:"Resident / Episode 610 / Jan 14 2023",descripcion:"Recorded Live at Mendoza - December 2022 - Part 4 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"28",descargas:"52.7K",fecha:"2023-01-14",link:"https://mcdn.podbean.com/mf/download/3m8psm/610-HernanCattaneo-2023-01-14.mp3"},{episodio:"611",titulo:"Resident / Episode 611 / Jan 21 2023",descripcion:`1 - Mariano Mellino - Mr. Hex (Vocal Mix) /\xA0
2 - Ruben Karapetyan - Carpe Diem /\xA0
3 - Lio Q, Sofi Casta\xF1on - Terra (Hobin Rude Remix) /\xA0
4 - Kabi (AR) & Ric Niels - Kimica /\xA0
5 - Meeting Molly - Elementary (NOIYSE PROJECT Remix) /\xA0
6 - Armen Miran & Pambouk - The Senses /\xA0
7 - EarthLife - Senza Fine (Simply City Balance Edit) /\xA0
8 - Ivan Aliaga - Animatica /\xA0
9 - Martin Eyerer, Craig Walker - Hollow Love (Jiggler Remix) /\xA0
10 - Marsh - Reminiscent / Download episode on MP3 (Right click, save link as...)`,likes:"23",descargas:"52.9K",fecha:"2023-01-21",link:"https://mcdn.podbean.com/mf/download/yjxzqk/611-HernanCattaneo-2023-01-21.mp3",tracklist:`Mariano Mellino - Mr. Hex (Vocal Mix) /
Ruben Karapetyan - Carpe Diem /
Lio Q, Sofi Casta\xF1on - Terra (Hobin Rude Remix) /
Kabi (AR) & Ric Niels - Kimica /
Meeting Molly - Elementary (NOIYSE PROJECT Remix) /
Armen Miran & Pambouk - The Senses /
EarthLife - Senza Fine (Simply City Balance Edit) /
Ivan Aliaga - Animatica /
Martin Eyerer, Craig Walker - Hollow Love (Jiggler Remix) /`},{episodio:"612",titulo:"Resident / Episode 612 / Jan 28 2023",descripcion:`1 - Oliver Harper - Strawberry Thief /\xA0
2 - Alan Cerra - Opposite Ways /\xA0
3 - Rocio Laurenza - Toxicless /\xA0
4 \xA0 Fabian Palacios - Reborn (Dowden Remix) /\xA0
5 - Soulfinder - Frankie (Anthony Pappa & Jamie Stevens Remix) /\xA0
6 - Kamilo Sanclemente, Andr\xE9 Moret - Dome in the Chaos /\xA0
7 - Figueras - Summit (Not Demure Remix) /\xA0
8 - Hobin Rude - 33rd /\xA0
9 - Paul Thomas - Jumbo /\xA0
10 - Joplyn - Remind Me (Booka Shade Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"31",descargas:"55.5K",fecha:"2023-01-28",link:"https://mcdn.podbean.com/mf/download/q775nv/612-HernanCattaneo-2023-01-28.mp3",tracklist:`Oliver Harper - Strawberry Thief /
Alan Cerra - Opposite Ways /
Rocio Laurenza - Toxicless /
4 \xA0 Fabian Palacios - Reborn (Dowden Remix) /
Soulfinder - Frankie (Anthony Pappa & Jamie Stevens Remix) /
Kamilo Sanclemente, Andr\xE9 Moret - Dome in the Chaos /
Figueras - Summit (Not Demure Remix) /
Hobin Rude - 33rd /
Paul Thomas - Jumbo /`},{episodio:"614",titulo:"Resident / Episode 614 / Feb 11 2023",descripcion:`1 - El Mundo & Zazou - In The Dream Time /\xA0
2 - Mistol Team - On\xEDrico /\xA0
3 - Alan Cerra - Orbital /\xA0
4 - GMJ - Stage Flight (Jiminy Hop Remix) /\xA0
5 - Julian Nates - Maat Mons /\xA0
6 - Armen Miran & Pambouk - The Senses /\xA0
7 - AKIVA - The Wait (Hernan Cattaneo & Martin Garcia Remix) /\xA0
8 - Simos Tagias - Archaios /\xA0
9 - Dowden, Forty Cats - Airtime (Alan Cerra Remix) /\xA0
10 - HAUMS - Losing Myself feat. Eleonora (Madraas Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"53.8K",fecha:"2023-02-11",link:"https://mcdn.podbean.com/mf/download/p2aiqy/614-HernanCattaneo-2023-02-11.mp3",tracklist:`El Mundo & Zazou - In The Dream Time /
Mistol Team - On\xEDrico /
Alan Cerra - Orbital /
GMJ - Stage Flight (Jiminy Hop Remix) /
Julian Nates - Maat Mons /
Armen Miran & Pambouk - The Senses /
AKIVA - The Wait (Hernan Cattaneo & Martin Garcia Remix) /
Simos Tagias - Archaios /
Dowden, Forty Cats - Airtime (Alan Cerra Remix) /`},{episodio:"615",titulo:"Resident / Episode 615 / Feb 18 2023",descripcion:`1 - Bob Marley - Natural Mystic (Awka Re-interpretation) /\xA0
2 - Roy Rosenfeld - Kali (Keinemusik) /\xA0
3 - Hassan Maroofi, David Charpentier - Reminisce /\xA0
4 - NIC\xD8 - Lost In You /\xA0
5 - Soulfeed - Peak Story (Simply City Remix) /\xA0
6 - Armen Miran & Pambouk - AwarE /\xA0
7 - Dmitry Molosh - Butterfly (Hicky & Kalo Remix) /\xA0
8 - Kamilo Sanclemente - Moving thoughts /\xA0
9 - Messier - Kevlar (Hernan Cattaneo & Marcelo Vasami Remix) /\xA0
10 - Vandelor - Happy Man / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"62.3K",fecha:"2023-02-18",link:"https://mcdn.podbean.com/mf/download/yp2ket/615-HernanCattaneo-2023-02-18.mp3",tracklist:`Bob Marley - Natural Mystic (Awka Re-interpretation) /
Roy Rosenfeld - Kali (Keinemusik) /
Hassan Maroofi, David Charpentier - Reminisce /
NIC\xD8 - Lost In You /
Soulfeed - Peak Story (Simply City Remix) /
Armen Miran & Pambouk - AwarE /
Dmitry Molosh - Butterfly (Hicky & Kalo Remix) /
Kamilo Sanclemente - Moving thoughts /
Messier - Kevlar (Hernan Cattaneo & Marcelo Vasami Remix) /`},{episodio:"616",titulo:"Resident / Episode 616 / Feb 25 2023",descripcion:`1 - Chicola - Every Pain Got A Name /\xA0
2 - Andre Gazolla - Never Say Never (Aman Anand Remix) /\xA0
3 - Cadillac Express, The Cobb - Siberia /\xA0
4 - Juan Sapia - Magical Mountains /\xA0
5 - Alan Cerra - Opposite Ways /\xA0
6 - Fabian Palacios - reborn /\xA0
7 - Oliver Harper - Strawberry Thief /\xA0
8 - Kamilo Sanclemente - Human evolution /\xA0
9 - Apste - Distorts /\xA0
10 - Simos Tagias - Missile / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"64K",fecha:"2023-02-25",link:"https://mcdn.podbean.com/mf/download/ue2ja4/616-HernanCattaneo-2023-02-25.mp3",tracklist:`Chicola - Every Pain Got A Name /
Andre Gazolla - Never Say Never (Aman Anand Remix) /
Cadillac Express, The Cobb - Siberia /
Juan Sapia - Magical Mountains /
Alan Cerra - Opposite Ways /
Fabian Palacios - reborn /
Oliver Harper - Strawberry Thief /
Kamilo Sanclemente - Human evolution /
Apste - Distorts /`},{episodio:"617",titulo:"Resident / Episode 617 / Mar 04 2023",descripcion:`1 - Pablo Asturizaga, DKEYMUSIK - Lighter Than Air (Maxi Degrassi Remix) /\xA0
2 - Panayiotis Tassis - Emotions & Feelings (ft. Anna Loud) /\xA0
3 - Rockka, Gru V - Closer (Fabri Lopez Remix) /\xA0
4 - EANP - Forget (Dub Mix) /\xA0
5 - Francesco Pico feat. PvHL - Catch The Moment /\xA0
6 - Innerphonic - Singular Planete (Yudi Watanabe Remix) /\xA0
7 - \xA0Niceshot - Temporal /\xA0
8 - Cheric - Stories /\xA0
9 - Simos Tagias - Archaios
10 - Federico Monachesi - Emerald Lake \xA0(Forty Cats Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"64.3K",fecha:"2023-03-04",link:"https://mcdn.podbean.com/mf/download/9mv72y/617-HernanCattaneo-2023-03-04.mp3",tracklist:`Pablo Asturizaga, DKEYMUSIK - Lighter Than Air (Maxi Degrassi Remix) /
Panayiotis Tassis - Emotions & Feelings (ft. Anna Loud) /
Rockka, Gru V - Closer (Fabri Lopez Remix) /
EANP - Forget (Dub Mix) /
Francesco Pico feat. PvHL - Catch The Moment /
Innerphonic - Singular Planete (Yudi Watanabe Remix) /
Niceshot - Temporal /
Cheric - Stories /
Simos Tagias - Archaios`},{episodio:"618",titulo:"Resident / Episode 618 / Mar 11 2023",descripcion:`1 - Husa & Zeyada - Piece of Mind (Artphorm Remix) /\xA0
2 - Schmidt (BR) & Vandelor - Adventures of an Untold Story /\xA0
3 - Kasey Taylor & Anthea (AUS) - Nightlight Blossom (The Oddness Remix) /\xA0
4 - Reset Robot - Duplicate /\xA0
5 - Nick Varon - Tiny Garden /\xA0
6 - Antrim - Soul Magic /\xA0
7 - Gavin Rochford - Lustre /\xA0
8 - Hobin Rude & Sinan Arsan - Counting Backwards /\xA0
9 - Mike Koglin - The Silence (GMJ & Matter Remix) /\xA0
10 - KAZKO - Passenger / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"63.5K",fecha:"2023-03-11",link:"https://mcdn.podbean.com/mf/download/2yyvav/618-HernanCattaneo-2023-03-11.mp3",tracklist:`Husa & Zeyada - Piece of Mind (Artphorm Remix) /
Schmidt (BR) & Vandelor - Adventures of an Untold Story /
Kasey Taylor & Anthea (AUS) - Nightlight Blossom (The Oddness Remix) /
Reset Robot - Duplicate /
Nick Varon - Tiny Garden /
Antrim - Soul Magic /
Gavin Rochford - Lustre /
Hobin Rude & Sinan Arsan - Counting Backwards /
Mike Koglin - The Silence (GMJ & Matter Remix) /`},{episodio:"619",titulo:"Resident / Episode 619 / Mar 18 2023",descripcion:`1 - Boundaries (Bodaishin Remix) /\xA0
2 - Chaim - Now Not Tomorrow /\xA0
3 - Uccelli - Birds in your cloud /\xA0
4 - Gorje Hewek, Dulus - Earth /\xA0
5 - Zalvador - Elevation /\xA0
6 - Innerphonic - Singular Planete (Yudi Watanabe Remix) /\xA0
7 - Lucas Perdomo - High Hopes /\xA0
8 - Eichenbaum - Ethereal Commuter (Tripswitch Remix) /\xA0
9 - Forerunners & Mike Isai - Arrakis (Partenaire RMX) /\xA0
10 - BOg - Breathe (Notre Dame Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"63K",fecha:"2023-03-18",link:"https://mcdn.podbean.com/mf/download/9cbvux/619-HernanCattaneo-2023-03-18.mp3",tracklist:`Boundaries (Bodaishin Remix) /
Chaim - Now Not Tomorrow /
Uccelli - Birds in your cloud /
Gorje Hewek, Dulus - Earth /
Zalvador - Elevation /
Innerphonic - Singular Planete (Yudi Watanabe Remix) /
Lucas Perdomo - High Hopes /
Eichenbaum - Ethereal Commuter (Tripswitch Remix) /
Forerunners & Mike Isai - Arrakis (Partenaire RMX) /`},{episodio:"620",titulo:"Resident / Episode 620 / Mar 25 2023",descripcion:`1 - Dino Lenny - I've Learned That (Jonathan Kaspar Remix) /\xA0
2 - Tash Sultana - Blackbird (Franco Camiolo Edit) /\xA0
3 - Partenaire - Westbound /\xA0
4 - Weird Sounding Dude - Step Up /\xA0
5 - Chris Cargo - Falcons Maze (Gorkiz & Nobilis Remix) /\xA0
6 - EANP - Rubberband /\xA0
7 - PAUL (AR) - Spektra /\xA0
8 - Fran Bux Remix /\xA0
9 - Agustin Pengov - Rain /\xA0
10 - Vandelor, Schmidt (BR) - Together We Rise / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"36",descargas:"54.1K",fecha:"2023-03-25",link:"https://mcdn.podbean.com/mf/download/n34vgz/620-HernanCattaneo-2023-03-25.mp3",tracklist:`Dino Lenny - I've Learned That (Jonathan Kaspar Remix) /
Tash Sultana - Blackbird (Franco Camiolo Edit) /
Partenaire - Westbound /
Weird Sounding Dude - Step Up /
Chris Cargo - Falcons Maze (Gorkiz & Nobilis Remix) /
EANP - Rubberband /
PAUL (AR) - Spektra /
Fran Bux Remix /
Agustin Pengov - Rain /`},{episodio:"621",titulo:"Resident / Episode 621 / Apr 01 2023",descripcion:`1 - Dowden - Agora /\xA0
2 - EANP - Forget (Dub Mix) /\xA0
3 - Panayiotis Tassis - Synesthesia /\xA0
4 - Beswerda - Concord /\xA0
5 - m83 - Solitude (Fran Bux Edit) /\xA0
6 - Kraftwerk - Tour De France (Diego Berrondo Unofficial Remix) /\xA0
7 - Dowden - Capricorn /\xA0
8 - Hardt Antoine - All We See (Freedom Mix) /\xA0
9 - STEREO MUNK, Echo Daft, Dublew -- Embers /\xA0
10 - Doctors on Decks - Now (ZAC Remix) / Download episode on MP3 (Right click, save link as...)`,likes:"28",descargas:"63.4K",fecha:"2023-04-01",link:"https://mcdn.podbean.com/mf/download/k99yti/621-HernanCattaneo-2023-04-01.mp3",tracklist:`Dowden - Agora /
EANP - Forget (Dub Mix) /
Panayiotis Tassis - Synesthesia /
Beswerda - Concord /
m83 - Solitude (Fran Bux Edit) /
Kraftwerk - Tour De France (Diego Berrondo Unofficial Remix) /
Dowden - Capricorn /
Hardt Antoine - All We See (Freedom Mix) /
STEREO MUNK, Echo Daft, Dublew -- Embers /`},{episodio:"622",titulo:"Resident / Episode 622 / Apr 08 2023",descripcion:`1 - Tim Points - Derailleur /\xA0
2 - Weird Sounding Dude - Edge Of The Ocean /\xA0
3 - Arnold T., Alain Pauwels - Cosmic Spices (Juan Ibanez Remix) /\xA0
4 - Arnold T., Alain Pauwels -Cosmic Spices (Hobin Rude Remix) /\xA0
5 - Hyunji-A - The Last Drop of Sun /\xA0
6 - Luciano Elvira- Law of Gravity /\xA0
7 - Poli Siufi - The Moon /\xA0
8 - Kevin Di Serna- Faro (Jonathan Kaspar Remix) /\xA0
9 - RYAN (CU) - MoonBeams /\xA0
10 - Eric Lune & Juan Sapia - Himalaya / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"24",descargas:"62.7K",fecha:"2023-04-08",link:"https://mcdn.podbean.com/mf/download/7a7th8/622-HernanCattaneo-2023-04-08.mp3",tracklist:`Tim Points - Derailleur /
Weird Sounding Dude - Edge Of The Ocean /
Arnold T., Alain Pauwels - Cosmic Spices (Juan Ibanez Remix) /
Arnold T., Alain Pauwels -Cosmic Spices (Hobin Rude Remix) /
Hyunji-A - The Last Drop of Sun /
Luciano Elvira- Law of Gravity /
Poli Siufi - The Moon /
Kevin Di Serna- Faro (Jonathan Kaspar Remix) /
RYAN (CU) - MoonBeams /`},{episodio:"625",titulo:"Resident / Episode 625 / Apr 29 2023",descripcion:`1 - Tokumori - Starry Sky /\xA0
2 - Fonarev & Second Sine - Love Is Wise Hatred Is Foolish ( Luis Damora Remix) /\xA0
3 - Hot Since 82 - Sinnerman (Henrik Schwarz Dub) /\xA0
4 - ZAC - Savage /\xA0
5 - Romain Garcia - Windblows /\xA0
6 - Panayiotis Tassis - Emotions & Feelings (ft. Anna Loud) /\xA0
7 - Echomen - Truth (Freedo Mosho Edit) /\xA0
8 - Aquilia - Dreamstate (Freedo Mosho's LSG Edit) /\xA0
9 - BBE - Seven Days and One Week (Framewerk ) /\xA0
10 - Everything But The Girl - Nothing Left To Lose (Four Tet Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"60.9K",fecha:"2023-04-29",link:"https://mcdn.podbean.com/mf/download/n2ic3m/625-HernanCattaneo-2023-04-29.mp3",tracklist:`Tokumori - Starry Sky /
Fonarev & Second Sine - Love Is Wise Hatred Is Foolish ( Luis Damora Remix) /
Hot Since 82 - Sinnerman (Henrik Schwarz Dub) /
ZAC - Savage /
Romain Garcia - Windblows /
Panayiotis Tassis - Emotions & Feelings (ft. Anna Loud) /
Echomen - Truth (Freedo Mosho Edit) /
Aquilia - Dreamstate (Freedo Mosho's LSG Edit) /
BBE - Seven Days and One Week (Framewerk ) /`},{episodio:"626",titulo:"Resident / Episode 626 / May 06 2023",descripcion:`1 - Agnes Obel - Familiar (Sebastian Sellares Edit) /\xA0
2 - Daesmith & SOL7 - Grandma's Wisdom (Peter Makto Flying Grandma Remix) /\xA0
3 - Barych & Vadim Manko - Hernan /\xA0
4 - Rudra - Praanik (Diego Berrondo Remix) /\xA0
5 - Andy Arias - The Phrygiano /\xA0
6 - PAAX (Tulum) - Deep into the mountain /\xA0
7 - Erich Von Kollar - Vertical Maze /\xA0
8 - Hobin Rude, Nicolas Benedetti - Stand Up /\xA0
9 - Chris Cargo - Wide Eyed (Subandrio Remix) /\xA0
10 - Kamilo Sanclemente - Elixir (GMJ Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"63.2K",fecha:"2023-05-06",link:"https://mcdn.podbean.com/mf/download/fyd4ic/626-HernanCattaneo-2023-05-06.mp3",tracklist:`Agnes Obel - Familiar (Sebastian Sellares Edit) /
Daesmith & SOL7 - Grandma's Wisdom (Peter Makto Flying Grandma Remix) /
Barych & Vadim Manko - Hernan /
Rudra - Praanik (Diego Berrondo Remix) /
Andy Arias - The Phrygiano /
PAAX (Tulum) - Deep into the mountain /
Erich Von Kollar - Vertical Maze /
Hobin Rude, Nicolas Benedetti - Stand Up /
Chris Cargo - Wide Eyed (Subandrio Remix) /`},{episodio:"627",titulo:"Resident / Episode 627 / May 13 2023",descripcion:`1 - Molac - The Golden Dawn /\xA0
2 - Fernando Olaya - Land of Confusion (Luciano Scheffer Remix) /\xA0
3 - Ric Niels, Dowden - Spiral (GMJ Remix) /\xA0
4 - Luis Damora - Sedna /\xA0
5 - Amir Talem - Strong (Ruben Karapetyan Remix) /\xA0
6 - Sudhaus & The Wash - Spectron (DJ Ruby Remix) /\xA0
7 - Shayan Pasha - Garden of Hope /\xA0
8 - FRE\xCC\u02C6O\xCC\u201E - Hjarta (Paul Thomas Remix) /\xA0
9 - Hobin Rude & Nicolas Benedetti - Stand Up (Teleport-X Extended Remix) /\xA0
10 - Adana Twins, Darlyn Vlys - Starwave / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"64K",fecha:"2023-05-13",link:"https://mcdn.podbean.com/mf/download/m65ppx/627-HernanCattaneo-2023-05-13.mp3",tracklist:`Molac - The Golden Dawn /
Fernando Olaya - Land of Confusion (Luciano Scheffer Remix) /
Ric Niels, Dowden - Spiral (GMJ Remix) /
Luis Damora - Sedna /
Amir Talem - Strong (Ruben Karapetyan Remix) /
Sudhaus & The Wash - Spectron (DJ Ruby Remix) /
Shayan Pasha - Garden of Hope /
FRE\xCC\u02C6O\xCC\u201E - Hjarta (Paul Thomas Remix) /
Hobin Rude & Nicolas Benedetti - Stand Up (Teleport-X Extended Remix) /`},{episodio:"628",titulo:"Resident / Episode 628 / May 20 2023",descripcion:`1 - Paula OS - Rival (John Cosani Remix) /\xA0
2 - No\u0304pi - Micro Clouds (Datskie Remix) /\xA0
3 - Rudra - Praanik (Diego Berrondo Remix) /\xA0
4 - Solarstone - 4ever (Mir Omar Remix) /\xA0
5 - Hector Cortes, Hassan Maroofi, Jaime Garza - Shine the Light /\xA0
6 - Runik - The Chapel feat. Proyecto Guten (Blanka Barbara Remix) /\xA0
7 - East Cafe - Summer Solstice (Apste Remix) /\xA0
8 - East Cafe - Feyreye (Hobin Rude Remix) /\xA0
9 - Felipe Garcia (UY) - Foggy Days /\xA0
10 - Timo MAAS - Ubik (Dj Bird Unofficial Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"31",descargas:"61.9K",fecha:"2023-05-20",link:"https://mcdn.podbean.com/mf/download/eh343q/628-HernanCattaneo-2023-05-20.mp3",tracklist:`Paula OS - Rival (John Cosani Remix) /
No\u0304pi - Micro Clouds (Datskie Remix) /
Rudra - Praanik (Diego Berrondo Remix) /
Solarstone - 4ever (Mir Omar Remix) /
Hector Cortes, Hassan Maroofi, Jaime Garza - Shine the Light /
Runik - The Chapel feat. Proyecto Guten (Blanka Barbara Remix) /
East Cafe - Summer Solstice (Apste Remix) /
East Cafe - Feyreye (Hobin Rude Remix) /
Felipe Garcia (UY) - Foggy Days /`},{episodio:"629",titulo:"Resident / Episode 629 / May 27 2023",descripcion:`1 - Donde est\xE1 Agust\xEDn - Agust\xEDn Duarte /\xA0
2 - Shayan Pasha - Garden of Hope /\xA0
3 - Emi Galvan - Free Your Mind (Sebastian Busto Remix) /\xA0
4 - Khen - Florida /\xA0
5 - Luis Damora - Castex (Forty Cats Remix) /\xA0
6 - Hicky & Kalo - Luminous Path (Makebo Remix) /\xA0
7 - Dabeat, Kamilo Sanclemente - Night Clouds /\xA0
8 - Sam Scheme - Acura /\xA0
9 - Magic.Made.by.R - Louder /\xA0
10 - Eric Lune - Small Hours / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"60.4K",fecha:"2023-05-27",link:"https://mcdn.podbean.com/mf/download/cj7qjx/629-HernanCattaneo-2023-05-27.mp3",tracklist:`Donde est\xE1 Agust\xEDn - Agust\xEDn Duarte /
Shayan Pasha - Garden of Hope /
Emi Galvan - Free Your Mind (Sebastian Busto Remix) /
Khen - Florida /
Luis Damora - Castex (Forty Cats Remix) /
Hicky & Kalo - Luminous Path (Makebo Remix) /
Dabeat, Kamilo Sanclemente - Night Clouds /
Sam Scheme - Acura /
Magic.Made.by.R - Louder /`},{episodio:"630",titulo:"Resident / Episode 630/ Jun 03 2023",descripcion:`1 - Roger Martinez - De Machtige Trip (Roger Martinez 2023 Remix) /\xA0
2 - Emma Vazquez - Soul Brother /\xA0
3 - Voon feat Tim Condor - Now You're Gone (Goodenach Remix) /\xA0
4 - John Creamer - Impossible Love (Anhauser Remix) /\xA0
5 - Neuralis - Flush (Kris Dur, Leandro Murua Remix) /\xA0
6 - Telefon Tel Aviv - You're the Worst Thing In The World (Kris Dur, Hector Cortes Remix Unofficial) /\xA0
7 - Hydra System - Benja Molina /\xA0
8 - Axel Giova & Larrosa (AR) - Conditional /\xA0
9 - Analog Jungs - Twilight /\xA0
10 - Van Bellen - Let Me Take You On a Journey (Sebastien Leger Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"64.4K",fecha:"2023-06-03",link:"https://mcdn.podbean.com/mf/download/wwfjex/630-HernanCattaneo-2023-06-03.mp3",tracklist:`Roger Martinez - De Machtige Trip (Roger Martinez 2023 Remix) /
Emma Vazquez - Soul Brother /
Voon feat Tim Condor - Now You're Gone (Goodenach Remix) /
John Creamer - Impossible Love (Anhauser Remix) /
Neuralis - Flush (Kris Dur, Leandro Murua Remix) /
Telefon Tel Aviv - You're the Worst Thing In The World (Kris Dur, Hector Cortes Remix Unofficial) /
Hydra System - Benja Molina /
Axel Giova & Larrosa (AR) - Conditional /
Analog Jungs - Twilight /`},{episodio:"631",titulo:"Resident / Episode 631 / Jun 10 2023",descripcion:`1 - Radiohead - Codex (Raul Suarez Unofficial Clear Lake Mix) /\xA0
2 - Alan Schultz - \xA0Stampede /\xA0
3 - Diego Berrondo - Maktub /\xA0
4 - Roc\xEDo Portillo - Mori /\xA0
5 - Hobin Rude - Room 172 /\xA0
6 - Hyunji-A - Camino Torcido /\xA0
7 - Juan Sapia - Aura (Paul Deep Remix) /\xA0
8 - Blami - Industria Con Vista Moderna /\xA0
9 - Skatman - Oldskool /\xA0
10 - Glowal - Eagles / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"61.9K",fecha:"2023-06-10",link:"https://mcdn.podbean.com/mf/download/iugwft/631-HernanCattaneo-2023-06-10.mp3",tracklist:`Radiohead - Codex (Raul Suarez Unofficial Clear Lake Mix) /
Alan Schultz - \xA0Stampede /
Diego Berrondo - Maktub /
Roc\xEDo Portillo - Mori /
Hobin Rude - Room 172 /
Hyunji-A - Camino Torcido /
Juan Sapia - Aura (Paul Deep Remix) /
Blami - Industria Con Vista Moderna /
Skatman - Oldskool /`},{episodio:"632",titulo:"Resident / Episode 632 / Jun 17 2023",descripcion:`1 - Olafur Arnalds - Particles (Alfa State Remix) /\xA0
2 - Hermanez, Lost Desert - Cobalt Session /\xA0
3 - Daniel Testas - Being a Phoenix (Not Demure Remix) /\xA0
4 - Radieux - Waterfalls and Us (Kamilo Sanclemente , Mauro Aguirre Remix ) /\xA0
5 - Ivan Aliaga - Speed /\xA0
6 - Amh\xE1in - Evaporate (Mike Rish Remix) /\xA0
7 - Agustin Ficarra - Hold Back /\xA0
8 - MIR OMAR - RUST /\xA0
9 - Ruben Karapetyan - Hyperphantasia /\xA0
10 - Natascha Polke, R.EK - The Balance (Thomas Schwartz & Fausto Fanizza Club Mix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"60.8K",fecha:"2023-06-17",link:"https://mcdn.podbean.com/mf/download/4zh7eu/632-HernanCattaneo-2023-06-17.mp3",tracklist:`Olafur Arnalds - Particles (Alfa State Remix) /
Hermanez, Lost Desert - Cobalt Session /
Daniel Testas - Being a Phoenix (Not Demure Remix) /
Radieux - Waterfalls and Us (Kamilo Sanclemente , Mauro Aguirre Remix ) /
Ivan Aliaga - Speed /
Amh\xE1in - Evaporate (Mike Rish Remix) /
Agustin Ficarra - Hold Back /
MIR OMAR - RUST /
Ruben Karapetyan - Hyperphantasia /`},{episodio:"634",titulo:"Resident / Episode 634 / Jul 01 2023",descripcion:`1 - Valdovinos - Somebody Else /\xA0
2 - Emanuel Satie - Dreaming (Of The Love We Never Had) /\xA0
3 - Einmusik - Funkenflug /\xA0
4 - Tonaco, VENAO - Sub Station /\xA0
5 - Greta Meier - Voices Of Lights /\xA0
6 - Will DeKeizer - Interwoven Paths /\xA0
7 - BJORN (SE) - Chimes (Echonomist Remix) /\xA0
8 - TRENTEM\xD8LLER - Moan (Raul Suarez Thinking in Blue \xA0Mix) /\xA0
9 - Chris Cargo - Aurora (Antrim Remix) If You Wait /\xA0
10 - The Smiths - How Soon is Now (Carlos Gatto Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"60.4K",fecha:"2023-07-01",link:"https://mcdn.podbean.com/mf/download/89dciw/634-HernanCattaneo-2023-07-01.mp3",tracklist:`Valdovinos - Somebody Else /
Emanuel Satie - Dreaming (Of The Love We Never Had) /
Einmusik - Funkenflug /
Tonaco, VENAO - Sub Station /
Greta Meier - Voices Of Lights /
Will DeKeizer - Interwoven Paths /
BJORN (SE) - Chimes (Echonomist Remix) /
TRENTEM\xD8LLER - Moan (Raul Suarez Thinking in Blue \xA0Mix) /
Chris Cargo - Aurora (Antrim Remix) If You Wait /`},{episodio:"635",titulo:"Resident / Episode 635 / Jul 08 2023",descripcion:`1 - Julian Stetter - Napa /\xA0
2 - Ivory - Departures /\xA0
3 - Beverly Hills - Turn On Me (Jose Tabarez Remix) /\xA0
4 - Papai ACCI Attila - Happy Kids (Weird Sounding Dude Remix) /\xA0
5 - Orsen - Hope /\xA0
6 - Andre Moret - Valley of Feelings /\xA0
7 - Dark Soul Project - Reborn /\xA0
8 - Rich Curtis - Hard Won (DNYO Cyber Dub) /\xA0
9 - Lake Avalon - Velorum /\xA0
10 - Depeche Mode - My Cosmos Is Mine (ANNA Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"33",descargas:"61.2K",fecha:"2023-07-08",link:"https://mcdn.podbean.com/mf/download/cwfcwx/635-HernanCattaneo-2023-07-08.mp3",tracklist:`Julian Stetter - Napa /
Ivory - Departures /
Beverly Hills - Turn On Me (Jose Tabarez Remix) /
Papai ACCI Attila - Happy Kids (Weird Sounding Dude Remix) /
Orsen - Hope /
Andre Moret - Valley of Feelings /
Dark Soul Project - Reborn /
Rich Curtis - Hard Won (DNYO Cyber Dub) /
Lake Avalon - Velorum /`},{episodio:"636",titulo:"Resident / Episode 636 / Jul 15 2023",descripcion:`1 - Eli Nissan - Cosmic /\xA0
2 - Mariano Mellino - Butterfly 88 /\xA0
3 - Govinda, Sacc, Leonardini - Foward /\xA0
4 - Christopher Erre & Alto Astral - Open Hearts /\xA0
5 - Benja Molina - Meridian /\xA0
6 - Melodiam (AR) - Trippin /\xA0
7 - Niceshot - Catching Clouds /\xA0
8 - Uccelli - Bruma /\xA0
9 - Tiefstone & Ric Niels - Abby /\xA0
10 - \xD8ostil & R\xEAverie - Missing Robot Feat. Paula Os (Rodriguez Jr. Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"66.2K",fecha:"2023-07-15",link:"https://mcdn.podbean.com/mf/download/f2y485/636-HernanCattaneo-2023-07-15.mp3",tracklist:`Eli Nissan - Cosmic /
Mariano Mellino - Butterfly 88 /
Govinda, Sacc, Leonardini - Foward /
Christopher Erre & Alto Astral - Open Hearts /
Benja Molina - Meridian /
Melodiam (AR) - Trippin /
Niceshot - Catching Clouds /
Uccelli - Bruma /
Tiefstone & Ric Niels - Abby /`},{episodio:"637",titulo:"Resident / Episode 637 / Jul 22 2023",descripcion:`1 - DJ Kid - Sirens (Jochem Hamerling Remix) /\xA0
2 - Kalima - Soldier Of Love /\xA0
3 - DJ Bird - Galactica (Ricardo Piedra Remix) /\xA0
4 - GE\xD8VH\xC4N, Martin Fredes - Deep Story (Ruben Karapetyan Remix) /\xA0
5 - Scippo - Telematic /\xA0
6 - Lio Q - Manhame /\xA0
7 - Alto Astral - Holding On /\xA0
8 - Nick Muir - All One Word (GMJ & Matter Remix) /\xA0
9 - Tonaco - Woodstock /\xA0
10 - RY X - A Thousand Knives (Enamour Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"48.4K",fecha:"2023-07-22",link:"https://mcdn.podbean.com/mf/download/xdhfxa/637-HernanCattaneo-2023-07-22.mp3",tracklist:`DJ Kid - Sirens (Jochem Hamerling Remix) /
Kalima - Soldier Of Love /
DJ Bird - Galactica (Ricardo Piedra Remix) /
GE\xD8VH\xC4N, Martin Fredes - Deep Story (Ruben Karapetyan Remix) /
Scippo - Telematic /
Lio Q - Manhame /
Alto Astral - Holding On /
Nick Muir - All One Word (GMJ & Matter Remix) /
Tonaco - Woodstock /`},{episodio:"638",titulo:"Resident / Episode 638 / Jul 29 2023",descripcion:`1 - Armen Miran - Take Your Time /\xA0
2 - Vicente Herera - Vertigo /\xA0
3 - Andre Moret - Supra /\xA0
4 - Jamie Stevens , Zankee Gulati - The Rip (Paul Deep Just Another Vibe) /\xA0
5 - Chris Scott & Richie Virus - Rubecula (Dave Walker Remix) /\xA0
6 - Ruls - Music Is Our Language - Noisey Project Remix /\xA0
7 - Soulmade (AR) - Scorpion - (Fabri Lopez Remix) /\xA0
8 - AFFKT - Sopasopa (1979 Remix) /\xA0
9 - EANP - \xA0Ruhestoerung /\xA0
10 - Ebbe - Ble Cell (Salazar (COL) remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"62.4K",fecha:"2023-07-29",link:"https://mcdn.podbean.com/mf/download/p32rxr/638-HernanCattaneo-2023-07-29.mp3",tracklist:`Armen Miran - Take Your Time /
Vicente Herera - Vertigo /
Andre Moret - Supra /
Jamie Stevens , Zankee Gulati - The Rip (Paul Deep Just Another Vibe) /
Chris Scott & Richie Virus - Rubecula (Dave Walker Remix) /
Ruls - Music Is Our Language - Noisey Project Remix /
Soulmade (AR) - Scorpion - (Fabri Lopez Remix) /
AFFKT - Sopasopa (1979 Remix) /
EANP - \xA0Ruhestoerung /`},{episodio:"639",titulo:"Resident / Episode 639 / Aug 05 2023",descripcion:`1 - Fer Torti - Champagne Soul /\xA0
2 - Myron Eugene - Divided by Decisions /\xA0
3 - Dimuth K, Forerunners - Exit Reality /\xA0
4 - Franco Camiolo - Torch /\xA0
5 - Hicky & Kalo - Coming Back Home /\xA0
6 - Jiminy Hop - Revizor /\xA0
7 - Simos Tagias - Reality /\xA0
8 - Nacres - Naturalize /\xA0
9 - George FitzGerald - Half Light (Hector Cortes, Hassan Maroofi EDIT) /\xA0
10 - 3 EMITR - Homologic (Gui Boratto Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"23",descargas:"60.5K",fecha:"2023-08-05",link:"https://mcdn.podbean.com/mf/download/v9fnb5/639-HernanCattaneo-2023-08-05.mp3",tracklist:`Fer Torti - Champagne Soul /
Myron Eugene - Divided by Decisions /
Dimuth K, Forerunners - Exit Reality /
Franco Camiolo - Torch /
Hicky & Kalo - Coming Back Home /
Jiminy Hop - Revizor /
Simos Tagias - Reality /
Nacres - Naturalize /
George FitzGerald - Half Light (Hector Cortes, Hassan Maroofi EDIT) /`},{episodio:"640",titulo:"Resident / Episode 640 / Aug 12 2023",descripcion:`1 - Myron Eugene - Smileseeker /\xA0
2 - Sensitive (It) - Under the Lights (Ric Niels Remix) /\xA0
3 - Notdemure - Waving But Drowning /\xA0
4 - Intacto - Gandhara (Paul Hamilton Remix) /\xA0
5 - NOIYSE PROJECT - Remember Me (Hernan Cattaneo and Jamie Stevens Remix) /\xA0
6 - Kadosh - The Soundtrack /\xA0
7 - Golan Zocher, Ojeni - Alive (Dabeat Remix) /\xA0
8 - Hicky & Kalo - From Sea To Sea /\xA0
9 - Tali Muss, Rasalas - Ozran /\xA0
10 - Juan Sapia - Right Love / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"28",descargas:"61.4K",fecha:"2023-08-12",link:"https://mcdn.podbean.com/mf/download/7xdezs/640-HernanCattaneo-2023-08-12.mp3",tracklist:`Myron Eugene - Smileseeker /
Sensitive (It) - Under the Lights (Ric Niels Remix) /
Notdemure - Waving But Drowning /
Intacto - Gandhara (Paul Hamilton Remix) /
NOIYSE PROJECT - Remember Me (Hernan Cattaneo and Jamie Stevens Remix) /
Kadosh - The Soundtrack /
Golan Zocher, Ojeni - Alive (Dabeat Remix) /
Hicky & Kalo - From Sea To Sea /
Tali Muss, Rasalas - Ozran /`},{episodio:"641",titulo:"Resident / Episode 641 / Aug 19 2023",descripcion:`1 - JP M\xE4yeur - When Her Eyes Blossom /\xA0
2 - Gorje Hewek & Dulus - Celestial /\xA0
3 - Mart\xEDn Fern\xE1ndez (AR) - Last Day /\xA0
4 - Moya (US) - Azores /\xA0
5 - Pole Folder - Par-Dessus Les Toits /\xA0
6 - Facundo Mohrr, Maxi Degrassi - Revolver /\xA0
7 - Luis Domara Altered Stars Chris Cargo Remix /\xA0
8 - Nicolas Rada - El Oro de los Tigres /\xA0
9 - Kaspar Tasane - November Rain (East Cafe Remix) /\xA0
10 - Mind Of Us - City Of Angels / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"62K",fecha:"2023-08-19",link:"https://mcdn.podbean.com/mf/download/87vtdf/641-HernanCattaneo-2023-08-19.mp3",tracklist:`JP M\xE4yeur - When Her Eyes Blossom /
Gorje Hewek & Dulus - Celestial /
Mart\xEDn Fern\xE1ndez (AR) - Last Day /
Moya (US) - Azores /
Pole Folder - Par-Dessus Les Toits /
Facundo Mohrr, Maxi Degrassi - Revolver /
Luis Domara Altered Stars Chris Cargo Remix /
Nicolas Rada - El Oro de los Tigres /
Kaspar Tasane - November Rain (East Cafe Remix) /`},{episodio:"642",titulo:"Resident / Episode 642 / Aug 26 2023",descripcion:`1 - Gardoqui & Nacho Garcia - El Perfume /\xA0
2 - Shayan Pasha - The Bird in The Tree /\xA0
3 - Nick Varon - Confusion /\xA0
4 - Massive Attack - Teardrop (Dark Soul Project Ethereal Remix) /\xA0
5 - Ultraverse - In Progression /\xA0
6 - Mike Rish - GT /\xA0
7 - John Creamer & Stephane K- Forget The World (DJ Beat2 Re-Work) /\xA0
8 - Kamilo Sanclemente - Moving Thoughts /\xA0
9 - Jhordan Welsch & Mindlancholic - The Sound Of Sadness (Franco Camiolo Remix) /\xA0
10 - VONDA7 - Revive / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"62.2K",fecha:"2023-08-26",link:"https://mcdn.podbean.com/mf/download/gspu4q/642-HernanCattaneo-2023-08-26.mp3",tracklist:`Gardoqui & Nacho Garcia - El Perfume /
Shayan Pasha - The Bird in The Tree /
Nick Varon - Confusion /
Massive Attack - Teardrop (Dark Soul Project Ethereal Remix) /
Ultraverse - In Progression /
Mike Rish - GT /
John Creamer & Stephane K- Forget The World (DJ Beat2 Re-Work) /
Kamilo Sanclemente - Moving Thoughts /
Jhordan Welsch & Mindlancholic - The Sound Of Sadness (Franco Camiolo Remix) /`},{episodio:"644",titulo:"Resident / Episode 644 / Sep 09 2023",descripcion:`1 - Dinky \xA0- She's Got Nowhere /\xA0
2 - Around Us & Gustin - Hang Tight /\xA0
3 - Romain Garcia & Douran - Coming Home /\xA0
4 - SOHMI - Only One (Dosem Remix) /\xA0
5 - James Organ - Enkai /\xA0
6 - Spencer Brown - Curve /\xA0
7 - XZYKO, W5 - Volver (Fabian Argomedo Remix) /\xA0
8 - veytik_feat._anna_mirani_-_freefallin_kamilo_sanclemente /\xA0
9 - Arodes ft Martim Rola - Luci /\xA0
10 - Satoshi Fumi - Eternal Refrain / Download episode on MP3 (Right click, save link as...) Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"46.7K",fecha:"2023-09-09",link:"https://mcdn.podbean.com/mf/download/azkuiq/644-HernanCattaneo-2023-09-09.mp3",tracklist:`Dinky \xA0- She's Got Nowhere /
Around Us & Gustin - Hang Tight /
Romain Garcia & Douran - Coming Home /
SOHMI - Only One (Dosem Remix) /
James Organ - Enkai /
Spencer Brown - Curve /
XZYKO, W5 - Volver (Fabian Argomedo Remix) /
veytik_feat._anna_mirani_-_freefallin_kamilo_sanclemente /
Arodes ft Martim Rola - Luci /`},{episodio:"645",titulo:"Resident / Episode 645 / Sep 16 2023",descripcion:`1 - John Cosani - Greys /\xA0
2 - Roy Rosenfeld - Sanga Dance /\xA0
3 - Nu feat. Jo.Ke - Who Loves The Sun (Rodriguez Jr. Remix) /\xA0
4 - Namatjira - Complex Symphonies /\xA0
5 - Around Us & Gustin - Heavenly Voices /\xA0
6 - Gai Barone - Yama /\xA0
7 - Fabricio Guti\xE9rrez - Is\xE3sova /\xA0
8 - Simon Di Marzio - GALACTIC /\xA0
9 - Betical - US /\xA0
10 - DAVI - Deepest Mind / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"57.3K",fecha:"2023-09-16",link:"https://mcdn.podbean.com/mf/download/mntwh7/645-HernanCattaneo-2023-09-16.mp3",tracklist:`John Cosani - Greys /
Roy Rosenfeld - Sanga Dance /
Nu feat. Jo.Ke - Who Loves The Sun (Rodriguez Jr. Remix) /
Namatjira - Complex Symphonies /
Around Us & Gustin - Heavenly Voices /
Gai Barone - Yama /
Fabricio Guti\xE9rrez - Is\xE3sova /
Simon Di Marzio - GALACTIC /
Betical - US /`},{episodio:"646",titulo:"Resident / Episode 646 / Sep 23 2023",descripcion:`1 - Gai & Micah - Please Sit Down (Floor Mix) /\xA0
2 - Juan Lagisquet - Pinecone (Gorkiz, Mind Echoes Remix) /\xA0
3 - Eichenbaum, Fede Pals - Instabilis /\xA0
4 - Michael A - Lunar Horizon /\xA0
5 - Tonaco - Disurbia /\xA0
6 - Kamilo Sanclemente - Whale Voices /\xA0
7 - Dastan & Gux Jimenez \xA0- The High Priestess /\xA0
8 - Quivver & Dave Seaman - Rapid Unscheduled Assembly /\xA0
9 - Oliver Koletzki, Andhim - Branka /\xA0
10 - Adriatique & WhoMadeWho - Miracle (Extended Mix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"60.2K",fecha:"2023-09-23",link:"https://mcdn.podbean.com/mf/download/56k7cs/646-HernanCattaneo-2023-09-23.mp3",tracklist:`Gai & Micah - Please Sit Down (Floor Mix) /
Juan Lagisquet - Pinecone (Gorkiz, Mind Echoes Remix) /
Eichenbaum, Fede Pals - Instabilis /
Michael A - Lunar Horizon /
Tonaco - Disurbia /
Kamilo Sanclemente - Whale Voices /
Dastan & Gux Jimenez \xA0- The High Priestess /
Quivver & Dave Seaman - Rapid Unscheduled Assembly /
Oliver Koletzki, Andhim - Branka /`},{episodio:"647",titulo:"Resident / Episode 647 / Sep 30 2023",descripcion:`1 - Gai & Micah - Please Sit Down (F1-Micah, Gai Barone - Starshines) /\xA0
2 - Jonathan Fratamico - ID /\xA0
3 - Alex O'Rion - Librium /\xA0
4 - Gadi Mitrani - Sonshine Love /\xA0
5 - Arodes - Butterflies /\xA0
6 - Sam Hopgood - Blacklight (Eric Lune Remix) /\xA0
7 - ThinkDeep - Together /\xA0
8 - Emre K - Fire In Me (Lonya Remix) /\xA0
9 - GMJ & Matter - Shelter Of Hearts /\xA0
10 - Guy Gerber - Rainchecks In Montreal (Roy Rosenfeld Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"60.2K",fecha:"2023-09-30",link:"https://mcdn.podbean.com/mf/download/twyjnf/647-HernanCattaneo-2023-09-30.mp3",tracklist:`Gai & Micah - Please Sit Down (F1-Micah, Gai Barone - Starshines) /
Jonathan Fratamico - ID /
Alex O'Rion - Librium /
Gadi Mitrani - Sonshine Love /
Arodes - Butterflies /
Sam Hopgood - Blacklight (Eric Lune Remix) /
ThinkDeep - Together /
Emre K - Fire In Me (Lonya Remix) /
GMJ & Matter - Shelter Of Hearts /`},{episodio:"648",titulo:"Resident / Episode 648 / Oct 07 2023",descripcion:`1 - Gai & Micah - Please Sit Down (F1-Mi1-Oliver & Tom, Lupe Republic - React) /\xA0
2 - Trilucid - Calling /\xA0
3 - Kamine Vox - Coraline (Diego Acosta Remix) /\xA0
4 - Luke Alessi & Jordan Brando - Affogato /\xA0
5 - Alan Cerra - Blackout (Melodiam (AR) Remix) /\xA0
6 - David Calo - Renew (Quivver Remix) /\xA0
7 - Alley SA, Marley Hughes - Sacred Stems (Diego Moreira Remix) /\xA0
8 - Deep Shanti - Cristian Hidalgo /\xA0
9 - Noel Sanger - Falling Upward (Jamie Stevens Remix) /\xA0
10 - BT - Mercury and Solace (Framewerk Vocal Rewerk) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"58.9K",fecha:"2023-10-07",link:"https://mcdn.podbean.com/mf/download/qq2nh5/648-HernanCattaneo-2023-10-07.mp3",tracklist:`Gai & Micah - Please Sit Down (F1-Mi1-Oliver & Tom, Lupe Republic - React) /
Trilucid - Calling /
Kamine Vox - Coraline (Diego Acosta Remix) /
Luke Alessi & Jordan Brando - Affogato /
Alan Cerra - Blackout (Melodiam (AR) Remix) /
David Calo - Renew (Quivver Remix) /
Alley SA, Marley Hughes - Sacred Stems (Diego Moreira Remix) /
Deep Shanti - Cristian Hidalgo /
Noel Sanger - Falling Upward (Jamie Stevens Remix) /`},{episodio:"649",titulo:"Resident / Episode 649 / Oct 14 2023",descripcion:`1 - Niceshot - Jungle Cruise /\xA0
2 - Scippo - Jan P (Ruben Karapetyan Remix) /\xA0
3 - Gav Easby - Reconcile (Gai Barone Remix) /\xA0
4 - James Harcourt - Disintegration /\xA0
5 - Gespona, Djolee - Colorblind /\xA0
6 - Kamilo Sanclemente - Post Human /\xA0
7 - Uccelli - Magic Pieces /\xA0
8 - South Bloom - Let Me In (Nicolas Rada Bootleg) /\xA0
9 - Luis Damora - Pure State /\xA0
10 - Arodes - Lunar / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"57.9K",fecha:"2023-10-14",link:"https://mcdn.podbean.com/mf/download/aunx2w/649-HernanCattaneo-2023-10-14.mp3",tracklist:`Niceshot - Jungle Cruise /
Scippo - Jan P (Ruben Karapetyan Remix) /
Gav Easby - Reconcile (Gai Barone Remix) /
James Harcourt - Disintegration /
Gespona, Djolee - Colorblind /
Kamilo Sanclemente - Post Human /
Uccelli - Magic Pieces /
South Bloom - Let Me In (Nicolas Rada Bootleg) /
Luis Damora - Pure State /`},{episodio:"650",titulo:"Resident / Episode 650 / Oct 21 2023",descripcion:`1 - Amonita - Walking In The Rain /\xA0
2 - Makebo - Somnium /\xA0
3 - Alan Schultz - Why u scared /\xA0
4 - Meloko, Utli, Mont-Rouge - Paris /\xA0
5 - Fliptech - Amalgamate (UnbrokenOne Remix) /\xA0
6 - Stereo MCs, Rodriguez Jr. - Turn The Light On (Skala Remix) /\xA0
7 - Luciano Scheffer - Tiefenthal /\xA0
8 - Luciano Scheffer - Eclipse /\xA0
9 - Dabeat - Etna /\xA0
10 - Sasha - Wolks Vagon / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"59K",fecha:"2023-10-21",link:"https://mcdn.podbean.com/mf/download/ztespc/650-HernanCattaneo-2023-10-21.mp3",tracklist:`Amonita - Walking In The Rain /
Makebo - Somnium /
Alan Schultz - Why u scared /
Meloko, Utli, Mont-Rouge - Paris /
Fliptech - Amalgamate (UnbrokenOne Remix) /
Stereo MCs, Rodriguez Jr. - Turn The Light On (Skala Remix) /
Luciano Scheffer - Tiefenthal /
Luciano Scheffer - Eclipse /
Dabeat - Etna /`},{episodio:"651",titulo:"Resident / Episode 651 / Oct 28 2023",descripcion:`1 - Of Norway - Smeigedag /\xA0
2 - Sebastian Sellares - Lullaby Of The Seraphim /\xA0
3 - Antrim - Gamble /\xA0
4 - Luciano Elvira - Safe is just a shadow /\xA0
5 - Benja Molina - Quartz /\xA0
6 - SURFFACE - Mentality (Audio Junkies Remix) /\xA0
7 - John Cosani - Greys (Original Mix) /\xA0
8 - Martin Fredes - Shadow Pulse /\xA0
9 - Felipe Gurascier & Juman /\xA0
10 - Golan Zocher, Choopie - The Void / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"55.2K",fecha:"2023-10-28",link:"https://mcdn.podbean.com/mf/download/vfrqwi/651-HernanCattaneo-2023-10-28.mp3",tracklist:`Of Norway - Smeigedag /
Sebastian Sellares - Lullaby Of The Seraphim /
Antrim - Gamble /
Luciano Elvira - Safe is just a shadow /
Benja Molina - Quartz /
SURFFACE - Mentality (Audio Junkies Remix) /
John Cosani - Greys (Original Mix) /
Martin Fredes - Shadow Pulse /
Felipe Gurascier & Juman /`},{episodio:"652",titulo:"Resident / Episode 652 / Nov 04 2023",descripcion:`1 - Madloch, Subnode - September Day (DOT Remix) /\xA0
2 - Eichenbaum - Temporary Feelings /\xA0
3 - Jamie Stevens - Mad Bells /\xA0
4 - Aske Izan - Future /\xA0
5 - Micah, Gai Barone & Echomen - Ecstasy /\xA0
6 - Audio Junkies - Sun gazing /\xA0
7 - Not Demure x Sonic Union - Loosing My Mind /\xA0
8 - Alan Schultz - Broadwalk /\xA0
9 - Bondarev, Aman Anand - WARPP (DJ Ruby Remix) /\xA0
10 - Hernan Cattaneo, Hicky & Kalo - Voyage / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"54.9K",fecha:"2023-11-04",link:"https://mcdn.podbean.com/mf/download/cjutg9/652-HernanCattaneo-2023-11-04.mp3",tracklist:`Madloch, Subnode - September Day (DOT Remix) /
Eichenbaum - Temporary Feelings /
Jamie Stevens - Mad Bells /
Aske Izan - Future /
Micah, Gai Barone & Echomen - Ecstasy /
Audio Junkies - Sun gazing /
Not Demure x Sonic Union - Loosing My Mind /
Alan Schultz - Broadwalk /
Bondarev, Aman Anand - WARPP (DJ Ruby Remix) /`},{episodio:"654",titulo:"Resident / Episode 654 / Nov 18 2023",descripcion:`1 - Golan Zocher & Juan Pablo Torres (Mike Griego Remix) /\xA0
2 - Alan Cerra - Get Loose /\xA0
3 - Melodiam (AR) - Flying Sequences /\xA0
4 - Verche - Espera /\xA0
5 - GMJ & Matter - EXT135 (Kasey Taylor & Karl Pilbrow Remix) /\xA0
6 - Tom Pavicich - Overflight /\xA0
7 - Dowden - Loss of Gravity /\xA0
8 - EANP & AudioTox - Eclipsed /\xA0
9 - XZYKO, W5 - Volver (Fabian Argomedo Remix) /\xA0
10 - AURORA - Churchyard (Antrim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"36",descargas:"59.7K",fecha:"2023-11-18",link:"https://mcdn.podbean.com/mf/download/vxpt2s/654-HernanCattaneo-2023-11-18.mp3",tracklist:`Golan Zocher & Juan Pablo Torres (Mike Griego Remix) /
Alan Cerra - Get Loose /
Melodiam (AR) - Flying Sequences /
Verche - Espera /
GMJ & Matter - EXT135 (Kasey Taylor & Karl Pilbrow Remix) /
Tom Pavicich - Overflight /
Dowden - Loss of Gravity /
EANP & AudioTox - Eclipsed /
XZYKO, W5 - Volver (Fabian Argomedo Remix) /`},{episodio:"655",titulo:"Resident / Episode 655 / Nov 25 2023",descripcion:`1 - Emma Vazquez - Bright Day /\xA0
2 - Nicolas Petracca \xA0- Stabing Dance /\xA0
3 - Sounom & Sagou - Into The Mind (Francesco Pico Remix) /\xA0
4 - Emcroy - Erks /\xA0
5 - Montw, Anton Borin (RU) - Obsidian /\xA0
6 - Eichenbaum - Transcender /\xA0
7 - Subandrio Ft Boniface - In Motion /\xA0
8 - Axatipe - Samsara Escape /\xA0
9 - Nichols - Memento (DJ Ruby Remix) /\xA0
10 - Baunder - The Machine & I / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"56.4K",fecha:"2023-11-25",link:"https://mcdn.podbean.com/mf/download/zr5cqd/655-HernanCattaneo-2023-11-25.mp3",tracklist:`Emma Vazquez - Bright Day /
Nicolas Petracca \xA0- Stabing Dance /
Sounom & Sagou - Into The Mind (Francesco Pico Remix) /
Emcroy - Erks /
Montw, Anton Borin (RU) - Obsidian /
Eichenbaum - Transcender /
Subandrio Ft Boniface - In Motion /
Axatipe - Samsara Escape /
Nichols - Memento (DJ Ruby Remix) /`},{episodio:"656",titulo:"Resident / Episode 656 / Dec 02 2023",descripcion:`1 - Pole Folder - Infinite Love (Solstice Mix) /\xA0
2 - Maze 28 - Space Glitch (Ewan Rill Remix) /\xA0
3 - Gux Jimenez - Dancing in Your Fantasy (Juan Pablo Torrez Remix) /\xA0
4 - Living Stereo - Congo Belga /\xA0
5 - Living Stereo - Energy ft. Malena Narvay /\xA0
6 - Carlos Gatto-Immersion Colors /\xA0
7 - Jiminy Hop - Levera (GMJ & Matter Remix) /\xA0
8 - Maxi Degrassi - Soil Sprout /\xA0
9 - GSEP & Rikki Sawyer - The Chant (Lexicon Avenue Remix) /\xA0
10 - Aman Anand, Echo Daft - Novena 2019 (Greenage Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"55K",fecha:"2023-12-02",link:"https://mcdn.podbean.com/mf/download/s8jvq4/656-HernanCattaneo-2023-12-02.mp3",tracklist:`Pole Folder - Infinite Love (Solstice Mix) /
Maze 28 - Space Glitch (Ewan Rill Remix) /
Gux Jimenez - Dancing in Your Fantasy (Juan Pablo Torrez Remix) /
Living Stereo - Congo Belga /
Living Stereo - Energy ft. Malena Narvay /
Carlos Gatto-Immersion Colors /
Jiminy Hop - Levera (GMJ & Matter Remix) /
Maxi Degrassi - Soil Sprout /
GSEP & Rikki Sawyer - The Chant (Lexicon Avenue Remix) /`},{episodio:"657",titulo:"Resident / Episode 657 / Dec 09 2023",descripcion:`1 - Dilby - Organika /\xA0
2 - Ewan Rill - Mind Dust (Hobin Rude Remix) /\xA0
3 - Armen Miran - The Seed /\xA0
4 - Mike Griego - Parody /\xA0
5 - Nick Newman - Art of War /\xA0
6 - Gux Jimenez - Let Me Out (Juanes Mesa remix) /\xA0
7 - Dabeat, Kamilo Sanclemente - \xA0Echoplasm /\xA0
8 - Mir Omar - Departures (Mauro Augugliaro Remix) /\xA0
9 - Henry Saiz -The Quest /\xA0
10 - Because of Art, Jody Wisternoff & James Grant - Free / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"55.4K",fecha:"2023-12-09",link:"https://mcdn.podbean.com/mf/download/tdm2hu/657-HernanCattaneo-2023-12-09.mp3",tracklist:`Dilby - Organika /
Ewan Rill - Mind Dust (Hobin Rude Remix) /
Armen Miran - The Seed /
Mike Griego - Parody /
Nick Newman - Art of War /
Gux Jimenez - Let Me Out (Juanes Mesa remix) /
Dabeat, Kamilo Sanclemente - \xA0Echoplasm /
Mir Omar - Departures (Mauro Augugliaro Remix) /
Henry Saiz -The Quest /`},{episodio:"658",titulo:"Resident / Episode 658 / Dec 16 2023",descripcion:`1 - Not Demure - The Midnight Gospel /\xA0
2 - Gai Barone - Fahrrad /\xA0
3 - Gavin Rochford - Stratus \xA0(Hobin Rude Remix) /\xA0
4 - Maze 28 & Rockka - Inertia /\xA0
5 - Paul Nolan - Cycles /\xA0
6 - Callecat & Paul Hazendonk - State Of Mind /\xA0
7 - Airscape - Cruising (Jaap Ligthart 'Ode To Johan' Bootleg) /\xA0
8 - Nubbelrisk - Snowfield (Cass Remix) /\xA0
9 - Pako and Frederick - Western Approaches (Chris Cargo remix) /\xA0
10 - Koelle, Reza Safinia - Reverie (Ian O Donovan Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"56.3K",fecha:"2023-12-16",link:"https://mcdn.podbean.com/mf/download/u3n4ai/658-HernanCattaneo-2023-12-16.mp3",tracklist:`Not Demure - The Midnight Gospel /
Gai Barone - Fahrrad /
Gavin Rochford - Stratus \xA0(Hobin Rude Remix) /
Maze 28 & Rockka - Inertia /
Paul Nolan - Cycles /
Callecat & Paul Hazendonk - State Of Mind /
Airscape - Cruising (Jaap Ligthart 'Ode To Johan' Bootleg) /
Nubbelrisk - Snowfield (Cass Remix) /
Pako and Frederick - Western Approaches (Chris Cargo remix) /`},{episodio:"659",titulo:"Resident / Episode 659 / Dec 23 2023",descripcion:"LIVE from Woodstock 69, Bloemendaal, Netherlands - Pole Folder Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"24",descargas:"58.2K",fecha:"2023-12-23",link:"https://mcdn.podbean.com/mf/download/yhv2h5/659-HernanCattaneo-2023-12-23.mp3"},{episodio:"660",titulo:"Resident / Episode 660 / Dec 30 2023",descripcion:"LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Parte 1 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"23",descargas:"57.7K",fecha:"2023-12-30",link:"https://mcdn.podbean.com/mf/download/k9sjh6/660-HernanCattaneo-2023-12-30.mp3"},{episodio:"661",titulo:"Resident / Episode 661 / Jan 06 2024",descripcion:"LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Part 2 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"14",descargas:"56.9K",fecha:"2024-01-06",link:"https://mcdn.podbean.com/mf/download/jmh5cn/661-HernanCattaneo-2024-01-06.mp3"},{episodio:"662",titulo:"Resident / Episode 662 / Jan 13 2024",descripcion:"13/1 - LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Part 3 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"20",descargas:"59.8K",fecha:"2024-01-13",link:"https://mcdn.podbean.com/mf/download/nckjcc/662-HernanCattaneo-2024-01-13.mp3"},{episodio:"664",titulo:"Resident / Episode 664 / Jan 27 2024",descripcion:"27/1 - LIVE from Woodstock 69, Bloemendaal, Netherlands - Hernan Cattaneo Part 6 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"8",descargas:"53.8K",fecha:"2024-01-27",link:"https://mcdn.podbean.com/mf/download/m8sd7c/664-HernanCattaneo-2024-01-27.mp3"},{episodio:"665",titulo:"Resident / Episode 665 / Feb 03 2024",descripcion:`1 - Pablo Azturizaga - Heart Strings /\xA0
2 - Antoux - Jupiterian /\xA0
3 - Simos Tagias - Katla (Alex O'Rion Remix) /\xA0
4 - Kamilo Sanclemente - Kore (Original Mix) /\xA0
5 - The Red Eye Shift (Juan Pablo Torrez Remix) /\xA0
6 - Simply City - The Ripple Effect /\xA0
7 - Depeche Mode - Where is the revolution (WorldClique / AudioTox ) /\xA0
8 - Shayan Pasha - Adam & Eve /\xA0
9 - Balcazar & Hector Cortes - Dream /\xA0
10 - The Doors & Gustavo Cerati - Spy (Checo Cotela Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"60.7K",fecha:"2024-02-03",link:"https://mcdn.podbean.com/mf/download/pfnp6k/665-HernanCattaneo-2024-02-03.mp3",tracklist:`Pablo Azturizaga - Heart Strings /
Antoux - Jupiterian /
Simos Tagias - Katla (Alex O'Rion Remix) /
Kamilo Sanclemente - Kore (Original Mix) /
The Red Eye Shift (Juan Pablo Torrez Remix) /
Simply City - The Ripple Effect /
Depeche Mode - Where is the revolution (WorldClique / AudioTox ) /
Shayan Pasha - Adam & Eve /
Balcazar & Hector Cortes - Dream /`},{episodio:"666",titulo:"Resident / Episode 666 / Feb 10 2024",descripcion:`1 - Deek That - Ramdeesun /\xA0
2 - Dee Montero - Ethera /\xA0
3 - Lapena - Take Me Up /\xA0
4 - Fran Baigo - Othala (Peter Makto 5AM Mix) /\xA0
5 - Will Konitzer, MeowWow - Moon Dance (Forty Cats Remix) /\xA0
6 - Agustin Pietrocola - Sorcerer /\xA0
7 - Valen Gonzalez & Alain Pauwels - Albuquerque /\xA0
8 - RYAN (CU) - Nirvana /\xA0
9 - Dabeat & Kamilo Sanclemente - Offspring /\xA0
10 - Antrim - La Fin Du Monde \xA0(Dabeat) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"58K",fecha:"2024-02-10",link:"https://mcdn.podbean.com/mf/download/du6e7z/666-HernanCattaneo-2024-02-10.mp3",tracklist:`Deek That - Ramdeesun /
Dee Montero - Ethera /
Lapena - Take Me Up /
Fran Baigo - Othala (Peter Makto 5AM Mix) /
Will Konitzer, MeowWow - Moon Dance (Forty Cats Remix) /
Agustin Pietrocola - Sorcerer /
Valen Gonzalez & Alain Pauwels - Albuquerque /
RYAN (CU) - Nirvana /
Dabeat & Kamilo Sanclemente - Offspring /`},{episodio:"667",titulo:"Resident / Episode 667 / Feb 17 2024",descripcion:`1 - Kris Dur - Saitam /\xA0
2 - Agustin Pengov - Rain (Peter Makto Eivissa Mix) /\xA0
3 - After Burn - Dharma Tribes /\xA0
4 - Sebastien Leger - Safari /\xA0
5 - Kalima - Machine Gun /\xA0
6 - Diego Acosta - Blind & Happy /\xA0
7 - Alan Cerra - Pravya /\xA0
8 - Audiotox, E A N P - Mechanism /\xA0
9 - Jamie Stevens and Ivan Aliaga - ID /\xA0
10 - Juan Sapia - Greatest Gift / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"58.5K",fecha:"2024-02-17",link:"https://mcdn.podbean.com/mf/download/9zqrre/667-HernanCattaneo-2024-02-17.mp3",tracklist:`Kris Dur - Saitam /
Agustin Pengov - Rain (Peter Makto Eivissa Mix) /
After Burn - Dharma Tribes /
Sebastien Leger - Safari /
Kalima - Machine Gun /
Diego Acosta - Blind & Happy /
Alan Cerra - Pravya /
Audiotox, E A N P - Mechanism /
Jamie Stevens and Ivan Aliaga - ID /`},{episodio:"668",titulo:"Resident / Episode 668 / Feb 24 2024",descripcion:`1 - Pablo Asturizaga - Gold Oceans (Hole Box Remix) /\xA0
2 - Felipe Garcia (UY) - Sleeping City /\xA0
3 - Ryan (CU) - Nirvana (Hobin Rude Remix) /\xA0
4 - Corei - Judith (Oliver & Tom Remix) /\xA0
5 - Andr\xE9s Moris, Eichenbaum - Fades -
6 - KAZKO - Last Runner (HAFT Remix) /\xA0
7 - Uccelli - The sun rises /\xA0
8 - Tokumori-Walking /\xA0
9 - Lucas Zarate - Flight Control /\xA0
10 - Nicolas Benedetti - Kismet / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"55.8K",fecha:"2024-02-24",link:"https://mcdn.podbean.com/mf/download/x49769/668-HernanCattaneo-2024-02-24.mp3",tracklist:`Pablo Asturizaga - Gold Oceans (Hole Box Remix) /
Felipe Garcia (UY) - Sleeping City /
Ryan (CU) - Nirvana (Hobin Rude Remix) /
Corei - Judith (Oliver & Tom Remix) /
Andr\xE9s Moris, Eichenbaum - Fades -
KAZKO - Last Runner (HAFT Remix) /
Uccelli - The sun rises /
Tokumori-Walking /
Lucas Zarate - Flight Control /`},{episodio:"669",titulo:"Resident / Episode 669 / Mar 02 2024",descripcion:`1 - Luciano Scheffer - High Frontier /\xA0
2 - Gux Jimenez & Nattier - Just Like Us /\xA0
3 - Miguel Ante - Whisper Secrets /\xA0
4 - Gorkiz, Mind Echoes - Without Your Noose (Ruben Karapetyan Remix) /\xA0
5 - Kostya Outta - Deep Feelings /\xA0
6 - After Burn - Dharma Tribes /\xA0
7 - The Rebirth (Ruede Hagelstein Remix) /\xA0
8 - Dabeat - Portal /\xA0
9 - Andy Woldman, Liam Sieker - Panther (Lemon8 Inner Sanctuary Remix) /\xA0
10 - Christian L\xF6ffler - Ease (Johannes Brecht Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"30",descargas:"61.1K",fecha:"2024-03-02",link:"https://mcdn.podbean.com/mf/download/56sx2q/669-HernanCattaneo-2024-03-02.mp3",tracklist:`Luciano Scheffer - High Frontier /
Gux Jimenez & Nattier - Just Like Us /
Miguel Ante - Whisper Secrets /
Gorkiz, Mind Echoes - Without Your Noose (Ruben Karapetyan Remix) /
Kostya Outta - Deep Feelings /
After Burn - Dharma Tribes /
The Rebirth (Ruede Hagelstein Remix) /
Dabeat - Portal /
Andy Woldman, Liam Sieker - Panther (Lemon8 Inner Sanctuary Remix) /`},{episodio:"670",titulo:"Resident / Episode 670 / Mar 09 2024",descripcion:`1 - Coqueit \xA0- Revolution /\xA0
2 - After Burn - Golden Ticket /\xA0
3 - David Calo - Death Interface /\xA0
4 - E A N P - Systems /\xA0
5 - Rass (BR) - Sonora /\xA0
6 - Agustin Pengov - Plastic Heart /\xA0
7 - Alan Cerra - Blackout (Melodiam (AR) Remix) /\xA0
8 - Daniel Curotto - Mediterraneo (East Cafe Balearic Remix) /\xA0
9 - Madeaux - Me & U (Pablo Loiacono Bootleg) /\xA0
10 - Nicolas Benedetti - Meraki / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"53.8K",fecha:"2024-03-09",link:"https://mcdn.podbean.com/mf/download/scisf4/670-HernanCattaneo-2024-03-09.mp3",tracklist:`Coqueit \xA0- Revolution /
After Burn - Golden Ticket /
David Calo - Death Interface /
E A N P - Systems /
Rass (BR) - Sonora /
Agustin Pengov - Plastic Heart /
Alan Cerra - Blackout (Melodiam (AR) Remix) /
Daniel Curotto - Mediterraneo (East Cafe Balearic Remix) /
Madeaux - Me & U (Pablo Loiacono Bootleg) /`},{episodio:"671",titulo:"Resident / Episode 671 / Mar 16 2024",descripcion:`1 - After Burn - Mindness /\xA0
2 - Around Us - Invisible Time (Eichenbaum Remix) /\xA0
3 - Kalima - Heaven /\xA0
4 - Ewan Rill - Ghosted Voices /\xA0
5 - Apparat - Holdon (Derk Private Edit) /\xA0
6 - Edu Schwartz - Exordium /\xA0
7 - Paul Deep - White Karma /\xA0
8 - GMJ & Matter - Ascending Sun /\xA0
9 - Dowden - Diatom /\xA0
10 - Nicolas Rada - Cascadia / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"54.3K",fecha:"2024-03-16",link:"https://mcdn.podbean.com/mf/download/9a3t8d/671-HernanCattaneo-2024-03-16.mp3",tracklist:`After Burn - Mindness /
Around Us - Invisible Time (Eichenbaum Remix) /
Kalima - Heaven /
Ewan Rill - Ghosted Voices /
Apparat - Holdon (Derk Private Edit) /
Edu Schwartz - Exordium /
Paul Deep - White Karma /
GMJ & Matter - Ascending Sun /
Dowden - Diatom /`},{episodio:"672",titulo:"Resident / Episode 672 / Mar 23 2024",descripcion:`1 - D-Nox & Beckers - Astral /\xA0
2 - Zankee Gulati - Magnetic Island /\xA0
3 - Bodaishin, Mauro Masi - Ocarina /\xA0
4 - Dave Seaman - Yoho /\xA0
5 - David Calo - Fish Harmonizer /\xA0
6 - Hot Natured & Ali Love - Benediction (Oliver & Tom Edit) /\xA0
7 - Michael A - Impact /\xA0
8 - Alan Cerra - Godspeed /\xA0
9 - Budakid - Infinity /\xA0
10 - Marsh - Warrior / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"32",descargas:"53.4K",fecha:"2024-03-23",link:"https://mcdn.podbean.com/mf/download/g67ygt/672-HernanCattaneo-2024-03-23.mp3",tracklist:`D-Nox & Beckers - Astral /
Zankee Gulati - Magnetic Island /
Bodaishin, Mauro Masi - Ocarina /
Dave Seaman - Yoho /
David Calo - Fish Harmonizer /
Hot Natured & Ali Love - Benediction (Oliver & Tom Edit) /
Michael A - Impact /
Alan Cerra - Godspeed /
Budakid - Infinity /`},{episodio:"673",titulo:"Resident / Episode 673 / Mar 30 2024",descripcion:`1 - Dublew, Eichenbaum, Stereo Munk - Dorma /\xA0
2 - Sebastian Busto - The Empress /\xA0
3 - Michael A - Cirrus /\xA0
4 - Maxi Degrassi - Soil Sprout /\xA0
5 - Forty Cats - Nocturne /\xA0
6 - Hideo Kobayashi, Alistair - Espiritualidade (Weird Sounding Dude & FM Dub) /\xA0
7 - Andr\xE9 Moret, Gorkiz - The Hollow /\xA0
8 - Emma Vazquez & Soul Relay - Anemone /\xA0
9 - Kalima - Warrior /\xA0
10 - Simos Tagia - Ronin / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"56.2K",fecha:"2024-03-30",link:"https://mcdn.podbean.com/mf/download/uja7kw/673-HernanCattaneo-2024-03-30.mp3",tracklist:`Dublew, Eichenbaum, Stereo Munk - Dorma /
Sebastian Busto - The Empress /
Michael A - Cirrus /
Maxi Degrassi - Soil Sprout /
Forty Cats - Nocturne /
Hideo Kobayashi, Alistair - Espiritualidade (Weird Sounding Dude & FM Dub) /
Andr\xE9 Moret, Gorkiz - The Hollow /
Emma Vazquez & Soul Relay - Anemone /
Kalima - Warrior /`},{episodio:"674",titulo:"Resident / Episode 674 / Apr 06 2024",descripcion:`1 - Thomas Schwartz, Fausto Fanizza - Geka /\xA0
2 - Ewan Rill - Grot /\xA0
3 - Sebasti\xE1n Busto - Astrology /\xA0
4 - Pablo Asturizaga - Embajada Bolivia /\xA0
5 - Arnold T & Alain Pauwels - Baily's Beads /\xA0
6 - Off Night ft Lannakise - Deeps Down (Lopezhouse Rework) /\xA0
7 - Kebin Van Reeken - Invisible (Gorkiz Remix) /\xA0
8 - Michael A - Pulstar (Fabreeka Remix) /\xA0
9 - Dmitry Molosh - Modul /\xA0
10 - Andy Woldman & Liam Sieker - Jaguar (Golan Zocher remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"27",descargas:"53.1K",fecha:"2024-04-06",link:"https://mcdn.podbean.com/mf/download/gghevd/674-HernanCattaneo-2024-04-06.mp3",tracklist:`Thomas Schwartz, Fausto Fanizza - Geka /
Ewan Rill - Grot /
Sebasti\xE1n Busto - Astrology /
Pablo Asturizaga - Embajada Bolivia /
Arnold T & Alain Pauwels - Baily's Beads /
Off Night ft Lannakise - Deeps Down (Lopezhouse Rework) /
Kebin Van Reeken - Invisible (Gorkiz Remix) /
Michael A - Pulstar (Fabreeka Remix) /
Dmitry Molosh - Modul /`},{episodio:"675",titulo:"Resident / Episode 675 / Apr 13 2024",descripcion:`1 - Amber Long, Sergio Vilas - Separation /\xA0
2 - Four Candles - Hidden Beauty /\xA0
3 - Bachir Salloum - Honda Attack /\xA0
4 - Eric Lune & Juan Sapia - Deliverance /\xA0
5 - Eric Lune & Juan Sapia - Tension Release /\xA0
6 - Felipe Garcia - Foggy Days (Berni Turletti Remix) /\xA0
7 - Matador - Remember (Marcelo Vasami Rework) /\xA0
8 - Gai Barone - Thinking Together /\xA0
9 - Juan Pablo Torrez, Golan Zocher - Cosmic Resonance (Mike Griego) /\xA0
10 - DENNEY - Smoke / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"25",descargas:"48.9K",fecha:"2024-04-13",link:"https://mcdn.podbean.com/mf/download/z55f7miyhsyebkan/675-HernanCattaneo-2024-04-13.mp3",tracklist:`Amber Long, Sergio Vilas - Separation /
Four Candles - Hidden Beauty /
Bachir Salloum - Honda Attack /
Eric Lune & Juan Sapia - Deliverance /
Eric Lune & Juan Sapia - Tension Release /
Felipe Garcia - Foggy Days (Berni Turletti Remix) /
Matador - Remember (Marcelo Vasami Rework) /
Gai Barone - Thinking Together /
Juan Pablo Torrez, Golan Zocher - Cosmic Resonance (Mike Griego) /`},{episodio:"676",titulo:"Resident / Episode 676 / Apr 20 2024",descripcion:`1 - Tim Angrave - Ethereal /\xA0
2 - Shayan Pasha - Moments (Ewan Rill Remix) /\xA0
3 - Gai Barone & Micah - Pleiades /\xA0
4 - Axshan - Miracle Of Music (Ranj Kaler Dub) /\xA0
5 - Nicolas Masseyeff - Life Reshade /\xA0
6 - Matthew Sona - All That Is /\xA0
7 - Redspace, Ismail M - Avenue /\xA0
8 - Mat\xEDas Del\xF3ngaro - Athlete /\xA0
9 - Cary Crank - Open Sea (Satoshi Fumi Remix) /\xA0
10 - QUIQUI - Let There Be Light (Treavor Moontribe Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"29",descargas:"47.7K",fecha:"2024-04-20",link:"https://mcdn.podbean.com/mf/download/s9rn77w98kzpmr8q/676-HernanCattaneo-2024-04-20.mp3",tracklist:`Tim Angrave - Ethereal /
Shayan Pasha - Moments (Ewan Rill Remix) /
Gai Barone & Micah - Pleiades /
Axshan - Miracle Of Music (Ranj Kaler Dub) /
Nicolas Masseyeff - Life Reshade /
Matthew Sona - All That Is /
Redspace, Ismail M - Avenue /
Mat\xEDas Del\xF3ngaro - Athlete /
Cary Crank - Open Sea (Satoshi Fumi Remix) /`},{episodio:"677",titulo:"Resident / Episode 677 / Apr 27 2024",descripcion:`1 - Michael A - Dissenter (Hobin Rude Remix) /\xA0
2 - Dj Bird & Papai ACCI Attila - Future (Diego Acosta Remix) /\xA0
3 - Abaze, Paul Arcane, J\xD8AK - City of the Clouds (Gorkiz Remix) /\xA0
4 - The Knife - Hearthbeat (E A N P Unofficial Remix) /\xA0
5 - Agustin Pengov - Casino /\xA0
6 - Simos Tagia -Strange to ourselfs /\xA0
7 - Nhii, Sarkis Mikael - Synthronize /\xA0
8 - Ivan Aliaga - Not Permissions /\xA0
9 - Jiminy Hop - Nawaro (GMJ Remix) /\xA0
10 - The Wash - Voyage / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"48.7K",fecha:"2024-04-27",link:"https://mcdn.podbean.com/mf/download/m9bmd2tv4ntp4vdx/677-HernanCattaneo-2024-04-27.mp3",tracklist:`Michael A - Dissenter (Hobin Rude Remix) /
Dj Bird & Papai ACCI Attila - Future (Diego Acosta Remix) /
Abaze, Paul Arcane, J\xD8AK - City of the Clouds (Gorkiz Remix) /
The Knife - Hearthbeat (E A N P Unofficial Remix) /
Agustin Pengov - Casino /
Simos Tagia -Strange to ourselfs /
Nhii, Sarkis Mikael - Synthronize /
Ivan Aliaga - Not Permissions /
Jiminy Hop - Nawaro (GMJ Remix) /`},{episodio:"678",titulo:"Resident / Episode 678 / May 04 2024",descripcion:`1 - Billka - Secret /\xA0
2 - Fly On Ground - Matias Gauna /\xA0
3 - Axatipe - Mukti /\xA0
4 - A-Jay (SL), Forty Cats - Obscurity /\xA0
5 - Randy De Silva - Sound of Dream /\xA0
6 - Gorkiz, Kaito Aman, RYAN (CU) - Something This Way Comes (BiGz & Freedo Mosho Remix) /\xA0
7 - PAUL (AR) - Interdimentional /\xA0
8 - G\xF8vinda, Hybrid Horses, Glamour's Joint, - Floriana /\xA0
9 - Luciano Elvira - Bruce /\xA0
10 - Telefon Tel Aviv - You Are the Worst Thing in the World (David Defoe Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"51.6K",fecha:"2024-05-04",link:"https://mcdn.podbean.com/mf/download/6rzkr7b35c8d4rp3/678-HernanCattaneo-2024-05-04.mp3",tracklist:`Billka - Secret /
Fly On Ground - Matias Gauna /
Axatipe - Mukti /
A-Jay (SL), Forty Cats - Obscurity /
Randy De Silva - Sound of Dream /
Gorkiz, Kaito Aman, RYAN (CU) - Something This Way Comes (BiGz & Freedo Mosho Remix) /
PAUL (AR) - Interdimentional /
G\xF8vinda, Hybrid Horses, Glamour's Joint, - Floriana /
Luciano Elvira - Bruce /`},{episodio:"679",titulo:"Resident / Episode 679 / May 11 2024",descripcion:`1 - Kandar - Come Alive /\xA0
2 - Danny Howells - Mycelium /\xA0
3 - VegaZ - Arina & Darina (Menkee Remix) /\xA0
4 - Yonsh & SisterSweet - Soul Overture /\xA0
5 - Andromedha - Sun Was Red /\xA0
6 - Matthew Sona - Synthetic /\xA0
7 - Juan Lagisquet, Felipe Garcia (UY) - Hokkaido /\xA0
8 - Luciano Levin & Katzen - Vangelis /\xA0
9 - Evolution, Jayn Hanna - Walking On Fire - (Luca Abayan Unofficial \xA0Remix) /\xA0
10 - Kamilo Sanclemente & Mauro Aguirre - Essence / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"22",descargas:"46.5K",fecha:"2024-05-11",link:"https://mcdn.podbean.com/mf/download/46vebmw6er6c62hv/679-HernanCattaneo-2024-05-11.mp3",tracklist:`Kandar - Come Alive /
Danny Howells - Mycelium /
VegaZ - Arina & Darina (Menkee Remix) /
Yonsh & SisterSweet - Soul Overture /
Andromedha - Sun Was Red /
Matthew Sona - Synthetic /
Juan Lagisquet, Felipe Garcia (UY) - Hokkaido /
Luciano Levin & Katzen - Vangelis /
Evolution, Jayn Hanna - Walking On Fire - (Luca Abayan Unofficial \xA0Remix) /`},{episodio:"680",titulo:"680 Hernan Cattaneo podcast - 2024-05-18",descripcion:`1 - RIGOONI - Guimel /\xA0
2 - Peces Raros - No Van a Parar (Juan Sapia Edit) /\xA0
3 - thebassmonkey - Enceladus (Nomad in the Dark Remix) /\xA0
4 - Nahue Sintes, Ve\u0161c\u030Ca - Oblivion (Ft. JOSEFINA) /\xA0
5 - Gowzer interscope /\xA0
6 - Carla Cimino & Luciano Scheffer - Zephyr /\xA0
7 - Franco Camiolo & Yonsh - Gewissen /\xA0
8 - Nila - Aurora Ascension /\xA0
9 - Around Us - I Got This (Lemon8 Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"50.8K",fecha:"2024-05-18",link:"https://mcdn.podbean.com/mf/download/j55sb6zsg73v3abu/680-HernanCattaneo-2024-05-18.mp3",tracklist:`RIGOONI - Guimel /
Peces Raros - No Van a Parar (Juan Sapia Edit) /
thebassmonkey - Enceladus (Nomad in the Dark Remix) /
Nahue Sintes, Ve\u0161c\u030Ca - Oblivion (Ft. JOSEFINA) /
Gowzer interscope /
Carla Cimino & Luciano Scheffer - Zephyr /
Franco Camiolo & Yonsh - Gewissen /
Nila - Aurora Ascension /`},{episodio:"681",titulo:"Resident / Episode 681 / May 25 2024",descripcion:`1 - Emotional Tourist - Her Simple Dreams /\xA0
2 - Facgar - Infinite /\xA0
3 - Uccelli - Atardecer /\xA0
4 - Hakan Ozurun - Got The Mood /\xA0
5 - Poli Poli & Boris Louit - Fleeting Phenomenon /\xA0
6 - Kebin van Reeken - Liminal (Will DeKeizer Remix) /\xA0
7 - Gowzer - Slicer /\xA0
8 - Spencer Brown - Guardian /\xA0
9 - Vagner Silveira - Elements of Life /\xA0
10 - Newman (I Love) - Leave In Silence / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"48.9K",fecha:"2024-05-25",link:"https://mcdn.podbean.com/mf/download/i3drk7kraye84iqa/681-HernanCattaneo-2024-05-25.mp3",tracklist:`Emotional Tourist - Her Simple Dreams /
Facgar - Infinite /
Uccelli - Atardecer /
Hakan Ozurun - Got The Mood /
Poli Poli & Boris Louit - Fleeting Phenomenon /
Kebin van Reeken - Liminal (Will DeKeizer Remix) /
Gowzer - Slicer /
Spencer Brown - Guardian /
Vagner Silveira - Elements of Life /`},{episodio:"682",titulo:"Resident / Episode 682 / Jun 01 2024",descripcion:`1 - Lost Desert - Jumbo Jet /\xA0
2 - WhoMadeWho & RY X - Love Will Save Me \xA0(Marten Lou Remixes) /\xA0
3 - ZAC - Purple Pearl /\xA0
4 - Ric Niels - CDU /\xA0
5 - The Wash - Clusterfuck (Analog Jungs Remix) /\xA0
6 - Claudio Cornejo (AR) - Triton /\xA0
7 - Wilian Kraupp - Alpha /\xA0
8 - Arodes - Burning Like this /\xA0
9 - Hernan Cattaneo, Hicky & Kalo - Voyage (Denis Horvat
Remix) /\xA0
10 - Trilucid - Cheyenne (Roger Martinez Instrumental
Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"44.4K",fecha:"2024-06-01",link:"https://mcdn.podbean.com/mf/download/bwf58gb76chammhp/682-HernanCattaneo-2024-06-01.mp3",tracklist:`Lost Desert - Jumbo Jet /
WhoMadeWho & RY X - Love Will Save Me \xA0(Marten Lou Remixes) /
ZAC - Purple Pearl /
Ric Niels - CDU /
The Wash - Clusterfuck (Analog Jungs Remix) /
Claudio Cornejo (AR) - Triton /
Wilian Kraupp - Alpha /
Arodes - Burning Like this /
Hernan Cattaneo, Hicky & Kalo - Voyage (Denis Horvat
Remix) /
Trilucid - Cheyenne (Roger Martinez Instrumental`},{episodio:"684",titulo:"Resident / Episode 684 / Jun 15 2024",descripcion:`1 - Greg Ochman - Wrapped With Clouds (Aske Izan Remix) /\xA0
2 - Nacht (Dowden Extended Remix) /\xA0
3 - Claudio Cornejo (AR) - Malkara /\xA0
4 - Federico Epis - My Place /\xA0
5 - Moby - Why Does My Heart Feel So Bad (Claudio Cornejo (AR) /\xA0
6 - Kostya Outta - Chasing Highs (DJ Ruby Remix) /\xA0
7 - Agustin Pietrocola & Andr\xE9s Moris - New Beginning /\xA0
8 - Helios - Infinite Love Sacred Essence /\xA0
9 - Chris Cargo - Coyote (Luis Damora Remix) /\xA0
10 - Alejo Gonzalez - Lost Angel / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"45.3K",fecha:"2024-06-15",link:"https://mcdn.podbean.com/mf/download/xr7nkq9e98cy2r3y/684-HernanCattaneo-2024-06-15.mp3",tracklist:`Greg Ochman - Wrapped With Clouds (Aske Izan Remix) /
Nacht (Dowden Extended Remix) /
Claudio Cornejo (AR) - Malkara /
Federico Epis - My Place /
Moby - Why Does My Heart Feel So Bad (Claudio Cornejo (AR) /
Kostya Outta - Chasing Highs (DJ Ruby Remix) /
Agustin Pietrocola & Andr\xE9s Moris - New Beginning /
Helios - Infinite Love Sacred Essence /
Chris Cargo - Coyote (Luis Damora Remix) /`},{episodio:"685",titulo:"Resident / Episode 685 / Jun 22 2024",descripcion:`1 - Kalima - Dune /\xA0
2 - Kostya Outta - Awakening /\xA0
3 - Kalima - Talisman /\xA0
4 - Cedren & Manu - l, Influence /\xA0
5 - Diego Berrondo - Living the Present (Extended Mix) /\xA0
6 - Arbey Gonzalez - True Shield (Esteban Ikasovic Remix) /\xA0
7 - Agustin Pietrocola & Andr\xE9s Moris - The Key /\xA0
8 - Gowzer - Vibrance /\xA0
9 - PAUL (AR) - Rise (DJ Ruby Remix) /\xA0
10 - Franco Armellini - Eastrail (Sebastian Busto Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"44.3K",fecha:"2024-06-22",link:"https://mcdn.podbean.com/mf/download/mbwtksp32x2q8upp/685-HernanCattaneo-2024-06-22.mp3",tracklist:`Kalima - Dune /
Kostya Outta - Awakening /
Kalima - Talisman /
Cedren & Manu - l, Influence /
Diego Berrondo - Living the Present (Extended Mix) /
Arbey Gonzalez - True Shield (Esteban Ikasovic Remix) /
Agustin Pietrocola & Andr\xE9s Moris - The Key /
Gowzer - Vibrance /
PAUL (AR) - Rise (DJ Ruby Remix) /`},{episodio:"686",titulo:"Resident / Episode 686 / Jun 29 2024",descripcion:`1 - Fran Garay - Phase Sync /\xA0
2 - Black 8 - Lunar /\xA0
3 - Rodrigo Lapena - Ether (Alan Cerra Remix) /\xA0
4 - Beyond Infinity (Carlos Gatto Remix) - Neurospace /\xA0
5 - Andr\xE9s Moris - Rust (Agustin Pengov Remix) /\xA0
6 - Liam Garcia & Keef Luv - CDA (Dimi Mechero Remix) /\xA0
7 - Neuralis - Destierro (Kalima, Kris Dur Remix) /\xA0
8 - M.O.S. - Night Owls /\xA0
9 - Alan Cerra - Drive /\xA0
10 - Richie Blacker - Fool For Loving You / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"46.3K",fecha:"2024-06-29",link:"https://mcdn.podbean.com/mf/download/yzsw6uwj6ky4wpy8/686-HernanCattaneo-2024-06-29.mp3",tracklist:`Fran Garay - Phase Sync /
Black 8 - Lunar /
Rodrigo Lapena - Ether (Alan Cerra Remix) /
Beyond Infinity (Carlos Gatto Remix) - Neurospace /
Andr\xE9s Moris - Rust (Agustin Pengov Remix) /
Liam Garcia & Keef Luv - CDA (Dimi Mechero Remix) /
Neuralis - Destierro (Kalima, Kris Dur Remix) /
M.O.S. - Night Owls /
Alan Cerra - Drive /`},{episodio:"687",titulo:"Resident / Episode 687 / Jul 06 2024",descripcion:`1 - S\xE9bastien L\xE9ger - Omira /\xA0
2 - Forty Cats - Ground (The Wash Remix) /\xA0
3 - ELECTRONIC - Getting Away With It ( PAUL (AR))
4 - Sonic Union - Running To You /\xA0
5 - K Loveski & Nicolas Benedetti - Tarab /\xA0
6 - Sofia Deren - Dark Side of the Star /\xA0
7 - John Cosani - I DID /\xA0
8 - Hans Zimmer - Paul's Dream (Christopher Erre Edit) /\xA0
9 - Hobin Rude - Message Me When You Get Home /\xA0
10 - Paradorks - The Last Time (Hassan Unofficial Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"26",descargas:"47.3K",fecha:"2024-07-06",link:"https://mcdn.podbean.com/mf/download/jk9ryqj9cscg8xnm/687-HernanCattaneo-2024-07-06.mp3",tracklist:`S\xE9bastien L\xE9ger - Omira /
Forty Cats - Ground (The Wash Remix) /
ELECTRONIC - Getting Away With It ( PAUL (AR))
Sonic Union - Running To You /
K Loveski & Nicolas Benedetti - Tarab /
Sofia Deren - Dark Side of the Star /
John Cosani - I DID /
Hans Zimmer - Paul's Dream (Christopher Erre Edit) /
Hobin Rude - Message Me When You Get Home /`},{episodio:"688",titulo:"Resident / Episode 688 / Jul 13 2024",descripcion:`1 - Hardt Antoine - I Will /\xA0
2 - BIG - Danger (Diego Moreira Remix) /\xA0
3 - Alan Cerra - Drive /\xA0
4 - Hernan Cattaneo - Tranquilo (brandub & Knowbru remix) /\xA0
5 - Alto Astral - Luci\xE9rnaga /\xA0
6 - Because Of Art - Transient /\xA0
7 - Hassan- Tunnel /\xA0
8 - Paul Deep - Tique /\xA0
9 - Ogawa, OMB, Haruo Chikada - CO2 \xA0(Kostya Outta Remix) /\xA0
10 - Paul Roux - Hold On / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"43.9K",fecha:"2024-07-13",link:"https://mcdn.podbean.com/mf/download/gbekd95uxz23uhfq/688-HernanCattaneo-2024-07-13.mp3",tracklist:`Hardt Antoine - I Will /
BIG - Danger (Diego Moreira Remix) /
Alan Cerra - Drive /
Hernan Cattaneo - Tranquilo (brandub & Knowbru remix) /
Alto Astral - Luci\xE9rnaga /
Because Of Art - Transient /
Hassan- Tunnel /
Paul Deep - Tique /
Ogawa, OMB, Haruo Chikada - CO2 \xA0(Kostya Outta Remix) /`},{episodio:"689",titulo:"Resident / Episode 689 / Jul 20 2024",descripcion:`1 - Madraas \u2013 Nebra /\xA0
2 - Hobin Rude - Vivid Dreamscapes /\xA0
3 - Tamir Regev - Sounds Like A Melody /\xA0
4 - Paul Deep (AR) - Odyssey (Dmitry Molosh Remix /\xA0
5 - Because Of Art - You /\xA0
6 - Juan Sapia - Dragon Fly /\xA0
7 - Gowzer - Listen to me /\xA0
8 - Mike Griego - Back In Trance /\xA0
9 - Pablo Asturizaga - Sirenas /\xA0
10 - Ameli Paul - Ruptura Hernan Cattaneo & Mercurio Remix / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"45.4K",fecha:"2024-07-20",link:"https://mcdn.podbean.com/mf/download/nwuv2x4srgjyn3gh/689-HernanCattaneo-2024-07-20.mp3",tracklist:`Madraas \u2013 Nebra /
Hobin Rude - Vivid Dreamscapes /
Tamir Regev - Sounds Like A Melody /
Paul Deep (AR) - Odyssey (Dmitry Molosh Remix /
Because Of Art - You /
Juan Sapia - Dragon Fly /
Gowzer - Listen to me /
Mike Griego - Back In Trance /
Pablo Asturizaga - Sirenas /`},{episodio:"690",titulo:"Resident / Episode 690 / Jul 27 2024",descripcion:`1 - Alto Astral - Between Us
2 - Carlos Gatto - Hissing Pulse /\xA0
3 - Paul James Nolan - Hierophant
4 - Dosem feat. SOHMI - Answer /\xA0
5 - Kay-D - Midnight Hour (Luca Abayan Remix) /\xA0
6 - Nicolas Ruiz - Glass Shatters (Agustin Pietrocola) /\xA0
7 - Subandrio - Fusion /\xA0
8 - E A N P - Hypersonic /\xA0
9 - Federico Epis - Restart /\xA0
10 - AFAR - Im Bad (Checo Cotela Private Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"44.1K",fecha:"2024-07-27",link:"https://mcdn.podbean.com/mf/download/et9ze6xexapd2jvs/690-HernanCattaneo-2024-07-27.mp3",tracklist:`Alto Astral - Between Us
Carlos Gatto - Hissing Pulse /
Paul James Nolan - Hierophant
Dosem feat. SOHMI - Answer /
Kay-D - Midnight Hour (Luca Abayan Remix) /
Nicolas Ruiz - Glass Shatters (Agustin Pietrocola) /
Subandrio - Fusion /
E A N P - Hypersonic /
Federico Epis - Restart /`},{episodio:"691",titulo:"Resident / Episode 691 / Aug 03 2024",descripcion:`1 - Mike Rish - Ghostwriter /\xA0
2 - Alan Cerra - Storm /\xA0
3 - EANP - Karim (Kenan Savrun Remix) /\xA0
4 - Quivver - That Place You Know /\xA0
5 - Gai Barone \xA0- Disadvantaged Positions /\xA0
6 - Matrix & Danny J \u2013 Vertigo (Federico Monachesi Edit) /\xA0
7 - Alican - Everything To Me /\xA0
8 - Tiefstone - Eclico /\xA0
9 - Zstimer - So Good (Nila Remix) If You Wait /\xA0
10 - Durante feat. HANA - Hot Night (Khen remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"40.1K",fecha:"2024-08-03",link:"https://mcdn.podbean.com/mf/download/nnhk5it6teqr8iug/691-HernanCattaneo-2024-08-03.mp3",tracklist:`Mike Rish - Ghostwriter /
Alan Cerra - Storm /
EANP - Karim (Kenan Savrun Remix) /
Quivver - That Place You Know /
Gai Barone \xA0- Disadvantaged Positions /
Matrix & Danny J \u2013 Vertigo (Federico Monachesi Edit) /
Alican - Everything To Me /
Tiefstone - Eclico /
Zstimer - So Good (Nila Remix) If You Wait /`},{episodio:"692",titulo:"Resident / Episode 692 / Aug 10 2024",descripcion:`1 - Stereo Underground - Wanderlust /\xA0
2 - Dave Seaman - Nightfalls (PAUL (AR)) /\xA0
3 - Kostya Outta & Kamilo Sanclemente - Starlight (The Wash Remix) /\xA0
4 - Valen Gonzalez, Alain Pauwels - Un Dios Aparte /\xA0
5 - Teleport X, Cedren & Manu-L - id /\xA0
6 - IDQ - G2 /\xA0
7 - Federico Monachesi, Nicolas Viana - Dioptase /\xA0
8 - Because Of Art - Real High /\xA0
9 - Mike Griego - Deaf (Kostya Outta Remix) /\xA0
10 - D-Nox & Beckers feat Gai Barone \xA0- Acid / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"35.2K",fecha:"2024-08-10",link:"https://mcdn.podbean.com/mf/download/a2bdtx9mz9itammz/692-HernanCattaneo-2024-08-10.mp3",tracklist:`Stereo Underground - Wanderlust /
Dave Seaman - Nightfalls (PAUL (AR)) /
Kostya Outta & Kamilo Sanclemente - Starlight (The Wash Remix) /
Valen Gonzalez, Alain Pauwels - Un Dios Aparte /
Teleport X, Cedren & Manu-L - id /
IDQ - G2 /
Federico Monachesi, Nicolas Viana - Dioptase /
Because Of Art - Real High /
Mike Griego - Deaf (Kostya Outta Remix) /`},{episodio:"694",titulo:"Resident / Episode 694 / Aug 24 2024",descripcion:`1 - Ruben Karapetyan - Silentium /\xA0
2 - Ruben Karapetyan - Silentium (Gai Barone Remix) /\xA0
3 - Mazayr - Falling /\xA0
4 - Digital Mess - Lose Myself /\xA0
5 - Simos Tagias - Strange To Ourselves (Tonaco Remix) /\xA0
6 - NAVAR - Seeing you again /\xA0
7 - Lateral Cut Groove - Humdinger /\xA0
8 - Boytronic - Bryllyant (Baunder remix) /\xA0
9 - Gheit - Auditorial /\xA0
10 - Lopezhouse - Crosses and Angels Feat. Angela (Guy Mantzur Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"35.1K",fecha:"2024-08-24",link:"https://mcdn.podbean.com/mf/download/g8y9v3j733p3tvwb/694-HernanCattaneo-2024-08-24.mp3",tracklist:`Ruben Karapetyan - Silentium /
Ruben Karapetyan - Silentium (Gai Barone Remix) /
Mazayr - Falling /
Digital Mess - Lose Myself /
Simos Tagias - Strange To Ourselves (Tonaco Remix) /
NAVAR - Seeing you again /
Lateral Cut Groove - Humdinger /
Boytronic - Bryllyant (Baunder remix) /
Gheit - Auditorial /`},{episodio:"695",titulo:"Resident / Episode 695 / Aug 31 2024",descripcion:`1 - Kraftwerk - Autobahn (live on King Biscuit's Flower Hour FM 1975)[Jim Rider Extended Remix] /\xA0
2 - Juan Buitrago - \xA0Mirrors /\xA0
3 - DJ Zombie, Guy Maayan - Artifical (Weird Sounding Dude Remix) /\xA0
4 - Arcadio - Horizon (Fer Torti Remix) /\xA0
5 - Budakid - Promised /\xA0
6 - Christian Hornbostel - Vela /\xA0
7 - Tom Pavicich - Insight (Iovino Remix) /\xA0
8 - Digital Mess - White Crane /\xA0
9 - Anonimat, Albuquerque, HOO - Above Our Reality /\xA0
10 - Dabeat , Kamilo Sanclemente - Neon Shadows / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"35K",fecha:"2024-08-31",link:"https://mcdn.podbean.com/mf/download/3ctyu8jst2kixskc/695-HernanCattaneo-2024-08-31.mp3",tracklist:`Kraftwerk - Autobahn (live on King Biscuit's Flower Hour FM 1975)[Jim Rider Extended Remix] /
Juan Buitrago - \xA0Mirrors /
DJ Zombie, Guy Maayan - Artifical (Weird Sounding Dude Remix) /
Arcadio - Horizon (Fer Torti Remix) /
Budakid - Promised /
Christian Hornbostel - Vela /
Tom Pavicich - Insight (Iovino Remix) /
Digital Mess - White Crane /
Anonimat, Albuquerque, HOO - Above Our Reality /`},{episodio:"696",titulo:"Resident / Episode 696 / Sep 07 2024",descripcion:`1 - Valdovinos - Sensitive People / 
2 - After Burn & B.I.R.D.D (Ar) - Hearless / 
3 - FJL -\xA0 Illusion Temple / 
4 - KAY D- Stay (Dion Paola (AUS) Remix) / 
5 - Santiago Garcia, Sam Farsio / 
6 - Oliver & Tom - Fennec / 
7 - Ruben Karapetyan - Parisian Vibe (Molac) / 
8 - Nicolas Rada - Abyssal / 
9 - Santi Mossman - Monolit / 
10 - Aurora - The Blade (Checo Cotela Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"7",descargas:"36.1K",fecha:"2024-09-07",link:"https://mcdn.podbean.com/mf/download/msa8d3v8auek4gk2/696-HernanCattaneo-2024-09-07.mp3",tracklist:`Valdovinos - Sensitive People /
After Burn & B.I.R.D.D (Ar) - Hearless /
FJL -\xA0 Illusion Temple /
KAY D- Stay (Dion Paola (AUS) Remix) /
Santiago Garcia, Sam Farsio /
Oliver & Tom - Fennec /
Ruben Karapetyan - Parisian Vibe (Molac) /
Nicolas Rada - Abyssal /
Santi Mossman - Monolit /`},{episodio:"697",titulo:"Resident / Episode 697 / Sep 14 2024",descripcion:`1 - Eli Nissan - Star Gate /\xA0
2 - Eli Nissan - Miami /\xA0
3 - Rich Curtis & Dowden - A Different World (Juan Deminicis Remix) /\xA0
4 - Jan Blomqvist - Broken Mind Embassy (Luca Saporito Remix) /\xA0
5 - Nick Varon & Graziano Raffa \xA0- Malammore /\xA0
6 - Acopia - Just Fine (Nicolas Viana Bootleg) /\xA0
7 - Roc\xEDo Portillo, Valley (AR) ft Karim Sar Sar - Ghost Face /\xA0
8 - Bicep - Glue (COQUEIT & After Burn Edit) /\xA0
9 - Tiefstone - Persistence /\xA0
10 - Zac , Tiefstone , Camila (Ar) - Kaelid / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"34.9K",fecha:"2024-09-14",link:"https://mcdn.podbean.com/mf/download/8jk7zqs73dydpp2e/697-HernanCattaneo-2024-09-14.mp3",tracklist:`Eli Nissan - Star Gate /
Eli Nissan - Miami /
Rich Curtis & Dowden - A Different World (Juan Deminicis Remix) /
Jan Blomqvist - Broken Mind Embassy (Luca Saporito Remix) /
Nick Varon & Graziano Raffa \xA0- Malammore /
Acopia - Just Fine (Nicolas Viana Bootleg) /
Roc\xEDo Portillo, Valley (AR) ft Karim Sar Sar - Ghost Face /
Bicep - Glue (COQUEIT & After Burn Edit) /
Tiefstone - Persistence /`},{episodio:"698",titulo:"Resident / Episode 698 / Sep 21 2024",descripcion:`1 - Rolasoul - Sacorra /\xA0
2 - Olivier Weiter, Veljko Jovic, Forniva - Ocean (Estiva) /\xA0
3 - Booka Shade - Regenerate (Henri Bergmann Remix) /\xA0
4 - Glenn Morrison & Simon James - Supersonic Velvet /\xA0
5 - Dosem - Unjetlag /\xA0
6 - WhoMadeWho & K\xF6lsch - Heartless (Alex Wann Remix) /\xA0
7 - Agustin Pietrocola - Space /\xA0
8 - Agustin Pietrocola - Wild /\xA0
9 - Golden Hour, Abuk - Terrenal /\xA0
10 - Lately - Rufus Du Sol (Roman Remix) / Download episode on MP3 (Right click, save link as...) p>Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"34.9K",fecha:"2024-09-21",link:"https://mcdn.podbean.com/mf/download/6vnrpag9drsdiynj/698-HernanCattaneo-2024-09-21.mp3",tracklist:`Rolasoul - Sacorra /
Olivier Weiter, Veljko Jovic, Forniva - Ocean (Estiva) /
Booka Shade - Regenerate (Henri Bergmann Remix) /
Glenn Morrison & Simon James - Supersonic Velvet /
Dosem - Unjetlag /
WhoMadeWho & K\xF6lsch - Heartless (Alex Wann Remix) /
Agustin Pietrocola - Space /
Agustin Pietrocola - Wild /
Golden Hour, Abuk - Terrenal /`},{episodio:"699",titulo:"Resident / Episode 699 / Sep 28 2024",descripcion:`1 - Qess - It's Always Been There Cinthie Remix /\xA0
2 - Hernan Cattaneo & 36db \xA0- Static Sky (Melodic House Mix) /\xA0
3 - Diego Schiller - Open 25 /\xA0
4 - Dosem - Sunsetter /\xA0
5 - Nick Warren - The Rise /\xA0
6 - Rockka - Black Sands (Nicolas Benedetti Remix) /\xA0
7 - Laberynth - Benja Molina /\xA0
8 - Will DeKeizer - Tarantula /\xA0
9 - Hassan Maroofi, David Charpentier, Kooks - No Lemon (Dion Paola) /\xA0
10 - Julian Bast & Herr Bernhardt - Joy / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"34.4K",fecha:"2024-09-28",link:"https://mcdn.podbean.com/mf/download/dyumaawkgnzqz8cn/699-HernanCattaneo-2024-09-28.mp3",tracklist:`Qess - It's Always Been There Cinthie Remix /
Hernan Cattaneo & 36db \xA0- Static Sky (Melodic House Mix) /
Diego Schiller - Open 25 /
Dosem - Sunsetter /
Nick Warren - The Rise /
Rockka - Black Sands (Nicolas Benedetti Remix) /
Laberynth - Benja Molina /
Will DeKeizer - Tarantula /
Hassan Maroofi, David Charpentier, Kooks - No Lemon (Dion Paola) /`},{episodio:"700",titulo:"Resident / Episode 700 / Oct 05 2024",descripcion:`1 - Guy Gerber, Albertina - Dripping Diamonds /\xA0
2 - Billie Eillish - Chihiro (Konvex, Meloko Remix) /\xA0
3 - Francesco Pico - Rise Like A Flower (Jochem Hamerling Remix) /\xA0
4 - Paul Deep , Berni Turletti - Begtse /\xA0
5 - Miss Melera - Silk /\xA0
6 - Miss Melera - Coral /\xA0
7 - Gowzer - Reflection /\xA0
8 - Kalima - Utopia /\xA0
9 - Larrosa (AR) x SACK (AR) X Nico Sparvieri - Lost In Echos /\xA0
10 - Kevin Di Serna & Pole Position - Boral (Musumeci remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"38.4K",fecha:"2024-10-05",link:"https://mcdn.podbean.com/mf/download/vua7jabkxsbdjfs9/700-HernanCattaneo-2024-10-05.mp3",tracklist:`Guy Gerber, Albertina - Dripping Diamonds /
Billie Eillish - Chihiro (Konvex, Meloko Remix) /
Francesco Pico - Rise Like A Flower (Jochem Hamerling Remix) /
Paul Deep , Berni Turletti - Begtse /
Miss Melera - Silk /
Miss Melera - Coral /
Gowzer - Reflection /
Kalima - Utopia /
Larrosa (AR) x SACK (AR) X Nico Sparvieri - Lost In Echos /`},{episodio:"701",titulo:"Resident / Episode 701 / Oct 12 2024",descripcion:`1 - Hot TuneiK & Amber Long - Enn /\xA0
2 - Kamilo Sanclemente - Elyseum (Weird Sounding Dude) /\xA0
3 - Hobin Rude - Echoes of the Forgotten /\xA0
4 - Dmitry Molosh - The Book /\xA0
5 - Supacooks - Blaster (Fuenka Remix) /\xA0
6 - Berni Turletti & Gai Barone - Vibrations of Matter /\xA0
7 - Callecat & Nick Varon - Beyond Perceptions (Hernan Cattaneo & Jamie Stevens Remix) /\xA0
8 - Paul Deep Berni Turletti - Rudra /\xA0
9 - FJL - Lost In Paradise /\xA0
10 - Kevin Di Serna & Pole Position - Boral (Voon Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"36.1K",fecha:"2024-10-12",link:"https://mcdn.podbean.com/mf/download/6t8py87bigakfeu8/701-HernanCattaneo-2024-10-12.mp3",tracklist:`Hot TuneiK & Amber Long - Enn /
Kamilo Sanclemente - Elyseum (Weird Sounding Dude) /
Hobin Rude - Echoes of the Forgotten /
Dmitry Molosh - The Book /
Supacooks - Blaster (Fuenka Remix) /
Berni Turletti & Gai Barone - Vibrations of Matter /
Callecat & Nick Varon - Beyond Perceptions (Hernan Cattaneo & Jamie Stevens Remix) /
Paul Deep Berni Turletti - Rudra /
FJL - Lost In Paradise /`},{episodio:"702",titulo:"Resident / Episode 702 / Oct 19 2024",descripcion:`1 - Stereo Underground - Heartbeat /\xA0
2 - The Smile - Don't Get Me Started (Uccelli Remix) /\xA0
3 - Zankee Gulati - Magnetic Island /\xA0
4 - Valdovinos - Bacab /\xA0
5 - Dave Seaman - Yoho /\xA0
6 - Tali Muss - Impossible /\xA0
7 - Sasha & Jody Barr - Phaxon (Einmusik Remix) /\xA0
8 - Gerwin Van Engelenburg - Grey Matter (Tevatron Remix) /\xA0
9 - Robert Babicz - The Last Soul /\xA0
10 - Hans Zimmer - Day One (PAUL (AR) unofficial rmx) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"34.2K",fecha:"2024-10-19",link:"https://mcdn.podbean.com/mf/download/xusc6w7s3wranc8m/702-HernanCattaneo-2024-10-19.mp3",tracklist:`Stereo Underground - Heartbeat /
The Smile - Don't Get Me Started (Uccelli Remix) /
Zankee Gulati - Magnetic Island /
Valdovinos - Bacab /
Dave Seaman - Yoho /
Tali Muss - Impossible /
Sasha & Jody Barr - Phaxon (Einmusik Remix) /
Gerwin Van Engelenburg - Grey Matter (Tevatron Remix) /
Robert Babicz - The Last Soul /`},{episodio:"704",titulo:"Resident / Episode 704 / Nov 02 2024",descripcion:`1 - Temple Gate - Lost Love /\xA0
2 - Nicolas Viana, Matthew Sona - Alive /\xA0
3 - Luis Damora & Nila - Lose Kontrol /\xA0
4 - Reconstruct - Repeating Time /\xA0
5 - Bemannte & Bruder - Summer Nights (Antrim Remix) /\xA0
6 - Golan Zocher - Atalo (Dub) /\xA0
7 - Haen - Is This Jazz (Andr\xE9 Moret Remix) /\xA0
8 - Cendryma - Pass Through (Weird Sounding Dude Remix) /\xA0
9 - Patch Park - Hips and Dips /\xA0
10 - Depeche mode - Its No Good (Tiefstone Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"8",descargas:"37K",fecha:"2024-11-02",link:"https://mcdn.podbean.com/mf/download/9mn7bbse84x4pubx/704-HernanCattaneo-2024-11-02.mp3",tracklist:`Temple Gate - Lost Love /
Nicolas Viana, Matthew Sona - Alive /
Luis Damora & Nila - Lose Kontrol /
Reconstruct - Repeating Time /
Bemannte & Bruder - Summer Nights (Antrim Remix) /
Golan Zocher - Atalo (Dub) /
Haen - Is This Jazz (Andr\xE9 Moret Remix) /
Cendryma - Pass Through (Weird Sounding Dude Remix) /
Patch Park - Hips and Dips /`},{episodio:"705",titulo:"Resident / Episode 705 / Nov 09 2024",descripcion:`1 - Fabian Argomedo - Solar /\xA0
2 - Hypercube (GMJ & Matter Remix) /\xA0
3 - Maze 28 - Superbloom /\xA0
4 - Melodiam AR - Big Sirens (Mind Of Us Remix) /\xA0
5 - James Teej- Saturn's Son - Genesis (Satoshi Fumi) /\xA0
6 - Glenn Morrison - Gotta Get It Right /\xA0
7 - Argia - Oxido /\xA0
8 - E A N P - Rocket /\xA0
9 - Paul Deep , Luciano Lozz - Alice /\xA0
10 - Max Copper - Cardano Circles (Kevin Di Serna Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"35.5K",fecha:"2024-11-09",link:"https://mcdn.podbean.com/mf/download/jng3e7vgi3jwujtg/705-HernanCattaneo-2024-11-09.mp3",tracklist:`Fabian Argomedo - Solar /
Hypercube (GMJ & Matter Remix) /
Maze 28 - Superbloom /
Melodiam AR - Big Sirens (Mind Of Us Remix) /
James Teej- Saturn's Son - Genesis (Satoshi Fumi) /
Glenn Morrison - Gotta Get It Right /
Argia - Oxido /
E A N P - Rocket /
Paul Deep , Luciano Lozz - Alice /`},{episodio:"706",titulo:"Resident / Episode 706 / Nov 16 2024",descripcion:`1 - Ignacio Ravagnan \xA0- Strobe /\xA0
2 - Tripswitch - Dose (Kamilo Sanclemente, Andr\xE9 Moret Remix) /\xA0
3 - Gai Barone - ID /\xA0
4 - Martin Di Sciascio - Stoned /\xA0
5 - Agustin Bertolotti - Railride /\xA0
6 - Larrosa (AR), Axel Giova - Obscura /\xA0
7 - Matthew Sona - You Got It /\xA0
8 - Cendryma - Pass Through (Weird Sounding Dude Remix) /\xA0
9 - Kamilo Sanclemente, Andr\xE9 Moret - Mirage /\xA0
10 - Regina Picone - High Spirits / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"35.7K",fecha:"2024-11-16",link:"https://mcdn.podbean.com/mf/download/kidjzd4unzx3ijtx/706-HernanCattaneo-2024-11-16.mp3",tracklist:`Ignacio Ravagnan \xA0- Strobe /
Tripswitch - Dose (Kamilo Sanclemente, Andr\xE9 Moret Remix) /
Gai Barone - ID /
Martin Di Sciascio - Stoned /
Agustin Bertolotti - Railride /
Larrosa (AR), Axel Giova - Obscura /
Matthew Sona - You Got It /
Cendryma - Pass Through (Weird Sounding Dude Remix) /
Kamilo Sanclemente, Andr\xE9 Moret - Mirage /`},{episodio:"707",titulo:"Resident / Episode 707 / Nov 23 2024",descripcion:`1 - Bagsol - After Storm /\xA0
2 - Diego Acosta & Rodrigo Pochelu - Black Cat /\xA0
3 - Agustin Pietrocola - Nitrogen /\xA0
4 - Marc Denuit - Just Say You Want Me (Lila Rose UY Remix) /\xA0
5 - Rick Pier O'Neil - Photon Surge /\xA0
6 - Ruben Karapetyan - State Of Progression /\xA0
7 - Mind Echoes - Reconstruction /\xA0
8 - Gai Barone, Luke Brancaccio & Kiki Cave - Vicious Lights (Lexicon Avenue Remix) /\xA0
9 - Federico Puentes - Orion's Belt (Freedo Mosho & Kaspar Tasane Remix) /\xA0
10 - Dave Seaman - Two by Two (Alican Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"34.8K",fecha:"2024-11-23",link:"https://mcdn.podbean.com/mf/download/vea9v48njxatcqgg/707-HernanCattaneo-2024-11-23.mp3",tracklist:`Bagsol - After Storm /
Diego Acosta & Rodrigo Pochelu - Black Cat /
Agustin Pietrocola - Nitrogen /
Marc Denuit - Just Say You Want Me (Lila Rose UY Remix) /
Rick Pier O'Neil - Photon Surge /
Ruben Karapetyan - State Of Progression /
Mind Echoes - Reconstruction /
Gai Barone, Luke Brancaccio & Kiki Cave - Vicious Lights (Lexicon Avenue Remix) /
Federico Puentes - Orion's Belt (Freedo Mosho & Kaspar Tasane Remix) /`},{episodio:"708",titulo:"Resident / Episode 708 / Nov 30 2024",descripcion:`1 - Fran Garay - Phase Sync (Eichenbaum, STEREO MUNK & Dublew Remix) -
2 - Kit Lawson - That Was Then /\xA0
3 - Marsh x Volen Sentir - Ascension /\xA0
4 - Tiefstone, Camila (AR) - Positron /\xA0
5 - Anonimat, Nicolas Viana - Endgame /\xA0
6 - James Organ - Come With Me (Feat. The Angel) /\xA0
7 - Tonaco - Future Sirens /\xA0
8 - Kasey Taylor - Razor (Callecat Remix) /\xA0
9 - Roman - For Myself /\xA0
10 - Benja Molina - Quantum / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"35.7K",fecha:"2024-11-30",link:"https://mcdn.podbean.com/mf/download/yv6w4w2bsg2sqt5v/708-HernanCattaneo-2024-11-30.mp3",tracklist:`Fran Garay - Phase Sync (Eichenbaum, STEREO MUNK & Dublew Remix) -
Kit Lawson - That Was Then /
Marsh x Volen Sentir - Ascension /
Tiefstone, Camila (AR) - Positron /
Anonimat, Nicolas Viana - Endgame /
James Organ - Come With Me (Feat. The Angel) /
Tonaco - Future Sirens /
Kasey Taylor - Razor (Callecat Remix) /
Roman - For Myself /`},{episodio:"709",titulo:"Resident / Episode 709 / Dec 07 2024",descripcion:`1 - N-TCHBL - Esther /\xA0
2 - HUSA & ZEYADA -Are We Alive (Sinca Remix) /\xA0
3 - Death on the Balcony - Patterns /\xA0
4 - Hot TuneiK Feat. Amber Long - Heaven On Earth /\xA0
5 - Paul Lennar Ft. Civen Z - Leaving The Lights /\xA0
6 - Paul Lennar Ft. Zetter - Raherka /\xA0
7 - Sistersweet - Birchwood Road /\xA0
8 - FJL, DEMIS - Not Glide /\xA0
9 - Alan Schultz - Drizzle /\xA0
10 - Nordfold - Pathways / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"37.2K",fecha:"2024-12-07",link:"https://mcdn.podbean.com/mf/download/kivtit6ss7fyfief/709-HernanCattaneo-2024-12-07.mp3",tracklist:`N-TCHBL - Esther /
HUSA & ZEYADA -Are We Alive (Sinca Remix) /
Death on the Balcony - Patterns /
Hot TuneiK Feat. Amber Long - Heaven On Earth /
Paul Lennar Ft. Civen Z - Leaving The Lights /
Paul Lennar Ft. Zetter - Raherka /
Sistersweet - Birchwood Road /
FJL, DEMIS - Not Glide /
Alan Schultz - Drizzle /`},{episodio:"710",titulo:"Resident / Episode 710 / Dec 14 2024",descripcion:`1 - Paul Deep - Lilac (Ilias Katelanos & Plecta Remix) /\xA0
2 - Black 8 - Behind Closed Eyes /\xA0
3 - Soulmac & Daan - Ravena (Andr\xE9 Moret Remix) /\xA0
4 - Gorkiz & Matt Oliver - Digital String - (FM Edit) /\xA0
5 - Gaston Ponte - Deliverance (Ruben Karapetyan Remix) /\xA0
6 - Franky Wah & Zoe Kypri - Tomorrow's Dusk /\xA0
7 - Abity & Luke Costa - Smolensko /\xA0
8 - Zuccasam - Alchemist /\xA0
9 - Alejo Gonzalez - Eclipse /\xA0
10 - Mano Le Tough - Infinite Scroll / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"6",descargas:"34.7K",fecha:"2024-12-14",link:"https://mcdn.podbean.com/mf/download/w5ushwm3q446wyy7/710-HernanCattaneo-2024-12-14.mp3",tracklist:`Paul Deep - Lilac (Ilias Katelanos & Plecta Remix) /
Black 8 - Behind Closed Eyes /
Soulmac & Daan - Ravena (Andr\xE9 Moret Remix) /
Gorkiz & Matt Oliver - Digital String - (FM Edit) /
Gaston Ponte - Deliverance (Ruben Karapetyan Remix) /
Franky Wah & Zoe Kypri - Tomorrow's Dusk /
Abity & Luke Costa - Smolensko /
Zuccasam - Alchemist /
Alejo Gonzalez - Eclipse /`},{episodio:"711",titulo:"Resident / Episode 711 / Dec 21 2024",descripcion:`1 - Dowden - Lost Signal /\xA0
2 - Michael A - Ignition (Nicolas Benedetti Remix) /\xA0
3 - Hobin Rude - Cryptic Waves /\xA0
4 - Juan Pablo Torrez, Kamilo Sanclemente - Unknown Destination /\xA0
5 - Gai Barone - Sheen & Crock (Solee Remix) /\xA0
6 - Fabrizio Spachuk - Sarto /\xA0
7 - Paul Lennar Ft. BassQ - Deep In The Dark /\xA0
8 - Servando, Julieta Kunhle - Words to say /\xA0
9 - Callecat & Paul Hazendonk - State Of Mind (Noiyse Project Remix) /\xA0
10 - Will Dekeizer - 2000bc (Roger Martinez remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"36.3K",fecha:"2024-12-21",link:"https://mcdn.podbean.com/mf/download/i4ekf5vqwjq9ia2y/711-HernanCattaneo-2024-12-21.mp3",tracklist:`Dowden - Lost Signal /
Michael A - Ignition (Nicolas Benedetti Remix) /
Hobin Rude - Cryptic Waves /
Juan Pablo Torrez, Kamilo Sanclemente - Unknown Destination /
Gai Barone - Sheen & Crock (Solee Remix) /
Fabrizio Spachuk - Sarto /
Paul Lennar Ft. BassQ - Deep In The Dark /
Servando, Julieta Kunhle - Words to say /
Callecat & Paul Hazendonk - State Of Mind (Noiyse Project Remix) /`},{episodio:"712",titulo:"Resident / Episode 712/ Dec 28 2024",descripcion:`1 - Paul Deep - Refracted (After Burn remix) /\xA0
2 - Subandrio - Heritage 82' /\xA0
3 - Ignacio Corazza & Freedo Mosho - Ghost Rider (Maze 28 Reform) /\xA0
4 - Luca Abayan - Kuzushi /\xA0
5 - Dj Zombi - Harmoinized (Dmitry Molosh Remix) /\xA0
6 - Nacres - Arcadia (Evegrem Remix) /\xA0
7 - Roman - ID /\xA0
8 - Kevin Di Serna & Santor - Blessway /\xA0
9 - Fabrizio Spachuk - Tu Felicidad /\xA0
10 - Sasha - Bloodlock (DJ Ruby 2024 Rework) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"37.5K",fecha:"2024-12-28",link:"https://mcdn.podbean.com/mf/download/p4ikhgd8vfcwerqx/712-HernanCattaneo-2024-12-28.mp3",tracklist:`Paul Deep - Refracted (After Burn remix) /
Subandrio - Heritage 82' /
Ignacio Corazza & Freedo Mosho - Ghost Rider (Maze 28 Reform) /
Luca Abayan - Kuzushi /
Dj Zombi - Harmoinized (Dmitry Molosh Remix) /
Nacres - Arcadia (Evegrem Remix) /
Roman - ID /
Kevin Di Serna & Santor - Blessway /
Fabrizio Spachuk - Tu Felicidad /`},{episodio:"714",titulo:"Resident / Episode 714 / Jan 11 2025",descripcion:`LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.2 
Hern\xE1n Catt\xE1neo. Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"27.3K",fecha:"2025-01-11",link:"https://mcdn.podbean.com/mf/download/id6nz0k3efn97gmo/714-HernanCattaneo-2025-01-11.mp3",tracklist:"LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.2"},{episodio:"715",titulo:"Resident / Episode 715 / Jan 18 2025",descripcion:`LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.3 
Hern\xE1n Catt\xE1neo. Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"10",descargas:"27.3K",fecha:"2025-01-18",link:"https://mcdn.podbean.com/mf/download/dhfuvuy78jog6upa/715-HernanCattaneo-2025-01-18.mp3",tracklist:"LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.3"},{episodio:"716",titulo:"Resident / Episode 716 / Jan 25 2025",descripcion:`LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.4 
Hern\xE1n Catt\xE1neo. Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"8",descargas:"34.4K",fecha:"2025-01-25",link:"https://mcdn.podbean.com/mf/download/pcq88abdmn1ni00v/716-HernanCattaneo-2025-01-25.mp3",tracklist:"LIVE FROM WOODSTOCK 69 - NETHERLANDS Pt.4"},{episodio:"717",titulo:"Resident / Episode 717 / Feb 01 2025",descripcion:`1 - Juan Yarin & Khen - Yoka /\xA0
2 - Dave Walker, Kiz Pattison - Thwip /\xA0
3 - Kostya Outta - Awakening (Supacooks & Ruben Karapetyan Remix) /\xA0
4 - Noiyse Project - Turbulance /\xA0
5 - Quivver - These Are The Days ( Paul (AR) rework2025) /\xA0
6 - Jess Varela - I Never /\xA0
7 - Lanvary - Cercanias (Alex O'Rion Remix) -9- Mariusso - Horizon Thought /\xA0
8 - Ewan Rill - Snowing /\xA0
9 - Mariusso - Horizon Thought /\xA0
10 - Guy Mantzur, Khen - Shine Tomorrow / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"30.1K",fecha:"2025-02-01",link:"https://mcdn.podbean.com/mf/download/467uwc7j35s87axi/717-HernanCattaneo-2025-02-01.mp3",tracklist:`Juan Yarin & Khen - Yoka /
Dave Walker, Kiz Pattison - Thwip /
Kostya Outta - Awakening (Supacooks & Ruben Karapetyan Remix) /
Noiyse Project - Turbulance /
Quivver - These Are The Days ( Paul (AR) rework2025) /
Jess Varela - I Never /
Lanvary - Cercanias (Alex O'Rion Remix) -9- Mariusso - Horizon Thought /
Ewan Rill - Snowing /
Mariusso - Horizon Thought /`},{episodio:"718",titulo:"Resident / Episode 718 / Feb 08 2025",descripcion:`1 - Matter - Livid /\xA0
2 - Juan Deminicis - Deep Rock Galactic /\xA0
3 - Juan Deminicis - Under Control /\xA0
4 - Dave Seaman ft. Cari Golden - Venus Flytrap (DUB Mix) /\xA0
5 - Cirque du Soleil - Temperatio (Hicky & Kalo Remix) /\xA0
6 - Kebin van Reeken - Akaliza /\xA0
7 - Kris Dur, Diego Berrondo - ID /\xA0
8 - Left 2 Dust - Attending (Paul Hazendonk & Return To Saturn Remix) /\xA0
9 - Around Us - Exile /\xA0
10 - Greta Meier & Sebastian Sellares - Benevolence (Paul Thomas Extended Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"6",descargas:"29K",fecha:"2025-02-08",link:"https://mcdn.podbean.com/mf/download/emy76t9mzy5rdjrz/718-HernanCattaneo-2025-02-08.mp3",tracklist:`Matter - Livid /
Juan Deminicis - Deep Rock Galactic /
Juan Deminicis - Under Control /
Dave Seaman ft. Cari Golden - Venus Flytrap (DUB Mix) /
Cirque du Soleil - Temperatio (Hicky & Kalo Remix) /
Kebin van Reeken - Akaliza /
Kris Dur, Diego Berrondo - ID /
Left 2 Dust - Attending (Paul Hazendonk & Return To Saturn Remix) /
Around Us - Exile /`},{episodio:"719",titulo:"Resident / Episode 719 / Feb 15 2025",descripcion:`1 - Alto Astral - Between Us /\xA0
2 - Analog Jungs - Ultraviolet /\xA0
3 - Federico Epis - Numa /\xA0
4 - Doriaan - Pixan /\xA0
5 - Ewan Rill - Sustain Acid /\xA0
6 - Marcelo Vasami, Dimuth K - Nomade /\xA0
7 - Lulu - Duplicity /\xA0
8 - Rolasoul - Atomic Blonde /\xA0
9 - Dabeat - Red Sky Night /\xA0
10 - Re-Type - Dalliance / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"28.7K",fecha:"2025-02-15",link:"https://mcdn.podbean.com/mf/download/af96uy77xachsbeg/719-HernanCattaneo-2025-02-15.mp3",tracklist:`Alto Astral - Between Us /
Analog Jungs - Ultraviolet /
Federico Epis - Numa /
Doriaan - Pixan /
Ewan Rill - Sustain Acid /
Marcelo Vasami, Dimuth K - Nomade /
Lulu - Duplicity /
Rolasoul - Atomic Blonde /
Dabeat - Red Sky Night /`},{episodio:"720",titulo:"Resident / Episode 720 / Feb 22 2025",descripcion:`1 - Ruben Karapetyan - Neurotransmitter (Gai Barone Extended Mix) /\xA0
2 - Claudio Cornejo (AR) - ID /\xA0
3 - Black 8 - Higher We Fly /\xA0
4 - Dabeat - Cycles /\xA0
5 - Will DeKeizer - Caterpiller /\xA0
6 - Jiggler - Moments /\xA0
7 - Aubrey Fry & Nick Stoynoff - Baller /\xA0
8 - Gab Rhome - Work It (Facundo Mohrr Remix) /\xA0
9 - Paul Thomas & Das Pharaoh - Dale (Ruben Karapetyan Remix) /\xA0
10 - WOO YORK - Feeling feat. Mark Tarmonea ( Hernan Cattaneo & Mercurio) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"31.1K",fecha:"2025-02-22",link:"https://mcdn.podbean.com/mf/download/qsbty6d4w888fj8r/720-HernanCattaneo-2025-02-22.mp3",tracklist:`Ruben Karapetyan - Neurotransmitter (Gai Barone Extended Mix) /
Claudio Cornejo (AR) - ID /
Black 8 - Higher We Fly /
Dabeat - Cycles /
Will DeKeizer - Caterpiller /
Jiggler - Moments /
Aubrey Fry & Nick Stoynoff - Baller /
Gab Rhome - Work It (Facundo Mohrr Remix) /
Paul Thomas & Das Pharaoh - Dale (Ruben Karapetyan Remix) /`},{episodio:"721",titulo:"Resident / Episode 721 / Mar 01 2025",descripcion:`1 - Gai Barone - Bitter Misery /\xA0
2 - Doffo - Appetite /\xA0
3 - Maezbi, Agustin Ficarra - Green Time /\xA0
4 - Budakid - Freedom (Patrice B\xE4umel Remix) /\xA0
5 - A-Jay (SL), Sistersweet - Shifter /\xA0
6 - Seyah - Horizon (Luca Abayan & Tato Seco Remix)
7 - Will DeKeizer - Sound Of Neptune /\xA0
8 - GSEP & Rikki Sawyer - Shuttle (Alan Cerra Remix) /\xA0
9 - Skiy - Celestial Gate (ELIF Remix) /\xA0
10 - Yeadon - What Is Real / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"30.9K",fecha:"2025-03-01",link:"https://mcdn.podbean.com/mf/download/2khk2fw8trgbpvv8/721-HernanCattaneo-2025-03-01.mp3",tracklist:`Gai Barone - Bitter Misery /
Doffo - Appetite /
Maezbi, Agustin Ficarra - Green Time /
Budakid - Freedom (Patrice B\xE4umel Remix) /
A-Jay (SL), Sistersweet - Shifter /
Seyah - Horizon (Luca Abayan & Tato Seco Remix)
Will DeKeizer - Sound Of Neptune /
GSEP & Rikki Sawyer - Shuttle (Alan Cerra Remix) /
Skiy - Celestial Gate (ELIF Remix) /`},{episodio:"722",titulo:"Resident / Episode 722 / Mar 08 2025",descripcion:`1 - Gadi Mitrani - Manifesta /\xA0
2 - Avantime - Dusk (Lavie Au Soleil Remix) /\xA0
3 - Will DeKeizer - Dixieland /\xA0
4 - Wassu - You Make Me Feel (Kasey Taylor Remix) /\xA0
5 - Federico Epis -Blue Skies /\xA0
6 - Patch Park - Hips and Dips (Zankee Gulati Remix) /\xA0
7 - Zuccasam - Come Home /\xA0
8 - Moshic - I Took Your Love /\xA0
9 - Tiefstone - Anubis /\xA0
10 - Luciano Scheffer - Sleeping Gods (Gorkiz Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"34.7K",fecha:"2025-03-08",link:"https://mcdn.podbean.com/mf/download/ztnk3r27vw6e9qyg/722-HernanCattaneo-2025-03-08.mp3",tracklist:`Gadi Mitrani - Manifesta /
Avantime - Dusk (Lavie Au Soleil Remix) /
Will DeKeizer - Dixieland /
Wassu - You Make Me Feel (Kasey Taylor Remix) /
Federico Epis -Blue Skies /
Patch Park - Hips and Dips (Zankee Gulati Remix) /
Zuccasam - Come Home /
Moshic - I Took Your Love /
Tiefstone - Anubis /`},{episodio:"724",titulo:"Resident / Episode 724 / Mar 22 2025",descripcion:`1 - The Beloved - The Sun Rising (Framewerk Rewerk( /\xA0
2 - Nick Warren - Cobble Pot (Zankee Gulati Remix) /\xA0
3 - Amh\xE1in & Covsky - Salamander - (Kasey Taylor Remix) /\xA0
4 - Miss Melera - Quartz /\xA0
5 - Andr\xE9 Moret - Drift Whispers /\xA0
6 - Roc\xEDo Portillo, Valley (AR), Karim Sar Sar - Music Therapy /\xA0
7 - Hugo Cantarra - Dream Of You (feat. KOATES) /\xA0
8 - Barry Can't Swim, Ben Bohmer, Steve Bug, Pronbugs - Revelation M9124 (Kevin Di Serna Fusion Mix) /\xA0
9 - Morttagua - Amunet (Gorkiz Remix) /\xA0
10 - Faithless - Crazy English Summer (Antrim Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"42.4K",fecha:"2025-03-22",link:"https://mcdn.podbean.com/mf/download/h9274rq5xq8vbfm3/724-HernanCattaneo-2025-03-22.mp3",tracklist:`The Beloved - The Sun Rising (Framewerk Rewerk( /
Nick Warren - Cobble Pot (Zankee Gulati Remix) /
Amh\xE1in & Covsky - Salamander - (Kasey Taylor Remix) /
Miss Melera - Quartz /
Andr\xE9 Moret - Drift Whispers /
Roc\xEDo Portillo, Valley (AR), Karim Sar Sar - Music Therapy /
Hugo Cantarra - Dream Of You (feat. KOATES) /
Barry Can't Swim, Ben Bohmer, Steve Bug, Pronbugs - Revelation M9124 (Kevin Di Serna Fusion Mix) /
Morttagua - Amunet (Gorkiz Remix) /`},{episodio:"725",titulo:"Resident / Episode 725 / Mar 29 2025",descripcion:`1 - Regina Picone- The shift /\xA0
2 - Tomas Briski - Pupil of the sound /\xA0
3 - Tiefstone \xA0- Monte carlo /\xA0
4 - Jesuan M - Remember To /\xA0
5 - Dilby - Stay True /\xA0
6 - Anonimat, George X - Telazar /\xA0
7 - Yohai Mor - Existence /\xA0
8 - Because of Art - Engage /\xA0
9 - Cian Moynagh- - What If I Fall /\xA0
10 - Falling Out Of Time / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"26.9K",fecha:"2025-03-29",link:"https://mcdn.podbean.com/mf/download/ztnae4ceueihcba3/725-HernanCattaneo-2025-03-29.mp3",tracklist:`Regina Picone- The shift /
Tomas Briski - Pupil of the sound /
Tiefstone \xA0- Monte carlo /
Jesuan M - Remember To /
Dilby - Stay True /
Anonimat, George X - Telazar /
Yohai Mor - Existence /
Because of Art - Engage /
Cian Moynagh- - What If I Fall /`},{episodio:"726",titulo:"Resident / Episode 726 / Apr 05 2025",descripcion:`1 - Tomas Harguintegui - Inner Growth /\xA0
2 - Enamour - Jackpot /\xA0
3 - Axel Giova - Analog /\xA0
4 - Nick Varon - Maximus /\xA0
5 - Mark Tammo & Fiendski - Last Chance \xA0(Martin Gardoqui & Destain remix ) /\xA0
6 - Sultan - Shepard - Mainline /\xA0
7 - Soundexile - Alone in Nowhere (FOLGAR Remix) /\xA0
8 - Nicolas Rada - Tangie Haze /\xA0
9 - DJ Ruby - Goldrake /\xA0
10 - CHVRCHES - Empty Threat (Ciro Riveiro Private Bootleg) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"27.4K",fecha:"2025-04-05",link:"https://mcdn.podbean.com/mf/download/8nw6jerfy9nsesxf/726-HernanCattaneo-2025-04-05.mp3",tracklist:`Tomas Harguintegui - Inner Growth /
Enamour - Jackpot /
Axel Giova - Analog /
Nick Varon - Maximus /
Mark Tammo & Fiendski - Last Chance \xA0(Martin Gardoqui & Destain remix ) /
Sultan - Shepard - Mainline /
Soundexile - Alone in Nowhere (FOLGAR Remix) /
Nicolas Rada - Tangie Haze /
DJ Ruby - Goldrake /`},{episodio:"727",titulo:"Resident / Episode 727 / Apr 12 2025",descripcion:`1 - Solis [US] - Every Single Moment /\xA0
2 - RUBIA - Breeze /\xA0
3 - Boraa - Fear Of The Unknown /\xA0
4 - Ciro Riveiro - Malika /\xA0
5 - Kabi - Rainbow /\xA0
6 - Nattier - Learning to Fly /\xA0
7 - Shayan Pasha, Redspace - Pantheon /\xA0
8 - Tiefstone - Mirage /\xA0
9 - Glenn Morrison - TR6 /\xA0
10 - Paul Loraine - Minor Major (DCLVIII OFC Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"29K",fecha:"2025-04-12",link:"https://mcdn.podbean.com/mf/download/w4aag69rftm7ke3j/727-HernanCattaneo-2025-04-12.mp3",tracklist:`Solis [US] - Every Single Moment /
RUBIA - Breeze /
Boraa - Fear Of The Unknown /
Ciro Riveiro - Malika /
Kabi - Rainbow /
Nattier - Learning to Fly /
Shayan Pasha, Redspace - Pantheon /
Tiefstone - Mirage /
Glenn Morrison - TR6 /`},{episodio:"728",titulo:"Resident / Episode 728 / Apr 19 2025",descripcion:`1 - Kevin Yair - Timon /\xA0
2 - Terry Grant - I'll Kill You (Teiko Yume's frequent flyer remix) /\xA0
3 - Bachir Salloum - You make me feel /\xA0
4 - Paul Thomas, Dylhen - Cosmos (DJ Ruby Remix) /\xA0
5 - Fordal - Arts Pleasure /\xA0
6 - JFR, Lucas Z\xE1rate - Siamba (Matthew Sona Extended Mix) /\xA0
7 - Edu Schwartz - Like A Dream (Anonimat & Nicolas Viana Remix) /\xA0
8 - BLANCAh - Estranha Calmaria (Neoclassic Remix) /\xA0
9 - Luciano Lozz - No Society (Graziano Raffa Remix) /\xA0
10 - Stereocalypse feat. Irvine Welsh - How No (\xC2me Remix) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"38.1K",fecha:"2025-04-19",link:"https://mcdn.podbean.com/mf/download/apg8cagcm2d4abdp/728-HernanCattaneo-2025-04-19.mp3",tracklist:`Kevin Yair - Timon /
Terry Grant - I'll Kill You (Teiko Yume's frequent flyer remix) /
Bachir Salloum - You make me feel /
Paul Thomas, Dylhen - Cosmos (DJ Ruby Remix) /
Fordal - Arts Pleasure /
JFR, Lucas Z\xE1rate - Siamba (Matthew Sona Extended Mix) /
Edu Schwartz - Like A Dream (Anonimat & Nicolas Viana Remix) /
BLANCAh - Estranha Calmaria (Neoclassic Remix) /
Luciano Lozz - No Society (Graziano Raffa Remix) /`},{episodio:"729",titulo:"Resident / Episode 729 / Apr 26 2025",descripcion:`1 - Miguel Ante - Mind Scissors (Kevin Yair Remix) /\xA0
2 - Tiefstone - Song of the Valkyries /\xA0
3 - Tato Seco - Serendipia (Ewan Rill Remix) /\xA0
4 - Luis Damora - Dream Off /\xA0
5 - Mareveg - Psycho Vibes /\xA0
6 - Byhon - 119 Days Without You /\xA0
7 - Silvertooth - Satellites (Tribalism Mix) /\xA0
8 - Gowzer - Cosmos /\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 
9 - Andre Moret, Mariusso - Cygnus (Cosmonaut Extended Mix) /\xA0
10 - DJ Beat2 - Chasing Stardust / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"27.4K",fecha:"2025-04-26",link:"https://mcdn.podbean.com/mf/download/nntrkfvvkzw6gwmg/729-HernanCattaneo-2025-04-26.mp3",tracklist:`Miguel Ante - Mind Scissors (Kevin Yair Remix) /
Tiefstone - Song of the Valkyries /
Tato Seco - Serendipia (Ewan Rill Remix) /
Luis Damora - Dream Off /
Mareveg - Psycho Vibes /
Byhon - 119 Days Without You /
Silvertooth - Satellites (Tribalism Mix) /
Gowzer - Cosmos /
Andre Moret, Mariusso - Cygnus (Cosmonaut Extended Mix) /`},{episodio:"730",titulo:"Resident / Episode 730 / May 03 2025",descripcion:`1-Notamous - Black Horizon (Hobin Rude Remix) /\xA0
2-Sinca - Told U So /\xA0
3-Dabeat - Ecco /\xA0
4-Nick Varon & Deekay - Kismet /\xA0
5-ECLAREON - Nattier, Ernesto Romero Kamilo Sanclemente /\xA0
6-Roman - Left Me /\xA0
7-Mariusso - Silent Echo /\xA0
8-Fordal - The Rush /\xA0
9-Shoges - Warmer
10-Soul Mekanik - I'll Call You (Marcelo Vasami Rework) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"29.6K",fecha:"2025-05-03",link:"https://mcdn.podbean.com/mf/download/bpkfvdcz9e2ttqgv/730-HernanCattaneo-2025-05-03.mp3",tracklist:`Notamous - Black Horizon (Hobin Rude Remix) /
Sinca - Told U So /
Dabeat - Ecco /
Nick Varon & Deekay - Kismet /
ECLAREON - Nattier, Ernesto Romero Kamilo Sanclemente /
Roman - Left Me /
Mariusso - Silent Echo /
Fordal - The Rush /
Shoges - Warmer`},{episodio:"731",titulo:"Resident / Episode 731 / May 10 2025",descripcion:`1 - Protector Of Chaos - Painstorm /\xA0
2 - Hobin Rude - Lunar Bloom /\xA0
3 - Mattim - Broken Places /\xA0
4 - Sasheen, Ashtenn - Rabbit Hole (Franco Giannoni Unofficial Remix) /\xA0
5 - Uccelli - Kizuna /\xA0
6 - Because of Art - Fired Up /\xA0
7 - Gorkiz - Visions of Beyond /\xA0
8 - Moderat - Bad Kingdom (Juan Iba\xF1ez Y Agoostina Bootleg) /\xA0
9 - Andy Woldman - Rome /\xA0
10 - Sasha & Joe Ashworth - Laurent Energy / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"37.4K",fecha:"2025-05-10",link:"https://mcdn.podbean.com/mf/download/97kuud6xpwkc44xx/731-HernanCattaneo-2025-05-10.mp3",tracklist:`Protector Of Chaos - Painstorm /
Hobin Rude - Lunar Bloom /
Mattim - Broken Places /
Sasheen, Ashtenn - Rabbit Hole (Franco Giannoni Unofficial Remix) /
Uccelli - Kizuna /
Because of Art - Fired Up /
Gorkiz - Visions of Beyond /
Moderat - Bad Kingdom (Juan Iba\xF1ez Y Agoostina Bootleg) /
Andy Woldman - Rome /`},{episodio:"732",titulo:"Resident / Episode 732 / May 17 2025",descripcion:`1 - Lorenzo Al Dino & Peter Cloud - Mind Eater (Gai Barone Extended Remix) /\xA0
2 - Hassan - Sunset Bloom /\xA0
3 - Fran Garay - Remembering Old Times /\xA0
4 - Bodai - Calling My Name (E A N P REMIX) /\xA0
5 - Pablo German - Forja Rush /\xA0
6 - SHYRO & Anix Jay - Hazardous Zone (Francesco Pico Remix) /\xA0
7 - Ghostpipes - Bloodstream (Gai Barone Remix) /\xA0
8 - COQUEIT - Fox River /\xA0
9 - Cendryma - Override (Luis Damora Remix) /\xA0
10 - Golden Features - Touch feat. Rromarin (E A N P ) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"31.3K",fecha:"2025-05-17",link:"https://mcdn.podbean.com/mf/download/94txx8759cqsuakw/732-HernanCattaneo-2025-05-17.mp3",tracklist:`Lorenzo Al Dino & Peter Cloud - Mind Eater (Gai Barone Extended Remix) /
Hassan - Sunset Bloom /
Fran Garay - Remembering Old Times /
Bodai - Calling My Name (E A N P REMIX) /
Pablo German - Forja Rush /
SHYRO & Anix Jay - Hazardous Zone (Francesco Pico Remix) /
Ghostpipes - Bloodstream (Gai Barone Remix) /
COQUEIT - Fox River /
Cendryma - Override (Luis Damora Remix) /`},{episodio:"735",titulo:"Resident / Episode 735 / Jun 07 2025",descripcion:`1 - The Cure - Alone (B.I.R.DD & Alejo Fochi Private Edit) /\xA0
2 - Jenner, Gai Barone, Glenn Morrison - Obsidian /\xA0
3 - Henry Saiz - Turquesa /\xA0
4 - Gorkiz - Flusterstorm /\xA0
5 - Impending Wonders - Ran6dy /\xA0
6 - Gowzer - sand of Time /\xA0
7 - Albuquerque - Permission /\xA0
8 - Mariano Mellino - Poison /\xA0
9 - Gunnar, Saww - Just Strangers /\xA0
10 - Iorie - Falling Home (Tom\xE1s GC "Bliss" Rework) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"32.7K",fecha:"2025-06-07",link:"https://mcdn.podbean.com/mf/download/s7j98efzkydm44fr/735-HernanCattaneo-2025-06-07.mp3",tracklist:`The Cure - Alone (B.I.R.DD & Alejo Fochi Private Edit) /
Jenner, Gai Barone, Glenn Morrison - Obsidian /
Henry Saiz - Turquesa /
Gorkiz - Flusterstorm /
Impending Wonders - Ran6dy /
Gowzer - sand of Time /
Albuquerque - Permission /
Mariano Mellino - Poison /
Gunnar, Saww - Just Strangers /`},{episodio:"736",titulo:"Resident / Episode 736 / Jun 14 2025",descripcion:`1 - SHAZZE, Floyo, Jo Cruz - Midnight Drip /\xA0
2 - Abuk, Fabricio Mosoni - Diamond Dust /\xA0
3 - George X - Sunday's Memory /\xA0
4 - Blake.08 - The Change Of Love /\xA0
5 - Because Of Art - Work It /\xA0
6 - Melodiam (AR) - Simon Says /\xA0
7 - Gai Barone - Fractals (Nicolas Viana Remix) /\xA0
8 - Gorkiz - Visions of Beyond /\xA0
9 - Tantum - Unblur /\xA0
10 - Cass (UK) - Gothamania (Hernan Cattaneo & Mercurio Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"33.4K",fecha:"2025-06-14",link:"https://mcdn.podbean.com/mf/download/tigqprjysxmukuzr/736-HernanCattaneo-2025-06-14.mp3",tracklist:`SHAZZE, Floyo, Jo Cruz - Midnight Drip /
Abuk, Fabricio Mosoni - Diamond Dust /
George X - Sunday's Memory /
Blake.08 - The Change Of Love /
Because Of Art - Work It /
Melodiam (AR) - Simon Says /
Gai Barone - Fractals (Nicolas Viana Remix) /
Gorkiz - Visions of Beyond /
Tantum - Unblur /`},{episodio:"737",titulo:"Resident / Episode 737 / Jun 21 2025",descripcion:`levate /\xA0
2 - N-TCHBL - Southern Storm (Moshic Remix) /\xA0
3 - Steven McCreery - Springs /\xA0
4 - Benja Ilias Plecta /\xA0
5 - Solis [US] - Lucidity /\xA0
6 - Gai Barone - Scatterlings /\xA0
7 - Gai Barone & Nick Stoynoff - Fifty Fifty Split /\xA0
8 - Dove City - Rabbit Hole (Aubrey Fry Remix) /\xA0
9 - Because of Art - Fired Up /\xA0
10 - Hernan Cattaneo & Mercurio - 2009 / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"32.9K",fecha:"2025-06-21",link:"https://mcdn.podbean.com/mf/download/sfsrc67mrwdfs4y7/737-HernanCattaneo-2025-06-21.mp3",tracklist:`levate /
N-TCHBL - Southern Storm (Moshic Remix) /
Steven McCreery - Springs /
Benja Ilias Plecta /
Solis [US] - Lucidity /
Gai Barone - Scatterlings /
Gai Barone & Nick Stoynoff - Fifty Fifty Split /
Dove City - Rabbit Hole (Aubrey Fry Remix) /
Because of Art - Fired Up /`},{episodio:"738",titulo:"Resident / Episode 738 / Jun 28 2025",descripcion:`1 - Vandelor - The Sound of Freedom (Gai Barone Remix) /\xA0
2 - Foletto - Secret Key (Juan Ibanez Remx) /\xA0
3 - Tantum - Out of Nowhere /\xA0
4 - Julian Nates - Shifting Currents /\xA0
5 - Hernan Cattaneo & Mercurio - Sepulveda /\xA0
6 - Circulation - twenty eight twenty four /\xA0
7 - Kiaro - Carin (Ewan Rill Remix) /\xA0
8 - Gowzer - Cosmos /\xA0
9 - YOTTO & Something Good - Love Shop /\xA0
10 - Nicolas Viana - Coral / Download episode on MP3 (Right click, save link as...)`,likes:"20",descargas:"33K",fecha:"2025-06-28",link:"https://mcdn.podbean.com/mf/download/c3k452haxejrdj42/738-HernanCattaneo-2025-06-28.mp3",tracklist:`Vandelor - The Sound of Freedom (Gai Barone Remix) /
Foletto - Secret Key (Juan Ibanez Remx) /
Tantum - Out of Nowhere /
Julian Nates - Shifting Currents /
Hernan Cattaneo & Mercurio - Sepulveda /
Circulation - twenty eight twenty four /
Kiaro - Carin (Ewan Rill Remix) /
Gowzer - Cosmos /
YOTTO & Something Good - Love Shop /`},{episodio:"739",titulo:"Resident / Episode 739 / Jul 05 2025",descripcion:`1 - Gai Barone - Juste un de plus /\xA0
2 - Island Hill & Of Norway - In My Mind (Budakid) /\xA0
3 - Facundo Mohrr, Maxi Degrassi - Modern Romance /\xA0
4 - Tammer - The Shadow /\xA0
5 - Dark soul project - reborn (ogawa & unic rmx) /\xA0
6 - Patch Park - Shine on /\xA0
7 - Regina Picone -Midnight Escape hoy /\xA0
8 - Underworld - Juanita (Nicolas Rada Remix) /\xA0
9 - Baunder - AM Light mix /\xA0
10 - Hernan Cattaneo & Mercurio - Bay Drive / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"19",descargas:"34.5K",fecha:"2025-07-05",link:"https://mcdn.podbean.com/mf/download/ns7unxr2h53pwxvd/739-HernanCattaneo-2025-07-05.mp3",tracklist:`Gai Barone - Juste un de plus /
Island Hill & Of Norway - In My Mind (Budakid) /
Facundo Mohrr, Maxi Degrassi - Modern Romance /
Tammer - The Shadow /
Dark soul project - reborn (ogawa & unic rmx) /
Patch Park - Shine on /
Regina Picone -Midnight Escape hoy /
Underworld - Juanita (Nicolas Rada Remix) /
Baunder - AM Light mix /`},{episodio:"740",titulo:"Resident / Episode 740 / Jul 12 2025",descripcion:`1 - Claudio Cornejo (AR) - Ocean Vibes /\xA0
2 - FJL - 10 Years Ago /\xA0
3 - Words to Say - Servando & Julieta K\xFChnlE /\xA0
4 - Kenan Savrun - Outspace (Mayro Remix) /\xA0
5 - Taylan - Orbis Unum /\xA0
6 - Agustin Massari, Brian Creao, FAERO - Floward /\xA0
7 - Alan Cerra - Coming Back /\xA0
8 - Claudio Cornejo (AR) - Infinity /\xA0
9 - Tali Muss - Interlocutor (Kebin van Reeken Extended Remix) /\xA0
10 - Indigo Man - Similarity (Mayro Remix) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"21",descargas:"27.6K",fecha:"2025-07-12",link:"https://mcdn.podbean.com/mf/download/5tkqkuxj68w9njwp/740-HernanCattaneo-2025-07-12.mp3",tracklist:`Claudio Cornejo (AR) - Ocean Vibes /
FJL - 10 Years Ago /
Words to Say - Servando & Julieta K\xFChnlE /
Kenan Savrun - Outspace (Mayro Remix) /
Taylan - Orbis Unum /
Agustin Massari, Brian Creao, FAERO - Floward /
Alan Cerra - Coming Back /
Claudio Cornejo (AR) - Infinity /
Tali Muss - Interlocutor (Kebin van Reeken Extended Remix) /`},{episodio:"741",titulo:"Resident / Episode 741 / Jul 19 2025",descripcion:`1 - Diego Acosta - Blind & Happy /\xA0
2 - Mati Vaira - The Last Hope /\xA0
3 - Watts - Servando & Julieta K\xFChnle /\xA0
4 - Moodfunk_ (UnbrokenOne Remix) /\xA0
5 - Alan Cerra - Onward /\xA0
6 - Redspace, Unusual Soul - Shadows of Consciousness /\xA0
7 - Mareveg - Anahata /\xA0
8 - Abity & Lelio Monte - Dignum (Gorkiz, Luca Abayan Remix) /\xA0
9 - Ignacio Berardi, Juani Zuliani - Odyssey /\xA0
10 - Moderat - Eating Hooks (Federico Monachesi Edit) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"32.4K",fecha:"2025-07-19",link:"https://mcdn.podbean.com/mf/download/pn5z64wsfivxngjp/741-HernanCattaneo-2025-07-19.mp3",tracklist:`Diego Acosta - Blind & Happy /
Mati Vaira - The Last Hope /
Watts - Servando & Julieta K\xFChnle /
Moodfunk_ (UnbrokenOne Remix) /
Alan Cerra - Onward /
Redspace, Unusual Soul - Shadows of Consciousness /
Mareveg - Anahata /
Abity & Lelio Monte - Dignum (Gorkiz, Luca Abayan Remix) /
Ignacio Berardi, Juani Zuliani - Odyssey /`},{episodio:"742",titulo:"Resident / Episode 742 / Jul 26 2025",descripcion:`1 - Aaron Suiss, Robbie Akbal - Unreal /\xA0
2 - Nahue Sintes, JOSEFINA - Another Life (Gav Easby Remix) /\xA0
3 - Ash Mellor - Back in Love (Steve Fokas remix) /\xA0
4 - Federico Monachesi - Reperspective /\xA0
5 - Mart\xEDn Serbali - Oblivion /\xA0
6 - Martin Gardoqui y Sergio almada - Renacer /\xA0
7 - Nikhila Hashen - \xA0The Void (Juan Deminicis Remix) /\xA0
8 - Tato Seco & Gero Pellizzon - Benne Geserit /\xA0
9 - Sammer Soltan - Kiss (Hernan Cattaneo & Mercurio) /\xA0
10 - Franky Wah & Hernan Cattaneo - Groovejet / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"33.9K",fecha:"2025-07-26",link:"https://mcdn.podbean.com/mf/download/3ssyyj8652xfcyxz/742-HernanCattaneo-2025-07-26.mp3",tracklist:`Aaron Suiss, Robbie Akbal - Unreal /
Nahue Sintes, JOSEFINA - Another Life (Gav Easby Remix) /
Ash Mellor - Back in Love (Steve Fokas remix) /
Federico Monachesi - Reperspective /
Mart\xEDn Serbali - Oblivion /
Martin Gardoqui y Sergio almada - Renacer /
Nikhila Hashen - \xA0The Void (Juan Deminicis Remix) /
Tato Seco & Gero Pellizzon - Benne Geserit /
Sammer Soltan - Kiss (Hernan Cattaneo & Mercurio) /`},{episodio:"745",titulo:"Resident / Episode 745 / Aug 16 2025",descripcion:`1 - Paul Hazendonk & Noraj Cue - Story Of Something feat. Lazarusman (Anton Tumas Subtraction) /\xA0
2 - Dowden, Mazayr - Deflator (Montw Remix) /\xA0
3 - R\xF6yksopp - What Else Is There? Trentemoller Remix (Claudio Cornejo) /\xA0
4 - Kalima - 10am Coffee /\xA0
5 - Motip White - Mango (Golden Hour Remix) /\xA0
6 - Tato Seco & Gero Pellizzon - Mechenikal /\xA0
7 - Agustin Pengov - Trip /\xA0
8 - Rikfell - Cold /\xA0
9 - Maze 28 - Iguana /\xA0
10 - Antrim - Let Go Of The Hand / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"26.6K",fecha:"2025-08-16",link:"https://mcdn.podbean.com/mf/download/kwcxgh9n9pnhk4g8/745-HernanCattaneo-2025-08-16.mp3",tracklist:`Paul Hazendonk & Noraj Cue - Story Of Something feat. Lazarusman (Anton Tumas Subtraction) /
Dowden, Mazayr - Deflator (Montw Remix) /
R\xF6yksopp - What Else Is There? Trentemoller Remix (Claudio Cornejo) /
Kalima - 10am Coffee /
Motip White - Mango (Golden Hour Remix) /
Tato Seco & Gero Pellizzon - Mechenikal /
Agustin Pengov - Trip /
Rikfell - Cold /
Maze 28 - Iguana /`},{episodio:"746",titulo:"Resident / Episode 746 / Aug 23 2025",descripcion:`1 - Hobin Rude - Dusk Petals /\xA0
2 - Gaston Perez - Dreaming Awake /\xA0
3 - Juan Deminicis - We are all connected /\xA0
4 - Paul Hazendonk & Return To Saturn - You Can Have It All (Peter Makto & Matthew Sona Remix) /\xA0
5 - Solimano - Hipnosis /\xA0
6 - Gorkiz, Kaito Aman - From Above /\xA0
7 - Matias Vega - Sonic Bloom /\xA0
8 - Larrosa (AR), Nico Sparvieri, SACK (AR) - 'Euphoria\u2019 /\xA0
9 - KatsUp - Sunflowers /\xA0
10 - Steve Parry - Won't You Believe (Just Her Remix Extended) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"32.4K",fecha:"2025-08-23",link:"https://mcdn.podbean.com/mf/download/q9b8jtdifrsbb9pa/746-HernanCattaneo-2025-08-23.mp3",tracklist:`Hobin Rude - Dusk Petals /
Gaston Perez - Dreaming Awake /
Juan Deminicis - We are all connected /
Paul Hazendonk & Return To Saturn - You Can Have It All (Peter Makto & Matthew Sona Remix) /
Solimano - Hipnosis /
Gorkiz, Kaito Aman - From Above /
Matias Vega - Sonic Bloom /
Larrosa (AR), Nico Sparvieri, SACK (AR) - 'Euphoria\u2019 /
KatsUp - Sunflowers /`},{episodio:"747",titulo:"Resident / Episode 747 / Aug 30 2025",descripcion:`1 - Jamie Stevens - Dust (Hernan Cattaneo & Mercurio Vocal Remix) /\xA0
2 - Hardt Antoine - Rock The Boat [Aaliyah EDIT] /\xA0
3 - Juan Iba\xF1ez - Fading Sparks /\xA0
4 - Sanjay Dutta, Dharmalogy - Worlds Apart (Aman Anand Remix) /\xA0
5 - MOSHIC - Two Souls Bonding /\xA0
6 - Gowzer - Diamond Sky /\xA0
7 - Gai Barone \xA0- In a blink of an eye /\xA0
8 - Dave Seaman - Heavy Weight Residue (Cortona remix) /\xA0
9 - Matter & Dimuth K - Road to stanton moor (Cortona Remix) /\xA0
10 - blake.08 - High Fidelity / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"34.9K",fecha:"2025-08-30",link:"https://mcdn.podbean.com/mf/download/bevbtp96stwajgz3/747-HernanCattaneo-2025-08-30.mp3",tracklist:`Jamie Stevens - Dust (Hernan Cattaneo & Mercurio Vocal Remix) /
Hardt Antoine - Rock The Boat [Aaliyah EDIT] /
Juan Iba\xF1ez - Fading Sparks /
Sanjay Dutta, Dharmalogy - Worlds Apart (Aman Anand Remix) /
MOSHIC - Two Souls Bonding /
Gowzer - Diamond Sky /
Gai Barone \xA0- In a blink of an eye /
Dave Seaman - Heavy Weight Residue (Cortona remix) /
Matter & Dimuth K - Road to stanton moor (Cortona Remix) /`},{episodio:"748",titulo:"Resident / Episode 748 / Sep 06 2025",descripcion:`1 - Larrosa (AR), Nico Sparvieri, SACK (AR) Ft. Flor Pavone - Feelings /\xA0
2 - Silver Waters D.Bonnici /\xA0
3 - Will DeKeizer - Wonders /\xA0
4 - Dominant Space - Deep Forest /\xA0
5 - SYML - The Bird (Larrosa (AR), Nico Sparvieri, Sack (AR) /\xA0
6 - Philipp Wolf - By My Side /\xA0
7 - Mike Rish - Election Day /\xA0
8 - Kebin van Reeken & Not Demure - Batholith /\xA0
9 - Estiva - KFIL (Miss Melera Remix) /\xA0
10 - Juan Pablo Torrez, Kamilo Sanclemente - Deep Truth (Hernan Cattaneo & Marcelo Vasami) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"26.1K",fecha:"2025-09-06",link:"https://mcdn.podbean.com/mf/download/fdvqt8ua23ppurd6/748-HernanCattaneo-2025-09-06.mp3",tracklist:`Larrosa (AR), Nico Sparvieri, SACK (AR) Ft. Flor Pavone - Feelings /
Silver Waters D.Bonnici /
Will DeKeizer - Wonders /
Dominant Space - Deep Forest /
SYML - The Bird (Larrosa (AR), Nico Sparvieri, Sack (AR) /
Philipp Wolf - By My Side /
Mike Rish - Election Day /
Kebin van Reeken & Not Demure - Batholith /
Estiva - KFIL (Miss Melera Remix) /`},{episodio:"749",titulo:"Resident / Episode 749 / Sep 13 2025",descripcion:`1 - Emegepe & Tato Seco - Not Cling /\xA0
2 - Jamie Stevens & Meeting Molly - Illusionist (Kasey Taylor Remix) /\xA0
3 - Alex O'Rion - Void /\xA0
4 - Hobin Rude - Prism /\xA0
5 - Mike Rish - Leaving Brixton /\xA0
6 - Gero Pellizzon - Sonar (Cipriani & Hans Gerd Remix) /\xA0
7 - Govinda, Gonzalo Sacc - State of Vibration /\xA0
8 - Gai Barone \xA0- Setback /\xA0
9 - Jamie Stevens - Tidings (Nick Warren & Nicolas Rada Remix) /\xA0
10 - Roman - id / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"33.2K",fecha:"2025-09-13",link:"https://mcdn.podbean.com/mf/download/eys96y5ptcccuq96/749-HernanCattaneo-2025-09-13.mp3",tracklist:`Emegepe & Tato Seco - Not Cling /
Jamie Stevens & Meeting Molly - Illusionist (Kasey Taylor Remix) /
Alex O'Rion - Void /
Hobin Rude - Prism /
Mike Rish - Leaving Brixton /
Gero Pellizzon - Sonar (Cipriani & Hans Gerd Remix) /
Govinda, Gonzalo Sacc - State of Vibration /
Gai Barone \xA0- Setback /
Jamie Stevens - Tidings (Nick Warren & Nicolas Rada Remix) /`},{episodio:"750",titulo:"Resident / Episode 750 / Sep 20 3025",descripcion:`1 - Above & Beyond - Homecoming (Tim Green Remix) /\xA0
2 - Agustin Pietrocola - Sizer /\xA0
3 - Rockka - DuskRaver (Mayro Remix) /\xA0
4 - Benja Molina & Blind Passengers - Small Twon Night /\xA0
5 - Aubrey Fry & Tim French - Stompaphunker /\xA0
6 - Moshic - To Feel Again /\xA0
7 - Axatipe - Heaven Is Now /\xA0
8 - Petar Dundov - Iva Diva /\xA0
9 - Matter & Dimuth K - Road to Stanton Moor (Cortona Remix) /\xA0
10 - Zuccasam - ID / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"17",descargas:"34.1K",fecha:"3025-09-20",link:"https://mcdn.podbean.com/mf/download/na7pacn8k2xnndgr/750-HernanCattaneo-2025-09-20.mp3",tracklist:`Above & Beyond - Homecoming (Tim Green Remix) /
Agustin Pietrocola - Sizer /
Rockka - DuskRaver (Mayro Remix) /
Benja Molina & Blind Passengers - Small Twon Night /
Aubrey Fry & Tim French - Stompaphunker /
Moshic - To Feel Again /
Axatipe - Heaven Is Now /
Petar Dundov - Iva Diva /
Matter & Dimuth K - Road to Stanton Moor (Cortona Remix) /`},{episodio:"751",titulo:"Resident / Episode 751 / Sep 27 2025",descripcion:`1 - Forever - Redfreya /\xA0
2 - Massive Attack - tear drop - Noiyse project /\xA0
3 - Fabian Argomedo - Marisma /\xA0
4 - Lorenzo Balzarini - Moments /\xA0
5 - Juan Hansen, Damon Jee - Hundred secrets /\xA0
6 - Atlas - Compass Error (Phil Jubb & Tim French Remix) /\xA0
7 - John Digweed Marc Romboy Nick Muir - Sigani Meomchun /\xA0
8 - Julian Nates - A Better Place /\xA0
9 - Dj Meoz - Ancient Legend /\xA0
10 - Tim French & Pilch - Nova Albion (Aubrey Fry Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"32.2K",fecha:"2025-09-27",link:"https://mcdn.podbean.com/mf/download/qnr5mjadup4st92r/751-HernanCattaneo-2025-09-27.mp3",tracklist:`Forever - Redfreya /
Massive Attack - tear drop - Noiyse project /
Fabian Argomedo - Marisma /
Lorenzo Balzarini - Moments /
Juan Hansen, Damon Jee - Hundred secrets /
Atlas - Compass Error (Phil Jubb & Tim French Remix) /
John Digweed Marc Romboy Nick Muir - Sigani Meomchun /
Julian Nates - A Better Place /
Dj Meoz - Ancient Legend /`},{episodio:"752",titulo:"Resident / Episode 752 / Oct 04 2025",descripcion:`1 - Luis Damora - In To The Light /\xA0
2 - Sofia Deren - Shattered Phase (Francesco Pico Remix) /\xA0
3 - Gorkiz, Andr\xE9 Moret - Prowess /\xA0
4 - M\xE1ximo Lasso - Breathe Me In (Alan Cerra Remix) /\xA0
5 - Rolasoul - Morpheus (Weird Sounding Dude Extended Remix) /\xA0
6 - Anonimat, Ilias Katelanos, Plecta - Any Circumstance Left (Antrim Remix) /\xA0
7 - Nick Warren - Loveland (Gorkiz Remix Club) /\xA0
8 \xA0 D-Nox, Andr\xE9 Moret - Shine /\xA0
9 - Ran6dy - Solena /\xA0
10 - Astronomy - Enclips - (Gowzer Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"33.1K",fecha:"2025-10-04",link:"https://mcdn.podbean.com/mf/download/fpdpg4ubwv8hnt8y/752-HernanCattaneo-2025-10-04.mp3",tracklist:`Luis Damora - In To The Light /
Sofia Deren - Shattered Phase (Francesco Pico Remix) /
Gorkiz, Andr\xE9 Moret - Prowess /
M\xE1ximo Lasso - Breathe Me In (Alan Cerra Remix) /
Rolasoul - Morpheus (Weird Sounding Dude Extended Remix) /
Anonimat, Ilias Katelanos, Plecta - Any Circumstance Left (Antrim Remix) /
Nick Warren - Loveland (Gorkiz Remix Club) /
8 \xA0 D-Nox, Andr\xE9 Moret - Shine /
Ran6dy - Solena /`},{episodio:"755",titulo:"Resident / Episode 755 / Oct 25 2025",descripcion:`1 - Parken Hanson - Let Me Be (Dreamteller Retouch) /\xA0
2 - Fygle - Novocaine (Dreamteller Retouch) /\xA0
3 - Yan Niklas & J Doppler - Nirvana /\xA0
4 - Mike Grey - Outatime /\xA0
5 - Nepotek - Dextro (Nick Stoynoff's Twilo Remix) /\xA0
6 - Zucazam - Inspo /\xA0
7 - Tiefstone - Downforce /\xA0
8 - Molac - Vanta Black (Cendryma Remix) /\xA0
9 - NeoClassic & Masaaki - Serotonin /\xA0
10 - Andr\xE9 Moret - Gaxyda / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"16",descargas:"31.2K",fecha:"2025-10-25",link:"https://mcdn.podbean.com/mf/download/vwk6kpug28nfuki7/755-HernanCattaneo-2025-10-25.mp3",tracklist:`Parken Hanson - Let Me Be (Dreamteller Retouch) /
Fygle - Novocaine (Dreamteller Retouch) /
Yan Niklas & J Doppler - Nirvana /
Mike Grey - Outatime /
Nepotek - Dextro (Nick Stoynoff's Twilo Remix) /
Zucazam - Inspo /
Tiefstone - Downforce /
Molac - Vanta Black (Cendryma Remix) /
NeoClassic & Masaaki - Serotonin /`},{episodio:"756",titulo:"Resident / Episode 756 / Nov 01 2025",descripcion:`1 - Elliot Moriarty - Frequencies /\xA0
2 - Yan Niklas & J Doppler - Pineal Connection /\xA0
3 - Rich Curtis - \xA0Don't Throw That Away, I'll Eat It /\xA0
4 - Tomas Garcia - Snow Desert /\xA0
5 - Carlos A - Dogma (4T6 Remix) /\xA0
6 - Franco Camiolo - One sunday /\xA0
7 - Maze 28 - Feeling Blue /\xA0
8 - Sound Fusion - Harbour /\xA0
9 - Gorkiz - Bring Me Your Fire (Vocal Mix) /\xA0
10 - PAAX (Tulum) - Who Das (Hernan Cattaneo & Marcelo Vasami Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"33K",fecha:"2025-11-01",link:"https://mcdn.podbean.com/mf/download/5f6gxhew4vuz7c8c/756-HernanCattaneo-2025-11-01.mp3",tracklist:`Elliot Moriarty - Frequencies /
Yan Niklas & J Doppler - Pineal Connection /
Rich Curtis - \xA0Don't Throw That Away, I'll Eat It /
Tomas Garcia - Snow Desert /
Carlos A - Dogma (4T6 Remix) /
Franco Camiolo - One sunday /
Maze 28 - Feeling Blue /
Sound Fusion - Harbour /
Gorkiz - Bring Me Your Fire (Vocal Mix) /`},{episodio:"757",titulo:"Resident / Episode 757 / Nov 08 2025",descripcion:`1 - Thom Yorke - Black Swan (FOLGAR Rework) /\xA0
2 - Earthlings - Nectar /\xA0
3 - Tantum - Baires /\xA0
4 - Paul Thomas - Resistance (Extended Mix) /\xA0
5 - Federico Epis - Aura /\xA0
6 - Black 8 - Higher We Fly (Morttagua Extended Remix) /\xA0
7 - P37RO - \xA0Isn't True /\xA0
8 - Jares - Darkest Night (Berni Turletti Remix) /\xA0
9 - Andr\xE9 Moret - Secrets /\xA0
10 - Muuk' & Cendryma - G-Force / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"12",descargas:"32.4K",fecha:"2025-11-08",link:"https://mcdn.podbean.com/mf/download/9ti7jfi9dkqracw5/757-HernanCattaneo-2025-11-08.mp3",tracklist:`Thom Yorke - Black Swan (FOLGAR Rework) /
Earthlings - Nectar /
Tantum - Baires /
Paul Thomas - Resistance (Extended Mix) /
Federico Epis - Aura /
Black 8 - Higher We Fly (Morttagua Extended Remix) /
P37RO - \xA0Isn't True /
Jares - Darkest Night (Berni Turletti Remix) /
Andr\xE9 Moret - Secrets /`},{episodio:"758",titulo:"Resident / Episode 758 / Nov 15 2025",descripcion:`1 - DJ Meoz - Dream Catcher /\xA0
2 - Dreamteller - Forgotten Alarms /\xA0
3 - Paul Thomas - Flammable /\xA0
4 - D-Nox, Andr\xE9 Moret - Different Worlds /\xA0
5 - BLANCAh - Signs of Bliss (Masaaki Remix) /\xA0
6 - EMPHI - Walk With Me /\xA0
7 - Goraieb - Intertwined Souls /\xA0
8 - Darlow - Docks /\xA0
9 - Nicolas Leonelli, Anhauser - Apocalipsis (Tiefstone remix) /\xA0
10 - Imbermind - Thousand Miles (Hernan Cattaneo & Kevin Di Serna Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"33.4K",fecha:"2025-11-15",link:"https://mcdn.podbean.com/mf/download/ctti34889cfp3yub/758-HernanCattaneo-2025-11-15.mp3",tracklist:`DJ Meoz - Dream Catcher /
Dreamteller - Forgotten Alarms /
Paul Thomas - Flammable /
D-Nox, Andr\xE9 Moret - Different Worlds /
BLANCAh - Signs of Bliss (Masaaki Remix) /
EMPHI - Walk With Me /
Goraieb - Intertwined Souls /
Darlow - Docks /
Nicolas Leonelli, Anhauser - Apocalipsis (Tiefstone remix) /`},{episodio:"759",titulo:"Resident / Episode 759 / Nov 22 2025",descripcion:`1 - Alan Schultz - Dusty Tape /\xA0
2 - Juan Deminicis - Going Nowhere /\xA0
3 - Juan Deminicis - DMT /\xA0
4 - Maze 28 - Leave The World /\xA0
5 - Maze 28 - South Sun Rising /\xA0
6 - Gorkiz, Kaito Aman - From Above (Chris Cargo Remix) /\xA0
7 - Togni - Step Back (Shayan Pasha Remix) /\xA0
8 - Luis Damora - Kobalt /\xA0
9 - Guy Mantzur & Chicola - Galactica /\xA0
10 - Martin Brodin - Galaxis (Nick Warren & Nicolas Rada) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"20",descargas:"22.7K",fecha:"2025-11-22",link:"https://mcdn.podbean.com/mf/download/be8pd5qcps67yc2d/759-HernanCattaneo-2025-11-22.mp3",tracklist:`Alan Schultz - Dusty Tape /
Juan Deminicis - Going Nowhere /
Juan Deminicis - DMT /
Maze 28 - Leave The World /
Maze 28 - South Sun Rising /
Gorkiz, Kaito Aman - From Above (Chris Cargo Remix) /
Togni - Step Back (Shayan Pasha Remix) /
Luis Damora - Kobalt /
Guy Mantzur & Chicola - Galactica /`},{episodio:"760",titulo:"Resident / Episode 760 / Nov 29 2025",descripcion:`1 - Nico Szabo & Aske Izan Feat. SAM SHI - Aside /\xA0
2 - Hunzed - Skyline (Madraas Remix) /\xA0
3 - Anonimat, Molac - Ashen Tides /\xA0
4 - HAFT - Skybound /\xA0
5 - Hobin Rude - In The Still Of Abscence /\xA0
6 - Santi Mossman - Hidden Limits /\xA0
7 - Entrophee - Cristian Hidalgo & Rodrigo Pochelu /\xA0
8 - Tom Pavicich - Hypnosis /\xA0
9 - NeoClassic & Masaaki - Underflow /\xA0
10 - Ruben Karapetyan - Karo K / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"18",descargas:"32.9K",fecha:"2025-11-29",link:"https://mcdn.podbean.com/mf/download/u2nhr7hrxquhgy6c/760-HernanCattaneo-2025-11-29.mp3",tracklist:`Nico Szabo & Aske Izan Feat. SAM SHI - Aside /
Hunzed - Skyline (Madraas Remix) /
Anonimat, Molac - Ashen Tides /
HAFT - Skybound /
Hobin Rude - In The Still Of Abscence /
Santi Mossman - Hidden Limits /
Entrophee - Cristian Hidalgo & Rodrigo Pochelu /
Tom Pavicich - Hypnosis /
NeoClassic & Masaaki - Underflow /`},{episodio:"761",titulo:"Resident / Episode 761 / Dec 06 2025",descripcion:`1 - JP Mayeur - Baby Jane /\xA0
2 - John Cosani - Habana /\xA0
3 - Rich Curtis - Don't Throw That Away, I'll Eat It (Kostya Outta Remix) /\xA0
4 - Culoe De Song - Mount Zion (Jonathan Kaspar Remix) /\xA0
5 - Volks \xA0Starting My Day /\xA0
6 - Juan Lagisquet - Missing Gravity /\xA0
7 - Subandrio & Maze 28 - Montreal At Night /\xA0
8 - Harith - Stargate /\xA0
9 - Pete Philips - Oceans (ELIF Remix) /\xA0
10 - Nick Varon & PAAX - Yutori (Frequent Sync Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"14",descargas:"28.2K",fecha:"2025-12-06",link:"https://mcdn.podbean.com/mf/download/n5ga3et9bgwzg7jn/761-HernanCattaneo-2025-12-06.mp3",tracklist:`JP Mayeur - Baby Jane /
John Cosani - Habana /
Rich Curtis - Don't Throw That Away, I'll Eat It (Kostya Outta Remix) /
Culoe De Song - Mount Zion (Jonathan Kaspar Remix) /
Volks \xA0Starting My Day /
Juan Lagisquet - Missing Gravity /
Subandrio & Maze 28 - Montreal At Night /
Harith - Stargate /
Pete Philips - Oceans (ELIF Remix) /`},{episodio:"765",titulo:"Resident / Episode 765 / Jan 03 2026",descripcion:"Hernan Cattaneo live @Woodstock 69 - Netherlands - July 2025 - Part 2 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"12",descargas:"22.1K",fecha:"2026-01-03",link:"https://mcdn.podbean.com/mf/download/hirasfju9c5g64tr/765-HernanCattaneo-2026-01-03.mp3"},{episodio:"766",titulo:"Resident / Episode 766 / Jan 10 2026",descripcion:"Hernan Cattaneo live @Woodstock 69 - Netherlands - July 2025 - Part 3 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"17",descargas:"21.1K",fecha:"2026-01-10",link:"https://mcdn.podbean.com/mf/download/z9djyribr9iqavxp/766-HernanCattaneo-2026-01-10.mp3"},{episodio:"767",titulo:"Resident / Episode 767 / Jan 17 2026",descripcion:"Hernan Cattaneo live @Woodstock 69 - Netherlands - July 2025 - Part 4 Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!",likes:"11",descargas:"20.9K",fecha:"2026-01-17",link:"https://mcdn.podbean.com/mf/download/s6a7ky4jit9ib9u6/767-HernanCattaneo-2026-01-17.mp3"},{episodio:"768",titulo:"Resident / Episode 768 / Jan 24 2026",descripcion:`1 - Rivvo - Celestial Drift (Matt Oliver, Teclas Remix) /\xA0
2 - Luis Damora - Illuminate /\xA0
3 - Hobin Rude - First Breath /\xA0
4 - Rockka - Subconscious (DJ Ruby Remix) /\xA0
5 - HAFT - Driftor /\xA0
6 - Matias Gauna & Unusual Soul - Summer Rain /\xA0
7 - Rolasoul - Venus /\xA0
8 - Hector Cortes & Fran Bux - Butterfly effect /\xA0
9 - Tiefstone , Camila (Ar) - Throne /\xA0
10 - Quivver - Shadows Dancing / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"15",descargas:"27.3K",fecha:"2026-01-24",link:"https://mcdn.podbean.com/mf/download/9p56j6sbuhs5np6p/768-HernanCattaneo-2026-01-24.mp3",tracklist:`Rivvo - Celestial Drift (Matt Oliver, Teclas Remix) /
Luis Damora - Illuminate /
Hobin Rude - First Breath /
Rockka - Subconscious (DJ Ruby Remix) /
HAFT - Driftor /
Matias Gauna & Unusual Soul - Summer Rain /
Rolasoul - Venus /
Hector Cortes & Fran Bux - Butterfly effect /
Tiefstone , Camila (Ar) - Throne /`},{episodio:"769",titulo:"Resident / Episode 769 / Jan 31 2026",descripcion:`1 - Gaston Perez - Angelic voice /\xA0
2 - Gaston Perez - Time tunnel /\xA0
3 - Uccelli - The soul flows /\xA0
4 - Daniel Camarillo - Midnight Sun (Cipriani e Hans Gerd Remix) /\xA0
5 - EMPHI - Cosmic Arrival /\xA0
6 - Harith - Frozen Flame /\xA0
7 - Samuel - Pulse (Casnik Remix) /\xA0
8 - HAFT - Traverse /\xA0
9 - Astronomy - Enclips /\xA0
10 - Antrim - Shades Of Reverie / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"26.4K",fecha:"2026-01-31",link:"https://mcdn.podbean.com/mf/download/3fdi82d8zemkvu2v/769-HernanCattaneo-2026-01-31.mp3",tracklist:`Gaston Perez - Angelic voice /
Gaston Perez - Time tunnel /
Uccelli - The soul flows /
Daniel Camarillo - Midnight Sun (Cipriani e Hans Gerd Remix) /
EMPHI - Cosmic Arrival /
Harith - Frozen Flame /
Samuel - Pulse (Casnik Remix) /
HAFT - Traverse /
Astronomy - Enclips /`},{episodio:"770",titulo:"Resident / Episode 770 / Feb 07 2026",descripcion:`1. 3.14 (AR) \u2013 Shadows in The Glow /\xA0
2. Martin Fredes \u2013 China /\xA0
3. Martin Gardoqui & Federico Cabrera \u2013 Atlas /\xA0
4. Luciano Scheffer \u2013 Rebirth /\xA0
5. Dabeat \u2013 Out of the blue /\xA0
6. Ajaw, Rama (AR) \u2013 Eclipse /\xA0
7. HAFT \u2013 Sleepwalker /\xA0
8. ZAC \u2013 New World /\xA0
9. D-Nox, Andr\xE9 Moret, Yudi Watanabe \u2013 ID /\xA0
10. Paul Thomas \u2013 Jumbo (Jamie Stevens Remix) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"9",descargas:"26.1K",fecha:"2026-02-07",link:"https://mcdn.podbean.com/mf/download/is5r63cpyi3e54qt/770-HernanCattaneo-2026-02-07.mp3",tracklist:`3.14 (AR) \u2013 Shadows in The Glow /
Martin Fredes \u2013 China /
Martin Gardoqui & Federico Cabrera \u2013 Atlas /
Luciano Scheffer \u2013 Rebirth /
Dabeat \u2013 Out of the blue /
Ajaw, Rama (AR) \u2013 Eclipse /
HAFT \u2013 Sleepwalker /
ZAC \u2013 New World /
D-Nox, Andr\xE9 Moret, Yudi Watanabe \u2013 ID /`},{episodio:"771",titulo:"Resident / Episode 771 / Feb 14 2026",descripcion:`1 - Dion Paola (AUS) - Rebirth
2 - Nicolas Doldi - Feel Life
3 - Una Estrella M\xE1s Para El Cielo - Jozar (Cristian Hidalgo Remix)
4 - Allex - Ramshackle (Remix)
5 - Massive Attack feat. Azekel - Ritual Spirit (Fran Bux Revision)
6 - Sebastian Corral - The Future of Music ft. Jim Morrison
7 - AFAR - The Trap (Checo Cotela Edit)
8 - Yohai Mor - Judgment Day
9 - Juan Pablo Torrez & Kamilo Sanclemente - Sedna
10 - AIKON - Your Call feat. Roman Scott (Hernan Cattaneo & Mercurio Remix) Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"27.2K",fecha:"2026-02-14",link:"https://mcdn.podbean.com/mf/download/ghwy2hhpuqwmx26t/771-HernanCattaneo-2026-02-14.mp3",tracklist:`Dion Paola (AUS) - Rebirth
Nicolas Doldi - Feel Life
Una Estrella M\xE1s Para El Cielo - Jozar (Cristian Hidalgo Remix)
Allex - Ramshackle (Remix)
Massive Attack feat. Azekel - Ritual Spirit (Fran Bux Revision)
Sebastian Corral - The Future of Music ft. Jim Morrison
AFAR - The Trap (Checo Cotela Edit)
Yohai Mor - Judgment Day
Juan Pablo Torrez & Kamilo Sanclemente - Sedna`},{episodio:"772",titulo:"Resident / Episode 772 / Feb 21 2026",descripcion:`1 - Juan Yarin - Look Around
2 - Kris Dur, AOVA - Inner Phase (Original Mix)
3 - Miro - Paradise - Quivver Remix
4 - Cream - Gaute (Matias Chilano Remix)
5 - RADIOHEAD - Lotus Flower ( PAUL (AR) unofficial rmx )
6 - Erdi Irmak - Reprise (Aske Izan Remix)
7 - Juan Deminicis - BG
8 - Butch - When I Was Young
9 - Shai T, Sahar Z - Rebirth
10 - Nick Warren Run For Cover Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"11",descargas:"18.1K",fecha:"2026-02-21",link:"https://mcdn.podbean.com/mf/download/rcjsh7vtmjgiqtqg/772-HernanCattaneo-2026-02-21.mp3",tracklist:`Juan Yarin - Look Around
Kris Dur, AOVA - Inner Phase (Original Mix)
Miro - Paradise - Quivver Remix
Cream - Gaute (Matias Chilano Remix)
RADIOHEAD - Lotus Flower ( PAUL (AR) unofficial rmx )
Erdi Irmak - Reprise (Aske Izan Remix)
Juan Deminicis - BG
Butch - When I Was Young
Shai T, Sahar Z - Rebirth`},{episodio:"762",titulo:"Resident / Episode 762 / Dec 13 2025",descripcion:`1 - Death on the Balcony - Quiet Storm (Martin Fredes & Matthew Sona Remix) /\xA0
2 - Kasey Taylor & Gai Barone - Light Deliberations /\xA0
3 - Paula OS - The Shame (Hyunji-A Remix) /\xA0
4 - Hobin Rude - Beyond The Empty Air /\xA0
5 - Luciano Scheffer - Inferno /\xA0
6 - Simply City & Juan Ibanez - Auralis /\xA0
7 - Dublew & STEREOMUNK - Goliath (Matthew Sona Remix) /\xA0
8 - Randall Jones, Nick Stoynoff - Panama Red /\xA0
9 - Trancesetters - The Search (Analog Sense Edit) /\xA0
10 - Frankyeffe, Seismal D, Njira - Fading Out (Sofia Deren, Franco Laino, Nantiel Bootleg) / Download episode on MP3 (Right click, save link as...) Help me support NGO Alegr\xEDa Intensiva, Hospital Clown, in Argentina. Donate now by clicking here!!! Donar desde Argentina haciendo click aqu\xED!!!`,likes:"13",descargas:"30.9K",fecha:"2025-12-13",link:"https://mcdn.podbean.com/mf/download/hiz899qk43s8gpxc/762-HernanCattaneo-2025-12-13.mp3",tracklist:`Death on the Balcony - Quiet Storm (Martin Fredes & Matthew Sona Remix) /
Kasey Taylor & Gai Barone - Light Deliberations /
Paula OS - The Shame (Hyunji-A Remix) /
Hobin Rude - Beyond The Empty Air /
Luciano Scheffer - Inferno /
Simply City & Juan Ibanez - Auralis /
Dublew & STEREOMUNK - Goliath (Matthew Sona Remix) /
Randall Jones, Nick Stoynoff - Panama Red /
Trancesetters - The Search (Analog Sense Edit) /`},{episodio:"095",titulo:"Resident / Episode 095 / March 02 2013",descripcion:`Part 1 Tracklist

Mark Melo - Underwater

Nils Hoffmann - Baloons (Martin Roth)

Kein Toro - Northern Lights

Miguel Bastida & Florian Kaltstr\xF8m - Glasso Phone

Part 2 Tracklist

Checkor - As Charged

Maxi Iborquiza - Reflejos (Southsight Remix)

Mayk - Tabula Rasa

Tom Glass - Welcome the sun

Elke Kleijn - Eenvoud (Navar Remix)`,likes:"4",descargas:"61K",fecha:"2013-03-02",link:"https://mcdn.podbean.com/mf/download/38d6vh/095-HernanCattaneo-2013-03-03.mp3",tracklist:`Part 1

Mark Melo - Underwater

Nils Hoffmann - Baloons (Martin Roth)

Kein Toro - Northern Lights

Miguel Bastida & Florian Kaltstr\xF8m - Glasso Phone

Part 2

Checkor - As Charged

Maxi Iborquiza - Reflejos (Southsight Remix)

Mayk - Tabula Rasa

Tom Glass - Welcome the sun

Elke Kleijn - Eenvoud (Navar Remix)`}];var eg=(()=>{class e{fetchEpisodes(){let n=Xf,i=n.map(m=>this.parseIntegerField(m.likes)),o=n.map(m=>this.parseDescargas(m.descargas)),a=n.map(m=>this.parseDateField(m.fecha)),r=n.map(m=>this.parseDateField(m.fechasubida)),s=n.map(m=>this.parseIntegerField(m.episodio)),l=this.createColorScale(this.getMaxValue(i)),c=this.createColorScale(this.getMaxValue(o)),d=this.createColorScale(this.getMaxValue(a)),u=this.createColorScale(this.getMaxValue(r)),h=this.createColorScale(this.getMaxValue(s),1);return T(n.map(m=>this.convertToEpisodeSort(m,l,c,d,u,h)))}convertToEpisodeSort(n,i,o,a,r,s){let l=this.parseIntegerField(n.likes),c=this.parseDescargas(n.descargas),d=this.parseDateField(n.fecha),u=this.parseDateField(n.fechasubida),h=this.parseIntegerField(n.episodio),m=n.tracklist??n.descripcion??"";return b(f({},n),{tracklist:m,_fechasubida:this.createExtendedField(n.fechasubida??"",u,this.resolveColor(r,u)),_fecha:this.createExtendedField(n.fecha??"",d,this.resolveColor(a,d)),_descargas:this.createExtendedField(n.descargas??"",c,this.resolveColor(o,c)),_likes:this.createExtendedField(n.likes??"",l,this.resolveColor(i,l)),_episodio:this.createExtendedField(n.episodio??"",h,this.resolveColor(s,h))})}createExtendedField(n,i=null,o="grey"){return{value:n??"",number:i,color:o}}parseDescargas(n){if(typeof n!="string")return null;let i=n.trim();if(!i)return null;let o=i.toLowerCase().endsWith("k")?1e3:1,a=parseFloat(i);return Number.isFinite(a)?a*o:null}parseIntegerField(n){if(typeof n!="string")return null;let i=parseInt(n,10);return Number.isFinite(i)?i:null}parseDateField(n){if(typeof n!="string")return null;let i=new Date(n).getTime();return Number.isFinite(i)?i:null}getMaxValue(n){let i=null;for(let o of n)typeof o=="number"&&Number.isFinite(o)&&(i===null||o>i)&&(i=o);return i}createColorScale(n,i=0){if(n===null)return null;let o=Math.min(i,n),a=n-o;return r=>{let s=a>0?(r-o)/a:0,l=Math.round(255*s),c=Math.round(128*(1-s));return`rgb(${l},${c},0)`}}resolveColor(n,i){return!n||i===null?"grey":n(i)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var us=(()=>{class e{constructor(){this.options=ve([{value:"_likes",label:"Likes"},{value:"_descargas",label:"Descargas"},{value:"_fecha",label:"Fecha"},{value:"_episodio",label:"Episodio"}]),this.selectedField=ve("_likes")}setField(n){this.selectedField.set(n)}addOption(n){this.options().find(i=>i.value===n.value)||this.options.update(i=>[...i,n])}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function ng(e){try{return localStorage.getItem(e)}catch(t){return null}}function tg(e,t){try{localStorage.setItem(e,t)}catch(n){}}var vi=(()=>{class e{constructor(){this.style=ve(ng("theme-style")??"default"),this.mode=ve(ng("theme-mode")??"light"),qt(()=>{let n=this.style(),i=this.mode();document.body.setAttribute("data-theme",n),document.body.setAttribute("data-mode",i),tg("theme-style",n),tg("theme-mode",i)})}setStyle(n){this.style.set(n)}toggleMode(){this.mode.update(n=>n==="light"?"dark":"light")}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var qS=(e,t)=>t.episodio,$S=(e,t)=>t.value;function YS(e,t){if(e&1&&(L(0,"span",14),j(1),P()),e&2){let n=W(2).$implicit,i=W();z(),Ce("",i.trackCount(n.tracklist)," tracks")}}function ZS(e,t){if(e&1&&(L(0,"div",9,0)(2,"div",10),j(3),P(),L(4,"div",11)(5,"span",12),j(6),P(),L(7,"span",13),j(8),P(),Hn(9,YS,2,1,"span",14),P(),kt(10,"div",15),P()),e&2){let n,i=W().$implicit,o=W();yt("background-color",(n=i[o.sort.selectedField()])==null?null:n.color),z(3),tn(i.titulo),z(3),Ce("\u2665 ",i.likes),z(2),Ce("\u2193 ",i.descargas),z(),Bn(o.trackCount(i.tracklist)>0?9:-1),z(),Dn("innerHTML",o.tracklistWithBreaks(i.tracklist),wc)}}function QS(e,t){if(e&1){let n=yn();L(0,"div",6),Se("click",function(){let o=Ie(n).$index,a=W();return Ne(a.onEpisodeClick(o))}),L(1,"div",7),j(2),P()(),Hn(3,ZS,11,7,"div",8)}if(e&2){let n,i=t.$implicit,o=t.$index,a=W();yt("background-color",(n=i[a.sort.selectedField()])==null?null:n.color)("animation-delay",a.animatingSort?o*70+"ms":"0ms"),z(2),tn(i.episodio),z(),Bn(a.selectedIndex===o?3:-1)}}function XS(e,t){if(e&1&&(L(0,"option",5),j(1),P()),e&2){let n=t.$implicit,i=W();Dn("value",n.value)("selected",i.sort.selectedField()===n.value),z(),tn(n.label)}}var ig=(()=>{class e{constructor(){this.selectedIndex=null,this.episodes=[],this.animatingSort=!1,this.playerService=p(ds),this.episodesService=p(eg),this.cdr=p(ho),this.sort=p(us),this.theme=p(vi),qt(()=>{let n=this.sort.selectedField();this.episodes.length&&(this.selectedIndex=null,this.triggerSortAnimation(),this.sortEpisodes(n),this.cdr.markForCheck())})}ngOnInit(){this.episodesService.fetchEpisodes().subscribe({next:n=>{this.episodes=n,n.some(i=>!!i.fechasubida)&&this.sort.addOption({value:"_fechasubida",label:"Fecha subida"}),this.sortEpisodes(this.sort.selectedField()),this.cdr.markForCheck()},error:n=>console.error("Error fetching episodes:",n)})}triggerSortAnimation(){this.theme.style()==="minimal-2d"&&(this.animatingSort=!0,setTimeout(()=>{this.animatingSort=!1,this.cdr.markForCheck()},800))}onEpisodeClick(n){this.selectedIndex=this.selectedIndex===n?null:n;let i=this.episodes[n];this.playContent({title:i.titulo,link:i.link??"",id:i.episodio??""}),this.selectedIndex!==null&&setTimeout(()=>document.querySelector(".episode-detail-row")?.scrollIntoView({behavior:"smooth",block:"center"}))}playContent(n){this.playerService.performAction("play",n)}onLegacySortChange(n){let i=n.target;this.sort.setField(i.value)}tracklistWithBreaks(n){return n?n.replace(/\n/g,"<br>"):""}trackCount(n){return n?n.split(`
`).filter(i=>i.trim()).length:0}sortEpisodes(n){this.episodes.length&&(this.episodes=[...this.episodes].sort((i,o)=>{let a=this.getSortableValue(i,n),r=this.getSortableValue(o,n);return a===null&&r===null?0:a===null?1:r===null?-1:r-a}))}getSortableValue(n,i){let o=n[i];if(!o)return null;if(typeof o.number=="number"&&Number.isFinite(o.number))return o.number;let a=parseFloat(o.value??"");return Number.isFinite(a)?a:null}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=Me({type:e,selectors:[["app-episodes-grid"]],decls:9,vars:2,consts:[["detailRow",""],[1,"episode-grid"],[1,"legacy-sort-wrap"],["for","orderby"],["id","orderby",3,"change"],[3,"value","selected"],[1,"episode-item",3,"click"],[1,"episodio"],[1,"episode-detail-row",3,"background-color"],[1,"episode-detail-row"],[1,"titulo"],[1,"meta"],[1,"likes"],[1,"descargas"],[1,"track-count"],[1,"tracklist",3,"innerHTML"]],template:function(i,o){i&1&&(L(0,"div",1),_n(1,QS,4,6,null,null,qS),P(),L(3,"div",2)(4,"label",3),j(5,"Ordenar:"),P(),L(6,"select",4),Se("change",function(r){return o.onLegacySortChange(r)}),_n(7,XS,2,3,"option",5,$S),P()()),i&2&&(Dt("sorting",o.animatingSort),z(),Gn(o.episodes),z(6),Gn(o.sort.options()))},dependencies:[ci],styles:['@charset "UTF-8";.legacy-sort-wrap[_ngcontent-%COMP%]{display:none;padding:8px 12px;font-size:12px}body[data-theme=legacy][_nghost-%COMP%]   .legacy-sort-wrap[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   .legacy-sort-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.episode-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.episode-grid[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%]{display:grid;padding:0;width:auto;position:relative;z-index:1;cursor:pointer;height:85px;align-content:center;transition:all .3s ease}.episode-grid[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%]   .episodio[_ngcontent-%COMP%]{text-align:center}body[data-theme=minimal-2d][_nghost-%COMP%]   .episode-item[_ngcontent-%COMP%], body[data-theme=minimal-2d]   [_nghost-%COMP%]   .episode-item[_ngcontent-%COMP%]{border:1px solid var(--border, transparent);opacity:0;animation:_ngcontent-%COMP%_tile-in .5s steps(2) forwards;font-family:var(--font-ui)}body[data-theme=minimal-2d][_nghost-%COMP%]   .episode-grid.sorting[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%], body[data-theme=minimal-2d]   [_nghost-%COMP%]   .episode-grid.sorting[_ngcontent-%COMP%]   .episode-item[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_tile-sort .6s steps(2) forwards}@keyframes _ngcontent-%COMP%_tile-in{0%{opacity:0;transform:scaleX(1.06)}40%{opacity:1;transform:scaleX(.97) translate(1px)}70%{opacity:.7;transform:scaleX(1.02)}to{opacity:1;transform:none}}@keyframes _ngcontent-%COMP%_tile-sort{0%{opacity:1;filter:blur(0)}20%{opacity:.3;filter:blur(1px);transform:scaleX(1.04)}50%{opacity:.8;filter:blur(0);transform:scaleX(.98)}to{opacity:1;transform:none}}.episode-detail-row[_ngcontent-%COMP%]{grid-column:1/-1;transition:all .3s ease;padding:40px 30px;word-break:break-word;overflow-wrap:break-word;min-width:0}.episode-detail-row[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-size:2em;font-weight:600;margin-bottom:8px}.episode-detail-row[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]{display:flex;gap:16px;font-size:13px;opacity:.75;margin-bottom:16px}.episode-detail-row[_ngcontent-%COMP%]   .tracklist[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto;font-size:13px;line-height:1.7;font-family:var(--font-ui, "Libre Franklin", sans-serif)}body[data-theme=minimal-2d][_nghost-%COMP%]   .tracklist[_ngcontent-%COMP%], body[data-theme=minimal-2d]   [_nghost-%COMP%]   .tracklist[_ngcontent-%COMP%]{font-family:var(--font-ui);font-size:12px;color:var(--text);border-left:2px solid var(--accent, #333);padding-left:12px}'],changeDetection:0})}}return e})();var og=[{path:"",component:ig},{path:"**",redirectTo:""}];var Ld={providers:[Nd(og)]};var Od=(e,t)=>t.value;function e0(e,t){if(e&1){let n=yn();L(0,"button",11),Se("click",function(){let o=Ie(n).$implicit,a=W();return Ne(a.setTheme(o.value))}),j(1),P()}if(e&2){let n=t.$implicit,i=W();Dt("active",i.theme.style()===n.value),z(),Ce(" ",n.label," ")}}function n0(e,t){if(e&1){let n=yn();L(0,"button",12),Se("click",function(){Ie(n);let o=W();return Ne(o.toggleMode())}),j(1),P()}if(e&2){let n=W();ai("aria-label",n.isDark()?"Switch to light":"Switch to dark"),z(),Ce(" ",n.isDark()?"\u2600":"\u263E"," ")}}function t0(e,t){if(e&1&&(L(0,"option",9),j(1),P()),e&2){let n=t.$implicit,i=W();Dn("value",n.value)("selected",i.sort.selectedField()===n.value),z(),tn(n.label)}}function i0(e,t){if(e&1){let n=yn();L(0,"button",11),Se("click",function(){let o=Ie(n).$implicit,a=W();return Ne(a.setTheme(o.value))}),j(1),P()}if(e&2){let n=t.$implicit,i=W();Dt("active",i.theme.style()===n.value),z(),Ce(" ",n.label," ")}}var ag=(()=>{class e{constructor(){this.theme=p(vi),this.sort=p(us),this.themeOptions=[{value:"legacy",label:"LEGACY"},{value:"default",label:"DEFAULT"},{value:"minimal-2d",label:"MINIMAL 2D"}],this.showModeToggle=uo(()=>this.theme.style()!=="legacy"),this.isDark=uo(()=>this.theme.mode()==="dark")}setTheme(n){this.theme.setStyle(n)}toggleMode(){this.theme.toggleMode()}onSortChange(n){let i=n.target;this.sort.setField(i.value)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=Me({type:e,selectors:[["app-header"]],decls:17,vars:1,consts:[[1,"app-header"],[1,"logo"],[1,"controls"],["role","group","aria-label","Theme style",1,"theme-pill"],[1,"pill-btn",3,"active"],[1,"mode-btn"],[1,"sort-wrap"],["for","header-sort",1,"sort-label"],["id","header-sort",3,"change"],[3,"value","selected"],["role","group","aria-label","Switch theme",1,"legacy-theme-pill"],[1,"pill-btn",3,"click"],[1,"mode-btn",3,"click"]],template:function(i,o){i&1&&(L(0,"header",0)(1,"span",1),j(2,"CATTANEO"),P(),L(3,"div",2)(4,"div",3),_n(5,e0,2,3,"button",4,Od),P(),Hn(7,n0,2,2,"button",5),L(8,"div",6)(9,"label",7),j(10,"Sort"),P(),L(11,"select",8),Se("change",function(r){return o.onSortChange(r)}),_n(12,t0,2,3,"option",9,Od),P()()()(),L(14,"div",10),_n(15,i0,2,3,"button",4,Od),P()),i&2&&(z(5),Gn(o.themeOptions),z(2),Bn(o.showModeToggle()?7:-1),z(5),Gn(o.sort.options()),z(3),Gn(o.themeOptions))},dependencies:[ci],styles:['@charset "UTF-8";.app-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 20px;height:var(--header-height, 52px);background:var(--bg-header, #fff);border-bottom:1px solid var(--border-header, #e8e8e8);font-family:var(--font-ui, "Libre Franklin", sans-serif);color:var(--text, #222);flex-shrink:0}.app-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-weight:700;font-size:15px;letter-spacing:3px;color:var(--text-logo, #111)}.app-header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.app-header[_ngcontent-%COMP%]   .theme-pill[_ngcontent-%COMP%]{display:flex;border:1px solid var(--border, #ccc);border-radius:20px;overflow:hidden}.app-header[_ngcontent-%COMP%]   .pill-btn[_ngcontent-%COMP%]{padding:4px 12px;font-family:var(--font-ui);font-size:10px;letter-spacing:.5px;background:transparent;color:var(--text-muted, #aaa);border:none;cursor:pointer;transition:background .2s,color .2s}.app-header[_ngcontent-%COMP%]   .pill-btn.active[_ngcontent-%COMP%]{background:var(--text, #222);color:var(--bg, #fff);font-weight:600}.app-header[_ngcontent-%COMP%]   .mode-btn[_ngcontent-%COMP%]{width:28px;height:28px;border-radius:50%;border:1px solid var(--border, #ccc);background:transparent;color:var(--text-muted, #aaa);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:border-color .2s,color .2s}.app-header[_ngcontent-%COMP%]   .mode-btn[_ngcontent-%COMP%]:hover{color:var(--text);border-color:var(--text)}.app-header[_ngcontent-%COMP%]   .sort-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.app-header[_ngcontent-%COMP%]   .sort-label[_ngcontent-%COMP%]{font-size:10px;color:var(--text-muted);letter-spacing:.5px;text-transform:uppercase}.app-header[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-family:var(--font-ui);font-size:11px;padding:4px 8px;border:1px solid var(--border);border-radius:var(--player-radius, 4px);background:var(--bg);color:var(--text);cursor:pointer}body[data-theme=legacy][_nghost-%COMP%]   .app-header[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   .app-header[_ngcontent-%COMP%]{display:none}.legacy-theme-pill[_ngcontent-%COMP%]{display:none;position:fixed;bottom:60px;right:12px;z-index:200;border:1px solid #ccc;border-radius:20px;overflow:hidden;background:#fff}.legacy-theme-pill[_ngcontent-%COMP%]   .pill-btn[_ngcontent-%COMP%]{padding:3px 10px;font-size:9px;font-family:Libre Franklin,sans-serif;background:transparent;color:#888;border:none;cursor:pointer}.legacy-theme-pill[_ngcontent-%COMP%]   .pill-btn.active[_ngcontent-%COMP%]{background:#222;color:#fff}body[data-theme=legacy][_nghost-%COMP%]   .legacy-theme-pill[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   .legacy-theme-pill[_ngcontent-%COMP%]{display:flex}'],changeDetection:0})}}return e})();var rg=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=Me({type:e,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"app-footer"],["href","/dmca","target","_blank","rel","noopener"],[1,"sep"],["href","/privacy","target","_blank","rel","noopener"]],template:function(i,o){i&1&&(L(0,"footer",0)(1,"a",1),j(2,"DMCA"),P(),L(3,"span",2),j(4,"\xB7"),P(),L(5,"a",3),j(6,"Privacy Policy"),P()())},styles:['@charset "UTF-8";.app-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;height:32px;background:var(--bg-footer, #f5f5f5);border-top:1px solid var(--border, #e8e8e8);font-family:var(--font-ui, "Libre Franklin", sans-serif);font-size:11px;flex-shrink:0}.app-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-muted, #aaa);text-decoration:none;letter-spacing:.5px;transition:color .2s}.app-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text)}.app-footer[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%]{color:var(--border, #ccc)}body[data-theme=legacy][_nghost-%COMP%]   .app-footer[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   .app-footer[_ngcontent-%COMP%]{display:none}'],changeDetection:0})}}return e})();function sg(e){e||(e=p(Qe));let t=new N(n=>{if(e.destroyed){n.next();return}return e.onDestroy(n.next.bind(n))});return n=>n.pipe(Zn(t))}var o0=["audioPlayer"];function a0(e,t){if(e&1){let n=yn();L(0,"div",1)(1,"button",2),Se("click",function(){Ie(n);let o=W();return Ne(o.togglePlay())}),j(2),P(),L(3,"div",3)(4,"div",4),j(5),P(),L(6,"div",5),kt(7,"div",6),P()(),L(8,"audio",7,0),Se("timeupdate",function(){Ie(n);let o=W();return Ne(o.onTimeUpdate())})("ended",function(){Ie(n);let o=W();return Ne(o.onAudioEnded())}),kt(10,"source",8),P()()}if(e&2){let n=W();z(),ai("aria-label",n.isPlaying?"Pause":"Play"),z(),Ce(" ",n.isPlaying?"\u23F8":"\u25B6"," "),z(3),tn(n.currentContent.title),z(2),yt("width",n.progressPercent,"%"),z(3),Dn("src",n.currentContent.link)}}var lg=(()=>{class e{set audioPlayerRef(n){this.audioElement=n?.nativeElement??null,this.syncAudio()}constructor(n){this.playerService=n,this.currentContent=null,this.progressPercent=0,this.isPlaying=!1,this.audioElement=null,this.lastState=null,this.activeLink=null,this.playerService.getState().pipe(sg()).subscribe(i=>{this.lastState=i,this.currentContent=i.content,this.isPlaying=i.isPlaying,this.syncAudio()})}togglePlay(){this.lastState&&(this.lastState.isPlaying?this.playerService.performAction("pause"):this.playerService.performAction("play",this.lastState.content??void 0))}onTimeUpdate(){if(!this.audioElement||!this.lastState)return;this.audioElement.duration&&(this.progressPercent=this.audioElement.currentTime/this.audioElement.duration*100);let n=this.audioElement.currentTime;Math.abs(n-this.lastState.currentTime)>1&&this.playerService.performAction("seek",void 0,n)}onAudioEnded(){this.playerService.performAction("stop")}syncAudio(){if(!this.audioElement||!this.lastState)return;let{content:n,currentTime:i,isPlaying:o}=this.lastState;if(!n){this.audioElement.pause(),this.activeLink&&(this.audioElement.removeAttribute("src"),this.audioElement.load(),this.activeLink=null);return}this.activeLink!==n.link&&(this.audioElement.src=n.link,this.audioElement.load(),this.activeLink=n.link),Math.abs(this.audioElement.currentTime-i)>1&&(this.audioElement.currentTime=i),o&&this.audioElement.paused?this.audioElement.play():!o&&!this.audioElement.paused&&this.audioElement.pause()}static{this.\u0275fac=function(i){return new(i||e)(ao(ds))}}static{this.\u0275cmp=Me({type:e,selectors:[["app-episode-player"]],viewQuery:function(i,o){if(i&1&&xr(o0,5),i&2){let a;qc(a=$c())&&(o.audioPlayerRef=a.first)}},decls:1,vars:1,consts:[["audioPlayer",""],[1,"floating-player"],[1,"play-btn",3,"click"],[1,"track-info"],[1,"track-title"],[1,"progress-bar"],[1,"progress-fill"],[2,"display","none",3,"timeupdate","ended"],["type","audio/mpeg",3,"src"]],template:function(i,o){i&1&&Hn(0,a0,11,6,"div",1),i&2&&Bn(o.currentContent?0:-1)},styles:['@charset "UTF-8";.floating-player[_ngcontent-%COMP%]{position:fixed;bottom:52px;left:20px;right:20px;z-index:100;display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg-player, #fff);border:1px solid var(--border, #e0e0e0);border-radius:var(--player-radius, 8px);box-shadow:var(--player-shadow, 0 2px 12px rgba(0, 0, 0, .1));font-family:var(--font-ui, "Libre Franklin", sans-serif);color:var(--text, #222);transition:background .3s ease,border-color .3s ease,box-shadow .3s ease}.play-btn[_ngcontent-%COMP%]{width:36px;height:36px;flex-shrink:0;border-radius:var(--player-radius, 50%);border:1px solid var(--border, transparent);background:var(--player-btn-bg, #222);color:var(--player-btn-fg, #fff);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:box-shadow .2s}.track-info[_ngcontent-%COMP%]{flex:1;min-width:0}.track-title[_ngcontent-%COMP%]{font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text)}.progress-bar[_ngcontent-%COMP%]{height:3px;background:var(--player-track, #e0e0e0);border-radius:var(--player-radius, 2px);margin-top:6px;overflow:hidden}.progress-fill[_ngcontent-%COMP%]{height:100%;background:var(--player-fill, #222);border-radius:var(--player-radius, 2px);transition:width .5s linear}body[data-theme=minimal-2d][data-mode=dark][_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%], body[data-theme=minimal-2d][data-mode=dark]   [_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_glow-pulse 1.4s ease-in-out infinite}@keyframes _ngcontent-%COMP%_glow-pulse{0%,to{box-shadow:none}50%{box-shadow:var(--glow, none)}}body[data-theme=legacy][_nghost-%COMP%]   .floating-player[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   .floating-player[_ngcontent-%COMP%]{position:static;bottom:unset;left:unset;right:unset;border-radius:0;box-shadow:none;border:none;border-top:1px solid #ddd;background:#f0f0f0}body[data-theme=legacy][_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   .play-btn[_ngcontent-%COMP%], body[data-theme=legacy][_nghost-%COMP%]   .track-info[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   .track-info[_ngcontent-%COMP%]{display:none}body[data-theme=legacy][_nghost-%COMP%]   audio[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   audio[_ngcontent-%COMP%]{display:block!important;width:100%}']})}}return e})();var cg=(()=>{class e{constructor(){this._theme=p(vi)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=Me({type:e,selectors:[["app-root"]],decls:6,vars:0,consts:[[1,"app-container"],[1,"app-content"]],template:function(i,o){i&1&&(ri(0,"div",0),Kn(1,"app-header"),ri(2,"main",1),Kn(3,"router-outlet"),si(),Kn(4,"app-episode-player")(5,"app-footer"),si())},dependencies:[No,ag,rg,lg],styles:[".app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;max-height:-webkit-fill-available;background:var(--bg, #fff)}.app-content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding-bottom:144px}body[data-theme=legacy][_nghost-%COMP%]   .app-content[_ngcontent-%COMP%], body[data-theme=legacy]   [_nghost-%COMP%]   .app-content[_ngcontent-%COMP%]{padding-bottom:0}"]})}}return e})();ld(cg,b(f({},Ld),{providers:[Hp(),...Ld.providers]})).catch(e=>console.error(e));
