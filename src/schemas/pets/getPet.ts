import { AnySchema } from 'ajv';
export const getPetSchema = (): AnySchema => ({
  type: 'object',
  required: ['id', 'category', 'name', 'photoUrls', 'tags', 'status'],
  properties: {
    id: {
      type: 'integer',
    },
    category: {
      type: 'object',
      required: ['id', 'name'],
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
      },
      additionalProperties: true,
    },
    name: {
      type: 'string',
    },
    photoUrls: {
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'string',
          },
        ],
      },
    },
    tags: {
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'object',
            required: ['id', 'name'],
            properties: {
              id: {
                type: 'integer',
              },
              name: {
                type: 'string',
              },
            },
            additionalProperties: true,
          },
        ],
      },
    },
    status: {
      type: 'string',
    },
  },
  additionalProperties: true,
});
