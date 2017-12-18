define([], () => {
    // ============================================================================
    // TS GROUP RELATED MODELS

    const Group = Backbone.Model.extend({
        urlRoot: `${Galaxy.root}api/groups`
    });

    const Groups = Backbone.Collection.extend({
        url: `${Galaxy.root}api/groups`,

        model: Group
    });

    return {
        Group: Group,
        Groups: Groups
    };
});
