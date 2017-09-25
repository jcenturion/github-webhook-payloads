module.exports = (event, action) => {
  return require(`./samples/${event}.js`)(action);
};

module.exports.events = {
  commit_comment: {
    created: {
      type: 'commit_comment',
      payload: require('./samples/commit_comment')()
    }
  },

  create: {
    repository: {
      type: 'create',
      payload: require('./samples/create')('repository')
    },

    branch: {
      type: 'create',
      payload: require('./samples/create')('branch')
    },

    tag: {
      type: 'create',
      payload: require('./samples/create')('tag')
    }
  },

  delete: {
    branch: {
      type: 'delete',
      payload: require('./samples/delete')('branch')
    },
    tag: {
      type: 'delete',
      payload: require('./samples/delete')('tag')
    }
  },

  deployment: {
    type: 'deployment',
    payload: require('./samples/deployment')()
  },

  deployment_status: {
    type: 'deployment_status',
    payload: require('./samples/deployment_status')()
  },

  fork: {
    type: 'fork',
    payload: require('./samples/fork')()
  },

  gollum: {
    type: 'gollum',
    payload: require('./samples/gollum')()
  },

  installation: {
    created: {
      type: 'installation',
      payload: require('./samples/installation')('created')
    },
    deleted: {
      type: 'installation',
      payload: require('./samples/installation')('deleted')
    }
  },

  installation_repositories: {
    added: {
      type: 'installation_repositories',
      payload: require('./samples/installation_repositories')('added')
    },
    removed: {
      type: 'installation_repositories',
      payload: require('./samples/installation_repositories')('removed')
    }
  },

  issue_comment: {
    created: {
      type: 'issue_comment',
      payload: require('./samples/issue_comment')('created')
    },
    edited: {
      type: 'issue_comment',
      payload: require('./samples/issue_comment')('edited')
    },
    deleted: {
      type: 'issue_comment',
      payload: require('./samples/issue_comment')('deleted')
    }
  },

  issues: {
    assigned: {
      type: 'issues',
      payload: require('./samples/issues')('assigned')
    },
    unassigned: {
      type: 'issues',
      payload: require('./samples/issues')('unassigned')
    },
    labeled: {
      type: 'issues',
      payload: require('./samples/issues')('labeled')
    },
    unlabeled: {
      type: 'issues',
      payload: require('./samples/issues')('unlabeled')
    },
    opened: {
      type: 'issues',
      payload: require('./samples/issues')('opened')
    },
    edited: {
      type: 'issues',
      payload: require('./samples/issues')('edited')
    },
    milestoned: {
      type: 'issues',
      payload: require('./samples/issues')('milestoned')
    },
    demilestoned: {
      type: 'issues',
      payload: require('./samples/issues')('demilestoned')
    },
    closed: {
      type: 'issues',
      payload: require('./samples/issues')('closed')
    },
    reopened: {
      type: 'issues',
      payload: require('./samples/issues')('reopened')
    }
  },

  label: {
    created: {
      type: 'label',
      payload: require('./samples/label')('created')
    },
    edited: {
      type: 'label',
      payload: require('./samples/label')('edited')
    },
    deleted: {
      type: 'label',
      payload: require('./samples/label')('deleted')
    }
  },

  marketplace_purchase: {
    purchased: {
      type: 'marketplace_purchase',
      payload: require('./samples/marketplace_purchase')('purchased')
    },
    cancelled: {
      type: 'marketplace_purchase',
      payload: require('./samples/marketplace_purchase')('cancelled')
    },
    changed: {
      type: 'marketplace_purchase',
      payload: require('./samples/marketplace_purchase')('changed')
    }
  },

  member: {
    added: {
      type: 'member',
      payload: require('./samples/member')('added')
    },
    deleted: {
      type: 'member',
      payload: require('./samples/member')('deleted')
    },
    edited: {
      type: 'member',
      payload: require('./samples/member')('edited')
    }
  },

  membership: {
    added: {
      type: 'membership',
      payload: require('./samples/membership')('added')
    },
    removed: {
      type: 'membership',
      payload: require('./samples/membership')('removed')
    }
  },

  milestone: {
    created: {
      type: 'milestone',
      payload: require('./samples/milestone')('created')
    },
    closed: {
      type: 'milestone',
      payload: require('./samples/milestone')('closed')
    },
    opened: {
      type: 'milestone',
      payload: require('./samples/milestone')('opened')
    },
    edited: {
      type: 'milestone',
      payload: require('./samples/milestone')('edited')
    },
    deleted: {
      type: 'milestone',
      payload: require('./samples/milestone')('deleted')
    }
  },

  organization: {
    member_added: {
      type: 'organization',
      payload: require('./samples/organization')('member_added')
    },
    member_removed: {
      type: 'organization',
      payload: require('./samples/organization')('member_removed')
    },
    member_invited: {
      type: 'organization',
      payload: require('./samples/organization')('member_invited')
    }
  },

  org_block: {
    blocked: {
      type: 'org_block',
      payload: require('./samples/org_block')('blocked')
    },
    unblocked: {
      type: 'org_block',
      payload: require('./samples/org_block')('unblocked')
    }
  },

  page_build: {
    type: 'page_build',
    payload: require('./samples/page_build')()
  },

  project_card: {
    created: {
      type: 'project_card',
      payload: require('./samples/project_card')('created')
    },
    edited: {
      type: 'project_card',
      payload: require('./samples/project_card')('edited')
    },
    converted: {
      type: 'project_card',
      payload: require('./samples/project_card')('converted')
    },
    moved: {
      type: 'project_card',
      payload: require('./samples/project_card')('moved')
    },
    deleted: {
      type: 'project_card',
      payload: require('./samples/project_card')('deleted')
    }
  },

  project_column: {
    created: {
      type: 'project_column',
      payload: require('./samples/project_column')('created')
    },
    edited: {
      type: 'project_column',
      payload: require('./samples/project_column')('edited')
    },
    moved: {
      type: 'project_column',
      payload: require('./samples/project_column')('moved')
    },
    deleted: {
      type: 'project_column',
      payload: require('./samples/project_column')('deleted')
    }
  },

  project: {
    created: {
      type: 'project',
      payload: require('./samples/project')('created')
    },
    edited: {
      type: 'project',
      payload: require('./samples/project')('edited')
    },
    closed: {
      type: 'project',
      payload: require('./samples/project')('closed')
    },
    reopened: {
      type: 'project',
      payload: require('./samples/project')('reopened')
    },
    deleted: {
      type: 'project',
      payload: require('./samples/project')('deleted')
    }
  },

  public: {
    type: 'public',
    payload: require('./samples/public')()
  },

  pull_request: {
    assigned: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('assigned')
    },
    unassigned: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('unassigned')
    },
    labeled: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('labeled')
    },
    unlabeled: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('unlabeled')
    },
    opened: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('opened')
    },
    edited: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('edited')
    },
    closed: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('closed')
    },
    reopened: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('reopened')
    },
    synchronized: {
      type: 'pull_request',
      payload: require('./samples/pull_request')('synchronized')
    }
  },

  pull_request_review: {
    submitted: {
      type: 'pull_request_review',
      payload: require('./samples/pull_request_review')('submitted')
    },
    edited: {
      type: 'pull_request_review',
      payload: require('./samples/pull_request_review')('edited')
    },
    dismissed: {
      type: 'pull_request_review',
      payload: require('./samples/pull_request_review')('dismissed')
    }
  },

  pull_request_review_comment: {
    created: {
      type: 'pull_request_review_comment',
      payload: require('./samples/pull_request_review_comment')('created')
    },
    edited: {
      type: 'pull_request_review_comment',
      payload: require('./samples/pull_request_review_comment')('edited')
    },
    deleted: {
      type: 'pull_request_review_comment',
      payload: require('./samples/pull_request_review_comment')('deleted')
    }
  },

  push: {
    type: 'push',
    payload: require('./samples/push')()
  },

  release: {
    published: {
      type: 'release',
      payload: require('./samples/release')('published')
    }
  },

  repository: {
    created: {
      type: 'repository',
      payload: require('./samples/repository')('created')
    },
    deleted: {
      type: 'repository',
      payload: require('./samples/repository')('deleted')
    },
    publicized: {
      type: 'repository',
      payload: require('./samples/repository')('publicized')
    },
    privatized: {
      type: 'repository',
      payload: require('./samples/repository')('privatized')
    }
  },

  status: {
    pending: {
      type: 'status',
      payload: require('./samples/status')('pending')
    },
    success: {
      type: 'status',
      payload: require('./samples/status')('success')
    },
    failure: {
      type: 'status',
      payload: require('./samples/status')('failure')
    },
    error: {
      type: 'status',
      payload: require('./samples/status')('error')
    }
  },

  team: {
    created: {
      type: 'team',
      payload: require('./samples/team')('created')
    },
    deleted: {
      type: 'team',
      payload: require('./samples/team')('deleted')
    },
    edited: {
      type: 'team',
      payload: require('./samples/team')('edited')
    },
    added_to_repository: {
      type: 'team',
      payload: require('./samples/team')('added_to_repository')
    },
    removed_from_repository: {
      type: 'team',
      payload: require('./samples/team')('removed_from_repository')
    }
  },

  team_add: {
    type: 'team_add',
    payload: require('./samples/team_add')()
  },

  watch: {
    started: {
      type: 'watch',
      payload: require('./samples/watch')('started')
    }
  }
};
