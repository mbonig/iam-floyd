import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [firehose](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisfirehose.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Firehose extends PolicyStatement {
  public servicePrefix = 'firehose';
  protected actionList: Actions = {
    "CreateDeliveryStream": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html",
      "description": "Creates a delivery stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDeliveryStream": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html",
      "description": "Deletes a delivery stream and its data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      }
    },
    "DescribeDeliveryStream": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html",
      "description": "Describes the specified delivery stream and gets the status.",
      "accessLevel": "List",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      }
    },
    "ListDeliveryStreams": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html",
      "description": "Lists your delivery streams.",
      "accessLevel": "List"
    },
    "ListTagsForDeliveryStream": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListTagsForDeliveryStream.html",
      "description": "Lists the tags for the specified delivery stream.",
      "accessLevel": "List",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      }
    },
    "PutRecord": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html",
      "description": "Writes a single data record into an Amazon Kinesis Firehose delivery stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      }
    },
    "PutRecordBatch": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html",
      "description": "Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      }
    },
    "StartDeliveryStreamEncryption": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_StartDeliveryStreamEncryption.html",
      "description": "Enables server-side encryption (SSE) for the delivery stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      }
    },
    "StopDeliveryStreamEncryption": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_StopDeliveryStreamEncryption.html",
      "description": "Disables the specified destination of the specified delivery stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      }
    },
    "TagDeliveryStream": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_TagDeliveryStream.html",
      "description": "Adds or updates tags for the specified delivery stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagDeliveryStream": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_UntagDeliveryStream.html",
      "description": "Removes tags from the specified delivery stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDestination": {
      "url": "https://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html",
      "description": "Updates the specified destination of the specified delivery stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deliverystream": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "deliverystream": {
      "name": "deliverystream",
      "url": "https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html",
      "arn": "arn:${Partition}:firehose:${Region}:${Account}:deliverystream/${DeliveryStreamName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [firehose](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisfirehose.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a delivery stream.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html
   */
  public toCreateDeliveryStream() {
    this.add('firehose:CreateDeliveryStream');
    return this;
  }

  /**
   * Deletes a delivery stream and its data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html
   */
  public toDeleteDeliveryStream() {
    this.add('firehose:DeleteDeliveryStream');
    return this;
  }

  /**
   * Describes the specified delivery stream and gets the status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html
   */
  public toDescribeDeliveryStream() {
    this.add('firehose:DescribeDeliveryStream');
    return this;
  }

  /**
   * Lists your delivery streams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html
   */
  public toListDeliveryStreams() {
    this.add('firehose:ListDeliveryStreams');
    return this;
  }

  /**
   * Lists the tags for the specified delivery stream.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListTagsForDeliveryStream.html
   */
  public toListTagsForDeliveryStream() {
    this.add('firehose:ListTagsForDeliveryStream');
    return this;
  }

  /**
   * Writes a single data record into an Amazon Kinesis Firehose delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html
   */
  public toPutRecord() {
    this.add('firehose:PutRecord');
    return this;
  }

  /**
   * Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html
   */
  public toPutRecordBatch() {
    this.add('firehose:PutRecordBatch');
    return this;
  }

  /**
   * Enables server-side encryption (SSE) for the delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_StartDeliveryStreamEncryption.html
   */
  public toStartDeliveryStreamEncryption() {
    this.add('firehose:StartDeliveryStreamEncryption');
    return this;
  }

  /**
   * Disables the specified destination of the specified delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_StopDeliveryStreamEncryption.html
   */
  public toStopDeliveryStreamEncryption() {
    this.add('firehose:StopDeliveryStreamEncryption');
    return this;
  }

  /**
   * Adds or updates tags for the specified delivery stream.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_TagDeliveryStream.html
   */
  public toTagDeliveryStream() {
    this.add('firehose:TagDeliveryStream');
    return this;
  }

  /**
   * Removes tags from the specified delivery stream.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_UntagDeliveryStream.html
   */
  public toUntagDeliveryStream() {
    this.add('firehose:UntagDeliveryStream');
    return this;
  }

  /**
   * Updates the specified destination of the specified delivery stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html
   */
  public toUpdateDestination() {
    this.add('firehose:UpdateDestination');
    return this;
  }

  /**
   * Adds a resource of type deliverystream to the statement
   *
   * https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html
   *
   * @param deliveryStreamName - Identifier for the deliveryStreamName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeliverystream(deliveryStreamName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:firehose:${Region}:${Account}:deliverystream/${DeliveryStreamName}';
    arn = arn.replace('${DeliveryStreamName}', deliveryStreamName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters create requests based on the allowed set of values for each of the tags
   *
   * Applies to actions:
   * - .toCreateDeliveryStream()
   * - .toTagDeliveryStream()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value associated with the resource.
   *
   * Applies to resource types:
   * - deliverystream
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters create requests based on the presence of mandatory tags in the request
   *
   * Applies to actions:
   * - .toCreateDeliveryStream()
   * - .toTagDeliveryStream()
   * - .toUntagDeliveryStream()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
