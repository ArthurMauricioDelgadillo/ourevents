"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var event_service_1 = require('./event.service');
var EventListComponent = (function () {
    function EventListComponent(eventService) {
        this.eventService = eventService;
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventListComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService
            .list()
            .then(function (events) { return _this.events = events; });
    };
    EventListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'event-list',
            templateUrl: 'event-list.component.html'
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=event-list.component.js.map