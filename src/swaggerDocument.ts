export const swaggerDocument = {
    swagger: "2.0",
    info: {
        title: "Cinema App",
        description: "An website app for cinema",
        version: "1.0",
    },
    produces: ["application/json"],
    paths: {
        "/test": {
            get: {
                tags: ["/test"],
                description: "Taki fajny description",
                parameters: [
                    {
                        name: "test",
                        in: "formData",
                        type: "array",
                        collectionFormat: "multi",
                        items: {
                            type: "integer",
                        },
                    },
                    { name: "profileId", in: "formData", required: true, type: "string" },
                    { name: "file", in: "formData", type: "file", required: "true" },
                ],
                responses: {},
            },
            post: {
                tags: ["/test"],
                description: "Taki fajny description",
                parameters: [
                    {
                        name: "test",
                        in: "formData",
                        type: "array",
                        collectionFormat: "multi",
                        items: {
                            type: "integer",
                        },
                    },
                    { name: "profileId", in: "formData", required: true, type: "string" },
                    { name: "file", in: "formData", type: "file", required: "true" },
                ],
                responses: {},
            },
        },
    },
}
