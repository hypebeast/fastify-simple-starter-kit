const todoResponseSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    done: { type: 'boolean' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' },
  },
};

const create = {
  description: 'Creates a todo.',
  tags: ['todos'],

  headers: {
    type: 'object',
    properties: {
      Accept: {
        type: 'string',
      },
      'Content-Type': {
        type: 'string',
      },
    },
    required: ['Content-Type'],
  },

  body: {
    type: 'object',
    required: ['title', 'done'],
    properties: {
      title: {
        type: 'string',
        minLength: 2,
      },
      description: {
        type: 'string',
      },
      done: {
        type: 'boolean',
      },
    },
  },

  response: {
    200: {
      type: 'object',
      properties: {
        content: todoResponseSchema,
      },
    },
  },
};

const fetchAll = {
  description: 'Fetch all Todos.',
  tags: ['todos'],

  response: {
    200: {
      type: 'object',
      properties: {
        content: {
          type: 'array',
          items: todoResponseSchema,
        },
      },
    },
  },
};

const update = {
  description: 'Updates a todo.',
  tags: ['todos'],

  headers: {
    type: 'object',
    properties: {
      Accept: {
        type: 'string',
      },
      'Content-Type': {
        type: 'string',
      },
    },
    required: ['Content-Type'],
  },

  params: {
    type: 'object',
    description: 'The _ID_ of the todo to update',
    properties: {
      todoId: { type: 'number' },
    },
  },

  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        minLength: 2,
      },
      description: {
        type: 'string',
      },
      done: {
        type: 'boolean',
      },
    },
  },

  response: {
    200: {
      type: 'object',
      properties: {
        content: todoResponseSchema,
      },
    },
  },
};

const deleteSchema = {
  description: 'Deletes a todo.',
  tags: ['todos'],

  headers: {
    type: 'object',
    properties: {
      Accept: {
        type: 'string',
      },
      'Content-Type': {
        type: 'string',
      },
    },
    required: ['Content-Type'],
  },

  params: {
    type: 'object',
    description: 'The _ID_ of the Todo to update',
    properties: {
      todoId: { type: 'number' },
    },
  },

  response: {
    204: {
      description: 'The resource was deleted successfully.',
    },
  },
};

module.exports = { create, fetchAll, update, deleteSchema };
